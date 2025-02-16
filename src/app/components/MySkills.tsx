import Card from "../components/Card";
import { imagesStack } from "../utils/imagesCaroussel";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import React from "react";

function MySkills() {
	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);

	useEffect(() => {
		const finalPosition = -width / 2 - 16;

		const controls = animate(xTranslation, [0, finalPosition], {
			ease: "linear",
			duration: 30,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		return controls.stop;
	}, [xTranslation, width]);

	return (
		<div className="relative mt-20 items-center py-8">
			<h2 className="text-5xl font-[Tackerlen] mb-14 mx-80">Mes compétences</h2>
			<motion.div
				className="absolute left-0 flex gap-16"
				ref={ref}
				style={{ x: xTranslation, willChange: "transform" }}
			>
				{[...imagesStack, ...imagesStack].map((item, idx) => (
					<Card image={item.path} key={idx} title={item.name} />
				))}
			</motion.div>
		</div>
	);
}

export default MySkills;
