export function htmlEscape(value) {
	return String(value)
		.replace(/&/g, '&amp;') // always first
		.replace(/>/g, '&gt;')
		.replace(/</g, '&lt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/`/g, '&#96;');
}

export function html(literals, ...values) {
	const raw = literals.raw;
	let result = '';

	values.forEach((value, i) => {
		let literal = raw[i];

		if (Array.isArray(value)) {
			value = value.join('');
		}

		if (value == null || typeof value === 'boolean') {
			value = '';
		}

		if (literal.endsWith('$')) {
			value = htmlEscape(value);
			literal = literal.slice(0, -1);
		}

		result += literal;
		result += value;
	});

	result += raw[raw.length - 1];

	return result;
}

export function stripIndents(value) {
	const match = String(value).match(/^[ \t]*(?=\S)/gm) || [];
	const indents = match.map((x) => x.length);
	const indent = Math.min(...indents);

	if (indent > 0) {
		const rx = new RegExp(`^[ \\t]{${indent}}`, 'gm');

		value = value.replace(rx, '');
	}

	return value.trim();
}
