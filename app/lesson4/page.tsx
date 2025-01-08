import Header from "../../components/homepage/Header";
import Section5 from "./Section5";

export default function Lesson4Main() {
	return (
		<div>
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
		<section className="h-screen">
			<div>{/* images */}</div>
			<h1>Pandaigdigang Ekonomiya</h1>
		</section>
	);
}

function Section2() {
	return (
		<section className="h-screen">
			<div>{/* image */}</div>
			<article>
				<h2>Pandaigdigang Ekonomiya</h2>
				<p>
					It is the result of human innovation and technological progress. It is characterized by the increasing integration of economies
					around the world through the movement of goods, services, and capital across borders. (IMF, 2008).
				</p>
			</article>
		</section>
	);
}

function Section3() {
	return (
		<section className="h-screen">
			<article>
				<h2>ECONOMICS</h2>
				<p>
					a social science that focuses on the production, distribution, and consumption of goods and services, and analyzes the choices
					that individuals, businesses, governments, and nations make to allocate resources.
				</p>
			</article>
		</section>
	);
}

function Section4() {
	return (
		<section className="h-screen">
			<div>{/* image */}</div>
			<h1>GLOBALISASYON VS INTERNALISASYON</h1>
		</section>
	);
}

function Section6() {
	return (
		<section className="h-screen">
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
