<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let name; 
    let skillPoint = 5;

    $: dispatch('skillPointChanged', { skillPoint, name })

    function decrementSkillPoint() {
        skillPoint --;
    }
    function incrementSkillPoint() {
        skillPoint ++;
    }
</script>

<section>
    <h2>Profile:</h2> 

    <p><b>Name:</b> {name}</p>
    
    <button on:click={decrementSkillPoint}>
        -
    </button>
    {skillPoint}
    <button on:click={incrementSkillPoint}>
        +
    </button>
</section>

