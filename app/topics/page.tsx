import Link from "next/link";
import Header from "@/components/homepage/Header";
export default function Topics() {
	const topics = [
		{ title: "Globalisasyon", url: "/lesson1" },
		{ title: "State", url: "/Lesson2" },
		{ title: "Pandaigdigang Ekonomiya ", url: "/lesson3" },
		{ title: "Market Integration", url: "/lesson4" },
		{ title: "SDG Goals", url: "/lesson5" },
	];

	return (
		<div className="min-h-screen items-center justify-center pt-20">
			<Header />
			<h1 className="text-4xl md:text-5xl font-bold text-center">Topics</h1>
			<div className="flex gap-20 flex-col md:flex-row items-center justify-center mt-20 hover:cursor-pointer font-semibold text-xl">
				{topics.map((topic) => (
					<div key={topic.title} className=" hover:text-cyan-400 transition-colors">
						<Link href={topic.url}>{topic.title}</Link>
					</div>
				))}
			</div>
		</div>
	);
}
