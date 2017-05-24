import './shim/native-custom-elements';
import '@webcomponents/custom-elements';
import 'core-js/fn/string/ends-with';
import 'dom4';

import { TodoAppElement } from '../todo-app/todo-app-element';
import { TodoListElement } from '../todo-list/todo-list-element';
import { TodoItemElement } from '../todo-item/todo-item-element';
import { TodoFilterElement } from '../todo-filter/todo-filter-element';

customElements.define('todo-app', TodoAppElement);
customElements.define('todo-list', TodoListElement);
customElements.define('todo-item', TodoItemElement);
customElements.define('todo-filter', TodoFilterElement);
