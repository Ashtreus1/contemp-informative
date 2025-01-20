"use client";
import { style } from "framer-motion/client";
import Header from "../../components/homepage/Header";
import Section5 from "./Section5";
import { motion } from "framer-motion";

export default function Lesson4Main() {
	return (
		<div
			className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory 
						[&::-webkit-scrollbar]:w-2
						[&::-webkit-scrollbar-track]:bg-gray-600
						[&::-webkit-scrollbar-thumb]:bg-gray-300"
		>
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Section9 />
			<Section10 />
			<Section11 />
			<Section12 />
			<Section13 />
			<Section14 />
			<Section15 />
			<Section16 />
			<Section17 />
			{/* <div className="snap-start">
				<Footer />
			</div> */}
		</div>
	);
}

function Section1() {
	return (
		<section className="h-screen flex flex-col justify-center items-center bg-[url('/lesson3_imgs/bg-1.png')] bg-no-repeat bg-cover bg-center pt-20 relative snap-start">
			<div className="absolute inset-0 bg-black bg-opacity-20"></div>
			<div className="flex items-center justify-center relative z-10">
				{[1, 2, 3, 4, 5].map((i) => (
					<motion.div
						className="flex items-center justify-center gap-0"
						key={i}
						initial={{ y: "-100%", opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						exit={{ y: "-100%", opacity: 0 }}
						transition={{ duration: 1.5, delay: i * 0.1 }}
					>
						<img src={`/lesson3_imgs/s1-${i}.png`} alt="img" className="" />
					</motion.div>
				))}
			</div>
			<motion.h1
				className=" text-center text-4xl md:text-5xl font-bold text-white mt-10 uppercase relative z-10"
				initial={{ y: "50%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "-50%", opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				Ang Pandaigdigang Ekonomiya
			</motion.h1>
		</section>
	);
}

function Section2() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] flex flex-col items-center justify-center sm:flex-row bg-no-repeat bg-cover bg-center sm:pt-20 flex relative snap-start">
			<div className="absolute inset-0 bg-black bg-opacity-30"></div>
			<div className="sm:w-1/2  relative z-10 flex items-center justify-center">
				<motion.div
					className="flex items-center justify-center"
					initial={{ x: "-100%" }}
					whileInView={{ x: 0 }}
					exit={{ x: "-100%" }}
					transition={{ duration: 1 }}
				>
					{/* <div className="flex items-center justify-center"> */}
					<img src="/lesson3_imgs/s2.png" className="w-3/5" />
					{/* </div> */}
				</motion.div>
			</div>
			<motion.article
				className="sm:w-1/2 flex flex-col items-center justify-center relative z-10 "
				initial={{ x: "100%" }}
				whileInView={{ x: "0%" }}
				exit={{ x: "100%" }}
				transition={{ duration: 1 }}
			>
				<h2 className="text-2xl md:text-5xl font-bold text-white mt-10 uppercase text-center px-20">Pandaigdigang Ekonomiya</h2>
				<p className="text-justify w-full text-lg sm:text-xl sm:tracking-widest p-2 sm:p-10  px-5 sm:px-20 ">
					It is the result of human innovation and technological progress. It is characterized by the increasing integration of economies
					around the world through the movement of goods, services, and capital across borders. (IMF, 2008).
				</p>
			</motion.article>
		</section>
	);
}

function Section3() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] flex flex-col sm:flex-row justify-center items-center bg-no-repeat bg-cover bg-center sm:pt-20 flex relative snap-start">
			<div className="absolute inset-0 bg-black bg-opacity-30"></div>
			<article className="sm:w-1/2 flex flex-col items-center justify-center relative z-10">
				<motion.div className="" initial={{ x: "-100%" }} whileInView={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 1 }}>
					<h2 className="text-2xl sm:text-4xl font-bold text-white mt-10 uppercase text-center px-20">ECONOMICS</h2>
					<p className="text-justify w-full text-xl sm:text-2xl p-5 sm:p-20 tracking-widest">
						a social science that focuses on the production, distribution, and consumption of goods and services, and analyzes the choices
						that individuals, businesses, governments, and nations make to allocate resources.
					</p>
				</motion.div>
			</article>
			<div className="sm:w-1/2 flex items-center justify-center relative z-10">
				<motion.div className="" initial={{ x: "100%" }} whileInView={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 1 }}>
					<div className="flex items-center justify-center ">
						<img src="/lesson3_imgs/s3.png" alt="" className="w-3/5" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function Section4() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center snap-start relative">
			<div className="absolute inset-0 bg-black bg-opacity-30"></div>
			<motion.div
				className="flex flex-col items-center justify-center"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="sm:w-4/6 flex items-center justify-center relative z-10">
					<div>
						<img src="/lesson3_imgs/s4.png" alt="" />
					</div>
				</div>
				<h1 className="text-center text-4xl md:text-5xl font-bold text-white mt-10 uppercase relative z-10">
					GLOBALISASYON VS INTERNALISASYON
				</h1>
			</motion.div>
		</section>
	);
}

