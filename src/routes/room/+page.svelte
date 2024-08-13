<script lang="ts">
    import { onMount } from "svelte";
    import "../../app.css";
    import cah from "../../assets/cah.json";
    import { io } from "socket.io-client";

    const socket = io("http://localhost:3000");

    let gameRoom = "testRoom";
    let cardPlayed: any;
    let whiteCard: any[] = [];
    let blackCard: any;

    
    function getWhiteCrads() {
        let white = cah[0].white;
        let array: any[] = [];
        let ind = new Set<number>();
        let random = Math.min(10, white.length);
        while (array.length < random) {
            const index: any = Math.floor(Math.random() * white.length);
            if (!ind.has(index)) {
                array.push(white[index]);
                ind.add(index);   
            }
        }
         return array;
    }


    function getBlackCard() {
        let black = cah[0].black;
        const random = Math.floor(Math.random() * black.length);
        let result: any = black[random];
        return result.text;
    }


    function playWhiteCard(card: string) {
        cardPlayed = card;
        socket.emit("playcard", { gameRoom, card });
    }

    onMount(() => {
        whiteCard = getWhiteCrads();
        blackCard = getBlackCard();
        console.log(whiteCard, blackCard);
    });

    socket.on("WebSocket", (message) => {
        console.log(message)
    });

    socket.emit("joinRoom", gameRoom);

    socket.emit("message", (message: any) => {
        console.log("message")
    });


</script>

<div class="min-h-screen bg-gray-400">
    <div class="flex justify-center pt-10">
        <div class="bg-black w-full mx-10 flex justify-center p-2 rounded-lg shadow-md shadow-white text-white">
            <p>{blackCard}</p>
        </div>
    </div>
    <div class="flex w-full h-96 mt-40 px-5 gap-2 overflow-x-auto">
        {#each whiteCard as card}
            <button on:click={() => {
                playWhiteCard(card.text);
            }} class="bg-white shadow-md shadow-black h-52 p-2 px-5 rounded-lg text-black">
                <p>{card.text}</p>
            </button>
        {/each}
    </div>
    <div class="bg-neutral-800 flex gap-2 bottom-0 fixed w-full text-white p-2">
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
    </div>
</div>