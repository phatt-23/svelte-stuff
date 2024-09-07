<script lang="ts">
    import { getContext, onDestroy, onMount } from "svelte";
    import type { ColorObject } from "./interface";


    let color: string = 'green';
    const colorObj: ColorObject = getContext('colorObj');
    console.log(colorObj);

    const handleColorChange = (newColor: string) => {
        color = newColor;
    };
    
    onMount(() => {
        return colorObj.listenToColorChange(handleColorChange);
    });

     
    let element: any;
    //onDestroy(() => {
    //    console.log(`removing: ${element}`);
    //    colorObj.removeListenToColorChange(handleColorChange);
    //})
</script>

<p style="color: {color};" bind:this={element}>Child</p>

<style>
    p {
        font-size: 2rem; 
        margin: 0;
        font-weight: bold;
    }
</style>

