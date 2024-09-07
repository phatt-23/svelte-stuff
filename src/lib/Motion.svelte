<script>
    import { tweened, spring } from "svelte/motion";
    import { cubicIn } from "svelte/easing";
    
    let count = tweened(0, { duration: 1000, easing: cubicIn });
    let count2 = spring(0); 
    let alpha = tweened('a');
</script>

<h1>
    Count: {$count}
</h1>

<h1>
    Count2: {$count2}
</h1>

<div style="
    background: red;

">
</div>

<button on:click={() => {
    $count -= 10;
    $count2 -= 10;
}}>
    --
</button>

<button on:click={() => {
    $count += 10;
    $count2 += 10;
}}>
    ++
</button>
   
<h1>
    {$alpha}
</h1>
