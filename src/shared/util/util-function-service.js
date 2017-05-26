export function debounce(fn, delay = 0) {
	return function debounced() {
		if (debounced.timeout) {
			clearTimeout(debounced.timeout);
		}

		debounced.timeout = setTimeout(fn, delay);
	};
}
