import Image from 'next/image';

export default function HomepageCard({ cardImg }: { cardImg: string }) {
	return (
		<div className="w-full">
			<Image src={cardImg} width={500} height={500} alt={cardImg} />
		</div>
	);
}
