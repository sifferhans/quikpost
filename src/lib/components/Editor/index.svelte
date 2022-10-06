<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import { browser } from '$app/environment'
	import { slashVisible, slashItems, slashProps, editorWidth } from '$lib/stores'

	import { Editor } from '@tiptap/core'
	import StarterKit from '@tiptap/starter-kit'
	import Placeholder from '@tiptap/extension-placeholder'
	import TaskList from '@tiptap/extension-task-list'
	import TaskItem from '@tiptap/extension-task-item'
	import Link from '@tiptap/extension-link'

	// code block
	import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
	import { lowlight } from 'lowlight/lib/core'
	import css from 'highlight.js/lib/languages/css'
	import js from 'highlight.js/lib/languages/javascript'
	import ts from 'highlight.js/lib/languages/typescript'
	import html from 'highlight.js/lib/languages/xml'
	lowlight.registerLanguage('html', html)
	lowlight.registerLanguage('css', css)
	lowlight.registerLanguage('js', js)
	lowlight.registerLanguage('ts', ts)

	import suggestion from './suggestion'
	import Commands from './command'
	import CommandList from './CommandList.svelte'

	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	let selectedIndex: number = 0
	$: selectedIndex = $slashVisible ? selectedIndex : 0
	$: $editorWidth = w ? w : 0

	function handleKeydown(event: KeyboardEvent) {
		if (!$slashVisible) return
		if (event.key === 'ArrowUp') {
			event.preventDefault()

			upHandler()
			return true
		}
		if (event.key === 'ArrowDown') {
			event.preventDefault()

			downHandler()
			return true
		}

		if (event.key === 'Enter') {
			event.preventDefault()
			enterHandler()
			return true
		}

		return false
	}

	function upHandler() {
		selectedIndex = (selectedIndex + $slashItems.length - 1) % $slashItems.length
	}

	function downHandler() {
		selectedIndex = (selectedIndex + 1) % $slashItems.length
	}

	function enterHandler() {
		selectItem(selectedIndex)
	}
	function selectItem(index: number) {
		const item = $slashItems[index]

		if (item) {
			//editor.chain().focus().toggleBold().run();
			//return console.log(item);
			let range = $slashProps.range
			item.command({ editor, range })
		}
	}

	let element: HTMLDivElement
	let editor: Editor
	let w: number

	onMount(() => {
		if (browser) {
			editor = new Editor({
				element: element,
				editorProps: {
					attributes: {
						class: 'focus:outline-none flex flex-col items-center px-3 md:px-0',
					},
				},
				content,
				extensions: [
					StarterKit,
					Placeholder,
					TaskList,
					TaskItem,
					Link,
					Commands.configure({
						suggestion,
					}),
					CodeBlockLowlight.configure({
						lowlight,
					}),
				],
				onTransaction: () => {
					// force re-render so `editor.isActive` works as expected
					editor = editor
				},
				onUpdate: ({ editor }) => {
					// send the content to an API here
					dispatch('update', editor.getHTML())
				},
			})
		}
	})

	onDestroy(() => {
		if (editor) {
			editor.destroy()
		}
	})

	export let content: string
</script>

<div class="prose prose-gray" bind:clientWidth={w}>
	<div bind:this={element} on:keydown|capture={handleKeydown} />
</div>

<CommandList {selectedIndex} />

<style>
	:global(.ProseMirror > :is(h1, h2, h3, h4, h5, h6, p, ul, ol, pre)) {
		width: 100%;
	}
	:global(.ProseMirror h1, .ProseMirror h2, .ProseMirror h3) {
		margin-bottom: 0.5rem;
	}
	:global(.ProseMirror p.is-empty::before) {
		content: "Type '/' for commands";
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h1.is-empty::before) {
		content: 'Heading 1';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h2.is-empty::before) {
		content: 'Heading 2';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h3.is-empty::before) {
		content: 'Heading 3';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h4.is-empty::before) {
		content: 'Heading 4';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h5.is-empty::before) {
		content: 'Heading 5';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h6.is-empty::before) {
		content: 'Heading 6';
		color: #adb5bd;
		float: left;
		height: 0;
	}

	:global ul[data-type='taskList'] {
		list-style: none;
		padding-left: 2px;
	}
	:global ul[data-type='taskList'] li {
		display: flex;
		align-items: top;
	}
	:global ul[data-type='taskList'] li p {
		margin: 0;
	}
	:global ul[data-type='taskList'] li label {
		padding-right: 18px;
	}
	:global ul[data-type='taskList'] li label input {
		border-radius: 0.25rem;
		border-color: #cbd5e1;
	}
</style>
