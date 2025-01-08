import Header from "./components/Header";
import Homepage from "./components/Homepage";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center max-w-screen">
			<Header />
			<Homepage />
		</div>
	);
}
