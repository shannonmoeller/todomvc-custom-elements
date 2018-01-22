import { html } from '../template/template-service.js';
import renderLayout from './layouts/main.html.js';
import renderTodoApp from './partials/todo-app.html.js';

export default (vm) => renderLayout({
	title: 'Custom Elements',
	scripts: ['/client/scripts/index.js'],
	styles: ['/client/styles/index.css'],
	body: html`
		<div class="site">
			<section class="site__bd">
				${renderTodoApp(vm)}
			</section>

			<footer class="site__ft">
				<p>Double-click to edit a todo</p>
				<p>Created by <a href="http://shannonmoeller.com">Shannon Moeller</a></p>
				<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
			</footer>
		</div>
	`,
});
