<script>
	import { borderAnimation, decodeAnimation, revealAnimation } from '$lib/actions/animation';
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle pageTitle="About" />

<section class="about" use:borderAnimation>
	<section use:revealAnimation>
		<img class="about__img" src="/images/about-1.png" alt="" />
		<h2 use:decodeAnimation class="about__heading">Who We Are</h2>
		revealAnimation
		<p class="prose">
			NVAULT is where digital art meets opportunity. We empower creators and collectors to trade
			NFTs in a secure, dynamic space.revealAnimation
		</p>
	</section>

	<section use:revealAnimation>
		<img class="about__img" src="/images/about-2.jpeg" alt="" />
		<h2 use:decodeAnimation class="about__heading">What We Do</h2>

		<p class="prose">
			Buy, sell, and trade NFTs easily with: Exclusive drops Real-time auctions Simple minting tools
			Secure blockchain transactions
		</p>
	</section>
	<section use:revealAnimation>
		<img class="about__img" src="/images/about-3.jpeg" alt="" />

		<h2 use:decodeAnimation class="about__heading">Why Choose Us</h2>

		<p class="prose">
			Verified Creators: Authentic, high-quality art User-Friendly Design: Easy for anyone to use
			Future-Ready Tech: Always innovating Join Nvault — shaping the future of digital ownership.
		</p>
	</section>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr;
		border-bottom: var(--brand-border);

		& .about__heading {
			font-family: var(--font-fancy);
			font-size: var(--step-3);
			line-height: var(--leading-none);
			align-self: center;
		}
	}

	@media (min-width: 992px) {
		.about {
			grid-template-columns: 1fr 1fr 1fr;
		}

		.about section {
			display: grid;
			grid-template-columns: subgrid;
			grid-template-rows: auto 1fr 1fr;
			align-items: start;
		}
	}

	.about section p {
		display: block;
	}

	.about__img {
		max-height: 30dvh;
		object-fit: cover;
		width: 100%;
		margin-bottom: var(--space-s);

		filter: grayscale(1);

		@mixin stylish-radius;
	}

	.about section {
		padding: var(--space-m) var(--space-m);
		border-right: var(--brand-border);
	}
</style>
