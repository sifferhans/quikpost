import { fail, redirect } from '@sveltejs/kit'
import type { Actions, Action, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'

import { db } from '$lib/db'

enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(302, '/')
}

const register: Action = async ({ request }) => {
	const data = await request.formData()
	const email = data.get('email')
	const password = data.get('password')

	if (
		typeof email !== 'string' ||
		typeof password !== 'string' ||
		!email ||
		!password
	) {
		return fail(400, { invalid: true })
	}

	// Check if user exists
	const user = await db.user.findUnique({
		where: { email }
	})

	if (user) return fail(400, { user: true, email })

	await db.user.create({
		data: {
			email,
			passwordHash: await bcrypt.hash(password, 10),
			userAuthToken: crypto.randomUUID(),
			role: { connect: { name: Roles.USER } }
		}
	})

	throw redirect(303, '/login')
}

export const actions: Actions = { register }