function Section6() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-2.png')] bg-no-repeat bg-cover bg-center bg-[#40534C] snap-start">
			<motion.div
				className="h-screen flex flex-col items-center justify-center"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="flex items-center justify-center">
					<div className="w-4/5 sm:w-4/6">
						<img src="/lesson3_imgs/s6.png" alt="" />
					</div>
				</div>
				<div className="text-center ">
					<h1 className="text-4xl md:text-5xl font-bold text-white mt-10 uppercase">PINAGMULAN NG GLOBALISASYON</h1>
					<h2 className="text-xl md:text-2xl font-semibold text-white mt-5 uppercase">{"(International Trading Systems)"}</h2>
				</div>
			</motion.div>
		</section>
	);
}

function Section7() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-2.png')] flex flex-col justify-center bg-no-repeat bg-cover bg-center bg-[#49243E] snap-start">
			<motion.h1
				className="sm:pl-20 text-center sm:text-left text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-5 sm:mt-10 uppercase"
				initial={{ x: "-100%" }}
				whileInView={{ x: 0 }}
				exit={{ x: "-100%" }}
				transition={{ duration: 1 }}
			>
				Silk Road {"(Silk Route)"}
			</motion.h1>
			<div className="flex sm:flex-row flex-col items-center justify-evenly sm:p-5">
				<motion.div
					className="w-4/5 sm:w-1/2 my-5"
					initial={{ x: "-100%" }}
					whileInView={{ x: 0 }}
					exit={{ x: "-100%" }}
					transition={{ duration: 1 }}
				>
					<img src="/lesson3_imgs/s7.png" />
				</motion.div>
				<motion.article
					className="sm:leading-relaxed grid sm:gap-10 text-white text-lg sm:text-2xl my-5"
					initial={{ x: "100%" }}
					whileInView={{ x: 0 }}
					exit={{ x: "100%" }}
					transition={{ duration: 1 }}
				>
					<p>• first global trade route in history</p>
					<p>• 1,500 years: 130 B.C.E. until 1453 C.E.</p>
					<p>• 6,437 kilometers (4,000 miles)</p>
				</motion.article>
			</div>
			<motion.article
				className="text-white text-lg sm:text-2xl px-10 sm:px-20 text-justify"
				initial={{ y: "100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "100%", opacity: 0 }}
				transition={{ duration: 1 }}
			>
				• It is hard to overstate the importance of the Silk Road on history. Religion and ideas spread along the Silk Road just as fluidly as
				goods. Towns along the route grew into multicultural cities. The exchange of information gave rise to new technologies and innovations
				that would change the world.
			</motion.article>
		</section>
	);
}

