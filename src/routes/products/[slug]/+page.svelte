<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ProductDetailTable from '$lib/components/product/ProductDetailTable.svelte';
</script>

<PageTitle pageTitle="NFT information" />

<a href="">Back to list</a>

<section class="detail">
	<img class="detail__img" src="/images/nft-3.png" alt="" />

	<div class="detail__info">
		<div class="detail__head">
			<h1 class="detail__title">Ice cream</h1>
			<div class="detail__price">6.9 ETH</div>
		</div>
		<p class="detail__desc">
			Digital records that represent a given value and that can only be bought and sold on the
			cryptocurrency blockchain.
		</p>

		<button class="detail__btn btn">Buy token</button>

		<ProductDetailTable />
	</div>
</section>

<style>
	.detail {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media (min-width: 992px) {
		.detail {
			grid-template-columns: 1fr 2fr;
		}
	}

	.detail__info {
		padding: var(--space-m);
	}

	.detail__img {
		display: block;
		width: 100%;
		height: auto;
	}

	.detail__title {
		font-family: var(--font-fancy);
		font-size: var(--step-5);
		text-transform: uppercase;
	}

	.detail__head {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.detail__price {
		font-variant-numeric: tabular-nums;
		font-family: var(--font-fancy);
		font-size: var(--step-4);
	}

	.detail__desc {
		max-width: 65ch;
	}

	.detail__btn {
		background-color: var(--primary-500);
		width: 100%;
	}
</style>
