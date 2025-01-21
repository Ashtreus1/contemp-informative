"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { EmblaOptionsType } from "embla-carousel";
import HomepageCarousel from "./HomepageCarousel";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const textContents = [
	{
		title: "What is Globalization",
		desc: `
			Globalization is the growing connection between 
			countries, linking economics, cultures, and people.
			It happens through trade, technology, and the exchange
			of ideas, goods, and information across borders.
		`,
		url: '/lesson1',
	},
	{
		title: "The Global Interstate System",
		desc: `
			The Global Interstate System refers to the network of 
			relationship between countries that are governed by international
			laws, agreements, and organizations. It is a framework for 
			interactions between state, aimed at managing conflicts, fostering
			cooperation, and promoting peace and stability across borders.
		`,
		url: '/lesson2',
	},
	{
		title: "World Economy",
		desc: `
			The world economy refers to the interconencted economics
			of all countrie, shaped by trade, finance, and investment.
			It involves the global exchange of goods, services, and capital
			influencing economic growth, development, and stability worldwide.
		`,
		url: '/lesson3',
	},
	{
		title: "Market Integration",
		desc: `
			Market integration is the process of combining separate markets
			into a unified global market. It involves the removal of trade
			barriers, allowing goods, services, and capital to flow more freely
			across borders, leading to greaterr economic cooperation and effieciency.	
		`,
		url: '/lesson4',
	},
	{
		title: 'Know the 17 SGDs',
		desc: `
			The 17 Sustainable Development Goals (SDG) are a global set 
			of objectives established by the United Nations to address 
			pressing issues like poverty, inequality, climate change, and peace.
			These goals aim to promote prosperity, protect the planet, and ensure
			a better future for all by 2030.
		`,
		url: '/lesson5',
	}
]

export default function HomepageHero() {

	const [currentSlide, setCurrentSlide] = useState(0);
	const [textContent, setTextContent] = useState(textContents[0]);
	const [isMobileOrTable, setIsMobileOrTablet] = useState(false);

	const router = useRouter();

	const handleSlideChange = (index: number) => {
		setCurrentSlide(index);
		setTextContent(textContents[index]);
	};

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobileOrTablet(window.innerWidth < 1024);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<div className="relative pt-20 lg:pt-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 lg:gap-12">
			{!isMobileOrTable && (
				<>
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
						<h1 className="text-4xl md:text-5xl font-bold">{textContent.title}</h1>
						<p className="mt-4 text-lg md:text-xl">{textContent.desc}</p>

						<div className="mt-8 flex justify-end gap-4">
							<Button
								size="lg"
								className="bg-[#1e1e1e] text-gray-200 bg-transparent border border-white rounded-md hover:bg-gray-200 hover:text-[#1e1e1e] transition-colors"
								onClick={() => router.push(textContent.url)}
							>
								<span>Learn More</span>
							</Button>
						</div>
					</div>

					<div className="flex justify-center lg:justify-end w-full lg:w-auto mt-12 lg:mt-0">
						<HomepageCarousel slides={SLIDES} options={OPTIONS} onSlideChange={handleSlideChange} />
					</div>
				</>
			)}
			{isMobileOrTable && (
				<>
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
					<h1 className="relative text-5xl font-bold text-center mb-5">{textContent.title}</h1>
					<HomepageCarousel slides={SLIDES} options={OPTIONS} onSlideChange={handleSlideChange} />
					<div className="relative">
						<p className="mt-4 text-lg md:text-xl">{textContent.desc}</p>

						<div className="mt-8 flex justify-end gap-4">
							<Button
								size="lg"
								className="bg-transparent border border-white"
								onClick={() => router.push(textContent.url)}
							>
								<span>Learn More</span>
							</Button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
