import { Router } from 'express';

import { createTodoStore } from '../../shared/todo/todo-store.js';
import renderIndex from '../../shared/views/index.html.js';

const store = createTodoStore({
	todoIndex: 2,
	todos: [
		{ id: 0, title: 'foo', completed: true },
		{ id: 1, title: 'bar', completed: false },
	],
});

export function getTodo(request, response) {
	response.send(renderIndex(store.state));
}

export function routeTodo() {
	return Router()
		.get('/:filter?', getTodo);
}
