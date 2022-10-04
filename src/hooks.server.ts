import type { Handle } from '@sveltejs/kit'
import { db } from '$lib/db'

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session')

	if (!session) {
		return await resolve(event)
	}

	const user = await db.user.findUnique({
		where: { userAuthToken: session },
		select: { email: true, role: true }
	})

	if (user) {
		event.locals.user = {
			email: user.email,
			role: user.role.name
		}
	}

	return await resolve(event)
}