<script lang="ts">
    let options: string[] = ['affenpinscher', 'african', 'airedale'];
    let selected: string;
    let imgSrc: string;
   
    let hasError: boolean = false;
    let isFetching: boolean = false;

    $: fetchDogImageAwait(selected);

    function fetchDogImage(breed: string) {
        isFetching = true;
        imgSrc = '';
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => res.json())
            .then(obj => imgSrc = obj.message)
            .catch(_ => hasError = true)
            .finally(() => isFetching = false);
        
    }

    async function fetchDogImageAwait(breed: string) {
        isFetching = true;
        imgSrc = '';

        try {
            const res: Response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            const obj = await res.json();
            imgSrc = obj.message;
        } catch {
            hasError = true;
        } finally {
            isFetching = false;
        }
    }

    async function getRandomImage(breed: string): Promise<any> {
        const res: Response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        return res.json();
    }
</script>

<section>
    <select bind:value={selected}>
        {#each options as opt (opt)}
            <option value={opt}>{opt}</option>
        {/each}
    </select>

    Selected: {selected}

    {#if isFetching}
        loading...
    {:else}
        Fetched Dog: {imgSrc}
        <img src="{imgSrc}" alt="dog">
    {/if}

    <hr />

    {#await getRandomImage(selected)}
        loading...
    {:then { message } }
        <img src="{message}" alt="dog">
    {:catch error}
        something went wrong...
        {error}
    {/await}
    
</section>
