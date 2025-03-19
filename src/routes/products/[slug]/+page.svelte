<script lang="ts">
	import { ArrowLeft } from '$lib/icons';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ProductDetailTable from '$lib/components/product/ProductDetailTable.svelte';
	import { decodeAnimation } from '$lib/actions/animation';
	import type { Product } from '$lib/api/products';

	let { data } = $props();
	let product = $derived(data.product as Product);
</script>

{#if product}
	<PageTitle pageTitle="NFT information" />

	<a class="back" href="/products">
		<ArrowLeft />
		<p>Back to list</p>
	</a>

	<section class="detail">
		<div class="detail__thumbnail dot-pattern">
			<img class="detail__img" src={product.productImg} alt={product.productTitle} />
		</div>
		<div class="detail__info">
			<div class="detail__head">
				<h1 use:decodeAnimation class="detail__title">{product.productTitle}</h1>
				<div class="detail__price">
					<span class="numeric">{product.productPrice}</span> {product.currency}
				</div>
			</div>
			<p class="detail__desc prose">
				{product.description}
			</p>

			<button class="detail__btn btn">Buy token</button>

			<ProductDetailTable 
				author={product.author}
				features={product.features}
				editionNumber={product.editionNumber}
				rarity={product.rarity}
			/>
		</div>
	</section>
{:else}
	<div class="loading">Loading...</div>
{/if}

<style>
	.detail__thumbnail {
		height: 100%;
		display: grid;
		place-items: center;
	}

	.back {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: flex-start;
		border-bottom: var(--brand-border);
		padding: var(--space-m) var(--space-s);
		gap: var(--space-s);
	}

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
		height: 100%;
		object-fit: cover;
	}

	.detail__title {
		font-family: var(--font-fancy);
		font-size: var(--step-5);
		text-transform: uppercase;
	}

	.detail__head {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-between;
	}

	.detail__price {
		font-variant-numeric: tabular-nums;
		font-family: var(--font-fancy);
		font-size: var(--step-4);
	}

	.detail__desc {
		max-width: 65ch;
		margin-bottom: var(--space-m);
	}

	.detail__btn {
		background-color: var(--primary-500);
		width: 100%;
		margin-bottom: var(--space-xl);
	}
</style>
