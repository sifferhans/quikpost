export function debounce<T extends Function>(cb: T, wait = 20) {
	let h: NodeJS.Timeout
	let callable = (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => cb(...args), wait);
	};
	return <T>(<any>callable);
}

export function formatDate(date: Date | string, options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }) {
	return date.toLocaleString('en-US', options)
}

export function timeAgo(date: Date) {
	const now = new Date(Date.now());
	const difftime = now.getTime() - date.getTime();
	console.log(difftime)
	const diffDate = new Date(difftime - 5.5 * 60 * 60 * 1000);
	const [sec, min, hr, day, month] = [
		diffDate.getSeconds(),
		diffDate.getMinutes(),
		diffDate.getHours(),
		diffDate.getDate() - 1,
		diffDate.getMonth(),
	];

	const f = (property: number, end: string) => {
		return `${property} ${end}${property > 1 ? "s" : ""} ago`;
	}

	return month >= 1
		? f(month, "month")
		: day >= 1
			? f(day, "day")
			: hr >= 1
				? f(hr, "hr")
				: min >= 1
					? f(min, "min")
					: day >= 1
						? f(sec, "sec")
						: "";
}