import { db } from '$lib/db'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ locals }) => {
	if (!locals.user) return new Response('Unauthorized', { status: 401 })

	const posts = await db.post.findMany({})

	return json(posts)
}