import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
				/>
			</div>
			<div className="relative">
				<motion.h2
					initial={{ x: -200, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-5xl font-[Tackerlen] mb-12"
				>
					À propos de moi
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.7 }}
					className="text-base font-[Questrial] pl-10"
				>
					Hello ! Je m&apos;appelle Arno et j&apos;ai 22 ans. J&apos;ai appris
					le développement web au cours des 3 ans que j&apos;ai passé en BUT
					&quot;Métiers du Multimédia et de l&apos;Internet&quot;. Cette
					formation m&apos;a permis de développer des compétences dans
					d&apos;autres domaines, tels que le UX/UI, le design graphique,
					l&apos;animation, la modélisation 3D ou encore le tournage et montage
					vidéo. Cela m&apos;a permis de développer un esprit créatif, que
					j&apos;exploite pour créer des sites web modernes et ergonomiques.
					J&apos;ai également appris à travailler en équipe, à utiliser la
					méthode Agile, à respecter des délais et surtout à devenir autonome.
					Je me suis spécialisé dans le front-end, car c&apos;est la partie du
					développement web qui me plaît le plus et dans lequel j&apos;ai le
					plus de facilités. Je m&apos;intéresse particulièrement à ReactJS,
					technologie auquel j&apos;ai tout de suite accroché par sa simplicité
					et sa façon de gérer les données.
				</motion.p>
				<div className="flex gap-5 mt-8 pl-10 items-center">
					<p className="text-lg font-[Questrial]">Télécharger mon CV :</p>
					<a href="/assets/cvArno.pdf" download>
						<motion.img
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.3 }}
							src="/assets/download.svg"
							alt="downloadCV"
							width={40}
							height={40}
							className="bg-yellow-100 rounded-full p-2 shadowLight"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
