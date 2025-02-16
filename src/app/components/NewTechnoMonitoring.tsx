import React from "react";
import Image from "next/image";

export default function NewTechnoMonitoring() {
	return (
		<div className="heightContainer mt-64 mx-80 items-center flex">
			<div className="absolute left-0 w-full">
				<Image
					alt="Arno_Lemoil"
					src="/assets/wave3.svg"
					width={1900}
					height={150}
					className="wave3"
				></Image>
			</div>
			<div className="relative mt-12">
				<h2 className="text-5xl font-[Tackerlen] mb-12">
					Veille technologique
				</h2>
				<div className="flex gap-2 pl-10 mb-10">
					<div className="flex flex-col items-center text-center">
						<h3 className="w-32 font-[Tackerlen] text-4xl mb-2">Daily dev</h3>
						<Image
							src="/assets/react.svg"
							alt="ReactImage"
							width={60}
							height={60}
						></Image>
					</div>
					<p className="text-base font-[Questrial] pl-4">
						Je suis un développeur web passionné par la création de sites web et
						d&apos;applications web. J&apos;aime apprendre de nouvelles choses
						et rencontrer de nouvelles personnes. Je suis un développeur web
						passionné par la création de sites web et d&apos;applications web.
						J&apos;aime apprendre de nouvelles choses et rencontrer de nouvelles
						personnes.
					</p>
				</div>
				<div className="flex gap-2 pl-10 mb-10">
					<div className="flex flex-col items-center text-center">
						<h3 className="w-32 font-[Tackerlen] text-4xl mb-2">Daily dev</h3>
						<Image
							src="/assets/react.svg"
							alt="ReactImage"
							width={60}
							height={60}
						></Image>
					</div>
					<p className="text-base font-[Questrial] pl-4">
						Je suis un développeur web passionné par la création de sites web et
						d&apos;applications web. J&apos;aime apprendre de nouvelles choses
						et rencontrer de nouvelles personnes. Je suis un développeur web
						passionné par la création de sites web et d&apos;applications web.
						J&apos;aime apprendre de nouvelles choses et rencontrer de nouvelles
						personnes.
					</p>
				</div>
				<div className="flex gap-2 pl-10 mb-10">
					<div className="flex flex-col items-center text-center">
						<h3 className="w-32 font-[Tackerlen] text-4xl mb-2">Daily dev</h3>
						<Image
							src="/assets/react.svg"
							alt="ReactImage"
							width={60}
							height={60}
						></Image>
					</div>
					<p className="text-base font-[Questrial] pl-4">
						Je suis un développeur web passionné par la création de sites web et
						d&apos;applications web. J&apos;aime apprendre de nouvelles choses
						et rencontrer de nouvelles personnes. Je suis un développeur web
						passionné par la création de sites web et d&apos;applications web.
						J&apos;aime apprendre de nouvelles choses et rencontrer de nouvelles
						personnes.
					</p>
				</div>
			</div>
		</div>
	);
}
