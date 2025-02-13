import React from "react";
import Image from "next/image";

export default function MyProject() {
	// const projects = [
	// 	{
	// 		name: "Webdocumentaire sur Octobre Rose",
	// 		date: "Octobre 2023",
	// 		img: "/assets/ruban.svg",
	// 	},
	// 	{
	// 		name: "AeroClub de Frotey-Les-Lures",
	// 		date: "Février 2024",
	// 		img: "/assets/ruban.svg",
	// 	},
	// 	{
	// 		name: "Commande de sushi",
	// 		date: "Mars 2024",
	// 		img: "/assets/ruban.svg",
	// 	},
	// 	{
	// 		name: "Eye-care",
	// 		date: "2024-2025",
	// 		img: "/assets/ruban.svg",
	// 	},
	// ];

	return (
		<div className="heightContainer mt-80 mx-64 items-center flex">
			<div className="absolute left-0 w-full">
				<Image
					alt="Arno_Lemoil"
					src="/assets/wave.svg"
					width={1900}
					height={20}
					className="wave2"
				></Image>
			</div>
			<div className="relative">
				<h2 className="text-5xl font-[Tackerlen]">Mes projets</h2>
				<div className="flex gap-16 mt-16">
					<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 mt-36 rounded-full p-2 shadowLight">
						<h2 className="font-[Questrial] text-center text-xl text-blue-950">
							Webdocumentaire sur Octobre Rose
						</h2>
					</div>
					<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 rounded-full p-2 shadowLight">
						<h2 className="font-[Questrial] text-center text-xl text-blue-950">
							AeroClub de Frotey-Les-Lures
						</h2>
					</div>
					<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 mt-36 rounded-full p-2 shadowLight">
						<h2 className="font-[Questrial] text-center text-xl text-blue-950">
							Commande de sushi
						</h2>
					</div>
					<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 hover:w-64 hover:h-64 rounded-full p-2 shadowLight">
						<h2 className="font-[Questrial] text-center text-xl text-blue-950">
							Eye-care
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
