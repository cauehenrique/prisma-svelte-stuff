<script context="module" lang="ts">
	import type { Client } from '@prisma/client'
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async ({ fetch }) => {
		const clientsResponse = await fetch('/api/clients')
		const { clients } = await clientsResponse.json()

		return {
			props: { clients }
		}
	}
</script>

<script lang="ts">
	export let clients: Client[]
</script>

<div class="p-6 max-w-4xl mx-auto">
	<h1 class="text-2xl font-bold">Hello World</h1>
	<p>That's some real good shit!</p>
	<code class="bg-neutral-100 p-2 rounded-sm block mt-4"> /api/clients </code>
	<ul class="p-2 list-disc list-inside">
		{#each clients as client}
			<li>{client.name}</li>
		{/each}
	</ul>
</div>
