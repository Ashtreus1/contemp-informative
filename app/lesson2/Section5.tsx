"use client";
import Section  from "./Section";
import { LeftAnim } from "@/components/anim/Animation";

export const TextStyle = "text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl";
export const HeaderStyle = `text-gray-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`;

const DATA = [
	{
		title: "International Non-Governmental Organizations (INGOs)",
		article:
			"These are non-profit organizations operating across borders to address global issues such as human rights, environmental protection, and development aid. Examples include Amnesty International and Greenpeace.",
	},
	{
		title: "Multinational Corporations (MNCs)",
		article:
			"Large companies operating in multiple countries, influencing global trade and economic policies. MNCs can drive economic growth, but they also raise concerns about labor practices, environmental impact, and corporate influence on local governments.",
	},
	{
		title: "Religious Organizations",
		article:
			"Entities that operate internationally to promote religious beliefs and practices. These organizations can influence international relations through advocacy, humanitarian aid, and interfaith dialogue.",
	},
	{
		title: "Private Individuals",
		article:
			"Influential figures or groups that can impact international relations through advocacy, diplomacy, or economic means. Examples include philanthropists, activists, and cultural ambassadors.",
	},
	{
		title: "Theory in International Relations",
		article: "",
	},
	{
		title: "Realism",
		article:
			"A theory focusing on the competitive and conflictual aspects of international relations, emphasizing state sovereignty and national interest. Realists believe that international politics is governed by anarchy and that states must rely on their power to secure their interests.",
	},
	{
		title: "Liberalism",
		article:
			"A perspective highlighting cooperation among states, international institutions, and the importance of global governance and human rights. Liberals argue that international cooperation is possible through institutions, economic interdependence, and the spread of democratic values.",
	},
	{
		title: "Interdependence",
		article:
			"The idea that states and their fortunes are inextricably linked, promoting cooperation due to mutual benefits and shared interests. This theory suggests that the costs of conflict are high due to economic and social connections, encouraging peaceful interactions.",
	},
	{
		title: "Dependence",
		article:
			"A theory addressing how less powerful states are economically and politically reliant on more powerful states, often leading to inequality and exploitation. Dependency theorists highlight the structural inequalities in the global system that perpetuate the dominance of developed countries over developing ones.",
	},
	{
		title: "",
		article:
			"By understanding these components and theories, one gains a comprehensive view of how the global interstate system functions and its implications on international relations.",
	},
];

function Content({ title, article }: { title: string; article: string }) {
	return (
		<LeftAnim values="100" duration={1.2}>
			<div className="flex flex-col gap-5">
				<h1 className={`${HeaderStyle}`}>{title}</h1>
				<p className={`${TextStyle}`}>{article}</p>
			</div>
		</LeftAnim>
	);
}

export default function Section5() {
	return (
		<div>
			<Section className="bg-[url(/lesson2_imgs/s5-bg.png)] relative">
				<div
					className="overflow-y-scroll bg-slate-900 py-5 px-5 sm:px-20 sm:p-10 sm:pt-20 flex flex-col gap-10
					[&::-webkit-scrollbar]:w-2 relative
					[&::-webkit-scrollbar-track]:bg-cyan-600
					[&::-webkit-scrollbar-thumb]:bg-cyan-300"
				>
					{DATA.map(({ title, article }) =>
						title.includes("Theory in International Relations") ? (
							<LeftAnim
								values="100"
								duration={1.2}
								className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center`}
								key={title}
							>
								Theories in International Relations
							</LeftAnim>
						) : (
							<Content key={title} title={title} article={article} />
						)
					)}
				</div>
			</Section>
		</div>
	);
}
