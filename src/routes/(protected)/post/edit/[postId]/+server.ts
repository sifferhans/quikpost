import type { RequestHandler } from "./$types";
import { error } from "@sveltejs/kit";
import { db } from '$lib/db';

export const PATCH: RequestHandler = async ({ locals, request, params }) => {
	if (!locals.user) throw error(400, 'Not logged in')

	const body = await request.json()
	if (!body) throw error(400, 'No body')
	console.log(body)

	const { postId } = params
	const updateUser = await db.post.update({
		where: { id: postId },
		data: {
			title: body.title,
			content: body.content
		}
	})
	console.log(updateUser)

	return new Response(JSON.stringify({ success: true }))
}