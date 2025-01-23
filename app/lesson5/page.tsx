"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { LeftAnim, RightAnim } from "@/components/anim/Animation";

export const textStyle = "w-full text-base md:text-lg lg:text-xl";
export const titleStyle = "w-full font-fjalla font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl";
const articleStyle = "w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-20 text-left font-mont gap-5 text-white p-4 xl:p-20";
const imgContainerStyle = "w-full lg:w-1/2 flex justify-center items-center";
const imgStyle = "w-4/6 sm:5/6";
// const sectionContainerStyle = "h-screen flex items-center justify-center flex-col lg:flex-row gap-4 md:gap-8";
const sectionContainerStyle = "h-screen flex items-center justify-center flex-col lg:flex-row gap-4 md:gap-8";
const duration = 1.2;

const DATASEC1 = {
	title: "What are SDG Goals?",
	article:
		"The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, offers a comprehensive vision for global peace and prosperity. At its core are the 17 Sustainable Development Goals (SDGs), which serve as a call to action for countries around the world, both developed and developing, to work together towards a better future. These goals emphasize the interconnectedness of ending poverty, improving health and education, reducing inequality, and fostering economic growth, all while addressing climate change and preserving our oceans and forests. The SDGs are a shared commitment to ensuring a sustainable, equitable world for current and future generations.",
};
const DATA = [
	{
		title: "SDG 1: POVERTY",
		article: [
			"No Poverty aims to eradicate all poverty by 2030, emphasizing resilience to economic shocks, natural disasters, and climate change. However, progress has been uneven, with 93 million more people in extreme poverty due to COVID-19. Addressing issues like economic inequality and climate change is crucial. It requires a comprehensive strategy to tackle economic inequality, social protection, and limited access to essential services. Strategies like high-quality education, financial inclusion, social security, and affordable healthcare can reduce poverty and promote sustainable development.",
		],
		bgcolor: "bg-[#E5243B]",
	},
	{
		title: "SDG 2: ZERO HUNGER",
		article: [
			"Zero Hunger seeks to eliminate hunger, attain food security, enhance nutrition, and advance sustainable agriculture in the year 2030. Its main objectives are to promote small-scale farmers, provide wholesome food, and use resilient farming methods. ",
			"To end hunger, reduce malnutrition, increase agricultural output, promote sustainable food production, preserve genetic diversity, and combat environmental degradation, economic instability, and climate change.",
		],
		bgcolor: "bg-[#DDA73A]",
	},
	{
		title: "SDG 3: Good Health and Well-being",
		article: [
			"SDG 3 seeks to advance health and well-being by 2030, By decreasing global mortality rates, putting an end to epidemics, enhancing mental health, and attaining universal health coverage. Reducing maternity and infant mortality, avoiding infectious infections, and increasing access to healthcare have all seen advancements. But there are still obstacles to overcome in the fight against the COVID-19 pandemic and non-communicable illnesses. It is important to address disparities in healthcare access.",
			"Governments must address socioeconomic determinants of health, increase preventative care, achieve universal health coverage, and strengthen healthcare systems, while also addressing societal issues like road safety and sanitation.",
		],
		bgcolor: "bg-[#4C9F38]",
	},
	{
		title: "SDG 4: Quality Education",
		article: [
			"The goal of Quality Education, which aims to ensure that everyone has access to inclusive and equitable quality education, is to provide possibilities for lifelong learning in order to empower individuals and reduce inequality.",
			"The initiative aims to provide free, high-quality education to all children, expand early childhood options, eliminate gender inequality, and equip individuals with necessary skills for employment and self-employment.",
		],
		bgcolor: "bg-[#C5192D]",
	},
	{
		title: "SDG 5: Gender Equality",
		article: [
			"The Gender Equality aims to empower women and girls globally. Progress has been made in women's political engagement and schooling, but issues like leadership shortages, unequal unpaid care, and gender-based violence remain. Achieving complete gender equality by 2030 remains a significant global challenge.",
			"Thus, to stop all forms of violence against women and girls, such as domestic abuse, sexual exploitation, and human trafficking. Despite advancements in legislative reforms and awareness efforts, it need complete legal frameworks, improved enforcement, and societal improvements.",
		],
		bgcolor: "bg-[#FF3A21]",
	},
	{
		title: "SDG 6: Clean Water and Sanitation",
		article: [
			"Clean Water and Sanitation, aims for universal access and sustainable water management by 2030. Despite progress, issues like water pollution and climate change persist. Innovations in wastewater treatment, conservation, and infrastructure are needed.",
			"Lowering diseases like malaria, Tuberculosis, and HIV/AIDS, but problems like health disparities, the emergence of non-communicable diseases, and international health crises like COVID-19 still exist. ",
		],
		bgcolor: "bg-[#26BDE2]",
	},
	{
		title: "SDG 7: Affordable and Clean Energy",
		article: [
			"By increasing the use of renewable energy, enhancing energy efficiency, and extending access to power and clean cooking options, especially in developing nations, To provide cheap, dependable, and sustainable energy for everyone.",
			"Enhancing public health, investments in solar, wind, and hydro power lessen reliance on fossil fuels. International organizations, the commercial sector, and governments must work together.",
		],
		bgcolor: "bg-[#FCC30B]",
	},
	{
		title: "SDG 8: Decent Work and Economic Growth",
		article: [
			"Economic growth and decency are promoted by policies that guarantee innovation, sustainable business practices, and fair access to decent employment opportunities for all groups. While gender gaps in the job market continue to exist, youth unemployment is also a significant problem, especially in developing nations.",
			"Inclusive policies for workers' rights, fair salaries, job creation, and sustainable economic growth are crucial, requiring educational investments, entrepreneurship, support for small businesses, social safety nets, and gender equality.",
		],
		bgcolor: "bg-[#A21942]",
	},
	{
		title: "SDG 9: Industry, Innovation, and Infrastructure",
		article: [
			"This goal seeks to build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation. It highlights the importance of investing in infrastructure that can withstand global challenges, including climate change, and supports technological progress. SDG 9 encourages the development of sustainable industries, fostering innovation, and supporting small and medium-sized enterprises.",
			"Governments and businesses can prioritize the development of infrastructure that supports economic growth and environmental sustainability, such as clean energy grids, sustainable transport systems, and climate-resilient buildings.",
		],
		bgcolor: "bg-[#FD6925]",
	},
	{
		title: "SDG 10: Reduced Inequalities",
		article: [
			"SDG 10 calls for the reduction of inequalities within and among countries. It advocates for policies that promote social, economic, and political inclusion. The goal seeks to empower marginalized groups, reduce income disparities, and address discrimination in all its forms to create societies where everyone has equal opportunities.",
			"Ensuring that job creation, education, and healthcare are accessible to marginalized groups can reduce income inequality and promote equal opportunities.",
		],
		bgcolor: "bg-[#DD1367]",
	},
	{
		title: "SDG 11: Sustainable Cities and Communities",
		article: [
			"This goal emphasizes making cities and human settlements inclusive, safe, resilient, and sustainable. SDG 11 promotes sustainable urbanization by addressing issues like affordable housing, access to public transport, and urban planning that minimizes environmental impact. It also focuses on disaster risk reduction, ensuring that cities can withstand future challenges like climate change and natural disasters.",
			"Governments and private developers can work together to create affordable, well planned housing for growing urban populations, reducing slums and ensuring safe living conditions.",
		],
		bgcolor: "bg-[#F99D25]",
	},
	{
		title: "SDG 12: Responsible Consumption and Production",
		article: [
			"SDG 12 encourages sustainable consumption and production patterns, aiming to reduce the ecological footprint of human activity. It focuses on reducing waste, increasing resource efficiency, and promoting the use of sustainable materials. This goal advocates for the responsible use of resources to ensure that future generations can meet their needs without depleting the planet's resources.",
			"Governments and organizations can invest in campaigns to raise awareness of the environmental impact of consumer choices and promote responsible consumption, such as reducing food waste and using eco-friendly products.",
		],
		bgcolor: "bg-[#BF8B2E]",
	},
	{
		title: "SDG 13: Climate Action",
		article: [
			"SDG 13 focuses on taking urgent action to combat climate change and its impacts. This involves reducing greenhouse gas emissions, increasing climate resilience, and promoting sustainable practices to minimize environmental damage. The goal also emphasizes the importance of international cooperation and financing to support climate change mitigation and adaptation efforts.",
			"Governments can introduce policies such as carbon taxes, emissions trading systems, and renewable energy incentives to reduce greenhouse gas emissions from industries, transport, and power generation.",
		],
		bgcolor: "bg-[#3F7E44]",
	},
	{
		title: "SDG 14: Life Below Water",
		article: [
			"SDG 14 aims to conserve and sustainably use the oceans, seas, and marine resources for sustainable development. It focuses on reducing marine pollution, protecting marine biodiversity, and promoting sustainable fishing practices. This goal recognizes the vital role oceans play in maintaining life on Earth and ensuring the well-being of future generations.",
			"Governments can implement stricter regulations on plastic waste, oil spills, and industrial pollutants entering the oceans, while promoting waste recycling programs.",
		],
		bgcolor: "bg-[#0A97D9]",
	},
	{
		title: "SDG 15: Life on Land",
		article: [
			"SDG 15 is dedicated to protecting, restoring, and promoting the sustainable use of terrestrial ecosystems. This includes efforts to combat desertification, halt biodiversity loss, and protect forests and other vital habitats. The goal encourages the sustainable management of land and natural resources to ensure a healthy planet for future generations.",
			"Implementing policies to reduce deforestation, combat illegal logging, and restore degraded land can help preserve biodiversity and prevent habitat loss.",
		],
		bgcolor: "bg-[#56C02B]",
	},
	{
		title: "SDG 16: Peace, Justice, and Strong Institutions",
		article: [
			"SDG 16 aims to promote peace, justice, and strong institutions, with a focus on reducing violence, ensuring access to justice, and building accountable institutions. This includes strengthening the rule of law, addressing corruption, promoting human rights, and ensuring that governments and institutions are transparent and accountable to their citizens.",
			"Governments can implement strong anti-corruption laws and promote transparency in decision-making processes, ensuring that resources are allocated fairly and efficiently.",
		],
		bgcolor: "bg-[#00689D]",
	},
	{
		title: "SDG 17: Partnerships for the Goals",
		article: [
			"SDG 17 emphasizes the importance of global partnerships and cooperation to achieve all the other goals. It highlights the need for strengthened international collaboration, knowledge sharing, and resource mobilization, particularly for developing countries. This goal recognizes that achieving sustainable development requires partnerships among governments, the private sector, civil society, and international organizations.",
			"Promoting the exchange of technologies, innovation, and best practices between countries will help bridge the development gap and support sustainable growth worldwide. ",
		],
		bgcolor: "bg-[#19486A]",
	},
];

