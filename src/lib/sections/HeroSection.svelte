<script>
	import HeroPopularToken from './HeroPopularToken.svelte';
</script>

<section class="hero">
	<div class="hero__cta">
		<div class="cta__title">CRYPTO <br /> TOKEN</div>
		<p class="cta__desc">
			A unique digital token that creates a tangible and intangible asset that acts as collector's
			cards, virtual real estate and design works.
		</p>

		<button class="cta__btn btn">Check more</button>

		<div class="cta__img">
			<img class="" src="/images/nft-1.avif" alt="" />

			<p>
				Portal users will soon be able to create their own NFT. This was confirmed by the founder of
				the CEO. A digital corporation is preparing new products.
			</p>
		</div>
	</div>

	<HeroPopularToken />
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media (min-width: 992px) {
		.hero {
			grid-template-columns: 2fr 1fr;
		}
	}

	.hero__cta {
		display: grid;

		grid-template-areas:
			'cta__title'
			'cta__desc'
			'cta__btn'
			'cta__img';

		padding: var(--space-l) var(--space-m);
	}

	@media (min-width: 992px) {
		.hero__cta {
			border-right: var(--brand-border);
			grid-template-areas:
				'cta__title cta__desc'
				'cta__btn cta__btn'
				'cta__img cta__img';
		}
	}

	.cta__title {
		grid-area: cta__title;
		margin-bottom: var(--space-2xl);
		font-size: var(--step-5);
		font-family: var(--font-fancy);
		line-height: var(--leading-none);
	}

	.cta__desc {
		grid-area: cta__desc;
		text-align: right;

		width: 100%;
		max-width: 30ch;
		place-self: flex-end;
		align-self: baseline;
		display: flex;
		text-wrap: pretty;
	}

	.cta__img {
		grid-area: cta__img;

		& img {
			width: 100%;
			height: 460px;
			object-fit: cover;
			margin-bottom: var(--space-l);
		}

		& p {
			max-width: 60ch;
		}
	}

	.cta__btn {
		grid-area: cta__btn;
		background-color: var(--primary-500);
		color: var(--background-50);

		margin-bottom: var(--space-2xl);
	}
</style>
