import type { PageServerLoad } from './$types'
import { db } from '$lib/db'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ request, locals }) => {
	if (!locals.user) return redirect(400, '/login')

	const post = await db.post.create({
		data: {
			title: 'Untitled',
			authorId: locals.user.id,
		}
	})

	if (!post) return redirect(400, '/dashboard')

	return redirect(303, `/post/${post.id}`)
}