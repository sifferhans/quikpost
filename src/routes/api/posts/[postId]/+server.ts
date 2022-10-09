import { db } from '$lib/db'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ params, locals }) => {
	if (!locals.user) return new Response('Unauthorized', { status: 401 })

	const { postId } = params

	const post = await db.post.findUnique({
		where: { id: postId },
	})

	return json(post)
}