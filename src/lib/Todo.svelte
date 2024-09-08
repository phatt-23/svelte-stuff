<script lang="ts">
    import { type TodoStore } from "./todo";
    import { send, receive } from "./transition";

    export let done: boolean;
    export let store: TodoStore;
</script>

<ul class="todos">
    {#each $store.filter(t => t.done == done) as todo (todo.uid) }
        <li 
            in:receive={{ key: todo.uid }}
            out:send={{ key: todo.uid }}
        >
            <label>
                <input type="checkbox" checked={todo.done} on:change={(e) => store.mark(todo, e.currentTarget.checked)}>
                <p>
                    {todo.description}
                </p>
            </label>
            <button on:click={() => store.remove(todo)} aria-label="Remove">Remove</button>
        </li>
    {/each}
</ul>

<style>
    label {
        display: flex;
        width: 100%;
        height: 100%;
    }

    span {
        flex: 1
    }

    li {
        border: 1px solid;
        border-radius: 0.5rem;
        padding: 1em;
        list-style: none;
    }
</style>