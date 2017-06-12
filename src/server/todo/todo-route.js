import { Router } from 'express';
import { createTodoStore, todoTemplates } from '../../shared/todo/todo-service';

const store = createTodoStore({
	todoIndex: 2,
	todos: [
		{ id: 0, title: 'foo', completed: true },
		{ id: 1, title: 'bar', completed: false },
	],
});

export function getTodo(request, response) {
	response.send(
		todoTemplates.renderIndex(
			store.state
		)
	);
}

export function routeTodo() {
	return Router()
		.get('/:filter?', getTodo);
}
