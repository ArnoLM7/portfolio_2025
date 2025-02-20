import React from "react";

export default function Schooling() {
	return (
		<div
			id="schooling"
			className="heightContainer mt-64 mx-80 items-center flex"
		>
			<div className="relative">
				<h2 className="text-5xl font-[Tackerlen] mb-12">Formations</h2>
				<div className="flex gap-2 pl-10 mb-10">
					<span className="bg-yellow-100 shadowLight2 spanSchooling"></span>
					<div>
						<div className="flex gap-2 items-end">
							<h3 className="font-[Tackerlen] pl-6 text-4xl">
								Lycée Gerard de Nerval
							</h3>
							<h4 className="font-[Tackerlen] text-3xl">(2018 - 2021)</h4>
						</div>

						<p className="font-[Tackerlen] text-lg pl-6 mb-2">
							Specialités : mathématiques, physique-chimie
						</p>
						<p className="text-base font-[Questrial] pl-6">
							J&apos;ai obtenu mon baccalauréat scientifique avec mention assez
							bien. J&apos;ai choisi la spécialité mathématiques et
							physique-chimie car ce sont des matières qui me plaisaient, mais
							je regrette de ne pas avoir pu choisir la spécialité numérique et
							sciences informatique qui n&apos;était malheureusement pas
							disponible dans mon lycée.
						</p>
					</div>
				</div>
				<div className="flex gap-2 pl-10 mb-10">
					<span className="bg-yellow-100 shadowLight2 spanSchooling"></span>
					<div>
						<div className="flex gap-2 items-end">
							<h3 className="font-[Tackerlen] pl-6 text-4xl">
								Prépa informatique
							</h3>
							<h4 className="font-[Tackerlen] text-3xl">(2021 - 2022)</h4>
						</div>
						<p className="font-[Tackerlen] text-lg pl-6 mb-2">
							GEIPI POLYTECH À VILLETANEUSE
						</p>
						<p className="text-base font-[Questrial] pl-6">
							Après mon bac, j&apos;ai décidé de faire une année de prépa
							informatique pour intégrer une école d&apos;ingénieur, mais mon
							besoin de faire du concret et de la pratique m&apos;a poussé à me
							réorienter vers un BUT MMI.
						</p>
					</div>
				</div>
				<div className="flex gap-2 pl-10">
					<span className="bg-yellow-100 shadowLight2 spanSchooling"></span>
					<div className="flex flex-col justify-between">
						<div className="flex gap-2 items-end">
							<h3 className="font-[Tackerlen] pl-6 text-4xl">
								BUT Métiers du multimédia et de l’internet
							</h3>
							<h4 className="font-[Tackerlen] text-3xl">(2022 - 2025)</h4>
						</div>

						<p className="font-[Tackerlen] text-lg pl-6 mb-2">
							Spécialités développement web et dispositifs interactifs
						</p>
						<p className="text-base font-[Questrial] pl-6">
							La formation MMI m&apos;a tout de suite plu, grâce à son aspect
							concret, sa pluralité de matières et son aspect créatif. En 2ème
							année, je me suis spécialisé dans le développement web, et
							j&apos;ai particulièrement apprécié travailler en groupe sur des
							projets de sites ou applications web, ainsi que d&apos;apprendre
							de nouvelles technolgoies comme ReactJS.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
