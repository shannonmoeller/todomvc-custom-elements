import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

import { routeStatic } from './static/static-route.js';
import { routeTodo } from './todo/todo-route.js';

export function createServer() {
	return express()
		.use(helmet())
		.use(compression())
		.use(routeStatic())
		.use(routeTodo());
}
