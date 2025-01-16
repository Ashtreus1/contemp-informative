export default function Section5() {
	const cards = [
		{
			img: "/lesson3_imgs/s5-1.png",
			title: "Localization",
			article: "Is the adaptation of a particular product or service to one of those markets",
		},
		{
			img: "/lesson3_imgs/s5-2.png",
			title: "Globalization",
			article: "Refers to the processes by which a company brings its business to the rest of the world.",
		},
		{
			img: "/lesson3_imgs/s5-3.png",
			title: "Internationalization",
			article: "Is the practice of designing products, services and internal operations to facilitate expansion into international markets.",
		},
	];

	return (
		<section className="h-screen bg-[url('/lesson3_imgs/bg-1.png')] bg-no-repeat bg-cover bg-center flex snap-start pt-20 bg-cyan-800">
			<div className=""></div>
			<h1 className="text-center text-4xl md:text-5xl font-bold text-white mt-10 uppercase flex items-center justify-center px-20">
				GLOBALISASYON VS INTERNALISASYON
			</h1>
			<div className="flex items-center justify-center">
				{cards.map((card) => (
					<Section5Card key={card.title} articleImg={card.img} article={card.article} title={card.title} />
				))}
			</div>
		</section>
	);

	function Section5Card({ articleImg, article, title }: { articleImg: string; article: string; title: string }) {
		return (
			<div className="w-1/3 h-full flex flex-col items-center space-y-4 p-2">
				<div>
					<img src={articleImg} width={500} height={500} alt={articleImg} />
				</div>
				<article className="border border-white p-2 h-1/3 ">
					{title !== "Internationalization" ? (
						<h2 className="uppercase text-center text-2xl font-bold">{title}</h2>
					) : (
						<h2 className="uppercase text-center text-xl font-bold">{title}</h2>
					)}
					<p className="text-center text-justify pt-2">{article}</p>
				</article>
			</div>
		);
	}
}
