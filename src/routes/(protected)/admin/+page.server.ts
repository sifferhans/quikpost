import { db } from '$lib/db'
import { error, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) return error(401, 'Unauthorized')
	if (locals.user.role !== Roles.ADMIN) throw redirect(302, '/')

	async function findUsers() {
		return await db.user.findMany({
			select: { email: true, displayName: true, id: true, posts: true }
		})
	}

	return {
		users: findUsers()
	}
}