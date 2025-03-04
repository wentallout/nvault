<script>
	let { pageTitle, pageDesc = '' } = $props();
</script>

<div class="title">
	{#if pageTitle}
		<h1>{pageTitle}</h1>
	{/if}

	{#if pageDesc !== ''}
		<p>{pageDesc}</p>
	{/if}
</div>

<style>
	.title h1 {
		padding: var(--space-xs) var(--space-m);

		font-family: var(--font-fancy);
		font-size: var(--step-2);
		text-transform: uppercase;

		background-color: var(--background-50);
		color: var(--background-950);
	}

	.title p {
		padding: var(--space-xs) var(--space-m);
		background-color: var(--background-50);
		color: var(--background-950);
	}
</style>
