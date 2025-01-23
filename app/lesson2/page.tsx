"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Section from "./Section";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { LeftAnim, RightAnim, TopAnim } from "@/components/anim/Animation";
import { HeaderStyle, center, bgs } from "./constant";

export default function Lesson2() {
	return (
		<div
			className="w-full max-w-screen-2xl mx-auto h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory 
						[&::-webkit-scrollbar]:w-2
						[&::-webkit-scrollbar-track]:bg-gray-600
						[&::-webkit-scrollbar-thumb]:bg-gray-300"
		>
			<div>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
			</div>
		</div>
	);
}

function Section1() {
	return (
		<Section className="bg-[url(/lesson2_imgs/s1-bg.png)] py-20 gap-10">
			<TopAnim values="100" duration={1.2}>
				Reality of Life and Relaxation
			</TopAnim>
			<div className="flex flex-col gap-10 sm:h-full sm:flex-row items-center justify-evenly px-6 sm:px-36">
				<motion.div
					className="sm:w-1/2 text-3xl lg:text-6xl text-white sm:text-right text-bold"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1 }}
				>
					THE GLOBAL INTERSTATE SYSTEM
				</motion.div>
				<span className="w-full sm:w-2 h-1 max-h-96 sm:h-full bg-gray-500 sm:mx-5 xl:mx-10 "></span>
				<motion.div
					className={`sm:w-1/2 h-full sm:text-left gap-10 ${center}`}
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<div className="text-xl lg:text-3xl">Globalization, Regionalism, and Nationalism Explained.</div>
					<motion.div className="w-full xl:w-3/4" initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
						<a href="#section2">
							<Button className={`text-lg xl:text-xl w-full h-full bg-gray-400 hover:bg-gray-200 text-black font-semibold`}>
								Definition of State
							</Button>
						</a>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				initial={{ y: "200%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "200%", opacity: 0 }}
				transition={{ duration: 1 }}
			>
				Explore. Relax. Inspire. Learn.
			</motion.div>
		</Section>
	);
}

function Section3() {
	const container = "w-full md:w-1/2 sm:h-5/7 lg:h-[450px] p-10 rounded-3xl relative";
	return (
		<Section className={`${bgs[2]} relative py-20 gap-10 px-10 bg-contain bg-center flex flex-col sm:flex-row`}>
			{/* <Section className="bg-[url(/lesson2_imgs/s3-bg.png)] relative py-20 gap-10 px-10 bg-contain bg-center flex flex-col sm:flex-row"> */}
			<div className="absolute inset-0 bg-black bg-opacity-50" />
			<LeftAnim values="100" duration={1.2} className={`${container} bg-slate-800`}>
				<h1 className={`p-5 rounded-3xl ${HeaderStyle}`}>State</h1>
				<p>
					A political and legal entity with sovereignty, defined borders, and a government. It has a structured legal framework and is
					recognized by other states through diplomatic relations and treaties.
				</p>
			</LeftAnim>
			<RightAnim values="100" duration={1.2} className={`${container} bg-red-900`}>
				<h1 className={HeaderStyle}>Nation</h1>
				<p>
					A group of people with common cultural elements such as language, religion, or ethnicity, which may or may not correspond to state
					boundaries. Nations can exist without a state, leading to stateless nations or multinational states.
				</p>
			</RightAnim>
		</Section>
	);
}

// SECTION 2 IS MOVED TO ITS OWN FILE
// SECTION 4 IS MOVED TO ITS OWN FILE
// SECTION 5 IS MOVED TO ITS OWN FILE
