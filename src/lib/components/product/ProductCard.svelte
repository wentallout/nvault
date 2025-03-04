<script>
	let {
		productLink = '/products/1',
		productTitle = 'Shape',
		productImg = '/images/product-1.avif',
		productPrice = 100,
		currency = 'ETH'
	} = $props();
</script>

<a href={productLink}>
	<article class="product">
		<div class="product__thumbnail">
			<img src={productImg} alt="image of {productTitle}" />
		</div>

		<div class="product__info">
			<h3>{productTitle}</h3>
			<p class="info__price">{productPrice} {currency}</p>
		</div>
	</article>
</a>

<style>
	.product {
		border-bottom: var(--brand-border);
		border-right: var(--brand-border);
		display: grid;
		grid-template-rows: subgrid;
		grid-template-columns: 1fr 1fr;
		overflow: hidden;
		transition: var(--transition-bounce);
	}

	.product:hover {
		background-color: var(--primary-500);

		& img {
			transform: scale(1.2);
		}
	}

	@media (min-width: 992px) {
		.product {
			grid-template-columns: minmax(150px, 1fr) 1fr 1fr;
		}
	}

	.product__thumbnail {
		border-right: var(--brand-border);

		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 240px;

		& img {
			display: block;
			object-fit: cover;
			transition: var(--transition-bounce);
			overflow: visible;
		}
	}

	.product__info {
		font-family: var(--font-fancy);
		font-size: var(--step-2);
		text-transform: uppercase;

		/* FLEX */
		display: flex;

		flex-direction: column;
		/* --- */

		padding: var(--space-s) var(--space-m);
		height: 100%;
		width: 100%;

		line-height: var(--leading-normal);

		& h3 {
			word-break: break-all;
		}
	}

	@media (min-width: 992px) {
		.product__info {
			font-size: var(--step-3);
			padding: var(--space-l) var(--space-xl);
		}
	}

	.info__price {
		font-size: var(--step-1);
		font-family: var(--font-normal);
	}
</style>
