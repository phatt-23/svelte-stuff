//<script lang="ts">
import { writable, readable } from "svelte/store";

//export let valueStore = writable('');
export let valueStore = readable("hello", (set) => {
    console.log("one or more subscribers");

    const timeoutID: number = setTimeout(() => {
        set("world");
    }, 1000);


    return () => {
        console.log("no subscribers");
        clearTimeout(timeoutID);
    }
});

export let counterStore = readable(0, (set) => {
    let i: number = 0;
    const intervalID: number = setInterval(() => {
        set(++i);
    }, 1000);

    return () => {
        clearInterval(intervalID);
    }
});

//const unsub = valueStore.subscribe(() => {});
//unsub()

//</script>
