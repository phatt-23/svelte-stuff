import { writable, type Invalidator, type Subscriber, type Unsubscriber } from "svelte/store";

export type TodoInitial = { done: boolean, description: string };
export type Todo = { done: boolean, description: string, uid: number };
export type TodoStore = {
    subscribe: (this: void, run: Subscriber<{
        uid: number;
        done: boolean;
        description: string;
    }[]>, invalidate?: Invalidator<{
        uid: number;
        done: boolean;
        description: string;
    }[]> | undefined) => Unsubscriber;
    add: (description: string) => void;
    remove: (todo: Todo) => void;
    mark: (todo: Todo, done: boolean) => void;
}

export default function createTodoStore(initialTable: TodoInitial[]) {
    let uid = 1;

    // adding an id to each
    const table = initialTable.map(todo => {
        return { ...todo, uid: uid++ }
    });

    const { update, subscribe } = writable(table);

    
    const todoStore: TodoStore = {
        subscribe: subscribe,
        add: (description: string) => {
            const newTodo = {
                uid: uid++,      
                done: false,
                description
            };
            
            update($current => [...$current, newTodo]);
        },
        remove: (todo: Todo) => {
            update($current => [...$current.filter(t => t !== todo)]);
        },
        mark: (todo: Todo, done: boolean) => {
            const updatedTodo: Todo = { ...todo, done };
            update($current => [
                ...$current.filter((t) => t !== todo), // rest of todos
                updatedTodo,
            ]);
        }
    }

    return todoStore;
}