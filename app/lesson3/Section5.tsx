"use client";
import { motion } from "framer-motion";

export default function Section5() {
	const cards = [
		{
			img: "/lesson3_imgs/s5-1.png",
			title: "Localization",
			article: "Is the adaptation of a particular product or service to one of those markets",
		},
		{
			img: "/lesson3_imgs/s5-2.png",
			title: "Globalization",
			article: "Refers to the processes by which a company brings its business to the rest of the world.",
		},
		{
			img: "/lesson3_imgs/s5-3.png",
			title: "Internationalization",
			article: "Is the practice of designing products, services and internal operations to facilitate expansion into international markets.",
		},
	];

	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] flex flex-col-reverse lg:flex-row items-center justify-center bg-no-repeat bg-cover bg-center snap-start sm:pt-20 bg-cyan-800">
			<motion.h1
				className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase flex items-center justify-center sm:px-10 md:px-2"
				initial={{ x: "-100%", opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				exit={{ x: "-100%", opacity: 0 }}
				transition={{ duration: 1.3 }}
			>
				GLOBALISASYON VS INTERNALISASYON
			</motion.h1>
			<motion.div
				className=""
				initial={{ x: "100%", opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				exit={{ x: "100%", opacity: 0 }}
				transition={{ duration: 2 }}
			>
				<div className="h-auto sm:h-3/5 lg:h-4/5 grid grid-cols-2 sm:flex sm:items-center sm:justify-center">
					{cards.map((card) => (
						<Section5Card key={card.title} articleImg={card.img} article={card.article} title={card.title} />
					))}
				</div>
			</motion.div>
		</section>
	);

	function Section5Card({ articleImg, article, title }: { articleImg: string; article: string; title: string }) {
		const styleTitle = title === "Internationalization" ? "col-span-2" : "";
		return (
			<div className={`sm:h-full sm:w-1/3 items-center flex flex-col sm:space-y-4 p-2 ${styleTitle}`}>
				<div className={`w-1/2 sm:w-2/3`}>
					<img src={articleImg} alt={articleImg} />
				</div>
				{/* <article className="border border-white p-2 h-2/3 sm:h-1/3 lg:h-1/3 xl:h-3/4 w-full"> */}
				{/* <article className="border border-white p-2 h-2/3 sm:h-2/4 w-full"> */}
				<article className="border border-white p-2 max-w-[500px] w-full">
					{title !== "Internationalization" ? (
						<h2 className="uppercase text-center text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">{title}</h2>
					) : (
						<h2 className="uppercase text-center break-words text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
							{title}
						</h2>
					)}
					<p className="text-center text-justify text-sm sm:text-base xl:text-lg 2xl:text-xl pt-2">{article}</p>
				</article>
			</div>
		);
	}
}
