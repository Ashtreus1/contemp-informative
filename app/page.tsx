import Header from "@/components/homepage/Header";
import HomepageHero from "@/components/homepage/HomepageHero";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center max-w-screen">
			<Header />
			<HomepageHero />
		</div>
	);
}
