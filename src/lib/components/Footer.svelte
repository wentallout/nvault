<script>
	import Logo from './Logo.svelte';
</script>

<footer class="footer">
	<div class="footer__cta">
		<p class="cta__text text-trim">GET IN TOUCH!</p>

		<a class="cta__btn btn">Contact now</a>
	</div>

	<div class="footer__copyright">
		<div class="copyright__text">
			<p>Demonstration website for a beautiful NFT shop.</p>
			<p>Created by Khoa Nguyen</p>
			<p>wentallout ©2025 All rights reserved</p>
		</div>

		<div class="copyright__brand">
			<div class="brand__logo">
				<Logo />
			</div>

			<div class="">NVAULT</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		display: grid;
		grid-template-columns: 1fr;
		background-color: #000;
		color: white;
		padding: var(--space-xl) var(--space-m);
		gap: 24px;

		padding-top: var(--space-xl);
	}
	@media (min-width: 992px) {
		.footer {
			grid-template-columns: 2fr 1fr;
		}
	}

	.cta__text {
		font-size: var(--step-5);
		font-family: var(--font-fancy);
		margin-bottom: var(--space-m);
	}

	.cta__btn {
		border: 5px solid white;
	}

	.footer__copyright {
		display: grid;
		grid-template-rows: 1fr 1fr;
	}

	.copyright__text {
		text-align: right;
		border-bottom: 5px solid white;
	}

	.copyright__brand {
		font-size: 64px;
		font-family: var(--font-fancy);
		text-align: right;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-xs);
	}

	.brand__logo {
		height: 40px;
	}
</style>
