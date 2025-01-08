export default function Section5() {
	const cards = [
		{ img: "", title: "Localization", article: "Is the adaptation of a particular product or service to one of those markets" },
		{ img: "", title: "Globalization", article: "Refers to the processes by which a company brings its business to the rest of the world." },
		{
			img: "",
			title: "Internationalization",
			article: "Is the practice of designing products, services and internal operations to facilitate expansion into international markets.",
		},
	];

	return (
		<section>
			<h1>GLOBALISASYON VS INTERNALISASYON</h1>
			<div>
				{cards.map((card) => (
					<Section5Card key={card.title} articleImg={card.img} article={card.article} title={card.title} />
				))}
			</div>
		</section>
	);
}

function Section5Card({ articleImg, article, title }: { articleImg: string; article: string; title: string }) {
	return (
		<>
			<div>
				<div>
					<img src={articleImg} width={500} height={500} alt={articleImg} />
				</div>
				<article>
					<h2 className="uppercase">{title}</h2>
					<p>{article}</p>
				</article>
			</div>
		</>
	);
}
