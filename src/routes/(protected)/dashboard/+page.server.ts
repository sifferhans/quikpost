import type { PageServerLoad } from "./$types";
import { db } from '$lib/db'
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request }) => {

	const posts = await db.post.findMany({
		select: {
			title: true,
			id: true,
			publishedAt: true,
			updatedAt: true,
		},
	})
	if (!posts?.length) throw error(404, 'No posts found')

	return {
		posts
	}
}