export function debounce<T extends Function>(cb: T, wait = 20) {
	let h: NodeJS.Timeout
	let callable = (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => cb(...args), wait);
	};
	return <T>(<any>callable);
}

export function formatDate(date: Date | string) {
	return date.toLocaleString('en-US', {
		dateStyle: 'medium'
	})
}