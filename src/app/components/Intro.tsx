import React from "react";
import Image from "next/image";

export default function Intro() {
	return (
		<div className="flex justify-center gap-32 items-center mt-20">
			<div className="text-right">
				<h1 className="font-[Tackerlen] text-9xl">Arno Le Moil</h1>
				<h3 className="font-[Tackerlen] text-4xl justify-end">
					Développeur Web
				</h3>
				<div className="flex gap-6 justify-end mt-4">
					<a
						href="https://www.linkedin.com/in/kevin-nday-0b1b3b1b4/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/assets/linkedin.svg"
							alt="Linkedin"
							width={35}
							height={35}
							className="relative hover:scale-125 duration-300 ease-in-out cursor-pointer"
						/>
					</a>
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=arno.lemoil.pro@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/assets/gmail.svg"
							alt="Gmail"
							width={40}
							height={40}
							className="relative hover:scale-125 duration-300 ease-in-out"
						/>
					</a>
					<a
						href="https://github.com/ArnoLM7"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/assets/github.svg"
							alt="Github"
							width={35}
							height={35}
							className="relative hover:scale-125 duration-300 ease-in-out"
						/>
					</a>
				</div>
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
	);
}
