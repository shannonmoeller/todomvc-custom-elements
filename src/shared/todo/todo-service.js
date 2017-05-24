import { createStore } from '../store/store-service';
import * as todoActions from '../todo/todo-actions';
import renderIndex from '../views/index.html';
import renderTodoApp from '../views/partials/todo-app.html';

export const todoTemplates = {
	renderIndex,
	renderTodoApp,
};

export const todoFilters = {
	all: (todos) => todos,
	complete: (todos) => todos.filter((x) => x.completed),
	incomplete: (todos) => todos.filter((x) => !x.completed),
};


export function createTodoStore(state) {
	return createStore(state)
		.addActions(todoActions)
		.initTodos();
}
