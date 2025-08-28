<script>
  import { theme } from '$lib/theme';
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
</script>

<div class:dark={$theme}>
  <div class="relative min-h-screen bg-gray-950 text-gray-800 dark:text-gray-200 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="/image/bg2.png" alt="Space background" class="w-full h-full object-cover opacity-70" />
    </div>
    <div class="relative z-10 min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <slot />
      </main>
    </div>
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