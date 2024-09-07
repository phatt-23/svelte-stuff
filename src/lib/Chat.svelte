<script lang="ts">
    export let friend: { name: string };
    let text: string = '';

    async function fetchDataFake() {
        console.log(`calling fetch function on ${friend.name}`);

        await new Promise(resolve => setTimeout(resolve, 2000));
        let array: number[] = [];
        for (let i = 0; i < 10; i++) {
            array.push(randomInt());
        }
        console.log(`done for ${friend.name}`);

        return array;
    }
    
    function randomInt(): number {
        return Math.random();
    } 
</script>

<section>
    {#if friend === undefined}
        Selected a friend to talk to :)
    {:else}
        <div>
            <p>Talking to {friend.name}</p>
        </div>
        <!-- {#key friend} -->
            <div class="history">
                {#await fetchDataFake()}
                    No messages...
                {:then messages}
                    {#each messages as msg}
                        <p><b>{friend.name}:</b> {msg}</p>
                    {/each} 
                {:catch}
                    Oops, loading chat failed.
                {/await}
            </div>
            <div class="inputBar">
                <input type="text" bind:value={text}>
                <button on:click={() => {}}>Send</button>
            </div>
        <!-- {/key} -->
    {/if}

</section>

<style>
</style>
