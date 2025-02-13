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
