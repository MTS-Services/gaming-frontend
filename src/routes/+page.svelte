<!-- <script lang="ts">
  import FeatureCard from "$lib/components/FeatureCard.svelte";

  const features = [
    { icon: '/image/1.png', title: 'AVATAR COMMANDERS' },
    { icon: '/image/2.png', title: 'PLAYER ALLIANCES' },
    { icon: '/image/3.png', title: 'PERSISTENT BATTLES' },
    { icon: '/image/4.png', title: 'STRATEGIC DECISIONS' }
  ];
</script>

<div class="w-full lg:min-h-[calc(100vh-350px)] flex flex-col items-center justify-center relative text-center px-4">
      <p class="font-orbitron lg:text-lg md:text-xl font-black uppercase tracking-widest mb-2 mx-auto text-blue-200 drop-shadow-lg">
      Rise as the greatest galactic commander of the universe. Build your own legacy among the stars
    </p>
    <img src="/image/logo.png" alt="Conquest.ETH Logo" class="w-full my-10 md:my-12 w-full lg:max-w-4xl mx-auto relative lg:bottom-17" />
  <div class="lg:grid lg:w-[1200px] lg:grid-cols-4 bottom-25 lg:right-44 relative">
    {#each features as feature}
      <FeatureCard icon={feature.icon} title={feature.title} />
    {/each}
  </div>
  <div class="  w-full ">
  <div class="lg:grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 lg:gap-4  lg:max-w-6xl md:max-w-4xl mx-auto w-full  lg:bottom-25 lg:right-44 lg:right-0 lg:relative">
    {#each features as feature}
      <FeatureCard icon={feature.icon} title={feature.title} />
    {/each}
  </div>
</div>
  <div class="absolute lg:top-44 right-1 w-full max-w-xl md:max-w-2xl lg:max-w-2xl z-0 pointer-events-none transform translate-x-1/120 translate-y-8">
    <img src="/image/7.png" alt="Game Characters" class="w-full h-auto object-contain" />
  </div>
  <div class="absolute ">

        <div class="lg:w-260">
          <img src="/image/5.png" alt="Join us so you don't miss the launch!" class="w-full object-contain mb-2 lg:top-110 relative" />
        </div>
        <div class=" lg:w-120">
          <img src="/image/6.png" alt="Subscribe Button" class=" relative top-75 left-71 w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-200" />
        </div>
  </div>

</div> -->


<!-- <script lang="ts">
  import FeatureCard from "$lib/components/FeatureCard.svelte";

  const features = [
    { icon: '/image/1.png', title: 'AVATAR COMMANDERS' },
    { icon: '/image/2.png', title: 'PLAYER ALLIANCES' },
    { icon: '/image/3.png', title: 'PERSISTENT BATTLES' },
    { icon: '/image/4.png', title: 'STRATEGIC DECISIONS' }
  ];
</script>

<div class="w-full min-h-[calc(100vh-500px))] flex flex-col items-center justify-center relative text-center px-4">

  <div class="relative w-full max-w-9xl">
    <p class="font-orbitron lg:text-l2g md:text-xl font-black uppercase tracking-widest mt-8 mx-auto text-blue-200 drop-shadow-lg">
      Rise as the greatest galactic commander of the universe. Build your own legacy among the stars
    </p>

    <div class=" w-full max-w-4xl md:max-w-2xl mx-auto">
      <img src="/image/logo.png" alt="Conquest.ETH Logo" class="w-full" />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-0 lg:max-w-6xl lg:ml-44 lg:mt-15 w-full">
      {#each features as feature}
        <FeatureCard icon={feature.icon} title={feature.title} />
      {/each}
    </div>
  </div>

  <div class="absolute bottom-0 right-0 w-full max-w-md md:max-w-2xl lg:max-w-[calc(100vw-200px)] xl:max-w-[calc(100vw-300px)] z-0 pointer-events-none">
    <div class="absolute lg:top-44 right-1 w-full max-w-xl md:max-w-2xl lg:max-w-2xl z-0 pointer-events-none transform lg:translate-x-1/1000 lg:-translate-y-110">
      <img src="/image/7.png" alt="Game Characters" class="w-full h-auto object-contain top-100" />
    </div>
  </div>

  <div class="absolute ">
    <div class="lg:w-260 md:w-160 sm:w-80">
          <img src="/image/5.png" alt="Join us so you don't miss the launch!" class="w-full object-contain mb-2 top-110 md:top-135 relative" />
    </div>
    <div class=" lg:w-120 md:w-80 sm:40">
      <img src="/image/6.png" alt="Subscribe Button" class=" relative  lg:left-70 md:top-100 md:left-42 sm:top-200 w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-200" />
    </div>
  </div>

</div> -->

<script lang="ts">
  import FeatureCard from "$lib/components/FeatureCard.svelte";

  const features = [
    { icon: '/image/1.png', title: 'AVATAR COMMANDERS' },
    { icon: '/image/2.png', title: 'PLAYER ALLIANCES' },
    { icon: '/image/3.png', title: 'PERSISTENT BATTLES' },
    { icon: '/image/4.png', title: 'STRATEGIC DECISIONS' }
  ];
</script>

<div class="w-full min-h-[calc(100vh-400px)] flex flex-col items-center justify-center relative text-center px-4">

<div class="relative z-10 w-full ">
  <p class="font-orbitron custom-text text-sm md:text-xl uppercase tracking-widest  text-blue-300 drop-shadow-lg">
    Rise as the greatest galactic commander of the universe. Build your own legacy among the stars
  </p>

  <div class="my-8 w-full max-w-4xl mx-auto">
    <img src="/image/logo.png" alt="Conquest.ETH Logo" class="w-full" />
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-6xl lg:ml-50 w-full">
    {#each features as feature}
      <FeatureCard icon={feature.icon} title={feature.title} />
    {/each}
  </div>
</div>

  <div class="absolute -bottom-105 right-0 z-0 w-full md:w-1/2 lg:w-2/5 xl:w-1/3 max-w-[800px] pointer-events-none">
    <img src="/image/7.png" alt="Game Characters" class="w-full h-auto object-contain" />
  </div>

<div class="absolute -bottom-70 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1500px]">
  <div
    class="relative w-full h-68 bg-contain bg-no-repeat bg-center flex items-center justify-center"
    style="background-image: url('/image/5.png');">
    <div class="w-1/4 md:w-1/3">
      <img src="/image/6.png" alt="Subscribe Button" class="w-full cursor-pointer mt-45 hover:scale-105 transition-transform" />
      </div>
    </div>
  </div>
</div>

<style>
.custom-text {
  font-family: 'Orbitron', 'Eurostile', 'Bank Gothic', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #b0eaf5;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
