import { Hono } from 'hono';

export const app = new Hono().basePath('/api').get('/test', (c) => {
	return c.json({ msg: 'Hello World' });
});

export type App = typeof app;
