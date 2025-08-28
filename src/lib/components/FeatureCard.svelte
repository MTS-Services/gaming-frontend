<script lang="ts">
  export let icon: string = '';
  export let title: string = '';
</script>

<div class=" flex flex-col items-center gap-4 text-white">
  <div class=" items-center justify-center">
    <img src={icon} alt="{title} icon" class="drop-shadow-[1px_6px_30px_#ffffff] object-contain"  />
  </div>

<h3 class="font-orbitron font-black text-yellow-400 lg:text-2xl lg:w-48  tracking-wider text-stroke drop-shadow-[1px_6px_3px_#000000]">
  {title}
</h3>
</div>


<style>
  .text-stroke {
    -webkit-text-stroke: 1px black;
  }
</style>

<!-- <script lang="ts">
  export let icon: string = '';
  export let title: string = '';
</script>

<div class="flex flex-col items-center gap-4 text-white">
  <div class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
    <img src={icon} alt="{title} icon" class="w-full h-full object-contain" />
  </div>

  <h3 class="font-orbitron font-bold text-yellow-400 text-base md:text-lg tracking-wider drop-shadow-lg text-stroke">
    {title}
  </h3>
</div>

<style>
  .text-stroke {
    -webkit-text-stroke: 1px black;
  }
</style> -->