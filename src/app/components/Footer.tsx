import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<div className="absolute bg-yellow-100 h-12 mt-20 w-full opacity-20 top-[3600px] shadowFooter flex justify-center" />
			<div className="absolute h-12 w-full top-[3650px] flex flex-col justify-center text-center gap-4">
				<div className="flex gap-6 m-auto">
					<Link href="https://www.linkedin.com/in/kevin-nday-0b1b3b1b4/">
						<Image
							src="/assets/linkedin.svg"
							alt="Linkedin"
							width={35}
							height={35}
							className="relative hover:scale-125 duration-300 ease-in-out"
						/>
					</Link>
					<Link href="https://github.com/ArnoLM7">
						<Image
							src="/assets/github.svg"
							alt="Github"
							width={35}
							height={35}
							className="relative hover:scale-125 duration-300 ease-in-out"
						/>
					</Link>
					<Link
						href="https://mail.google.com/mail/?view=cm&fs=1&to=arno.lemoil.pro@gmail.com"
						target="_blank"
					>
						<Image
							src="/assets/gmail.svg"
							alt="Gmail"
							width={40}
							height={40}
							className="relative hover:scale-125 duration-300 ease-in-out"
						/>
					</Link>
				</div>
				<p className="font-[Questrial] text-lg mt-2 mb-10">
					© Copyright - Arno Le Moil - 2025
				</p>
			</div>
		</>
	);
}
