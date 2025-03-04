<header>
	<nav class="nav">
		<div class="nav__left">
			<a href="/" class="left__brand">NVAULT</a>
		</div>
		<div class="nav__mid">Khoa Nguyen / NFT Shop ©2025</div>
		<div class="nav__right">
			<a class="nav__link" href="/shop">Shop</a>
			<a class="nav__link" href="/about">About</a>
			<a class="nav__link" href="/contact">Contact</a>
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 2;
	}

	.nav {
		display: grid;
		grid-template-columns: 2fr 1fr;
		width: 100%;
	}

	@media (min-width: 992px) {
		.nav {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.nav__left {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-right: var(--brand-border);
		padding: var(--space-m) var(--space-m);
		background-color: white;
		height: 100%;
		border-bottom: var(--brand-border);
	}

	.left__brand {
		font-size: var(--step-2);
		font-family: var(--font-fancy);

		background-color: white;
		height: 100%;
	}

	.left__info {
		text-align: right;
	}

	.nav__mid {
		border-right: var(--brand-border);
		border-bottom: 5px solid #000;
		background-color: white;
		padding: var(--space-m) var(--space-m);
		height: 100%;
		display: none;
	}

	@media (min-width: 992px) {
		.nav__mid {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: end;
		}
	}

	.nav__right {
		padding: var(--space-m) var(--space-m);
		background-color: white;
		border-bottom: 5px solid #000;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: end;
	}

	@media (min-width: 992px) {
		.nav__right {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.nav__link {
		display: none;
		text-align: right;
	}

	@media (min-width: 992px) {
		.nav__link {
			display: block;
		}
	}
</style>
