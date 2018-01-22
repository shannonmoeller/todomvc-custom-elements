import { TodoElement } from '../todo-element/todo-element.js';

/**
 * @class TodoFilterElement
 * @extends TodoElement
 */
export class TodoFilterElement extends TodoElement {
	/**
	 * @constructor
	 */
	constructor() {
		super();

		this.addEventListener('click', this);
	}

	/**
	 * @method onFilter
	 * @param {Event} event
	 * @param {Element} el
	 * @callback
	 */
	onFilter(event, el) {
		event.preventDefault();

		this.store.setTodoFilter(el.dataset.filter);
	}

	/**
	 * @method onRemoveCompleted
	 * @callback
	 */
	onRemoveCompleted() {
		this.store.removeCompletedTodos();
	}
}
