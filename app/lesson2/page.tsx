"use client";
import { motion } from "framer-motion";
import Header from "@/components/homepage/Header";
import { Button } from "@/components/ui/button";

const TextStyle = "text-gray-300 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl";
const HeaderStyle = `text-gray-300 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl`;
const center = "flex flex-col justify-center items-center";

export default function Lesson2() {
	return (
		<div
			className="w-full max-w-screen-2xl mx-auto h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory 
						[&::-webkit-scrollbar]:w-2
						[&::-webkit-scrollbar-track]:bg-gray-600
						[&::-webkit-scrollbar-thumb]:bg-gray-300"
		>
			<Header />
			<div>
				<Section1 />
				<div className="relative h-screen w-full bg-cover bg-center snap-start">
					<Section2 />
					<Section3 />
				</div>
			</div>
		</div>
	);
}

function Section({ className = "", children }: { className: string; children: React.ReactNode }) {
	return <section className={`h-screen w-full bg-cover bg-center snap-start ${TextStyle} ${center}  ${className}`}>{children}</section>;
}

function Section1() {
	return (
		<Section className="bg-[url(/lesson2_imgs/s1-bg.png)] py-20 gap-10">
			<div className="">Reality of Life and Relaxation</div>
			<div className="flex flex-col gap-10 sm:h-full sm:flex-row items-center justify-evenly px-6 sm:px-36">
				<div className="sm:w-1/2 text-3xl lg:text-6xl text-white sm:text-right text-bold">THE GLOBAL INTERSTATE SYSTEM</div>
				<span className="w-full sm:w-3 h-1 sm:h-64 bg-gray-600 sm:mx-5 xl:mx-10 "></span>
				<div className={`sm:w-1/2 h-full sm:text-left gap-10 ${center}`}>
					<div className="text-xl lg:text-3xl">Globalization, Regionalism, and Nationalism Explained.</div>
					<div className="w-full xl:w-3/4">
						<Button className={`text-lg xl:text-xl w-full h-full bg-gray-400 hover:bg-gray-200 text-black font-semibold`}>
							Definition of State
						</Button>
					</div>
				</div>
			</div>
			<div>Explore. Relax. Inspire. Learn.</div>
		</Section>
	);
}

function Section2() {
	return (
		<Section className="bg-[url(/lesson2_imgs/s2-bg.png)] text-left py-10 px-6 sm:px-20 gap-5">
			<h1 className={`w-full  ${HeaderStyle}`}>State</h1>
			<div className="w-full">
				<p className="italic sm:w-3/4">
					A state is a political entity with a centralized government that holds the authority to govern a specific geographical area. It
					possesses sovereignty over its territory and is recognized as such by other states. This recognition can be bilateral or
					multilateral, depending on the state's international relationships.
				</p>
			</div>
			<Button className={`${TextStyle} w-full sm:w-1/2 sm:h-16 bg-gray-400 hover:bg-gray-200 text-black font-semibold place-self-start`}>
				Four Elements of State
			</Button>
		</Section>
	);
}

function Section3() {
	return (
		<Section className="bg-[url(/lesson2_imgs/s3-bg.png)] absolute top-0 left-[100%] right-[-100%] bottom-0">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}></motion.div>
		</Section>
	);
}
