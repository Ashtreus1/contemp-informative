"use client";

import { useState } from "react";
import React from "react";
import Homepagedesc from "./HomepageLeft";

export default function Homepage() {
	const [bg, setbg] = useState("app/src/assets/homepagebg.png");
	const [title, setTitle] = useState("WHAT IS GLOBALIZATION?");
	const [desc, setDesc] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus euismod mi, nec ullamcorper nunc gravida in. Fusce vitae tincidunt nulla. Phasellus malesuada, quam ac dictum euismod, dui sapien cursus ipsum, eu imperdiet enim ante vel erat."
	);
	return (
		<div className="min-h-screen bg-cover bg-no-repeat bg-size-contain flex h-screen mx-auto" style={{ backgroundImage: `url(${bg})` }}>
			<Homepagedesc title={title} desc={desc} />
			<div className="w-2/3"></div>
		</div>
	);
}
