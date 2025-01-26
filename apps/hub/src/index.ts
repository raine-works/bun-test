import { serve, env } from 'bun';
import { app } from '@/backend';
import root from '@/frontend/index.html';

((port: number) => {
	serve({
		port,
		development: env.NODE_ENV === 'development',
		fetch: app.fetch,
		static: {
			'/': root,
			'/about': root
		}
	});
	console.log(`Server running at http://localhost:${port}`);
})(8000);

process.on('SIGINT', () => {
	console.log('Stopping server...');
	process.exit(0);
});
