<script>
  import { session } from '$app/stores';

  const navigation = [
    {
      href: '/',
      name: 'Home'
    },
    {
      href: '/protected',
      name: `${$session.user ? "🔓" : "🔒"} Protected`
    }
  ];
</script>

<header class='bg-indigo-600'>
  <nav class='container mx-auto'>
    <div class='w-full py-4 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
      <div class='flex items-center'>
        <div class='hidden ml-10 space-x-8 lg:block'>
          {#each navigation as link}
            <a href={link.href} class='text-lg font-medium text-white hover:text-indigo-50'>
              {link.name}
            </a>
          {/each}
        </div>
      </div>
      <div class='ml-10 space-x-4'>
        <a
          href='/sign-in'
          class='inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75'
        >
          Sign in
        </a>
        <a
          href='/sign-up'
          class='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'
        >
          Sign up
        </a>
      </div>
    </div>
  </nav>
</header>
