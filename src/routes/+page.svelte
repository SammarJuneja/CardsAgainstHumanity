<script lang="ts">
    import "../app.css";

    let mainOpen: boolean = true;
    let createOpen: boolean;
    let joinOpen: boolean;
</script>

<div class="bg-gray-400 grid items-center min-h-screen">
  {#if createOpen}
    <div class="grid bg-yellow-600 p-2 mx-60 gap-2 rounded-md justify-center items-center">
      <span class="flex">
        <input placeholder="Your Name" class="bg-transparent placeholder-black pt-1 outline-none border-b border-yellow-700" type="text">
        <button on:click={() => {
          createOpen = !createOpen;
          mainOpen = !mainOpen;
          }}>X</button>
      </span>
      <input placeholder="Game Password" class="bg-transparent placeholder-black pt-1 outline-none border-b border-yellow-700" type="text">
      <button class="bg-yellow-400 rounded-md">Create game</button>
    </div>
  {/if}
  {#if joinOpen}
    <div class="grid bg-yellow-600 p-2 mx-60 gap-2 rounded-md justify-center items-center">
      <span class="flex">
        <input placeholder="Your Name" class="bg-transparent placeholder-black pt-1 outline-none border-b border-yellow-700" type="text">
        <button on:click={() => {
          joinOpen = !joinOpen;
          mainOpen = !mainOpen;
          }}>X</button>
      </span>
      <input placeholder="Game Password" class="bg-transparent placeholder-black pt-1 outline-none border-b border-yellow-700" type="text">
      <button class="bg-yellow-400 rounded-md">Join game</button>
    </div>
  {/if}
  {#if mainOpen}
  <div class="grid items-center justify-center text-center bg-yellow-600 mx-60 p-3 gap-2 rounded-md">
    <button on:click={() => {
      createOpen = !createOpen;
      mainOpen = !mainOpen;
    }} class="bg-yellow-400 p-1 rounded-md">Create game</button>
    <button on:click={() => {
      joinOpen = !joinOpen;
      mainOpen = !mainOpen;
    }} class="bg-yellow-400 p-1 rounded-md">Join game</button>
    <a href="/room" class="bg-yellow-400 p-1 rounded-md">Bypass</a>
  </div>
  
  {/if}
</div>