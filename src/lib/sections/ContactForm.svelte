<section>
	<form class="contact">
		<div class="contact__row">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" placeholder="John Doe" />
		</div>
		<div class="contact__row">
			<label for="email">Email</label>
			<input required type="email" id="email" name="email" placeholder="johndoe@company.com" />
			<label for="phone">Phone</label>
			<input type="tel" id="phone" name="phone" placeholder="123-456-789" />
		</div>
		<div class="contact__row">
			<label for="message">Message</label>
			<textarea required id="message" name="message" placeholder="Hello, what's up?"></textarea>
		</div>

		<button class="contact__btn btn">Send Message</button>
	</form>
</section>

<style>
	.contact {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.contact .contact__row:first-child {
		border-top: var(--brand-border)
	}

	.contact__row {
		display: grid;
		grid-template-columns: 200px 2fr;
	}

	.contact__row label {
		padding: var(--space-s);
		border-bottom: var(--brand-border);
		border-left: var(--brand-border);
		font-family: var(--font-fancy);
		font-size: var(--step-2);
		text-align: right;
		border-right: var(--brand-border);
	}

	.contact__row input,
	.contact__row textarea {
		padding: var(--space-s);
		border-bottom: var(--brand-border);
		border-right: var(--brand-border);
	}

	input,
	textarea {
		flex: 1;
		border: none;
		outline: none;
	}
	textarea {
		resize: none;
		min-height: 200px;
	}

	.contact__btn {
		text-align: left;
		justify-content: flex-start;
		background-color: var(--primary-500);
		color: var(--background-100);
		margin-top: var(--space-l);
	}
</style>
