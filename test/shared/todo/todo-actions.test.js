import test from 'blue-tape';

import {
	initTodos,
	addTodo,
	editTodo,
	toggleTodo,
	toggleAllTodos,
	removeTodo,
	removeCompletedTodos,
	setTodoFilter,
} from '../../../src/shared/todo/todo-actions';

test('should init new todos', async (t) => {
	t.deepEqual(initTodos({}), {
		todoFilter: 'all',
		todoIndex: 0,
		todos: [],
	});
});

test('should init existing todos', async (t) => {
	const fixture = {
		todoFilter: 'all',
		todoIndex: 0,
		todos: [],
	};

	t.deepEqual(initTodos({}, fixture), fixture);

	t.throws(() => initTodos({}, {}));
});

test('should add todo', async (t) => {
	const fixture = {
		todoIndex: 1,
		todos: [
			{ id: 0, title: 'foo', completed: false },
		],
	};

	t.deepEqual(addTodo(fixture, ' '), {
		todoIndex: 1,
		todos: [
			{ id: 0, title: 'foo', completed: false },
		],
	});

	t.deepEqual(addTodo(fixture, 'bar'), {
		todoIndex: 2,
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	});

	t.deepEqual(addTodo(fixture, '  bar  '), {
		todoIndex: 2,
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	});

	t.throws(() => addTodo(fixture, null));
});

test('should edit todo', async (t) => {
	const fixture = {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	};

	t.deepEqual(editTodo(fixture, 1, ' '), {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	});

	t.deepEqual(editTodo(fixture, 1, 'qux'), {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'qux', completed: false },
		],
	});

	t.deepEqual(editTodo(fixture, 1, '  qux  '), {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'qux', completed: false },
		],
	});

	t.throws(() => editTodo(fixture, null));
});

test('should toggle todo', async (t) => {
	const fixture = {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	};

	t.deepEqual(toggleTodo(fixture, 1), {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: true },
		],
	});

	t.throws(() => toggleTodo(fixture, null));
});

test('should mark all todos as complete', async (t) => {
	const fixture = {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	};

	t.deepEqual(toggleAllTodos(fixture, true), {
		todos: [
			{ id: 0, title: 'foo', completed: true },
			{ id: 1, title: 'bar', completed: true },
		],
	});
});

test('should mark all todos as incomplete', async (t) => {
	const fixture = {
		todos: [
			{ id: 0, title: 'foo', completed: true },
			{ id: 1, title: 'bar', completed: true },
		],
	};

	t.deepEqual(toggleAllTodos(fixture, false), {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	});
});

test('should remove todo', async (t) => {
	const fixture = {
		todos: [
			{ id: 0, title: 'foo', completed: false },
			{ id: 1, title: 'bar', completed: false },
		],
	};

	t.deepEqual(removeTodo(fixture, 0), {
		todos: [
			{ id: 1, title: 'bar', completed: false },
		],
	});

	t.throws(() => removeTodo(fixture, null));
});

test('should remove completed todos', async (t) => {
	const fixture = {
		todos: [
			{ id: 0, title: 'foo', completed: true },
			{ id: 1, title: 'bar', completed: false },
			{ id: 2, title: 'baz', completed: true },
		],
	};

	t.deepEqual(removeCompletedTodos(fixture, 'foo'), {
		todos: [
			{ id: 1, title: 'bar', completed: false },
		],
	});
});

test('should set todo todoFilter', async (t) => {
	const fixture = {
		todoFilter: 'all',
	};

	t.deepEqual(setTodoFilter(fixture, 'complete'), {
		todoFilter: 'complete',
	});

	t.throws(() => setTodoFilter(fixture, null));
});
