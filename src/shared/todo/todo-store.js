import { createStore } from '../store/store-service';
import * as todoActions from '../todo/todo-actions';

export function createTodoStore(state) {
	return createStore(state)
		.addActions(todoActions)
		.initTodos();
}
