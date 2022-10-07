import { db } from "$lib/db"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ locals, params }) => {
	const { postId } = params

	const post = db.post.findUnique({
		where: { id: postId },
	})

	if (!post) return { status: 404 }

	return {
		post
	}
}