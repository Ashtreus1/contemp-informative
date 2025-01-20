"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/homepage/Header";

export default function Lesson5() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div>
			<Header />
			<motion.div
				style={{
					scaleX,
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 10,
					originX: 0,
					backgroundColor: "#ff0088",
				}}
			/>

			<div className="h-screen w-full bg-blue-500"></div>
			<div className="h-screen w-full bg-yellow-500"></div>
			<div className="h-screen w-full bg-orange-500"></div>
			<div className="h-screen w-full bg-green-500"></div>
			<div className="h-screen w-full bg-red-500"></div>
		</div>
	);
}
