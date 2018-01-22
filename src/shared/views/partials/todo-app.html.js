import { html } from '../../template/template-service.js';
import renderTodoFilter from './todo-filter.html.js';
import renderTodoList from './todo-list.html.js';

export default (vm) => html`
	<todo-app state="$${JSON.stringify(vm)}">
		<header>
			<h1 class="hdg">todos</h1>
		</header>

		<div class="card">
			<section>
				${renderTodoList(vm)}
			</section>

			<footer class="card__ft" ${vm.todos.length === 0 && 'hidden'}>
				${renderTodoFilter(vm)}
			</footer>
		</div>
	</todo-app>
`;
