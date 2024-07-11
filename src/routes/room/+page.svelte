<script lang="ts">
    import { onMount } from "svelte";
    import "../../app.css";
    import cah from "../../assets/cah.json";
    
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
        return result;
    }

    onMount(() => {
        let ok = getWhiteCrads();
        let lp = getBlackCrads()
        console.log(ok, lp);
    })
    
</script>

<div class="min-h-screen bg-gray-400">
    <div>
        <!-- black card -->
    </div>
    <div>
        <!-- white card -->
    </div>
    <div class="bg-neutral-800 flex gap-2 bottom-0 fixed w-full text-white p-2">
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
    </div>
</div>