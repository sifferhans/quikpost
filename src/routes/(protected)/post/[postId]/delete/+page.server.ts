import type { Actions } from './$types'
import { db } from '$lib/db'
import { redirect } from '@sveltejs/kit'

export const actions: Actions = {
	async default({ locals, params }) {
		if (!locals.user) return redirect(400, '/login')

		const { postId } = params

		const deletedPost = await db.post.delete({
			where: { id: postId }
		})

		throw redirect(303, `/dashboard`)
	}
}