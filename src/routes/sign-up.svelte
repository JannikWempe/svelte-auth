<script>
	import SignUpForm from '$lib/components/SignUpForm.svelte';

	let error;

	async function handleSubmit({ detail: { email, password } }) {
		const response = await fetch('/api/sign-up', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			error = (await response.json()).message;
			return;
		}

		window.location = '/protected';
	}
</script>

<h1 class="text-2xl font-semibold text-center">Sign Up</h1>
{#if error}
	<p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
{/if}
<SignUpForm class="max-w-xl mx-auto mt-8" on:submit={handleSubmit} />
