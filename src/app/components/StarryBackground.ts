import { useEffect } from "react";
import gsap from "gsap";

export default function StarryBackground() {
	useEffect(() => {
		const stars: HTMLElement[] = []; // Déclaration du tableau des étoiles

		for (let i = 0; i < 800; i++) {
			const star = document.createElement("div");
			star.classList.add("star");
			star.style.zIndex = "-1";
			star.style.position = "absolute";
			star.style.width = `${Math.random() * 2 + 1}px`;
			star.style.height = star.style.width;
			star.style.backgroundColor = "white";
			star.style.borderRadius = "50%";
			star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
			star.style.top = `${Math.random() * 400}vh`;
			star.style.left = `${Math.random() * 100}vw`;
			document.body.appendChild(star);
			stars.push(star);
		}

		// Gestion du mouvement de la souris
		window.addEventListener("mousemove", (event) => {
			const mouseX = event.clientX;
			const mouseY = event.clientY;
			const repelDistance = 150;

			stars.forEach((star) => {
				const starRect = star.getBoundingClientRect();
				const starX = starRect.left + starRect.width / 2;
				const starY = starRect.top + starRect.height / 2;

				const dx = starX - mouseX;
				const dy = starY - mouseY;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < repelDistance) {
					const angle = Math.atan2(dy, dx);
					const moveDistance = (repelDistance - distance) * 0.5;

					gsap.to(star, {
						x: Math.cos(angle) * moveDistance,
						y: Math.sin(angle) * moveDistance,
						duration: 0.5,
						ease: "power2.out",
						onComplete: () => {
							gsap.to(star, {
								x: 0,
								y: 0,
								duration: 1,
								ease: "power3.inOut",
							});
						},
					});
				}
			});
			return () => {
				window.removeEventListener("mousemove", () => {});
			};
		});
	}, []);

	return null;
}
