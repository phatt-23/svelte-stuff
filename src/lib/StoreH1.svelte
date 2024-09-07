<script lang="ts">
    import { valueStore, counterStore } from "./data";
    import { onMount } from "svelte";
    
    let value: string = "";
    let counter: number = 0;

    onMount(() => { return valueStore.subscribe(changedValue => value = changedValue) });
    onMount(() => { return counterStore.subscribe(count => counter = count) });

</script>

<h1>
    Value: {value}
</h1>

<h1>
    Value: {$valueStore}
</h1>

<h2>
    Counter: {counter}
</h2>

<h2>
    Counter: {$counterStore}
</h2>

