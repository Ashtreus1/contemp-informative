export default function HomepageCard({ cardImg }: { cardImg: string }) {
	return (
		<div className="w-full">
			<img src={cardImg} width={500} height={500} alt={cardImg} />
		</div>
	);
}
