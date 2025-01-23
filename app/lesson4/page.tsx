"use client";
import { LeftAnim, RightAnim, TopAnim } from "@/components/anim/Animation";
import { Img, Section, Temps, textStyle, titleStyle, imgStyle, center, imgSmallStyle, containerStyle } from "./components";

export default function lesson4() {
	return (
		<div className="max-w-screen-2xl mx-auto overflow-x-hidden bg-[#181C14]">
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
		<Section className="sm:bg-[#D0D5CE] bg-[#D0D5CE] text-black sm:flex-col gap-10 sm:h-screen">
			<TopAnim values="100" duration={1.2} className="w-full flex flex-col gap-5 items-center">
				{/* <img src="/lesson4_imgs/s1-img.png" alt="MARKET INTEGRATION" className="w-full sm:w-3/4 lg:w-4/6 rounded-2xl" /> */}
				<img src="/lesson4_imgs/s1-img.png" alt="MARKET INTEGRATION" className="w-full sm:w-3/4 lg:w-4/6 rounded-2xl" />
				<div className="flex flex-col sm:flex-row gap-5 sm:gap-0">
					<h1 className={`${titleStyle} ${center} text-2xl sm:text-4xl lg:text-5xl xl:text-6xl`}>MARKET INTEGRATION</h1>
					<p className={`sm:w-1/2 sm:text-lg bg-[#FFFFFF] p-2 rounded-lg`}>
						A macroeconomics concept that involves the interconnectivity of prices across different locations or related goods. It can
						lead to more competition, better product quality, and increased efficiency in the market.
					</p>
				</div>
			</TopAnim>
		</Section>
	);
}

function Section2() {
	return (
		<Section className="sm:h-screen">
			<LeftAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<Img src="/lesson4_imgs/s2-img-1.png" alt="MARKET INTEGRATION" cImgStyle={``} cContainerStyle={``} />
			</LeftAnim>
			<RightAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<h1 className={`${titleStyle}`}>MARKET INTEGRATION</h1>
				<p className="text-justify tracking-widest text-[#28FF85]">
					Is a macroeconomics concept that involves the interconnectivity of prices across different locations or related goods. It can lead
					to more competition, better product quality, and increased efficiency in the market.
				</p>
				<div className="w-full flex justify-center items-center gap-5">
					<img src="/lesson4_imgs/s2-img-2.png" alt="MARKET INTEGRATION" className={`${imgSmallStyle}`} />
				</div>
			</RightAnim>
		</Section>
	);
}

function Section3() {
	return (
		<Section className="bg-[#23291C] sm:h-screen">
			<LeftAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<h1 className={`${titleStyle}`}>MARKET</h1>
				<p>A regular gathering of people for the purchase and sale of provisions, livestock, and other commodities.</p>
				<div className={`flex justify-center items-center `}>
					<img src="/lesson4_imgs/s3-img-1.png" alt="Shopping Cart" className={`${imgSmallStyle}`}></img>
					<img src="/lesson4_imgs/s3-img-2.png" alt="$ sign" className={`${imgSmallStyle}`}></img>
				</div>
			</LeftAnim>
			<RightAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<Img src="/lesson4_imgs/s3-img-3.png" alt="MARKET" cImgStyle={`${imgStyle}`} cContainerStyle={``}></Img>
			</RightAnim>
		</Section>
	);
}

function Section4() {
	return (
		<Section className="sm:flex-col sm:h-screen">
			<TopAnim values="10" duration={1.2} className={`${center} w-full flex flex-col gap-5`}>
				<Img
					src="/lesson4_imgs/s4-img.png"
					alt="PERFECT COMPETITION"
					cImgStyle={`w-[50%] sm:w-1/4 md:w-1/5 lg:w-1/5 xl:w-1/5`}
					cContainerStyle={`w-1/2`}
				/>
				<h1 className={`${titleStyle} py-5`}>PERFECT COMPETITION</h1>
				<p className={`text-[#24E1B5] p-2`}>
					Occurs when all companies sell identical products, market share doesn&apos;t influence price, companies can enter or exit without
					barriers, buyers have perfect or full information, and companies can&apos;t determine prices.
				</p>
			</TopAnim>
		</Section>
	);
}

function Section5() {
	return (
		<Section className="bg-[#23291C] sm:h-screen">
			<LeftAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<h1 className={`${titleStyle} text-[#74DD23]`}>MONOPOLISTIC COMPETITION</h1>
				<p>
					Is a market structure where many companies compete for market share by offering similar but differentiated products. In this type
					of market, each company operates independently and none have a monopoly.
				</p>
			</LeftAnim>
			<RightAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<Img src="/lesson4_imgs/s5-img.png" alt="MONOPOLISTIC COMPETITION" cImgStyle={`${imgStyle}`} cContainerStyle={``} />
			</RightAnim>
		</Section>
	);
}

