import { html } from '../../template/template-service.js';

export default (vm) => html`
	<todo-item class="todo" data-id="$${vm.id}">
		<input
			type="text"
			class="field field--edit"
			todo-item-focusout="onEditEnd"
			todo-item-keydown="onEditEnd"
			value="$${vm.title}" />

		<input
			type="checkbox"
			id="todo-item-toggle-$${vm.id}"
			class="tick tick--item"
			todo-item-change="onToggle"
			${vm.completed && 'checked'} />

		<label for="todo-item-toggle-$${vm.id}">
			Mark Compete
		</label>

		<div
			class="todo__bd ${vm.completed && 'todo__bd--completed'}"
			todo-item-dblclick="onEditStart">
			$${vm.title}
		</div>

		<button
			type="button"
			class="remove"
			todo-item-click="onRemove">
		</button>
	</todo-item>
`;
