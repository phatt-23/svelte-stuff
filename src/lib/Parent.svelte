<script>
    import Child from './Child.svelte';
    let show = false;
</script>

<hr>

<button on:click={() => show = !show}>
    Toggle Hide: {show}
</button>

{#if show}
    <Child />
    <Child />
    <Child />
    <Child />
{/if}
