import { db } from "$lib/db"
import { invalid, redirect } from "@sveltejs/kit"
import type { PageServerLoad, Actions } from "./$types"

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) throw redirect(302, '/')

	return {
		user: locals.user
	}
}

export const actions: Actions = {
	async save({ request, locals }) {
		const data = await request.formData()
		const displayName = data.get('name')

		if (typeof displayName !== 'string') return invalid(400, { invalid: true })

		const { user } = locals
		const updatedUser = await db.user.update({
			where: { id: user.id },
			data: { displayName }
		})

		return { success: true, displayName }
	}
}