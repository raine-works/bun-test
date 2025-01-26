import React from 'react';
import { CreateHead } from '@/frontend/components/head';
import { NavLink } from 'react-router';
import { api } from '@/frontend/lib/api';

export function Home() {
	const [greeting, setGreeting] = React.useState('');

	const getApiData = async () => {
		const response = await api.test.$get();
		if (response.ok) {
			const json = await response.json();
			setGreeting(json.msg);
		}
	};

	React.useEffect(() => {
		getApiData();
	});

	return (
		<>
			{CreateHead({ title: 'Home - Bun Test' })}
			<div className="flex h-screen flex-col items-center justify-center">
				<div className="mb-4 bg-amber-100 p-4">
					<p>{greeting}</p>
				</div>
				<div>
					<NavLink to="/" className="mr-2 bg-amber-900 px-4 py-2 text-white">
						Home
					</NavLink>
					<NavLink to="/about" className="bg-amber-900 px-4 py-2 text-white">
						About
					</NavLink>
				</div>
			</div>
		</>
	);
}
