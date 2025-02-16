import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<div className="absolute bg-yellow-100 h-12 mt-20 w-full opacity-20 top-[3600px] shadowFooter flex justify-center" />
			<div className="absolute h-12 w-full top-[3650px] flex justify-center gap-8">
				<Link href="https://www.linkedin.com/in/kevin-nday-0b1b3b1b4/">
					<Image
						src="/assets/linkedin.svg"
						alt="Linkedin"
						width={35}
						height={35}
						className="relative"
					/>
				</Link>

				<Image
					src="/assets/github.svg"
					alt="Github"
					width={35}
					height={35}
					className="relative"
				/>
				<Image
					src="/assets/gmail.svg"
					alt="Gmail"
					width={35}
					height={35}
					className="relative"
				/>
			</div>
		</>
	);
}
