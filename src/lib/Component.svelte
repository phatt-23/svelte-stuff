<script lang="ts">
    function handleClick(): void {
       console.log("hello from the component");
    }

    export let what = 'porn';
</script>


<h2 on:click={handleClick}>Hello from Component</h2>

<a href="https://pornhub.com">Here is also {what}</a>

<style>
    a {
        color: green;
        animation: zoom 2s infinite;
    }

    h2 {
        display:flex;
        text-align:right;
        align-items:center;
        /*animation:zoom 2s infinite;*/
    }

    @keyframes -global-zoom {
        0%, 80% { transform: scale(3); }
        50% { transform: scale(0.1); }
    }
</style>
