// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user: {
			email: string
			role: string
			id: string
			displayName: string | null
		}
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
