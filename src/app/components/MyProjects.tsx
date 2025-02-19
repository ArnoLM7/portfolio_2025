import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../utils/projects";
import CarouselProjects from "./CarouselProjects";
import Link from "next/link";

export default function MyProjects() {
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	const [clickedProject, setClickedProject] = useState<number | null>(null);
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
								onClick={() => setClickedProject(index)}
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
								<p className="font-[Tackerlen] text-center text-3xl">
									{project.title}
								</p>
							</div>
							{clickedProject === index && (
								<div className="fixed z-30 top-0 left-0 w-full h-full bg-black bg-opacity-80 justify-center items-center">
									<div className="absolute flex gap-8 top-16 left-40">
										<Image
											alt="flecheRetour"
											src={"/assets/arrow.svg"}
											width={40}
											height={40}
											onClick={() => setClickedProject(null)}
											className="cursor-pointer"
										/>
										<h2 className="font-[Tackerlen] text-white text-5xl ">
											{project.title}
										</h2>
									</div>
									<div
										className={`flex ${
											project.mobile ? "" : "flex-col"
										} justify-center items-center gap-8 h-[100vh]`}
									>
										<div className="flex flex-col justify-center gap-2 ">
											<p className="text-white font-[Questrial] text-lg">
												{project.description}
											</p>
											<p className="text-white font-[Questrial] text-sm font-weight-bold gap-4 italic">
												Technologies utilisées :{" "}
												{project.technologies?.map((tech) => tech).join(", ") ||
													"Aucune"}
											</p>
										</div>

										<div className="flex flex-col gap-8">
											<CarouselProjects
												key={index}
												images={project.images}
												mobile={project.mobile}
											/>

											<div className="flex gap-6 justify-center">
												<Link href="https://github.com/RubenDavidAbreu/nagashima">
													<Image
														src="/assets/github.svg"
														alt="Github"
														width={50}
														height={50}
														className="relative hover:scale-125 duration-300 ease-in-out cursor-pointer"
													/>
												</Link>
												<Link href="https://github.com/RubenDavidAbreu/nagashima">
													<Image
														src="/assets/web.svg"
														alt="Web"
														width={50}
														height={50}
														className="relative hover:scale-125 duration-300 ease-in-out cursor-pointer"
													/>
												</Link>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
