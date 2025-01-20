"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import HomepageCarousel from "./HomepageCarousel";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function HomepageHero() {
	const [title, setTitle] = useState("What is Globalization");
	const [desc, setDesc] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus euismod mi, nec ullamcorper nunc gravida in. Fusce vitae tincidunt nulla. Phasellus malesuada, quam ac dictum euismod, dui sapien cursus ipsum, eu imperdiet enim ante vel erat."
	);
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleSlideChange = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div className="relative pt-20 lg:pt-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 lg:gap-12">
			<motion.div
				className="absolute inset-0 bg-cover bg-center"
				key={currentSlide}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				style={{ backgroundImage: `url(/homepage_imgs/bg-0${currentSlide + 1}.png)` }}
			/>
			<div className="absolute inset-0 bg-black opacity-80" />

			<div className="relative flex flex-col items-start justify-center w-full lg:w-[500px] text-center lg:text-left">
				<h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
				<p className="mt-4 text-lg md:text-xl">{desc}</p>

				<div className="mt-8 flex gap-4">
					<Button size="icon" className="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-transparent">
						<Bookmark size={64} />
					</Button>
					<Button
						size="lg"
						className="flex items-center justify-center w-64 h-16 text-gray-200 bg-transparent border border-white rounded-full hover:bg-gray-200 hover:text-[#1e1e1e] transition-colors"
					>
						<span>Learn More</span>
					</Button>
				</div>
			</div>

			<div className="flex justify-center lg:justify-end w-full lg:w-auto mt-12 lg:mt-0">
				<HomepageCarousel slides={SLIDES} options={OPTIONS} onSlideChange={handleSlideChange} />
			</div>
		</div>
	);
}
