import morphdom from 'morphdom';

const STORE_KEY = Symbol('todoElementStore');

/**
 * @class TodoElement
 * @extends HTMLElement
 */
export class TodoElement extends HTMLElement {
	/**
	 * This element's most-specific lowercase tag name.
	 *
	 * @property {String} is
	 */
	get is() {
		return (this.getAttribute('is') || this.tagName).toLowerCase();
	}

	/**
	 * Get reference to application store.
	 *
	 * @property {Store} store
	 */
	get store() {
		let el = this;

		while (el) {
			if (el.hasOwnProperty(STORE_KEY)) {
				return el[STORE_KEY];
			}

			el = el.parentNode;
		}

		return null;
	}

	set store(store) {
		this[STORE_KEY] = store;
	}

	/**
	 * Declarative event handling. Allows child elements to delegate event
	 * handling via custom attributes.
	 *
	 *     class TodoFooElement extends TodoElement {
	 *         constructor() {
	 *             super();
	 *
	 *             // Listen for clicks.
	 *             this.addEventListener('click', this);
	 *         }
	 *
	 *         onFooClicked(event, el) {
	 *             // Handles `todo-foo-click="onFooClicked"`.
	 *         }
	 *     }
	 *
	 *     <todo-foo>
	 *         <!-- Execute `onFooClicked` when this button is clicked. -->
	 *         <button todo-foo-click="onFooClicked">
	 *             Click me.
	 *         </button>
	 *     </todo-foo>
	 *
	 * @method handleEvent
	 * @param {Event} event
	 * @callback
	 */
	handleEvent(event) {
		const { target, type } = event;
		const attribute = `${this.is}-${type}`;
		const fromEl = target.closest(`[${attribute}]`);
		const method = fromEl && fromEl.getAttribute(attribute);

		if (method && typeof this[method] === 'function') {
			this[method](event, fromEl);
		}
	}

	/**
	 * @method patch
	 * @param {Element|String} html
	 * @return {TodoElement}
	 */
	patch(html) {
		morphdom(this, String(html).trim());

		return this;
	}
}
