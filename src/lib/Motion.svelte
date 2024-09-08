<script lang="ts">
	import { tweened, spring, type Readable } from 'svelte/motion';
	import { cubicIn } from 'svelte/easing';
	import mousePosition from './mousePosition';
	import { readonly, readable, type Writable } from 'svelte/store';
	import throttle from '$lib/throttle';
	import { slide } from 'svelte/transition';

	const size = 100;

	let count = tweened(0, { duration: 1000, easing: cubicIn });
	let alpha = tweened('a', {
		duration: 5000,
		interpolate: (a: string, b: string) => (t: number) => {
			const acode: number = a.charCodeAt(0);
			const bcode: number = b.charCodeAt(0);
			const distance: number = bcode - acode;
			const codeNow = distance * t + acode;
			console.log('codeNow:', codeNow);
			return String.fromCharCode(Math.round(codeNow));
		}
	});
	let count2 = spring(0, {
		stiffness: 0.9,
		damping: 0.7
	});

	//let position = throttle(readonly(mousePosition));

	function springify<T>(store: Readable<T>) {
		const springStore = spring(undefined, {
			stiffness: 0.7,
			damping: 0.4
		});

		return readable(undefined, (set) => {
			let unsubscribeFromStore = store.subscribe(springStore.set);
			let unsubscribeFromSpringStore = springStore.subscribe(set);

			return () => {
				unsubscribeFromStore();
				unsubscribeFromSpringStore();
			};
		});
	}

	let position = springify(readonly(mousePosition));

	let visible: boolean = false;

	function typewriter(node, { speed = 1 }) {
		const validNode =
			node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!validNode) {
			throw new Error('Cannot use typewriter transition with non text nodes.');
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.1);

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	let status: string = '';

	let showList = true;
	let i = 0;
	let numberStrings = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten'
	];
    let test = true;
</script>

<h1>{status}</h1>

<label>
	<input type="checkbox" bind:checked={showList} />
	show list
</label>

<input type="range" max="10" bind:value={i} />

{#if showList}
	{#each numberStrings.slice(0, i) as num}
		<div transition:slide|global>{num}</div>
	{/each}
{/if}


<label>
	<input type="checkbox" bind:checked={test} />
    test	
</label>


<div>
	<label>
		<input type="checkbox" bind:checked={visible} />
		visible
	</label>

	{#if visible}
		<!-- content here -->
		<p
			transition:typewriter={{ speed: 3 }}
			on:introstart={() => (status = 'intro started')}
			on:introend={() => (status = 'intro ended')}
			on:outrostart={() => (status = 'outro started')}
			on:outroend={() => (status = 'outro ended')}
		>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, iusto. Quis ratione a
			explicabo eos optio eaque reiciendis est reprehenderit distinctio labore laboriosam velit
			eligendi, eum nostrum ipsum, ex fuga?
		</p>
	{/if}
</div>

<!-- <h1> -->
<!-- 	Count: {$count} -->
<!-- </h1> -->
<!---->
<!-- <h1> -->
<!-- 	Count2: {$count2} -->
<!-- </h1> -->
<!---->
<!-- <div -->
<!-- 	style=" -->
<!--     background: red; -->
<!--     height: 50px; -->
<!--     width: 0.1vw; -->
<!--     transform: scaleX({$count2}); -->
<!--     transform-origin: left center; -->
<!-- " -->
<!-- ></div> -->
<!---->
<!-- <button -->
<!-- 	on:click={() => { -->
<!-- 		$count -= 10; -->
<!-- 		$count2 -= 20; -->
<!-- 	}} -->
<!-- > -->
<!-- 	-- -->
<!-- </button> -->
<!---->
<!-- <button -->
<!-- 	on:click={() => { -->
<!-- 		$count += 10; -->
<!-- 		$count2 += 20; -->
<!-- 	}} -->
<!-- > -->
<!-- 	++ -->
<!-- </button> -->
<!---->
<!-- <h1> -->
<!-- 	{$alpha} -->
<!-- </h1> -->
<!---->
<!-- <button on:click={() => ($alpha = 'a')}> 'a' </button> -->
<!---->
<!-- <button on:click={() => ($alpha = 'z')}> 'z' </button> -->

<!-- <div -->
<!-- 	style=" -->
<!--     background: blue; -->
<!--     height: {size}px; -->
<!--     width:  {size}px; -->
<!--     position: absolute; -->
<!--     top:   -{size/2}px; -->
<!--     left:  -{size/2}px; -->
<!--     transform: translate({$position.x}px, {$position.y}px); -->
<!--     " -->
<!-- > -->
<!-- 	{$position.x}, {$position.y} -->
<!-- </div> -->
