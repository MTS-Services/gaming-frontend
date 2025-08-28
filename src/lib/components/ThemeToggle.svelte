<script>
  import { theme } from '$lib/theme';
  import { Sun, Moon } from 'lucide-svelte';

  function toggleTheme() {
    theme.update(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  }
</script>

<button
  on:click={toggleTheme}
  aria-label="Toggle theme"
  class="relative w-14 h-7 flex items-center bg-gray-700 dark:bg-gray-800 rounded-full p-1 transition-colors"
>
  <div
    class="absolute w-6 h-6 bg-blue-200 rounded-full shadow-md transform transition-transform"
    class:translate-x-7={$theme === 'dark'}
  ></div>
  <div class="w-full flex justify-between">
    <Sun size={16} class="text-yellow-400" />
    <Moon size={16} class="text-blue-300" />
  </div>
</button>