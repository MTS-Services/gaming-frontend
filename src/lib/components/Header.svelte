<script>
  import { page } from "$app/stores";
  import { Twitter, Github, MessageSquare, Menu, X } from "lucide-svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  let menuOpen = false;

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/devlog", text: "devlog" },
    { href: "/press", text: "press" },
  ];
</script>

<header class="w-full p-4 text-gray-400 dark:text-gray-300 relative z-20">
  <div class="container mx-auto flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center gap-6">
      <a
        href="/"
        class="flex items-center gap-3 text-xl font-bold text-black dark:text-white"
      >
        <img src="/image/9.png" alt="Conquest Logo Icon" class="w-8 h-8" />
        <span>Conquest.eth</span>
      </a>

      <!-- Desktop Search -->
      <div class="hidden md:flex items-center gap-2 text-gray-500">
        <span>Search</span>
        <span
          class="text-xs border border-gray-600 px-1.5 py-0.5 rounded"
          >Ctrl+K</span
        >
      </div>
    </div>

    <!-- Desktop Nav + Actions -->
    <div class="hidden md:flex items-center gap-8">
      <nav
        class="flex items-center gap-6 text-lg font-orbitron drop-shadow-lg"
      >
        {#each navLinks as link}
          <a
            href={link.href}
            class="transition-colors hover:text-yellow-300"
            class:text-yellow-300={$page.url.pathname === link.href}
            class:text-gray-400={$page.url.pathname !== link.href}
          >
            {link.text}
          </a>
        {/each}
      </nav>
      <div class="flex items-center gap-5">
        <ThemeToggle />
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          <MessageSquare size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          <Github size={24} />
        </a>
      </div>
    </div>

    <!-- Mobile Hamburger -->
    <button
      class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      on:click={() => (menuOpen = !menuOpen)}
      aria-label="Toggle Menu"
    >
      {#if menuOpen}
        <X size={28} />
      {:else}
        <Menu size={28} />
      {/if}
    </button>
  </div>

  <!-- Mobile Dropdown -->
  {#if menuOpen}
    <div
      class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700"
    >
      <nav class="flex flex-col p-4 gap-4 text-lg font-orbitron">
        {#each navLinks as link}
          <a
            href={link.href}
            class="transition-colors hover:text-yellow-300"
            class:text-yellow-300={$page.url.pathname === link.href}
            class:text-gray-600={$page.url.pathname !== link.href}
            on:click={() => (menuOpen = false)}
          >
            {link.text}
          </a>
        {/each}
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-5 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
        <ThemeToggle />
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          <Twitter size={22} />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          <MessageSquare size={22} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="hover:text-black dark:hover:text-white transition-colors"
        >
          <Github size={22} />
        </a>
      </div>
    </div>
  {/if}
</header>
