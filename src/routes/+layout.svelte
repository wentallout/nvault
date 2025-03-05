<script>
	import Footer from '$lib/layout/Footer.svelte';
	import NavBar from '$lib/layout/NavBar.svelte';
	import '@fontsource/russo-one';
	import '@fontsource-variable/sora';

	import '$lib/styles/global.css';
	let { children } = $props();

	import { setupViewTransition } from 'sveltekit-view-transition';

	setupViewTransition();
</script>

<NavBar />
<main class="">
	{@render children?.()}
</main>

<Footer />

<style>
	main {
		/* min-height: 100dvh; */
	}
</style>
