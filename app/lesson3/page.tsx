import Header from "../../components/homepage/Header";
import Section5 from "./Section5";

export default function Lesson4Main() {
	return (
		<div className="h-screen overflow-y-scroll snap-y snap-mandatory ">
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
		</div>
	);
}

function Section1() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] bg-no-repeat bg-cover bg-center pt-20 relative snap-start">
			<div className="absolute inset-0 bg-black bg-opacity-20"></div>
			<div className="flex items-center justify-center relative z-10">
				<div className="1/5">
					<img src="/lesson3_imgs/s1-1.png" alt="" />
				</div>
				<div className="1/5">
					<img src="/lesson3_imgs/s1-2.png" alt="" />
				</div>
				<div className="1/5">
					<img src="/lesson3_imgs/s1-3.png" alt="" />
				</div>
				<div className="1/5">
					<img src="/lesson3_imgs/s1-4.png" alt="" />
				</div>
				<div className="1/5">
					<img src="/lesson3_imgs/s1-5.png" alt="" />
				</div>
			</div>
			<h1 className="text-center text-4xl md:text-5xl font-bold text-white mt-10 uppercase relative z-10">Ang Pandaigdigang Ekonomiya</h1>
		</section>
	);
}

function Section2() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] bg-no-repeat bg-cover bg-center pt-20 flex relative snap-start">
			<div className="absolute inset-0 bg-black bg-opacity-30"></div>
			<div className="w-1/2 relative z-10">
				<div className="flex items-center justify-center">
					<img src="/lesson3_imgs/s2.png" alt="" className="w-3/5" />
				</div>
			</div>
			<article className="w-1/2 flex flex-col items-center justify-center relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold text-white mt-10 uppercase text-center px-20">Pandaigdigang Ekonomiya</h2>
				<p className="text-justify w-full text-2xl p-10 tracking-widest px-20 ">
					It is the result of human innovation and technological progress. It is characterized by the increasing integration of economies
					around the world through the movement of goods, services, and capital across borders. (IMF, 2008).
				</p>
			</article>
		</section>
	);
}

function Section3() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] bg-no-repeat bg-cover bg-center pt-20 flex relative snap-start">
			<div className="absolute inset-0 bg-black bg-opacity-30"></div>
			<article className="w-1/2 flex flex-col items-center justify-center relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold text-white mt-10 uppercase text-center px-20">ECONOMICS</h2>
				<p className="text-justify w-full text-2xl p-20 tracking-widest">
					a social science that focuses on the production, distribution, and consumption of goods and services, and analyzes the choices
					that individuals, businesses, governments, and nations make to allocate resources.
				</p>
			</article>
			<div className="w-1/2 relative z-10">
				<div className="flex items-center justify-center ">
					<img src="/lesson3_imgs/s3.png" alt="" className="w-3/5" />
				</div>
			</div>
		</section>
	);
}

function Section4() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] bg-no-repeat bg-cover bg-center pt-20 snap-start relative">
			<div className="absolute inset-0 bg-black bg-opacity-30"></div>
			<div className="flex items-center justify-center relative z-10">
				<div>
					<img src="/lesson3_imgs/s4.png" alt="" />
				</div>
			</div>
			<h1 className="text-center text-4xl md:text-5xl font-bold text-white mt-10 uppercase relative z-10">GLOBALISASYON VS INTERNALISASYON</h1>
		</section>
	);
}

function Section6() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-2.png')] bg-no-repeat bg-cover bg-center bg-[#40534C] snap-start pt-20">
			<div className="flex items-center justify-center">
				<div className="w-4/6">
					<img src="/lesson3_imgs/s6.png" alt="" />
				</div>
			</div>
			<div className="text-center ">
				<h1 className="text-4xl md:text-5xl font-bold text-white mt-10 uppercase">PINAGMULAN NG GLOBALISASYON</h1>
				<h2 className="text-xl md:text-2xl font-semibold text-white mt-5 uppercase">{"(International Trading Systems)"}</h2>
			</div>
		</section>
	);
}

