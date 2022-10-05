import { invalid, redirect } from "@sveltejs/kit"
import type { PageServerLoad, Actions } from "./$types"

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) throw redirect(302, '/')

	return {
		user: locals.user
	}
}

export const actions: Actions = {
	async save({ request }) {
		const data = await request.formData()
		const name = data.get('name')
		const email = data.get('email')

		if (!name || !email) {
			return invalid(400, { invalid: true })
		}

		return { success: true }
	}
}