<script>
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    $: dispatch('countChanged', count)
    export let count = 0;
</script>

<button on:click={() => count ++}>
    Increment
</button>
{count}
