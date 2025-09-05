<script>
  // CORRECTED: Icons are now imported with the correct names from @tabler/icons-svelte
  import { 
    IconBrandGithub, 
    IconBrandTwitter, 
    IconBrandDiscord, 
    IconSearch 
  } from "@tabler/icons-svelte";

  let on = false;
  let menuOpen = false;

  // This is a reactive declaration in Svelte. The class string will automatically
  // update whenever the 'on' state variable changes.
  $: themeToggleClasses = `
    absolute top-1 left-1 h-5 w-5 rounded-full 
    transition-transform duration-300 ease-out
    bg-white/20 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.4)]
    ${on ? "translate-x-7" : "translate-x-0"}
  `;

  // This is also reactive and updates when 'menuOpen' changes.
  $: mobileMenuClasses = `
    absolute top-16 left-0 right-0 z-50 lg:hidden 
    transition-all duration-200
    ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
  `;
</script>

<header class="w-full relative z-50 px-5 ">
  <div class="h-16 flex items-center justify-between gap-3">
    <div class="flex items-center gap-7">
      <div class="flex gap-3 items-center">
        <img class="w-10 cursor-pointer" src="/imgi_2_9.png" alt="Conquest.eth Logo" />
        <span class="text-xl font-bold text-white cursor-pointer">Conquest.eth</span>
      </div>
      <span class="hidden md:flex text-white items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">
        <IconSearch size={20} />
        <span>Search</span>
        <span class="px-2 py-0.5 rounded text-xs text-white/80 ring-1 ring-white/20">Ctrl K</span>
      </span>
    </div>
    <div class="hidden lg:flex gap-5 items-center">
      <a href="/home" class="text-[#fdff36] hover:text-[#fdff36]/90">Home</a>
      <a href="/develop" class="text-white/90 hover:text-white">Develop</a>
      <a href="/press" class="text-white/90 hover:text-white">Press</a>
      <button type="button" on:click={() => on = !on} class="relative inline-flex items-center h-7 w-14 rounded-full bg-transparent ring-1 ring-white/40" aria-label="Theme switch">
        <span class={themeToggleClasses}>
          <svg viewBox="0 0 24 24" class="absolute inset-0 m-auto h-3.5 w-3.5" aria-hidden="true"><path d="M12.5 3.5c-4.9 0-8.9 4-8.9 8.9 0 4.1 2.8 7.6 6.6 8.6 2 .6 4.4.4 6.3-.6-3.6-.2-6.5-3.1-6.5-6.8 0-3.2 2.2-5.9 5.2-6.6-0.8-0.3-1.7-0.5-2.7-0.5z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>
      <a href="/github" aria-label="GitHub" class="text-white/90 hover:text-white"><i class="fa-brands fa-github"></i></a>
      <a href="/discord" aria-label="Discord" class="text-white/90 hover:text-white"><i class="fa-brands fa-discord"></i></a>
      <a href="/twitter" aria-label="Twitter" class="text-white/90 hover:text-white"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <div class="flex lg:hidden items-center gap-3">
      <button class="md:hidden p-2 rounded-full ring-1 ring-white/15 text-white/90" aria-label="Search"><IconSearch size={24} /></button>
      <button on:click={() => menuOpen = !menuOpen} class="p-2 rounded-md ring-1 ring-white/15 text-white/90" aria-label="Open menu">
        <span class="block w-5 h-0.5 bg-white mb-1"></span><span class="block w-5 h-0.5 bg-white mb-1"></span><span class="block w-5 h-0.5 bg-white"></span>
      </button>
    </div>
  </div>

  {#if menuOpen}
    <div role="button" tabindex="0" on:click={() => menuOpen = false} on:keydown={(e) => e.key === 'Enter' && (menuOpen = false)} class="fixed inset-0 bg-black/40 z-40"></div>
  {/if}

  <div class={mobileMenuClasses}>
    <nav class="w-full px-4 py-4 bg-[rgba(22,27,44,0.95)] ring-1 ring-white/10 backdrop-blur-md shadow-xl flex flex-col gap-3">
      <a href="/home" class="block px-2 py-2 rounded hover:bg-white/10 text-[#fdff36]">Home</a>
      <a href="/develop" class="block px-2 py-2 rounded hover:bg-white/10 text-white/90">Develop</a>
      <a href="/press" class="block px-2 py-2 rounded hover:bg-white/10 text-white/90">Press</a>
      <div class="my-2 h-px bg-white/10"></div>
      <div class="flex items-center justify-between px-1 py-1.5">
        <span class="text-white/80">Theme</span>
        <button type="button" on:click={() => on = !on} class="relative inline-flex items-center h-7 w-14 rounded-full bg-transparent ring-1 ring-white/40" aria-label="Theme switch">
          <span class={themeToggleClasses}>
            <svg viewBox="0 0 24 24" class="absolute inset-0 m-auto h-3.5 w-3.5" aria-hidden="true"><path d="M12.5 3.5c-4.9 0-8.9 4-8.9 8.9 0 4.1 2.8 7.6 6.6 8.6 2 .6 4.4.4 6.3-.6-3.6-.2-6.5-3.1-6.5-6.8 0-3.2 2.2-5.9 5.2-6.6-0.8-0.3-1.7-0.5-2.7-0.5z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </button>
      </div>
      <div class="my-2 h-px bg-white/10"></div>
      <div class="flex items-center gap-4 px-1 pt-1 text-white/90">
        <a href="/github" aria-label="GitHub" class="cursor-pointer hover:text-white"><i class="fa-brands fa-github"></i></a>
        <a href="/discord" aria-label="Discord" class="cursor-pointer hover:text-white"><i class="fa-brands fa-discord"></i></a>
        <a href="/twitter" aria-label="Twitter" class="cursor-pointer hover:text-white"><i class="fa-brands fa-twitter"></i></a>
      </div>
    </nav>
  </div>
</header>

