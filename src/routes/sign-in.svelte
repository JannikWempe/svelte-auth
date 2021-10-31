<script>
  import SignInForm  from '$lib/components/SignInForm.svelte';
</script>

<h1 class='text-2xl font-semibold text-center'>Sign In</h1>
<SignInForm class='max-w-xl mx-auto mt-8' on:submit={(e) => console.log(e)} />
