import prisma from '$lib/prisma'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async () => {
	const clients = await prisma.client.findMany()

	return {
		body: { clients }
	}
}