export default function Lesson5() {
	return (
		<div
			className="h-screen relative overflow-x-hidden max-w-screen-2xl mx-auto 
						[&::-webkit-scrollbar]:w-2
						[&::-webkit-scrollbar-track]:bg-slate-600
						[&::-webkit-scrollbar-thumb]:bg-slate-300"
		>
			<Section1 />
			<SDGS />
		</div>
	);
}

export function Section({ children, className }: any) {
	return <section className={`${sectionContainerStyle} ${className} `}>{children}</section>;
}

function Section1() {
	return (
		<Section className="h-screen flex flex-col lg:flex-row gap-4 py-20 md:gap-8 bg-[#303030]">
			<LeftAnim values="50" className="w-full lg:w-3/6 flex justify-center items-center" duration={duration}>
				<img src="/lesson5_imgs/s5-img-1.png" alt="SDG Goals" className="w-3/6 lg:w-5/6" />
			</LeftAnim>
			<RightAnim
				values="50"
				className={` w-full lg:w-1/2 flex flex-col justify-center p-4 xl:p-20 text-left font-mont gap-5 text-white`}
				duration={duration}
			>
				<h1 className={`${titleStyle}`}>{DATASEC1.title}</h1>
				<p className={`${textStyle}`}>{DATASEC1.article}</p>
			</RightAnim>
		</Section>
	);
}

