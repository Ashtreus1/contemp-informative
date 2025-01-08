"use client";

import { useState } from "react";
import HomepageCard from "./HomepageCard";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

export default function HomepageHero() {
	const [title, setTitle] = useState("What is Globalization");
	const [desc, setDesc] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus euismod mi, nec ullamcorper nunc gravida in. Fusce vitae tincidunt nulla. Phasellus malesuada, quam ac dictum euismod, dui sapien cursus ipsum, eu imperdiet enim ante vel erat."
	);

	return (
		<div className="min-h-screen flex items-center justify-between p-6">
			
			<div className="flex flex-col items-start justify-center w-1/2">
				<h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
				<p className="mt-4 text-lg md:text-xl">{desc}</p>

				<div className="mt-8 flex gap-4">
					<Button size="icon" className="flex items-center justify-center w-24 h-12 rounded-full border border-white bg-transparent">
						<Bookmark size={64}/>
					</Button>
					<Button
						size="lg"
						className="flex items-center justify-center w-64 h-12 text-gray-200 bg-transparent border border-white rounded-full hover:bg-gray-200 hover:text-[#1e1e1e] transition-colors"
					>
						<span>Learn More</span>
					</Button>
				</div>
			</div>

		</div>
	);
}

/**
 * 
			<div className="flex items-center justify-center w-1/2">
				<HomepageCard cardImg="/card1.png" />
			</div>
 */