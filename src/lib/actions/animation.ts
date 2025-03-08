// src/lib/borderAnimation.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function borderAnimation(
	node: HTMLElement,
	{ duration = 1.5, ease = 'power2.out', start = 'top 90%' } = {}
) {
	const childElements = node.querySelectorAll('*');

	childElements.forEach((child) => {
		const border = getComputedStyle(child).getPropertyValue('--brand-border');
		if (border) {
			gsap.set(node, { '--border-progress': 0 });

			gsap.to(node, {
				'--border-progress': 1,
				duration,
				ease,
				scrollTrigger: {
					trigger: node,
					start,
					toggleActions: 'play none none none'
				},
				onUpdate: () => {
					node.style.borderImage = `linear-gradient(to right, var(--background-900) ${gsap.getProperty(node, '--border-progress') * 100}%, transparent 0%)`;
					node.style.borderImageSlice = '1';
				}
			});
		}
	});

	return {
		destroy() {
			const trigger = ScrollTrigger.getById(node.id);
			if (trigger) {
				trigger.kill();
			}
		}
	};
}

export function decodeAnimation(
	node: HTMLElement,
	{
		text = node.textContent,
		duration = 0.3,
		scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+=-'
	} = {}
) {
	if (!node || !text) {
		return;
	}

	let length = text.length;

	let scramble = gsap.timeline({ paused: true });

	scramble.to(node, {
		text: { value: text, delimiter: '', speed: 0.3 },
		duration,
		ease: 'none',
		onUpdate() {
			let decoded = '';
			for (let i = 0; i < length; i++) {
				if (text[i] === ' ') {
					decoded += ' ';
				} else {
					decoded +=
						Math.random() > this.progress() + 0.1
							? scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
							: text[i];
				}
			}
			node.innerText = decoded;
		}
	});

	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.create({
		trigger: node,
		start: 'top 60%',
		onEnter: () => {
			scramble.restart();
		},
		once: true // Reveal only once
	});

	return {
		destroy() {
			scramble.kill();
			const trigger = ScrollTrigger.getById(node.id);
			if (trigger) {
				trigger.kill();
			}
			node.style.width = ''; // Reset on destroy
		}
	};
}

export function revealAnimation(node: HTMLElement) {
	gsap.from(node, {
		opacity: 0,
		y: 50, // Moves up from 50px
		duration: 1,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: node,
			start: 'top 80%',
			toggleActions: 'play none none none'
		}
	});

	return {
		destroy() {
			ScrollTrigger.getById(node)?.kill();
		}
	};
}