function SDGS() {
	return (
		<div className="py-20">
			{DATA.map((item, index) =>
				index % 2 === 0 ? <Template1 key={index} index={index + 2} item={item} /> : <Template2 key={index} index={index + 2} item={item} />
			)}
		</div>
	);
}

function Template1({ item, index }: any) {
	return (
		<Section className={``}>
			<LeftAnim values="50" className={`${imgContainerStyle} `} duration={duration}>
				<img src={`/lesson5_imgs/s5-img-${index}.png`} alt={item.title} className={imgStyle} />
			</LeftAnim>
			<RightAnim values="50" className={`${articleStyle} ${item.bgcolor}`} duration={duration}>
				<h1 className={`${titleStyle} `}>{item.title}</h1>
				{item.article.map((i: any) => (
					<p key={i} className={`${textStyle}`}>
						{i}
					</p>
				))}
			</RightAnim>
		</Section>
	);
}

function Template2({ item, index }: any) {
	return (
		<Section className={`${item.color} flex-col-reverse`}>
			<LeftAnim values="50" className={`${articleStyle} ${item.bgcolor}`} duration={duration}>
				<h1 className={`${titleStyle}`}>{item.title}</h1>
				{item.article.map((i: any) => (
					<p key={i} className={`${textStyle} text-justify`}>
						{i}
					</p>
				))}
			</LeftAnim>
			<RightAnim values="50" className={imgContainerStyle} duration={duration}>
				<img src={`/lesson5_imgs/s5-img-${index}.png`} alt={item.title} className={imgStyle} />
			</RightAnim>
		</Section>
	);
}
