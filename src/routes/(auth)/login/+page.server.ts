import { invalid, redirect } from '@sveltejs/kit'
import type { Actions, Action, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'

import { db } from '$lib/db'

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(302, '/')
}

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData()
	const email = data.get('email')
	const password = data.get('password')

	// validate email and password
	if (
		typeof email !== 'string' ||
		typeof password !== 'string' ||
		!email ||
		!password
	) {
		return invalid(400, { invalid: true })
	}

	const user = await db.user.findUnique({
		where: { email }
	})

	if (!user) return invalid(400, { credentials: true })

	const userPassword = await bcrypt.compare(password, user.passwordHash)

	if (!userPassword) return invalid(400, { credentials: true })

	const authenticatedUser = await db.user.update({
		where: { email: user.email },
		data: { userAuthToken: crypto.randomUUID() }
	})

	cookies.set('session', authenticatedUser.userAuthToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30 // 1 month
	})

	throw redirect(302, '/dashboard')
}

export const actions: Actions = { login }