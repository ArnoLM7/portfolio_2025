// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function WaveEffect() {
// 	const waveRef = useRef<SVGPathElement>(null);

// 	useEffect(() => {
// 		if (!waveRef.current) return;

// 		// Animation fluide des vagues
// 		gsap.to(waveRef.current, {
// 			duration: 4,
// 			repeat: -1,
// 			yoyo: true,
// 			ease: "power1.inOut",
// 			attr: {
// 				d: `
//           M0 80
//           C150 ${Math.random() * 50 + 100} 300 ${
// 					Math.random() * 50 + 50
// 				} 600 80
//           V300
//           C450 ${Math.random() * 50 + 250} 300 300 0 300
//           Z`,
// 			},
// 		});
// 	}, []);

// 	return (
// 		<div className="relative w-full h-64">
// 			<svg
// 				viewBox="0 0 600 300"
// 				xmlns="http://www.w3.org/2000/svg"
// 				className="absolute top-0 left-0 w-full h-full"
// 				preserveAspectRatio="none"
// 			>
// 				<path
// 					className="from-indigo-800 to-purple-800"
// 					ref={waveRef}
// 					fill="rgba(255, 255, 255, 0.1)"
// 					d="M0 80 C150 130 300 50 600 80 V300 C450 280 300 300 0 300 Z"
// 				/>
// 			</svg>
// 		</div>
// 	);
// }
