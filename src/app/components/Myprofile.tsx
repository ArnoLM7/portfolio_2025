import React from "react";
import Image from "next/image";

export default function Myprofile() {
	return (
		<div
			id="myprofile"
			className="heightContainer mt-20 mx-80 items-center flex"
		>
			<div className="absolute left-0 w-full">
				<Image
					alt="Arno_Lemoil"
					src="/assets/wave.svg"
					width={1900}
					height={20}
					className="wave"
				></Image>
			</div>
			<div className="relative">
				<h2 className="text-5xl font-[Tackerlen] mb-12">À propos de moi</h2>
				<p className="text-base font-[Questrial] pl-10">
					Je suis un développeur web passionné par la création de sites web et
					d&apos;applications web. J&apos;aime apprendre de nouvelles choses et
					rencontrer de nouvelles personnes. Je suis un développeur web
					passionné par la création de sites web et d&apos;applications web.
					J&apos;aime apprendre de nouvelles choses et rencontrer de nouvelles
					personnes. Je suis un développeur web passionné par la création de
					sites web et d&apos;applications web. J&apos;aime apprendre de
					nouvelles choses et rencontrer de nouvelles personnes. Je suis un
					développeur web passionné par la création de sites web et
					d&apos;applications web. J&apos;aime apprendre de nouvelles choses et
					rencontrer de nouvelles personnes.
				</p>
			</div>
		</div>
	);
}
