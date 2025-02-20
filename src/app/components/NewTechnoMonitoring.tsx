import React from "react";
import Image from "next/image";

export default function NewTechnoMonitoring() {
	return (
		<div
			id="newTechno"
			className="heightContainer mt-48 mx-80 items-center flex"
		>
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
							src="/assets/daily-dev.svg"
							alt="DailyDev"
							width={60}
							height={60}
						></Image>
					</div>
					<p className="text-base font-[Questrial] pl-4">
						J&apos;ai décidé d&apos;installer l&apos;extension Daily dev sur mon
						navigateur, car il permet de découvrir de nouvelles technologies et
						de nouveaux articles chaque jour. Cela me permet de rester à jour
						sur les dernières technologies et de découvrir de nouvelles choses.
						J&apos;ai tout de suite aimé la diversité des sujets abordés des
						articles proposés.
					</p>
				</div>
				<div className="flex gap-2 pl-10 mb-10">
					<div className="flex flex-col items-center text-center">
						<h3 className="w-32 font-[Tackerlen] text-4xl mb-2">React</h3>
						<Image
							src="/assets/react.svg"
							alt="ReactImage"
							width={60}
							height={60}
						></Image>
					</div>
					<p className="text-base font-[Questrial] pl-4">
						En tant que développeur se spécialisant dans le front-end, j&apos;ai
						décidé de m&apos;intéresser plus spécifiquement à ReactJS, et pour
						cela je m&apos;informe des nouveaux changement de la technlogie via
						la ferme du web, stack overflow et bien évidemment via la
						documentation officielle.
					</p>
				</div>
			</div>
		</div>
	);
}
