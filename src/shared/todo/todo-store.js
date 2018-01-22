import { createStore } from '../store/store-service.js';
import * as todoActions from '../todo/todo-actions.js';

export function createTodoStore(state) {
	return createStore(state)
		.addActions(todoActions)
		.initTodos();
}
