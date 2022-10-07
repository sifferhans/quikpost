import type { Actions } from './$types'
import { db } from '$lib/db'
import { redirect } from '@sveltejs/kit'

export const actions: Actions = {
	async default({ locals }) {
		if (!locals.user) return redirect(400, '/login')

		const post = await db.post.create({
			data: {
				title: 'Untitled',
				authorId: locals.user.id,
			}
		})

		if (!post) return redirect(400, '/dashboard')

		throw redirect(303, `/post/${post.id}/edit`)
	}
}