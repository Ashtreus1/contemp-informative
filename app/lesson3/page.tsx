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
		<section className="h-screen bg-[url('/lesson3_imgs/bg-2.png')] bg-no-repeat bg-cover bg-center snap-start">
			<div>{/* image */}</div>
			<h1>PINAGMULAN NG GLOBALISASYON</h1>
			<h2>{"(International Trading Systems)"}</h2>
		</section>
	);
}

function Section7() {
	return (
		<section className="h-screen">
			<h1>Silk Road {"(Silk Route)"}</h1>
			<div>
				<div>
					<div>{/* image */}</div>
					<p>• first global trade route in history</p>
					<p>• 1,500 years: 130 B.C.E. until 1453 C.E.</p>
					<p>• 6,437 kilometers (4,000 miles)</p>
				</div>
			</div>
			<div>
				• It is hard to overstate the importance of the Silk Road on history. Religion and ideas spread along the Silk Road just as fluidly as
				goods. Towns along the route grew into multicultural cities. The exchange of information gave rise to new technologies and innovations
				that would change the world.
			</div>
		</section>
	);
}

function Section8() {
	return (
		<section className="h-screen">
			<h1>GALLEON TRADE</h1>
			<div>
				<div>
					<p>{"Took place during the age of mercantilism (16th-18th century)"}</p>
					<p>
						Spanish sailing vessel that made an annual round trip (one vessel per year) across the Pacific between Manila, in the
						Philippines, and Acapulco, in present Mexico, during the period 1565-1815. They were the sole means of communication between
						Spain and its Philippine colony and served as an economic lifeline for the Spaniards in Manila.
					</p>
				</div>
				<div>{/* imgage */}</div>
			</div>
		</section>
	);
}

function Section9() {
	return (
		<section className="h-screen">
			<div>
				<div>{/* image */}</div>
				<div>
					<p>
						Provides the institutional framework for determining the rules and procedures for international payments, determination of
						exchange rates, and movement of capital.
					</p>
				</div>
			</div>
			<h1>INTERNATIONAL MONETARY SYSTEM</h1>
		</section>
	);
}
