import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

import { routeStatic } from './static/static-route';
import { routeTodo } from './todo/todo-route';

export function createServer() {
	return express()
		.use(compression())
		.use(helmet())
		.use(routeStatic())
		.use(routeTodo());
}
