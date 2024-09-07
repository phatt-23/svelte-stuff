<script lang="ts">
    import Chat from './Chat.svelte';

    let friends: { name: string }[] = [
        { name: 'john' },
        { name: 'alfred' },
        { name: 'ben' },
        { name: 'adam' },
        { name: 'charlie' },
    ];

    let selectedFriend: { name: string } = friends[0];
</script>

<section>
    <ul>
        {#each friends as friend}
            <li>
                <label class:selected={selectedFriend === friend}>
                    <input 
                        type="radio" 
                        bind:group={selectedFriend} 
                        value={friend}
                    />
                    {friend.name}
                </label>
            </li>
        {/each}
    </ul>
    <div class="chat">
        {#key selectedFriend}
            <Chat friend={selectedFriend}/> 
        {/key}
    </div>
</section>


Selected Friend: {selectedFriend.name}


<style>
    .selected {
        background: lightblue;
    }

    section {
        display: flex;
    }
    
    .chat {
        flex: 1;
    }

    input {
        appearance: none;
    }

    li {
        appearance: none;
    }

    ul {
        appearance: none;
        list-style: none;
        border: 1px solid;
        margin: auto;
    }

</style>
