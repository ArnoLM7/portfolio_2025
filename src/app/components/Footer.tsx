import React from "react";

export default function Footer() {
	return (
		<>
			<div className="absolute bg-yellow-100 h-12 mt-20 w-full opacity-20 top-[3740px] shadowFooter flex justify-center" />
			<div className="absolute h-12 w-full top-[3800px] flex flex-col justify-center text-center gap-4">
				<p className="font-[Questrial] text-lg mt-2 mb-10">
					© Copyright - Arno Le Moil - Mentions légales - 2025
				</p>
			</div>
		</>
	);
}
