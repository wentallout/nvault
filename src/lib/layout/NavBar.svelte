<script>
	import Logo from '$lib/components/Logo.svelte';
	import { Menu, Xmark } from '$lib/icons';

	let menuVisible = false;

	import { borderAnimation } from '$lib/actions/animation';

	import { fade } from 'svelte/transition';
</script>

<header>
	<nav class="nav">
		<div use:borderAnimation class="nav__left">
			<a href="/" class="left__brand text-trim">
				<Logo width="24" height="24" />
				NVAULT
			</a>
		</div>
		<div use:borderAnimation class="nav__mid">Khoa Nguyen / NFT Shop ©2025</div>
		<div use:borderAnimation class="nav__right">
			<a class="nav__link" href="/">Home</a>
			<a class="nav__link" href="/products">Shop</a>
			<a class="nav__link" href="/about">About</a>
			<a class="nav__link" href="/contact">Contact</a>

			<button
				transition:fade={{ duration: 300 }}
				onclick={() => (menuVisible = !menuVisible)}
				class="nav__hamburger">
				{#if menuVisible}
					<Xmark />
				{:else}
					<Menu />
				{/if}
			</button>
		</div>
	</nav>
</header>

<div class="fullscreen-menu {menuVisible ? 'show' : 'hidden'}">
	<a onclick={() => (menuVisible = false)} class="nav__link--mobile" href="/">Home</a>
	<a onclick={() => (menuVisible = false)} class="nav__link--mobile" href="/products">Shop</a>
	<a onclick={() => (menuVisible = false)} class="nav__link--mobile" href="/about">About</a>
	<a onclick={() => (menuVisible = false)} class="nav__link--mobile" href="/contact">Contact</a>
</div>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 9999;
		isolation: isolate;
	}

	.nav {
		display: grid;
		grid-template-columns: 2fr 1fr;
		width: 100%;
		background-color: var(--background-50);
		height: 64px;
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
		padding-inline: var(--space-m);
		height: 100%;
		border-bottom: var(--brand-border);
	}

	.left__brand {
		font-size: var(--step-2);
		font-family: var(--font-fancy);

		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-s);
	}

	.left__info {
		text-align: right;
	}

	.nav__mid {
		border-right: var(--brand-border);
		border-bottom: var(--brand-border);

		padding-inline: var(--space-m);
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
		padding-inline: var(--space-m);

		border-bottom: var(--brand-border);
		height: 100%;
		display: flex;
		flex-direction: row;
		gap: var(--space-m);
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

	.fullscreen-menu {
		position: fixed;
		top: 64px;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: var(--primary-500);
		color: var(--black);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: end;
		z-index: 9999;
		transition: var(--transition-bounce);
		padding: var(--space-l) var(--space-m);
		text-transform: uppercase;
	}

	.fullscreen-menu.show {
		transform: translateX(0);
	}

	.fullscreen-menu.hidden {
		transform: translateX(100%);
	}

	.nav__link--mobile {
		display: block;
		font-size: var(--step-4);
		font-family: var(--font-fancy);
	}

	@media (min-width: 992px) {
		.fullscreen-menu {
			display: none;
		}
		.nav__link--mobile {
			display: none;
		}
		.nav__hamburger {
			display: none;
		}
	}

	.nav__hamburger {
		font-size: var(--step-2);
	}
</style>
