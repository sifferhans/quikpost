import type { Editor } from '@tiptap/core';
import { writable } from 'svelte/store';

interface Slashprops {
	editor: Editor | null
	range: any
}

export const slashProps = writable<Slashprops>({ editor: null, range: null });
export const slashItems = writable<Array<{
	title: string;
	subtitle: string;
	command: (props: Slashprops) => void
}>>([]);

export const slashVisible = writable<boolean>(false);

export const slashLocaltion = writable<{
	x: number
	y: number
	height: number
}>({ x: 0, y: 0, height: 0 });

export const desktopMenu = writable<boolean>(true);
export const components = writable([]);
export const editorWidth = writable<number>(0);