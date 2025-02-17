import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<motion.div
			animate={{
				scale: isMenuOpen ? 0.95 : 1,
				backgroundColor: isMenuOpen ? "#000000" : "rgba(0, 0, 0, 0)",
			}}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="fixed z-20 bg-black opacity-80 rounded-full right-10 top-8 flex items-center justify-center"
		>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="gap-14 flex px-8"
					>
						<a href="#myprofile" className="font-[Tackerlen] text-2xl">
							Qui suis-je
						</a>
						<a href="#myskills" className="font-[Tackerlen] text-2xl">
							Mes compétences
						</a>
						<a href="#myprojects" className="font-[Tackerlen] text-2xl">
							Mes projets
						</a>
						<a href="#schooling" className="font-[Tackerlen] text-2xl">
							Formations
						</a>
						<a href="#newTechno" className="font-[Tackerlen] text-2xl">
							Veille technologique
						</a>
					</motion.div>
				)}
			</AnimatePresence>

			<motion.div
				animate={{ rotate: isMenuOpen ? -90 : 0, scale: isMenuOpen ? 0.8 : 1 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<Image
					onClick={toggleMenu}
					src="/assets/logo.svg"
					alt="logoArno"
					width={85}
					height={85}
					className="py-4 px-5 cursor-pointer"
				/>
			</motion.div>
		</motion.div>
	);
}
