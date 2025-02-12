"use client";

import Image from "next/image";
import StarryBackground from "./components/StarryBackground";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex justify-center gap-32 items-center mt-20">
				<div className="text-right">
					<h1 className="font-[Tackerlen] text-9xl">Arno Lemoil</h1>
					<h3 className="font-[Tackerlen] text-4xl justify-end">
						Développeur Web
					</h3>
				</div>
				<span className="flex justify-center items-center bg-yellow-100 rounded-full p-1 shadowLight">
					<Image
						alt="Arno_Lemoil"
						src="/assets/young-bearded.png"
						width={260}
						height={260}
						className="object-cover rounded-full"
					></Image>
				</span>
			</div>
			<div className="whoami mt-20 mx-64 items-center flex">
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
					<h2 className="text-5xl font-[Tackerlen] mb-10">À propos de moi</h2>
					<p className="text-base font-[Questrial] pl-10">
						Je suis un développeur web passionné par la création de sites web et
						d&apos;applications web. J&apos;aime apprendre de nouvelles choses
						et rencontrer de nouvelles personnes. Je suis un développeur web
						passionné par la création de sites web et d&apos;applications web.
						J&apos;aime apprendre de nouvelles choses et rencontrer de nouvelles
						personnes. e suis un développeur web passionné par la création de
						sites web et d&apos;applications web. J&apos;aime apprendre de
						nouvelles choses et rencontrer de nouvelles personnes. Je suis un
						développeur web passionné par la création de sites web et
						d&apos;applications web. J&apos;aime apprendre de nouvelles choses
						et rencontrer de nouvelles personnes.
					</p>
				</div>
			</div>

			<StarryBackground />
		</div>
	);
}
