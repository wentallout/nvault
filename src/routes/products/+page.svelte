<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ProductCard from '$lib/components/product/ProductCard.svelte';

	let products = [
		{
			id: 1,
			productTitle: 'watermelon 007',
			productImg: '/images/nft-1.png',
			productLink: '/products/1'
		},
		{
			id: 2,
			productTitle: 'sneaker 003',
			productImg: '/images/nft-2.png',
			productLink: '/products/1'
		},
		{
			id: 3,
			productTitle: 'icecream 001',
			productImg: '/images/nft-3.png',
			productLink: '/products/1'
		}
	];
</script>

<PageTitle pageTitle="NFTs" />

<section class="products">
	{#each products as product}
		<ProductCard
			productTitle={product.productTitle}
			productImg={product.productImg}
			productLink={product.productLink} />
	{/each}
</section>

<style>
	.products {
		display: grid;
		grid-template-columns: 1fr;
	}
</style>
