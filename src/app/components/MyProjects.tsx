import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../utils/projects";

export default function MyProjects() {
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
				/>
			</div>
			<div className="relative">
				<h2 className="text-5xl font-[Tackerlen]">Mes projets</h2>
				<div className="flex gap-16">
					{projects.map((project, index) => (
						<div
							key={index}
							className={`text-center text-yellow-100 transition-all duration-300 ${
								project.up ? "mt-32" : ""
							}`}
						>
							<h4 className="mb-4 text-3xl font-[Tackerlen]">{project.date}</h4>
							<div
								className="project cursor-pointer flex justify-center items-center bg-yellow-100 text-blue-950 hover:shadow-none duration-300 ease-in-out w-52 h-52 rounded-full p-2 shadowLight relative"
								onMouseEnter={() => setHoveredProject(index)}
								onMouseLeave={() => setHoveredProject(null)}
							>
								{hoveredProject === index && (
									<div className="absolute inset-0 bg-black bg-opacity-80 rounded-full flex justify-center items-center gap-2">
										<span className="text-white font-[Questrial] text-3xl">
											Découvrir
										</span>
										<Image
											alt="discoverIcon"
											src={"/assets/loupe.svg"}
											width={30}
											height={30}
										/>
									</div>
								)}
								<p className="font-[Questrial] text-center text-xl">
									{project.title}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
