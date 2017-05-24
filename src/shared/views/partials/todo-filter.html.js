import { html } from '../../template/template-service';
import { todoFilters } from '../../todo/todo-service';

export default (vm) => {
	const { todoFilter, todos } = vm;
	const completedCount = todoFilters.complete(todos).length;
	const remainingCount = todos.length - completedCount;

	return html`
		<todo-filter class="spread">
			<div>
				<strong>${remainingCount}</strong>
				item${remainingCount !== 1 && 's'} left
			</div>

			<ul class="list">
				<li>
					<a
						class="filter ${todoFilter === 'all' && 'filter--selected'}"
						href="#"
						data-filter="all"
						todo-filter-click="onFilter">All</a>
				</li>
				<li>
					<a
						class="filter ${todoFilter === 'incomplete' && 'filter--selected'}"
						href="#"
						data-filter="incomplete"
						todo-filter-click="onFilter">Active</a>
				</li>
				<li>
					<a
						class="filter ${todoFilter === 'complete' && 'filter--selected'}"
						href="#"
						data-filter="complete"
						todo-filter-click="onFilter">Completed</a>
				</li>
			</ul>

			<div>
				<button
					class="link"
					todo-filter-click="onRemoveCompleted"
					${completedCount === 0 && 'hidden'}>
					Clear completed
				</button>
			</div>
		</todo-filter>
	`;
};