function Section8() {
	return (
		<section className="h-screen flex flex-col items-center justify-center bg-[url('/lesson3_imgs/bg-2.png')] bg-no-repeat bg-cover bg-center bg-[#2E236C] snap-start">
			<motion.h1
				className="text-center text-xl sm:text-2xl md:text-4xl font-bold text-white uppercase lg:pt-10"
				initial={{ y: "-50%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "-50%", opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				GALLEON TRADE
			</motion.h1>
			<div className="flex items-center justify-center flex-col sm:flex-row sm:p-10">
				<motion.div
					className="grid sm:gap-10 text-white text-base sm:text-2xl sm:pl-20 text-justify leading-relaxed w-4/5 sm:w-2/3"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<p>• Took place during the age of mercantilism (16th-18th century)</p>
					<p className="leading-relaxed text-justify">
						• Spanish sailing vessel that made an annual round trip (one vessel per year) across the Pacific between Manila, in the
						Philippines, and Acapulco, in present Mexico, during the period 1565-1815. They were the sole means of communication between
						Spain and its Philippine colony and served as an economic lifeline for the Spaniards in Manila.
					</p>
				</motion.div>
				<motion.div
					className="sm:w-1/2 flex items-center justify-center"
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<div className="w-3/5 sm:w-4/5">
						<img src="/lesson3_imgs/s8.png" alt="" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function Section9() {
	return (
		<section className="h-screen flex flex-col justify-center bg-[url('/lesson3_imgs/bg-3.png')] bg-no-repeat bg-cover bg-center bg-[#31363F] snap-start">
			<div className="flex flex-col sm:flex-row items-center justify-center">
				<motion.div
					className="sm:w-1/2 flex items-center justify-center"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<div className="w-5/6">
						<img src="/lesson3_imgs/s9.png" className="" alt="" />
					</div>
				</motion.div>
				<motion.div
					className="sm:w-1/2 text-white text-xl sm:text-2xl text-justify px-10"
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<p className="sm:px-10 py-5 leading-loose">
						Provides the institutional framework for determining the rules and procedures for international payments, determination of
						exchange rates, and movement of capital.
					</p>
				</motion.div>
			</div>
			<motion.h1
				className="text-center text-4xl md:text-5xl font-bold sm:mt-16 text-white uppercase"
				initial={{ y: "100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "100%", opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				INTERNATIONAL MONETARY SYSTEM
			</motion.h1>
		</section>
	);
}

function Section10() {
	return (
		<section className="h-screen flex flex-col justify-center items-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#B9B4C7] snap-start">
			<motion.h1
				className="text-center text-3xl md:text-5xl font-bold uppercase "
				initial={{ y: "-100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "-100%", opacity: 0 }}
				transition={{ duration: 1 }}
			>
				ERA OF BIMETALLISM
			</motion.h1>
			<div className="flex flex-col sm:flex-row items-center">
				<motion.div
					className="sm:w-1/2 my-5 flex items-center justify-center"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<img src="/lesson3_imgs/s10.png" alt="" className="w-3/4" />
				</motion.div>
				<motion.article
					className="sm:w-1/2 "
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<p className="text-xl sm:text-2xl text-justify px-10 sm:px-10 sm:leading-[2.5]">
						• before 1870, where both gold and silver coins were used as the international modes of payment. The exchange rates among
						currencies were determined by their gold or silver contents. Some countries were either on a gold or a silver standard.
					</p>
				</motion.article>
			</div>
		</section>
	);
}

function Section11() {
	return (
		<section className="">
			<section className="h-screen flex flex-col justify-center items-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#D49B54] snap-start">
				<motion.h1
					className="w-full text-center text-4xl md:text-5xl sm:pt-10 text-white font-bold uppercase sm:mb-5"
					initial={{ y: "-100%", opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					exit={{ y: "-100%", opacity: 0 }}
					transition={{ duration: 1 }}
				>
					Gold Standard
				</motion.h1>
				<div className="flex flex-col sm:flex-row items-center justify-center">
					<motion.div
						className="w-2/3 sm:w-1/2 flex items-center justify-center m-4"
						initial={{ x: "-100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "-100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<img src="/lesson3_imgs/s11.png" alt="" className="w-3/4" />
					</motion.div>
					<motion.article
						className="sm:w-2/3 px-10 content-center text-xl sm:text-2xl text-justify text-black grid gap-10 sm:gap-16"
						initial={{ x: "100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<p>
							• 1875-1914, gold alone is assured of unrestricted coinage. There was a two-way convertibility between gold and national
							currencies at a stable ratio.
						</p>
						<p>• The gold standard is a monetary system in which paper money is freely convertible into a fixed amount of gold.</p>
						<p>• U.S. dollars were convertible to gold at a rate of $20.67 per ounce.</p>
					</motion.article>
				</div>
			</section>
			<section className="h-screen flex flex-col justify-center items-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#D49B54] snap-start">
				<motion.h1
					className="w-full text-center text-4xl md:text-5xl sm:pt-10 text-white font-bold uppercase sm:mb-5"
					initial={{ y: "-100%", opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					exit={{ y: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					Gold Standard
				</motion.h1>
				<div className="flex flex-col sm:flex-row items-center justify-center">
					<motion.div
						className="w-2/3 sm:w-1/2 flex items-center justify-center m-4"
						initial={{ x: "-100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "-100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<img src="/lesson3_imgs/s11.png" alt="" className="w-3/4" />
					</motion.div>
					<motion.article
						className="sm:w-2/3 content-center text-lg sm:text-2xl text-justify px-10 text-black grid gap:10 sm:gap-16"
						initial={{ x: "100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<p className="sm:leading-loose">
							• <strong>ADVANTAGES:</strong> The gold standard prevents inflation as governments and banks are unable to manipulate the
							money supply (e.g., overissuing money). The gold standard also stabilizes prices and foreign exchange rates.
						</p>
						<p className="sm:leading-loose">
							• <strong>DISADVANTAGES:</strong> Under the gold standard, the supply of gold cannot keep pace with its demand, and it is
							not flexible under trying economic times. Also, mining gold is costly and creates negative environmental externalities.
						</p>
					</motion.article>
				</div>
			</section>
		</section>
	);
}

function Section12() {
	return (
		<section className="h-screen flex flex-col justify-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#014DA7] snap-start">
			<motion.h1
				className="w-full text-center text-4xl md:text-5xl text-white font-bold p-5 uppercase "
				initial={{ y: "-100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "-100%", opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				International Monetary Fund
			</motion.h1>
			<div className="flex sm:flex-row flex-col items-center justify-center">
				<motion.div
					className="sm:w-1/2 flex items-center justify-center"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<img src="/lesson3_imgs/s12.png" alt="" className="w-3/4" />
				</motion.div>
				<motion.p
					className="sm:w-1/2 content-center text-xl sm:text-2xl text-justify px-20 text-white leading-loose"
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					International Monetary Fund (IMF) to monitor exchange rates and identify nations that needed global monetary support.
				</motion.p>
			</div>
		</section>
	);
}

function Section13() {
	return (
		<section className="h-screen flex flex-col justify-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#503C3C] snap-start">
			<motion.h1
				className="text-center text-2xl lg:text-4xl md:text-5xl text-white font-bold sm:p-10 uppercase "
				initial={{ y: "-100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "-100%", opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				Bretton Woods System
			</motion.h1>
			<div className="flex sm:flex-row flex-col items-center justify-center">
				<motion.div
					className="w-2/4 sm:w-1/3 flex items-center justify-center"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<img src="/lesson3_imgs/s13.png" alt="" className="w-3/4" />
				</motion.div>
				<motion.article
					className="sm:w-2/3 content-center text-lg sm:text-2xl text-justify px-10 text-white grid gap-4 sm:gap-14"
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<p>
						• The Bretton Woods Agreement was negotiated in July 1944 by delegates from 44 countries at the United Nations Monetary and
						Financial Conference held in Bretton Woods, New Hampshire.
					</p>
					<p>• gold was the basis for the U.S. dollar and other currencies were pegged to the U.S. dollar’s value.</p>
					<p>
						• goals of creating an efficient foreign exchange system, preventing competitive devaluations of currencies, and promoting
						international economic growth.
					</p>
					<p>• $35 per ounce</p>
				</motion.article>
			</div>
		</section>
	);
}

function Section14() {
	return (
		<section className="h-screen flex flex-col justify-center items-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#697565] snap-start text-white">
			<motion.div className="" initial={{ scale: 0 }} whileInView={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 1.5 }}>
				<h1 className="text-center text-4xl md:text-5xl text-white font-bold p-5 uppercase ">President Herbert Hoover (1933)</h1>
				<div className="flex items-center justify-center">
					<img src="/lesson3_imgs/s14.png" alt="" className="w-3/4 center" />
				</div>
				<p className="w-full text-center text-2xl px-10 sm:leading-[2.5]">“We have gold because we cannot trust governments,”</p>
			</motion.div>
		</section>
	);
}

function Section15() {
	return (
		<section className="h-screen flex flex-col justify-center items-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#1F6E8C] snap-start">
			<motion.h1
				className="text-center text-4xl md:text-5xl text-white font-bold p-5 uppercase "
				initial={{ y: "-100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "-100%", opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				WORLD BANK
			</motion.h1>
			<div className="flex sm:flex-row flex-col items-center justify-center">
				<motion.div
					className="sm:w-1/2 flex items-center justify-center"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<img src="/lesson3_imgs/s15.png" alt="" className="w-3/4" />
				</motion.div>
				<motion.p
					className="sm:w-1/2 content-center text-xl sm:text-3xl text-justify px-20 text-white leading-loose"
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					World Bank to manage funds available for providing assistance to countries that had been physically and financially devastated by
					World War II.
				</motion.p>
			</div>
		</section>
	);
}

function Section16() {
	return (
		<section>
			<section className="h-screen flex flex-col justify-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#3D3D42] snap-start">
				<motion.h1
					className="text-center text-4xl md:text-5xl text-white font-bold p-5 uppercase "
					initial={{ y: "-100%", opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					exit={{ y: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					FIAT MONETARY SYSTEM
				</motion.h1>
				<div className="flex sm:flex-row flex-col items-center justify-center">
					<motion.div
						className="sm:w-1/2 flex items-center justify-center"
						initial={{ x: "-100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "-100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<img src="/lesson3_imgs/s16.png" alt="" className="w-3/5" />
					</motion.div>
					<motion.article
						className="sm:w-1/2 content-center text-lg sm:text-2xl text-justify px-10 text-white leading-loose grid sm:gap-10"
						initial={{ x: "100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<p>• ”fiat” is a Latin word that is often translated as “it shall be” or “let it be done.”</p>
						<p>
							• Fiat money is a government-issued currency that is not backed by a physical commodity, such as gold or silver, but
							rather by the government that issued it.
						</p>
						<p>
							• The value of fiat money is derived from the relationship between supply and demand and the stability of the issuing
							government.
						</p>
					</motion.article>
				</div>
			</section>
			<section className="h-screen flex flex-col justify-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#3D3D42] snap-start">
				<motion.h1
					className="text-center text-4xl md:text-5xl text-white font-bold p-5 uppercase "
					initial={{ y: "-100%", opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					exit={{ y: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					FIAT MONETARY SYSTEM
				</motion.h1>
				<div className="flex sm:flex-row flex-col items-center justify-center">
					<motion.div
						className="sm:w-1/2 flex items-center justify-center"
						initial={{ x: "-100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "-100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<img src="/lesson3_imgs/s16.png" alt="" className="w-4/6" />
					</motion.div>
					<motion.article
						className="sm:w-1/2 content-center text-lg sm:text-2xl text-justify px-10 text-white grid gap-4 sm:gap-10"
						initial={{ x: "100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{ duration: 1.5 }}
					>
						<div className="">
							<h2 className="font-semibold">ADVANTAGES OF FIAT MONEY</h2>
							<p>• Gives central banks greater control over the economy</p>
							<p>• Is cost-efficient to produce</p>
							<p>•Provides governments with flexibility</p>
						</div>
						<div>
							<h2 className="font-semibold">DISADVANTAGES OF FIAT MONEY</h2>
							<p>• Is not a fool-proof way to protect the economy</p>
							<p>• Creates opportunity for a bubble</p>
							<p>• Provides risk of inflation</p>
						</div>
					</motion.article>
				</div>
			</section>
		</section>
	);
}

function Section17() {
	return (
		<section className="h-screen flex flex-col justify-center bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#7E6363] snap-start">
			<motion.h1
				className="text-center text-4xl md:text-5xl text-white font-bold p-10 uppercase"
				initial={{ y: "-100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				exit={{ y: "-100%", opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				Floating Rate System
			</motion.h1>
			<div className="flex justify-center sm:flex-row flex-col items-center">
				<motion.div
					className="sm:w-1/2 flex items-center justify-center"
					initial={{ x: "-100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<img src="/lesson3_imgs/s17.png" alt="" className="w-3/4 xl:w-4/6" />
				</motion.div>
				<motion.article
					className="sm:w-1/2 content-center text-lg sm:text-2xl text-justify px-10 text-white grid gap-10"
					initial={{ x: "100%", opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					exit={{ x: "100%", opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					<p>
						• A floating exchange rate is a regime where the currency price of a nation is set by the forex market based on supply and
						demand relative to other currencies.
					</p>
					<p>• Floating exchange rates became more popular after the failure of the gold standard and the Bretton Woods agreement.</p>
				</motion.article>
			</div>
		</section>
	);
}
