import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = () => {
	const clients = ['Cauê', 'Pedro', 'João']

	return {
		body: { clients }
	}
}
