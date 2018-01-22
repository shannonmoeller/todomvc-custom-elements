import { TodoElement } from '../todo-element/todo-element.js';

/**
 * @class TodoItemElement
 * @extends TodoElement
 */
export class TodoItemElement extends TodoElement {
	/**
	 * @constructor
	 */
	constructor() {
		super();

		this.addEventListener('change', this);
		this.addEventListener('click', this);
		this.addEventListener('dblclick', this);
		this.addEventListener('focusout', this);
		this.addEventListener('keydown', this);
	}

	/**
	 * @method onEditStart
	 * @param {Event} event
	 * @param {Element} el
	 * @callback
	 */
	onEditStart(event, el) {
		const field = this.parentElement.querySelector('input[type="text"]');

		if (!field) {
			return;
		}

		event.preventDefault();

		this.parentElement.classList.add('editing');
		field.focus();

		setTimeout(() => {
			const end = field.value.length;

			field.selectionStart = end;
			field.selectionEnd = end;
		});
	}

	/**
	 * @method onEditEnd
	 * @param {Event} event
	 * @param {Element} el
	 * @callback
	 */
	onEditEnd(event, el) {
		const { key, type } = event;

		if (type === 'keydown' && key !== 'Enter' && key !== 'Escape') {
			return;
		}

		event.preventDefault();

		const id = Number(this.dataset.id);

		this.parentElement.classList.remove('editing');
		this.store.editTodo(id, el.value);
	}

	/**
	 * @method onRemove
	 * @callback
	 */
	onRemove() {
		const id = Number(this.dataset.id);

		this.store.removeTodo(id);
	}

	/**
	 * @method onToggle
	 * @param {Event} event
	 * @param {Element} el
	 * @callback
	 */
	onToggle(event, el) {
		const id = Number(this.dataset.id);

		this.store.toggleTodo(id, el.checked);
	}
}
