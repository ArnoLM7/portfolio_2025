import React from "react";
import Image from "next/image";

export default function MyProjects() {
	return (
		<div
			id="myprojects"
			className="heightContainer mt-80 mx-64 items-center flex justify-center"
		>
			<div className="absolute left-0 w-full">
				<Image
					alt="Arno_Lemoil"
					src="/assets/wave2.svg"
					width={1900}
					height={20}
					className="wave2"
				></Image>
			</div>
			<div className="relative">
				<h2 className="text-5xl font-[Tackerlen]">Mes projets</h2>
				<div className="flex gap-16">
					<div className="mt-32 text-center text-yellow-100">
						<h4 className="mb-4 text-3xl font-[Tackerlen]">Octobre 2023</h4>
						<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 rounded-full p-2 shadowLight">
							<p className="font-[Questrial] text-center text-xl text-blue-950">
								Webdocumentaire sur Octobre Rose
							</p>
						</div>
					</div>
					<div className=" text-center text-yellow-100">
						<h4 className="mb-4 text-3xl font-[Tackerlen]">Mars 2024</h4>
						<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 rounded-full p-2 shadowLight">
							<p className="font-[Questrial] text-center text-xl text-blue-950">
								Commande de sushi
							</p>
						</div>
					</div>
					<div className="mt-32 text-center text-yellow-100">
						<h4 className="mb-4 text-3xl font-[Tackerlen]">Mars 2024</h4>
						<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 rounded-full p-2 shadowLight">
							<p className="font-[Questrial] text-center text-xl text-blue-950">
								Commande de sushi
							</p>
						</div>
					</div>
					<div className="text-center text-yellow-100">
						<h4 className="mb-4 text-3xl font-[Tackerlen]">2024-2025</h4>
						<div className="project flex justify-center items-center bg-yellow-100 w-52 h-52 rounded-full p-2 shadowLight">
							<h4 className="font-[Questrial] text-center text-3xl text-blue-950">
								Eye-care
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
