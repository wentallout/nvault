<script>
	let {
		productLink = '/',
		productTitle = 'Shape',
		productImg = '/images/product-1.avif',
		productPrice = 100,
		currency = 'ETH'
	} = $props();
</script>

<a href={productLink} class="product">
	<div class="product__thumbnail">
		<img src={productImg} alt="image of {productTitle}" />
	</div>

	<div class="product__info">
		<h3>{productTitle}</h3>
		<p class="info__price">{productPrice} {currency}</p>
	</div>
</a>

<style>
	.product {
		border-bottom: var(--brand-border);
		border-right: var(--brand-border);
		display: grid;
		grid-template-rows: subgrid;
		grid-template-columns: 1fr 1fr;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
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
			transition: 0.3s all ease-in-out;
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
			padding: var(--space-m) var(--space-l);
		}
	}

	.info__price {
		font-size: var(--step-1);
		font-family: var(--font-normal);
		
	}
</style>
