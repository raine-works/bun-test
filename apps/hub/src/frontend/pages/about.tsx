import React from 'react';
import { CreateHead } from '@/frontend/components/head';
import { NavLink } from 'react-router';

export function About() {
	return (
		<>
			{CreateHead({ title: 'About - Bun Test' })}
			<div className="flex h-screen items-center justify-center">
				<NavLink to="/" className="mr-2 bg-amber-900 px-4 py-2 text-white">
					Home
				</NavLink>
				<NavLink to="/about" className="bg-amber-900 px-4 py-2 text-white">
					About
				</NavLink>
			</div>
		</>
	);
}
