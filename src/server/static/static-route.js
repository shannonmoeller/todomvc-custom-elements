import { Router, static as serve } from 'express';
import { resolve } from 'path';

export function getStatic(path) {
	return serve(resolve(__dirname, path), {
		maxAge: process.env.MAX_AGE,
	});
}

export function routeStatic() {
	return Router()
		.use('/client', getStatic('../../client'))
		.use('/shared', getStatic('../../shared'));
}
