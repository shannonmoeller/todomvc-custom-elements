import { html } from '../../template/template-service';
import { todoFilters } from '../../todo/todo-service';
import renderTodoItem from './todo-item.html';

export default (vm) => {
	const { newTodoValue, todoFilter, todos } = vm;
	const filtered = todoFilters[todoFilter](todos);
	const remainingCount = todoFilters.incomplete(todos).length;

	return html`
		<todo-list>
			<input
				type="text"
				class="field field--new"
				placeholder="What needs to be done?"
				todo-list-keydown="onNew"
				value="$${newTodoValue}"
				autofocus />

			<div ${todos.length === 0 && 'hidden'}>
				<input
					type="checkbox"
					id="todo-list-toggle-all"
					class="tick tick--all"
					todo-list-change="onToggleAll"
					${remainingCount === 0 && 'checked'} />

				<label for="todo-list-toggle-all">
					Complete All
				</label>

				<ul>
					${filtered.map((todo) => html`
						<li id="todo-list-todo-${todo.id}">
							${renderTodoItem(todo)}
						</li>
					`)}
				</ul>
			</div>
		</todo-list>
	`;
};
