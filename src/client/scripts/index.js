import { TodoAppElement } from '../todo-app/todo-app-element.js';
import { TodoListElement } from '../todo-list/todo-list-element.js';
import { TodoItemElement } from '../todo-item/todo-item-element.js';
import { TodoFilterElement } from '../todo-filter/todo-filter-element.js';

customElements.define('todo-app', TodoAppElement);
customElements.define('todo-list', TodoListElement);
customElements.define('todo-item', TodoItemElement);
customElements.define('todo-filter', TodoFilterElement);
