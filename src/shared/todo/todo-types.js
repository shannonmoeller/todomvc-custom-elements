import { Bool, Num, Str, enums, list, struct } from 'tcomb';

export const Todo = struct(
	{
		id: Num,
		title: Str,
		completed: Bool,
	},
	'Todo'
);

export const Todos = list(
	Todo,
	'Todos'
);

export const TodoFilter = enums.of(
	[
		'all',
		'complete',
		'incomplete',
	],
	'TodoFilters'
);

export const TodoApp = struct(
	{
		todoFilter: TodoFilter,
		todoIndex: Num,
		todos: Todos,
	},
	'TodoApp'
);
