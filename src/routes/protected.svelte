<script context="module">
  export async function load({ session }) {
    if (!session?.user) {
      return {
        status: 302,
        redirect: "/sign-in"
      }
    }
    return {
      props: {
        user: session.user
      }
    };
  }
</script>

<script>
  export let user;

  // import { session } from '$app/stores';
  // $session.user;
</script>

<h1 class='text-2xl font-semibold text-center'>Hi! You are registered with email {user.email}.</h1>