function Section6() {
	return (
		<Section className="sm:h-screen">
			<LeftAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<Img src="/lesson4_imgs/s6-img.png" alt="OLIGOPOLY COMPETITION" cImgStyle={``} cContainerStyle={``} />
			</LeftAnim>

			<RightAnim values="100" duration={1.2} className={`${containerStyle}`}>
				<h1 className={`${titleStyle} ${center}`}>OLIGOPOLY COMPETITION</h1>
				<p className={`text-[#BFBD1C]`}>
					Can be limited by a few factors, including: Price wars, High fixed costs, Collusion, Research and development, Kinked demand
					curved, interdependence. Large firms in an oligopoly often avoid price wars and instead compete through other methods.
				</p>
			</RightAnim>
		</Section>
	);
}

function Section7() {
	const TYPESOFMARKETS = [
		{
			title: "UNDERGROUND MARKET",
			content:
				"An underground market can refer to a physical or virtual space where illegal or  unregulated goods and services are bought and sold.",
		},
		{
			title: "FINANCIAL MARKET",
			content: "Financial market is a market in which people trade financial securities and derivatives at low  transaction cost.",
		},
		{
			title: "AUCTION MARKET",
			content:
				"An auction market is a trading center where the price of an asset is determined by the highest  bid from a buyer and the lowest offer from a seller.  In an Auction Market, buyers and sellers submit bids and offers simultaneously, and matching bids and offers are  executed.",
		},
	];
	return (
		<Section className="bg-[#23291C] sm:flex-col justify-center items-center">
			<TopAnim values="100" duration={1.6} className={`${containerStyle}`}>
				<h1 className={`${titleStyle} ${center} text-[#F9FD00]`}>TYPES OF MARKETS</h1>
			</TopAnim>

			<div className="flex flex-col sm:flex-row gap-10 flex flex-col items-center sm:items-stretch justify-center">
				{TYPESOFMARKETS.map((market, index) => (
					<Card key={index} title={market.title} content={market.content} index={index} />
				))}
			</div>
		</Section>
	);

	function Card({ title, content, index }: { title: string; content: string; index: number }) {
		return (
			<TopAnim values={`50`} duration={(index + 1) * 0.5} className={`${containerStyle} text-black`}>
				<h1 className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal ${center} bg-[#D9D9D9] rounded-lg p-2`}>{title}</h1>
				<p className={`text-base min-h-fit h-[80%] sm:text-lg lg:text-xl xl:text-2xl p-2 bg-[#D9D9D9] rounded-lg p-2`}>{content}</p>
			</TopAnim>
		);
	}
}

function Section8() {
	const DATA = [
		{
			title: "ECONOMIC INTEGRATION",
			article:
				"Is an arrangement among nations that typically includes the reduction or elimination of  trade barriers and the coordination of monetary and fiscal policies.",
		},
		{
			title: "TARRIFS",
			article:
				"Tariffs are a form of foreign trade regulation that protects domestic industries and promotes them. They  can vary from product to product and are specific to each trade relationship between the countries  involved.",
		},
	];
	return (
		<Section className={`sm:h-fit flex sm:flex-col gap-10 my-20`}>
			<LeftAnim values="100" duration={1.2}>
				<Content title={DATA[0].title} article={DATA[0].article} index={0} />
			</LeftAnim>
			<RightAnim values="100" duration={1.2}>
				<Content title={DATA[1].title} article={DATA[1].article} index={1} />
			</RightAnim>
		</Section>
	);
	function Content({ title, article, index }: { title: string; article: string; index: number }) {
		return (
			<div className="flex flex-col sm:flex-row gap-5">
				<h1 className={`text-2xl sm:text-4xl ${center} font-normal text-center sm:w-1/6`}>{title}</h1>
				<Img src={`/lesson4_imgs/s8-img-${index + 1}.png`} alt={title} cImgStyle={`w-2/6`} cContainerStyle={`w-full`} />
				<p className={`w-4/6 px-10 ${textStyle}`}>{article}</p>
			</div>
		);
	}
}

function Section9() {
	const DATA1 = [
		{
			title: "Positive Effects",
			article:
				"Protect domestic industries Tariffs can help protect domestic industries, especially new ones, from foreign  competition.   Increase government revenue Tariffs can generate revenue for the government. Manage balance of trade Tariffs can help manage a country's balance of trade.",
		},
		{
			title: "Negative Effects",
			article:
				"Increase production costs Tariffs can increase the cost of production. Lead to inflation Tariffs can lead to  inflation. Spur trade wars Tariffs can lead to trade wars, where countries retaliate with their own tariffs.   Hurt domestic consumers Tariffs can hurt domestic consumers by making imported goods more expensive.  Make domestic industries less efficient Tariffs can make domestic industries less efficient and innovative  by reducing competition.",
		},
	];

	const DATA2 = [
		{
			title: "Positive Integration",
			article: "Positive integration is where common rules are provided by a higher authority  to iron out regional and other inequalities.",
		},
		{
			title: "Negative  Integration",
			article: "Negative integration refers to barriers between countries being removed.",
		},
	];

	return (
		<Section className={`sm:h-auto flex sm:flex-col gap-20 px-5 py-10`}>
			<LeftAnim values="100" duration={1.6} className="flex flex-col gap-10">
				<h1 className={`${center} ${titleStyle} font-normal`}>Tariffs has both Positive and Negative effects on a nation&apos;s economy</h1>
				<div className="flex flex-col sm:flex-row gap-10">
					{DATA1.map((data, index) => (
						<Content key={index} title={data.title} article={data.article} index={index + 1} />
					))}
				</div>
			</LeftAnim>
			<RightAnim values="100" duration={1.6} className="bg-[#181C14] flex flex-col gap-10 ">
				<h1 className={`${titleStyle} ${center}`}>TWO TYPES OF INTEGRATION</h1>
				<div className="flex flex-col sm:flex-row gap-10 ">
					{DATA2.map((data, index) => (
						<Content key={index} title={data.title} article={data.article} index={index + 3} />
					))}
				</div>
			</RightAnim>
		</Section>
	);

	function Content({ title, article, index }: { title: string; article: string; index: number }) {
		return (
			<div className="sm:w-1/2 flex flex-col gap-5">
				<h1 className={`text-2xl sm:text-4xl ${center} font-normal text-center `}>{title}</h1>
				<Img src={`/lesson4_imgs/s9-img-${index}.png`} alt={title} cImgStyle={`w-2/6`} cContainerStyle={``} />
				<p className={`w-4/6 px-10 w-full text-justify text-base sm:text-lg lg:text-xl xl:text-2xl`}>{article}</p>
			</div>
		);
	}
}

function Section10() {
	const DATA = [
		{
			title: "PREFERENTIAL AGREEMENT",
			article:
				"An agreement between two or more countries that reduces barriers to trade and gives preferential  treatment to each other's goods and services.",
		},
		{
			title: "FREE TRADE AREA",
			article:
				"A free - trade agreement made between countries, where the countries agree to trade freely among  themselves but are able to trade with other countries outside of the free-trade area in whatever way they  wish.",
		},
		{
			title: "CUSTOM UNION",
			article:
				"A custom union is an agreement made between countries where the countries agreed to trade freely  among themselves, and they also agreed to adopt common external barriers against any country  attempting to import into the custom union.",
		},
		{
			title: "COMMON MARKET",
			article:
				"A common market is a custom union with common policies on product regulation, and free movement of  goods, services, capital, and labor.",
		},
		{
			title: "ECONOMIC UNION",
			article: "An economic / monetary union is a common market with a common currency and a common central bank.",
		},
		{
			title: "COMPLETE ECONOMIC INTEGRATION",
			article:
				"The final stage of economic integration, where there is complete monetary union and fiscal policy  harmonization, and the integrated units have little to no control over economic policy.",
		},
		{
			title: "LAW OF ONE PRICE",
			article:
				"The Law of One Price (LOP) states that the price of a product should be the same in different locations  when expressed in a common currency. The LOP is a key component of international economics, and is  generally applicable to a wide range of goods, assets, and securities.  The law of one price (LOP) is an economic theory that states that identical goods should be sold for the  same price in different locations when expressed in a common currency. This is true under conditions of  free competition, price flexibility, and when trade frictions are absent.  The LOP is a good approximation for the prices of some globally traded goods and financial products, such  as crude oil, rubber, foreign exchange, corporate shares, and inter-bank loans. However, empirical studies  show that the LOP doesn't accurately describe most markets.",
		},
		{
			title: "PURCHASING POWER",
			article:
				"Purchasing power is the amount of goods and services that can be purchased with a specific amount of  money or currency unit. It's also known as a currency's buying power.",
		},
		{
			title: "PURCHASING POWER PARITY",
			article:
				"Is a way to compare the purchasing power of different currencies by measuring the price of the same  goods and services in different countries.",
		},
	];

	return (
		<Section className={`sm:h-max flex sm:flex-col gap-20 px-5 my-20`}>
			{DATA.map((data, index) => (
				<Temps
					key={index}
					title={data.title}
					article={data.article}
					src={`/lesson4_imgs/s10-img-${index + 1}.png`}
					tempNo={index % 2 == 0 ? 1 : 2}
				/>
			))}
		</Section>
	);
}
