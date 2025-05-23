import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function CarouselProjects({
	images,
	mobile = false,
}: {
	images: string[];
	mobile?: boolean;
}) {
	return (
		<Swiper
			navigation={true}
			modules={[Navigation]}
			className={`${
				mobile ? "max-w-[280px] max-h-[640px]" : "max-w-[600px] max-h-[300px]"
			} rounded-md`}
		>
			{images.map((image, index) => (
				<SwiperSlide key={index} className="text-black">
					<Image
						src={image}
						alt={`Image ${index}`}
						width={1500}
						height={1500}
						className="relative"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
