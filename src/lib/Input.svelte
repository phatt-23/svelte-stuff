<script lang='ts'>
	import { tick } from "svelte";

    let value = '';
    
    async function onInput(e: Event): Promise<void> {
        const input = this;
        let selectionStart = input.selectionStart;
        let selectionEnd = input.selectionEnd;
        value = input.value.toUpperCase();
        await tick();
        input.selectionStart = selectionStart;
        input.selectionEnd = selectionEnd;
    }

</script>

<input on:input={onInput} type="text" {value}>

<button on:click={() => console.log(value)}>Show Value</button>

