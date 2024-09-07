<script lang="ts">
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    
    function onClick() {
        dispatch("click", "hello from button.svelte");
    }

</script>

<button on:click={onClick}>
    Im in Button.svelte
</button>
