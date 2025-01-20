import { TextStyle, center } from "./constant";

export default function Section({ className = "", children }: { className?: string; children: React.ReactNode }) {
	return (
		<section className={`h-screen w-full bg-cover bg-center snap-start transition-all duration-1000 ${TextStyle} ${center} ${className}`}>
			{children}
		</section>
	);
}