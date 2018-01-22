import { TodoElement } from '../todo-element/todo-element.js';

/**
 * @class TodoListElement
 * @extends TodoElement
 */
export class TodoListElement extends TodoElement {
	/**
	 * @constructor
	 */
	constructor() {
		super();

		this.addEventListener('change', this);
		this.addEventListener('keydown', this);
	}

	/**
	 * @method onNew
	 * @param {Event} event
	 * @param {Element} el
	 * @callback
	 */
	onNew(event, el) {
		const { key, type } = event;

		if (type === 'keydown' && key !== 'Enter') {
			return;
		}

		this.store.addTodo(el.value);
	}

	/**
	 * @method onToggleAll
	 * @param {Event} event
	 * @param {Element} el
	 * @callback
	 */
	onToggleAll(event, el) {
		this.store.toggleAllTodos(el.checked);
	}
}
