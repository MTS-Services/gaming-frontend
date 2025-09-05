<script>
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
  // Note: For the theme to work, you will need a theme store.
  // Example: import { theme } from '$lib/theme';
</script>

<div class="relative min-h-screen bg-gray-900 text-gray-200 lg:overflow-hidden">
  <div class="absolute inset-0 z-0">
    <img src="/imgi_1_bg2.png" alt="Space background" class="w-full h-full object-cover" />
  </div>
  <div class="relative z-10  flex flex-col">
    <div class="pt-5 px-4 md:px-8 lg:px-24">
      <Header />
    </div>
    <main class="flex-grow flex flex-col justify-between">
      <slot />
    </main>
  </div>
</div>



<!-- <script>
  import { theme } from '$lib/theme';
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
</script>

<div class:dark={$theme}>
  <div class="relative min-h-screen bg-gray-950 ...">
    <div class="relative z-10 min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <slot /> </main>
    </div>
  </div>
</div> -->