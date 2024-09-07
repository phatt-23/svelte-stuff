<script>
    let colors = [
        { name: 'red', hex: '#f00' },
        { name: 'green',  hex: '#0f0' },
        { name: 'blue', hex: '#00f' },
        { name: 'black' }
    ];

    function addColor() {
        colors.splice(2, 0, {name: 'yellow', hex: '#ff0'});
        colors = colors;
    }
</script>


<section>
    <button on:click={addColor}>
        Add Color
    </button> 
    <ul>
        {#each colors as {hex = 'purple', name}, index}
            <li style="color: {hex}">{name} - {index}</li>
            {#each name as char, index}
                {index}: {char}, 
            {/each}
        {:else}
            The list is empty
        {/each} 
    </ul>
   s-each-key-block 
    <ul>
        {#each colors as color (color.name)}
            <li>
                key: {color.name} => color: {color.name}, {color.hex}
            </li>
        {/each}
    </ul>

</section>
