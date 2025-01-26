import * as React from 'react';
import * as ReactDOM from 'react-dom';

const headRoot = document.head;

const Head = (props: React.PropsWithChildren) => {
	return ReactDOM.createPortal(props.children, headRoot);
};

interface Props {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}

export const CreateHead = (props?: Props) => {
	const title = props?.title ?? 'Bun Test';
	const description = props?.description ?? '';
	const image = props?.image ?? '';
	const url = props?.title ?? '';

	return (
		<Head>
			<title>{title}</title>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content={title} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="article" />
			<meta name="twitter:card" content={image} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="description" content={description} />
		</Head>
	);
};
