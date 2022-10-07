import { db } from '$lib/db'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ request, params }) => {
	const { postId } = params

	const post = db.post.findUnique({
		where: { id: postId }
	})
	if (!post) return error(404, 'Post not found')

	return {
		post
	}
}