function Section7() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-2.png')] bg-no-repeat bg-cover bg-center bg-[#49243E] snap-start pt-20">
			<h1 className="pl-20 text-4xl md:text-5xl font-bold text-white mt-10 uppercase">Silk Road {"(Silk Route)"}</h1>
			<div className="flex items-center justify-evenly p-5">
				<div className="w-1/2">
					<img src="/lesson3_imgs/s7.png" alt="" />
				</div>
				<article className="leading-relaxed grid gap-10 text-white text-2xl p-5">
					<p>• first global trade route in history</p>
					<p>• 1,500 years: 130 B.C.E. until 1453 C.E.</p>
					<p>• 6,437 kilometers (4,000 miles)</p>
				</article>
			</div>
			<article className="text-white text-2xl px-20 text-justify">
				• It is hard to overstate the importance of the Silk Road on history. Religion and ideas spread along the Silk Road just as fluidly as
				goods. Towns along the route grew into multicultural cities. The exchange of information gave rise to new technologies and innovations
				that would change the world.
			</article>
		</section>
	);
}

function Section8() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-2.png')] bg-no-repeat bg-cover bg-center bg-[#2E236C] snap-start pt-20">
			<h1 className="text-center text-4xl md:text-5xl font-bold text-white mt-10 uppercase">GALLEON TRADE</h1>
			<div className="flex items-center justify-center p-10">
				<div className="grid gap-10 text-white text-2xl pl-20 text-justify leading-relaxed w-1/2">
					<p>• Took place during the age of mercantilism (16th-18th century)</p>
					<p className="leading-relaxed text-justify">
						• Spanish sailing vessel that made an annual round trip (one vessel per year) across the Pacific between Manila, in the
						Philippines, and Acapulco, in present Mexico, during the period 1565-1815. They were the sole means of communication between
						Spain and its Philippine colony and served as an economic lifeline for the Spaniards in Manila.
					</p>
				</div>
				<div className="w-1/2 flex items-center justify-center">
					<div className="w-3/5">
						<img src="/lesson3_imgs/s8.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}

function Section9() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-3.png')] bg-no-repeat bg-cover bg-center bg-[#31363F] snap-start pt-20">
			<div className="flex items-center justify-center">
				<div className="w-1/2  flex items-center justify-end">
					<div className="w-4/5">
						<img src="/lesson3_imgs/s9.png" className="" alt="" />
					</div>
				</div>
				<div className="w-1/2 text-white text-2xl text-justify ">
					<p className="px-10 leading-loose">
						Provides the institutional framework for determining the rules and procedures for international payments, determination of
						exchange rates, and movement of capital.
					</p>
				</div>
			</div>
			<h1 className="text-center text-4xl md:text-5xl font-bold mt-16 text-white uppercase">INTERNATIONAL MONETARY SYSTEM</h1>
		</section>
	);
}

function Section10() {
	return (
		<section className="h-screen bg-[url('/lesson3_imgs/s10-bg.png')] text-black bg-no-repeat bg-cover bg-center bg-[#B9B4C7] snap-start pt-20">
			<h1 className="text-center text-4xl md:text-5xl font-bold mt-16 uppercase">ERA OF BIMETALLISM</h1>
			<div className="flex items-center pt-10">
				<div className="w-1/2 flex items-center justify-center">
					<img src="/lesson3_imgs/s10.png" alt="" className="w-3/4" />
				</div>
				<article className="w-1/2 ">
					<p className="text-2xl text-justify px-10 leading-[2.5]">
						• before 1870, where both gold and silver coins were used as the international modes of payment. The exchange rates among
						currencies were determined by their gold or silver contents. Some countries were either on a gold or a silver standard.
					</p>
				</article>
			</div>
		</section>
	);
}
