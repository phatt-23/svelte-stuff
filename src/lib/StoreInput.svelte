<script lang="ts">
    import { valueStore } from "$lib/data";
</script>

<input type="text" on:input={(event) => valueStore.set(event.currentTarget.value)}>

