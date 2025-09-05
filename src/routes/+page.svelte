


<script>
  import { 
    IconBrandGithub, 
    IconBrandTwitter, 
    IconBrandDiscord, 
    IconSearch 
  } from "@tabler/icons-svelte";

  let on = false;
  let menuOpen = false;

  // Helper for conditional classes to make JSX cleaner
  $: themeToggleClasses = `
    absolute top-1 left-1 h-5 w-5 rounded-full 
    transition-transform duration-300 ease-out
    bg-white/20 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.4)]
    ${on ? "translate-x-7" : "translate-x-0"}
  `;

  $: mobileMenuClasses = `
    absolute top-16 left-0 right-0 z-50 lg:hidden 
    transition-all duration-200
    ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
  `;
</script>

<section class="">


  <!-- ================================================================== -->
  <!-- ======================== MAIN CONTENT ============================ -->
  <!-- ================================================================== -->
  <div class="px-4">
    <p class="font-sans text-center uppercase tracking-widest text-[#8ceaea] drop-shadow-lg py-5 text-base md:text-xl">
      Rise as the greatest galactic commander of the universe. Build your own legacy among the stars
    </p>
    <div class="flex justify-center">
      <img class="w-full lg:w-3/4 2xl:w-1/2" src="/imgi_3_logo.png" alt="Conquest Game Logo" />
    </div>
  </div>

  <!-- ================================================================== -->
  <!-- ======================= LOWER SECTION ============================ -->
  <!-- ================================================================== -->
  <div class="h-[90vh] lg:h-[63vh] ">
    
    <!-- Mobile Design (< 768px) -->
    <div class="flex md:hidden flex-col h-full">
      <div class="grid grid-cols-2 gap-1 py-5">
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_4_1.png" alt="Commanders"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">AVATAR<br/>COMMANDERS</p></div>
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_5_2.png" alt="Alliances"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">PLAYER<br/>ALLIANCES</p></div>
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_6_3.png" alt="Battles"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">PERSISTENT<br/>BATTLES</p></div>
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_7_4.png" alt="Decisions"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">STRATEGIC<br/>DECISIONS</p></div>
      </div>
      <div class="flex-grow w-full flex items-end justify-center bg-[url(/imgi_8_7.png)] bg-cover bg-no-repeat ">
        <div class="flex flex-col items-center justify-center w-full z-10">
          <img src="/imgi_16_5.png" alt="The Galaxy Awaits" class="w-4/3"/>
          <button class="bg-[url(/imgi_9_6.png)] w-44 mb-18 -mt-15 h-20 bg-contain bg-no-repeat bg-center hover:scale-110 active:scale-110 transition-transform" aria-label="Subscribe"></button>
        </div>
      </div>
    </div>
    
    <!-- Tablet Design (768px to 1024px) -->
    <div class="hidden md:flex lg:hidden flex-col h-full">
      <div class="grid grid-cols-4 gap-1 py-5">
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_4_1.png" alt="Commanders"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">AVATAR<br/>COMMANDERS</p></div>
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_5_2.png" alt="Alliances"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">PLAYER<br/>ALLIANCES</p></div>
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_6_3.png" alt="Battles"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">PERSISTENT<br/>BATTLES</p></div>
        <div class="flex flex-col items-center"><img class="w-full" src="/imgi_7_4.png" alt="Decisions"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">STRATEGIC<br/>DECISIONS</p></div>
      </div>
      <div class="flex-grow w-full flex items-end justify-center bg-[url(/imgi_8_7.png)] bg-cover bg-no-repeat ">
        <div class="flex flex-col items-center justify-center w-full z-10 pb-32">
          <img src="/imgi_16_5.png" alt="The Galaxy Awaits" class="w-3/2 pb-10"/>
          <button class="bg-[url(/imgi_9_6.png)] w-1/2 mb-10 -mt-36 h-28 bg-contain bg-no-repeat bg-center hover:scale-110 active:scale-110 transition-transform" aria-label="Subscribe"></button>
        </div>
      </div>
    </div>
    
    <!-- Laptop Design (1024px to 1536px) -->
    <div class="hidden lg:flex 2xl:hidden h-full items-end gap-6">
      <div class="w-1/2 flex flex-col justify-center h-full">
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_4_1.png" alt="Commanders"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">AVATAR<br/>COMMANDERS</p></div>
          <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_5_2.png" alt="Alliances"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">PLAYER<br/>ALLIANCES</p></div>
          <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_6_3.png" alt="Battles"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">PERSISTENT<br/>BATTLES</p></div>
          <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_7_4.png" alt="Decisions"/><p class="text-3d-gold text-center font-russo-one uppercase text-xl">STRATEGIC<br/>DECISIONS</p></div>
        </div>
      </div>
      <div class="w-1/2 h-full bg-[url(/imgi_8_7.png)] bg-contain bg-no-repeat bg-bottom flex flex-col items-center justify-end pb-5">
        <img src="/imgi_16_5.png" alt="The Galaxy Awaits" class="w-full"/>
        <button class="bg-[url(/imgi_9_6.png)] bg-contain bg-no-repeat bg-center w-2/5 h-32 -mt-20 lg:-mt-24 hover:scale-110 transition-transform" aria-label="Subscribe"></button>
      </div>
    </div>

    <!-- 1920px DESKTOP DESIGN (1536px to 2560px) -->
    <div class="hidden 2xl:flex 3xl:hidden h-full items-end">
      <div class="w-2/3 flex flex-col justify-end h-full ml-10 pt-8 pb-15 gap-y-8">
        <div class="grid grid-cols-4 gap-4">
            <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_4_1.png" alt="Commanders"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">AVATAR<br/>COMMANDERS</p></div>
            <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_5_2.png" alt="Alliances"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">PLAYER<br/>ALLIANCES</p></div>
            <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_6_3.png" alt="Battles"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">PERSISTENT<br/>BATTLES</p></div>
            <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_7_4.png" alt="Decisions"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">STRATEGIC<br/>DECISIONS</p></div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-col items-center w-3/5 -mr-20 z-10">
            <img src="/imgi_16_5.png" alt="The Galaxy Awaits"/>
            <button class="-mt-24 bg-[url(/imgi_9_6.png)] w-1/2 h-32 bg-contain bg-no-repeat bg-center hover:scale-110 transition-transform" aria-label="Subscribe"></button>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-full bg-[url(/imgi_8_7.png)] bg-contain bg-no-repeat mt-20 bg-bottom"></div>
    </div>

    <!-- 2560px+ DESKTOP DESIGN -->
    <div class="hidden 3xl:flex h-full items-end">
        <div class="w-3/4 flex flex-col justify-end h-full pt-8 pb-5 gap-y-8">
            <div class="grid grid-cols-4 gap-4">
                <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_4_1.png" alt="Commanders"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">AVATAR<br/>COMMANDERS</p></div>
                <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_5_2.png" alt="Alliances"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">PLAYER<br/>ALLIANCES</p></div>
                <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_6_3.png" alt="Battles"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">PERSISTENT<br/>BATTLES</p></div>
                <div class="flex flex-col items-center"><img class="w-11/12" src="/imgi_7_4.png" alt="Decisions"/><p class="text-3d-gold text-center font-russo-one uppercase text-2xl">STRATEGIC<br/>DECISIONS</p></div>
            </div>
            <div class="flex justify-end">
                <div class="flex flex-col items-center w-3/5 -mr-20 z-10">
                    <img src="/imgi_16_5.png" alt="The Galaxy Awaits"/>
                    <button class="-mt-16 bg-[url(/imgi_9_6.png)] w-1/2 h-32 bg-contain bg-no-repeat bg-center hover:scale-110 transition-transform" aria-label="Subscribe"></button>
                </div>
            </div>
        </div>
        <div class="w-1/4 h-full bg-[url(/imgi_8_7.png)] bg-contain bg-no-repeat bg-bottom"></div>
    </div>
  </div>
</section>

