import { Router } from 'express';
import { createTodoStore, todoTemplates } from '../../shared/todo/todo-service';

export function getTodo(request, response) {
	const { state } = createTodoStore({
		todoIndex: 2,
		todos: [
			{ id: 0, title: 'foo', completed: true },
			{ id: 1, title: 'bar', completed: false },
		],
	});

	response.send(todoTemplates.renderIndex(state));
}

export function routeTodo() {
	return Router()
		.get('/:filter?', getTodo);
}
