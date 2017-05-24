import { Router, static as serve } from 'express';
import { resolve } from 'path';

export function getStatic(path) {
	return serve(resolve(__dirname, path), {
		maxAge: '1d',
	});
}

export function routeStatic() {
	return Router()
		.use(getStatic('../../client'));
}
