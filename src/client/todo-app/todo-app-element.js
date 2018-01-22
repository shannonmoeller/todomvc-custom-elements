import { TodoElement } from '../todo-element/todo-element.js';
import { createTodoStore } from '../../shared/todo/todo-store.js';
import { debounce } from '../../shared/util/util-function-service.js';
import renderTodoApp from '../../shared/views/partials/todo-app.html.js';

/**
 * @class TodoAppElement
 * @extends TodoElement
 */
export class TodoAppElement extends TodoElement {
	/**
	 * @method connectedCallback
	 * @callback
	 */
	connectedCallback() {
		this.createStore();
	}

	/**
	 * @method disconnectedCallback
	 * @callback
	 */
	disconnectedCallback() {
		this.destroyStore();
	}

	/**
	 * @method createStore
	 * @return {TodoAppElement}
	 */
	createStore() {
		this.destroyStore();

		const state = JSON.parse(this.getAttribute('state'));
		const store = createTodoStore(state);
		const render = debounce(() => this.render());

		this.store = store;
		this.removeStoreListener = store.addListener(render);

		return this;
	}

	/**
	 * @method destroyStore
	 * @return {TodoAppElement}
	 */
	destroyStore() {
		if (this.store) {
			this.store = null;
		}

		if (this.removeStoreListener) {
			this.removeStoreListener();
			this.removeStoreListener = null;
		}

		return this;
	}

	/**
	 * @method render
	 * @return {TodoAppElement}
	 */
	render() {
		return this.patch(
			todoTemplates.renderTodoApp(
				this.store.state
			)
		);
	}
}
