import type { PageServerLoad } from "./$types";
import { db } from '$lib/db'
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = locals
	if (!user) return error(401, 'Unauthorized')

	async function getPosts() {
		return await db.post.findMany({
			where: { authorId: user.id },
			select: {
				title: true,
				id: true,
				publishedAt: true,
				updatedAt: true,
			},
		})
	}

	return {
		posts: getPosts()
	}
}