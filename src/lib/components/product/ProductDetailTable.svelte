<script>
	import { revealAnimation } from '$lib/actions/animation';
</script>

<section class="table" use:revealAnimation>
	<div class="table__label">Author</div>
	<div class="">Adrian Gonsales</div>

	<div class="table__label">Features</div>
	<div class="">cream</div>

	<div class="table__label">Edition number</div>
	<div class="">3/100</div>

	<div class="table__label">Rarity</div>
	<div class="">Super rare</div>
</section>

<style>
	.table {
		display: grid;
		grid-template-columns: 1fr;
		color: var(--text-900);

		border-top: var(--brand-border);
		border-left: var(--brand-border);
	}

	@media (min-width: 992px) {
		.table {
			grid-template-columns: auto 1fr;
		}
	}

	.table > div {
		border-bottom: var(--brand-border);
		border-right: var(--brand-border);
		padding: var(--space-s) var(--space-m);
		display: flex;
		align-items: center;
	}

	.table__label {
		font-family: var(--font-fancy);
		font-size: var(--step-2);
		color: var(--text-900);
	}
</style>
