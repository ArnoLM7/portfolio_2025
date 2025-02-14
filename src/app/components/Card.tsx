import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface CardProps {
	image: string;
	title?: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
	return (
		<motion.div className="relative h-[80px] min-w-[80px] rounded-xl justify-center items-center">
			<Image src={image} alt={image} fill loading="lazy" />
			<h4 className="flex justify-center text-3xl font-[Tackerlen] mt-24">
				{title}
			</h4>
		</motion.div>
	);
};

export default Card;
