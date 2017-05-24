import { Bool, Num, Str } from 'tcomb';
import { TodoApp, TodoFilter } from './todo-types';

const defaultState = {
	todoFilter: 'all',
	todoIndex: 0,
	todos: [],
};

export function initTodos(state, initialState) {
	if (initialState != null) {
		TodoApp(initialState);
	}

	return {
		...defaultState,
		...state,
		...initialState,
	};
}

export function addTodo(state, title) {
	Str(title);

	const trimmedTitle = title.trim();

	if (!trimmedTitle) {
		return state;
	}

	return {
		...state,

		todoIndex: state.todoIndex + 1,
		todos: state.todos.concat({
			id: state.todoIndex,
			title: trimmedTitle,
			completed: false,
		}),
	};
}

export function editTodo(state, id, title) {
	Num(id);
	Str(title);

	const trimmedTitle = title.trim();

	if (!trimmedTitle) {
		return state;
	}

	return {
		...state,

		todos: state.todos.map((item) => {
			if (item.id !== id) {
				return item;
			}

			return {
				...item,

				title: trimmedTitle,
			};
		}),
	};
}

export function toggleTodo(state, id) {
	Num(id);

	return {
		...state,

		todos: state.todos.map((item) => {
			if (item.id !== id) {
				return item;
			}

			return {
				...item,

				completed: !item.completed,
			};
		}),
	};
}

export function toggleAllTodos(state, completed) {
	Bool(completed);

	return {
		...state,

		todos: state.todos.map((item) => ({
			...item,

			completed,
		})),
	};
}

export function removeTodo(state, id) {
	Num(id);

	return {
		...state,

		todos: state.todos.filter((item) =>
			item.id !== id
		),
	};
}

export function removeCompletedTodos(state) {
	return {
		...state,

		todos: state.todos.filter((item) =>
			!item.completed
		),
	};
}

export function setTodoFilter(state, todoFilter) {
	TodoFilter(todoFilter);

	return {
		...state,

		todoFilter,
	};
}
