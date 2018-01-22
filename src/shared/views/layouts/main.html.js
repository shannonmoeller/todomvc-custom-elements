import { html, stripIndents } from '../../template/template-service.js';

export default (vm) => stripIndents(html`
	<!doctype html>
	<html lang="en">
	<head>

		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>$${vm.title} • TodoMVC</title>

		${vm.styles.map((href) => html`
			<link rel="stylesheet" href="${href}" />
		`)}

		${vm.scripts.map((src) => html`
			<script type="module" src="${src}"></script>
		`)}

	</head>
	<body>

		${vm.body}

	</body>
	</html>
`);
