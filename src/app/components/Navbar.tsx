import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<div
			onClick={toggleMenu}
			className="fixed z-20 bg-black opacity-80 py-4 px-5 rounded-full right-10 top-8 flex items-center justify-center cursor-pointer"
		>
			{isMenuOpen && (
				<div className="gap-8 flex pr-8 pl-2">
					<p className="font-[Tackerlen] text-2xl">Qui suis-je</p>
					<p className="font-[Tackerlen] text-2xl">Mes compétences</p>
					<p className="font-[Tackerlen] text-2xl">Mes projets</p>
					<p className="font-[Tackerlen] text-2xl">Veille technologique</p>
				</div>
			)}
			<Image src="/assets/logo.svg" alt="logoArno" width={45} height={45} />
		</div>
	);
}
