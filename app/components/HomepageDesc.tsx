export default function HomepageDesc({ title, desc }: { title: string; desc: string }) {
	return (
		<>
			<h1 className="text-4xl text-white font-bold text-left leading-tight">{title}</h1>
			<div className="mt-4 w-1/2">
				<p className="text-white mt-4 text-left leading-relaxed">{desc}</p>
			</div>
		</>
	);
}
