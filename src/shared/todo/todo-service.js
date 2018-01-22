export const todoFilters = {
	all: (todos) => todos,

	complete: (todos) => todos
	.filter((x) => x.completed),

	incomplete: (todos) => todos
	.filter((x) => !x.completed),
};
