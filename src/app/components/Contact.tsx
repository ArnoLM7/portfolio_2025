import React from "react";
import Image from "next/image";

export default function Contact() {
	return (
		<div id="contact" className="relative mt-28 mx-80">
			<h2 className="text-5xl font-[Tackerlen] mb-12">Me contacter</h2>
			<p className="text-base font-[Questrial] pl-10">
				Si vous êtes interessé par mon profil, n&apos;hésitez pas à me contacter
				via mes réseaux, ou par téléphone :
			</p>
			<div className="flex gap-10 m-auto items-center mt-10 text-lg justify-center">
				<div className="flex gap-3 items-center">
					<p className="font-[Questrial]">Linkedin : </p>
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
				</div>
				<div className="flex gap-3 items-center">
					<p className="font-[Questrial]">Email : </p>
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
				</div>
				<div className="flex gap-3 items-center">
					<p className="font-[Questrial]">Github : </p>
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
				<div className="flex gap-3 items-center">
					<p className="font-[Questrial]">Téléphone : 07 66 88 52 23</p>
				</div>
			</div>
		</div>
	);
}
