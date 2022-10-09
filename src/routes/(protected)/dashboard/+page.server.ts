import type { PageServerLoad } from "./$types";
import { db } from '$lib/db'
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request, locals }) => {
	const { user } = locals

	const posts = await db.post.findMany({
		where: { authorId: user.id },
		select: {
			title: true,
			id: true,
			publishedAt: true,
			updatedAt: true,
		},
	})

	return {
		posts
	}
}