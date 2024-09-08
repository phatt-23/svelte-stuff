<script lang="ts">
	//   import { tick } from 'svelte';
	//import Component from '$lib/Component.svelte';
	//   import Input from '$lib/Input.svelte';
	//   import Profile from '$lib/Profile.svelte';
	//   import ButtonIntermediary from '$lib/ButtonIntermediary.svelte';
	//   import BindButton from '$lib/BindButton.svelte';
	//import Button from '$lib/Button.svelte';
    //import Each from '$lib/Each.svelte';
    //import Select from '$lib/Select.svelte';
    //import ChatApp from '$lib/ChatApp.svelte';
    //import Parent from '$lib/Parent.svelte';
    //import StoreInput from "$lib/StoreInput.svelte";
    //import StoreH1 from "$lib/StoreH1.svelte";


	//let name: string = 'John';
	//
	//let src: string = 'https://svelte.dev/svelte-logo-horizontal.svg';
	//
	//let count: number = 0;
	//function increment(): void {
	//	count++;
	//}
	//
	//   function random(number: number): number {
	//       return Math.floor(Math.random() * (number+1));
	//   }
	//
	//   function changeBackgroundColor(): void {
	//       document.body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
	//   }
	//
	//   $: num = 0;
	//   $: double = num * 2;
	//
	//   async function decrementOne(): Promise<void> {
	//       num--;        
	//       await tick();
	//       console.log(`num: ${num}, double: ${double}`);
	//   }
	//
	//   function incrementOne(): void {
	//       num++;
	//       console.log(`num: ${num}, double: ${double}`);
	//   }
	//
	//   let foo = '';
	//
	//   let bar = 0;
	//
	//import { setContext } from 'svelte';
	//   import type { ColorObject } from '$lib/interface';
	//
	//   let listeners: any[] = [];
	//
	//   let colorObj: ColorObject = {
	//       color: 'red',
	//       listenToColorChange(fn: (newColor: string) => void) {
	//           listeners.push(fn);
	//
	//           return function removeListenToColorChange(fn) {
	//               listeners.splice(listeners.indexOf(fn), 1);
	//               //console.log(listeners.indexOf(fn), listeners.length);
	//           }
	//       },
	//   };
	//
	//   setContext('colorObj', colorObj);
	//
	//   colorObj.listenToColorChange((str: string) => {
	//       console.log('test');
	//   })
	//
	//   $: console.log('color', colorObj);
	//   $: colorObj, console.log('number of listeners', listeners.length);
	//   $: colorObj, listeners.forEach(listener => {
	//       console.log('calling registered listener', listener, colorObj.color);
	//       listener(colorObj.color);
	//   });

    //import Mouse from "$lib/Mouse.svelte";
    // import Motion from "$lib/Motion.svelte";
	import Todo from "$lib/Todo.svelte";
	import createTodoStore from "$lib/todo";

	const todoStore = createTodoStore([
		{ done: false, description: 'write some docs' },
		{ done: false, description: 'start writing blog post' },
		{ done: true, description: 'buy some milk' },
		{ done: false, description: 'mow the lawn' },
		{ done: false, description: 'feed the turtle' },
		{ done: false, description: 'fix some bugs' }
	]);
</script>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 36em;
	}

	.board > input {
		flex: 1;
		font-size: 1.4rem;
		grid-column: 1/3;
		padding: 0.5em;
	}

</style>

<section>
<div class="board">
	<input 
		type="text" 
		placeholder="write a todo..."
		on:keydown={(e) => {
			if (e.key !== "Enter") 
				return;

			const text = e.currentTarget.value;
			if (text === "") {
				alert("Can't add an empty todo...");
				return;
			}
			
			todoStore.add(text);
			e.currentTarget.value = "";
		}}
	>
	<div class="todos">
		<h2>Todos:</h2>
		<Todo store={todoStore} done={false}/>
	</div>
	<div class="todos">
		<h2>Done:</h2>
		<Todo store={todoStore} done={true}/>
	</div>
</div>
	
	<!-- <Motion /> -->
    <!--
    <Mouse />
	<h2>Welcome to {name}</h2>
	<a href="www.pornhub.com">Click here for porn</a>
	<Component what='cute anime girls' />

	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<img {src} alt="logo" />

	{count}

	<button on:click={increment}>Increment</button>

	<div>
		<button on:click={() => console.log('parent')}>
			<button
				on:click={() => console.log('child')}
				on:blur={changeBackgroundColor}
				on:mouseout={changeBackgroundColor}
			>
				child
			</button>
		</button>
	</div>

	<button on:click={decrementOne}>-</button>
	<button on:click={incrementOne}>+</button>
	{num} * 2 = {num * 2}

    <Input />

    <Profile name='Phat' on:skillPointChanged={(e) => console.log(e.detail)} /> 

    <ButtonIntermediary on:click={(e) => console.log('in app.svelte', e)} />

    <input type="text" bind:value={foo}>
    <p><b>foo: </b>{foo}</p>

    <BindButton on:countChanged={(event) => bar = event.detail} count={bar}/>
    <BindButton bind:count={bar}/>
    <p><b>bar: </b>{bar}</p>

    <Each />
    <hr>

    <Select />

    <ChatApp />

    <Parent />

    <input 
        type="color" 
        bind:value={colorObj.color}
        on:change={() => console.log(colorObj.color)} 
    />

    <StoreInput />
    <StoreH1 /> 
    -->
</section>


