import { Hono } from 'hono';

export const app = new Hono().basePath('/api').get('/test', (c) => {
	console.log(c.req.path);
	return c.json({ msg: 'Hello World' });
});

export type App = typeof app;
