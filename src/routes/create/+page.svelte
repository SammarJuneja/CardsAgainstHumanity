<script lang="ts">
    import "../../app.css";

    let username: string = "";
    let password: string = "";

    function createGame() {

    }
</script>

<div class="bg-gray-400 grid items-center min-h-screen">
    <div class="grid bg-yellow-600 p-2 mx-60 gap-2 rounded-md justify-center items-center">
        <span class="flex">
            <input bind:value={username} placeholder="Your Name" class="bg-transparent placeholder-black pt-1 outline-none border-b border-yellow-700" type="text">
            <a href="/">X</a>
        </span>
        <input bind:value={password} placeholder="Game Password" class="bg-transparent placeholder-black pt-1 outline-none border-b border-yellow-700" type="text">
        <button on:click={createGame} class="bg-yellow-400 rounded-md">Create game</button>
    </div>
</div>