import { html } from '../template/template-service';
import renderLayout from './layouts/main.html';
import renderTodoApp from './partials/todo-app.html';

export default (vm) => renderLayout({
	title: 'Custom Elements • TodoMVC',
	scripts: ['/scripts/index.js'],
	styles: ['/styles/index.css'],
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
