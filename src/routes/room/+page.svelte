<script lang="ts">
    import { onMount } from "svelte";
    import "../../app.css";
    import cah from "../../assets/cah.json";
    
    let whiteCard: any[] = []
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
    function getBlackCrads() {
        let black = cah[0].black;
        const random = Math.floor(Math.random() * black.length);
        let result: any = black[random];
        return result.text;
    }

    onMount(() => {
        whiteCard = getWhiteCrads();
        blackCard = getBlackCrads();
        console.log(whiteCard, blackCard);
    })
    
</script>

<div class="min-h-screen bg-gray-400">
    <div class="flex justify-center pt-10">
        <div class="bg-black mx-60 p-2 rounded-lg text-white">
            <p>{blackCard}</p>
        </div>
    </div>
    <div class="flex pt-10 mt-40 gap-2 overflow-x-auto">
        {#each whiteCard as card}
            <div class="bg-white h-auto w-40 p-2 rounded-lg text-black">
                <p>{card.text}</p>
            </div>
        {/each}
    </div>
    <div class="bg-neutral-800 flex gap-2 bottom-0 fixed w-full text-white p-2">
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
    </div>
</div>