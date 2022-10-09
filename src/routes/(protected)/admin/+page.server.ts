import { db } from '$lib/db'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) return error(401, 'Unauthorized')

	const users = await db.user.findMany({
		select: { email: true, displayName: true, id: true, posts: true }
	})

	return {
		users
	}
}