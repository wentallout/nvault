<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle pageTitle="About" />

<section class="about">
	<section>
		<img class="about__img" src="/images/flower.avif" alt="" />

		<p>
			Portal users will soon be able to create their own NFT. This was confirmed by the founder of
			the CEO. A digital corporation is preparing new products.
		</p>
	</section>
	<section>
		<p>
			We have prepared a list of interesting proposals for tokens, virtual images based on the
			blockchain network. Artists no longer need to rely on galleries or auction houses to sell
			their art.
		</p>

		<button class="about__btn btn"> Check more </button>
	</section>
	<section>
		<h2>High value NFTs</h2>
		<img src="/images/abstract.avif" alt="" />

		<div>
			<h3>Digital artwork 3D with our collections</h3>
			<p>
				It is actually a collectible digital asset that has value as a form of cryptocurrency and as
				an art or culture form.
			</p>
		</div>
	</section>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media (min-width: 992px) {
		.about {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.about__img {
		max-height: 60dvh;
		object-fit: contain;
		width: 100%;
	}

	.about__btn {
		background-color: var(--primary-500);
		color: var(--background-50);
		width: 100%;
	}

	.about section {
		padding: var(--space-m) var(--space-m);
		border-right: var(--brand-border);
	}
</style>
