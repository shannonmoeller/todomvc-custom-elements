import { Router } from 'express';
import { resolve } from 'path';
import serve from 'serve-static';

export function getStatic(path) {
	return serve(resolve(__dirname, path), {
		maxAge: '1d',
	});
}

export function routeStatic() {
	return Router()
		.use(getStatic('../../client'));
}
