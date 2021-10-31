<script>
  import SignUpForm  from '$lib/components/SignUpForm.svelte';
</script>

<h1 class='text-2xl font-semibold text-center'>Sign Up</h1>
<SignUpForm class='max-w-xl mx-auto mt-8' on:submit={(e) => console.log(e)}/>
