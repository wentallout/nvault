<script>
	import Badge from '$lib/components/Badge.svelte';
</script>

<div class="popular">
	<div class="popular__title">
		<h3>Most Popular</h3>
		<p>05 / 2022</p>
	</div>

	<a class="popular__item" href="">
		<Badge badgeText="TOP" />
		<img src="/images/nft-popular.avif" alt="" />
	</a>

	<div class="popular__info">
		<h3>Interesting places in the collections and create crypto.</h3>
		<p>We have prepared a list of the most interesting virtual tokens saved on the Internet.</p>
	</div>

	<div class="popular__price">
		<p class="price__title">Current price</p>
		<div class="price__number">18.1 ETH</div>
	</div>
</div>

<style>
	.popular {
		padding: var(--space-l) var(--space-m);

		& h3 {
			font-family: var(--font-fancy);
			font-size: var(--step-2);
		}
	}

	.popular__title {
		place-self: end;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.popular__price {
		display: grid;
		grid-template-columns: 2fr auto;

		& .price__number {
			font-family: var(--font-fancy);
			font-size: var(--step-4);
		}

		& .price__title {
			place-items: end;
			max-width: 300px;
		}
	}

	.popular__info {
		display: grid;
		grid-template-columns: 2fr 1fr;

		h3 {
			font-size: var(--step-1);
			max-width: 300px;
		}

		border-bottom: 5px solid #000;
	}

	.popular__item {
		display: flex;
		margin-bottom: var(--space-m);
		position: relative;
	}

	.popular__item img {
		object-fit: cover;
		width: 100%;
		height: 480px;
		max-height: 500px;
		border-radius: 0 0 10% 0;
	}
</style>
