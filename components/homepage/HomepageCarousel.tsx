import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "../CarouselButton";
import { DotButton, useDotButton } from "../CarouselNavigation";
import { useState, useEffect } from "react";

interface PropType {
	slides: number[];
	options?: EmblaOptionsType;
	onSlideChange: (index: number) => void;
}

export default function HomepageCarousel(props: PropType) {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

	useEffect(() => {
		if (emblaApi) {
			emblaApi.on("select", () => {
				props.onSlideChange(emblaApi.selectedScrollSnap());
			});
		}
	}, [emblaApi, props.onSlideChange]);


	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobileOrTablet(window.innerWidth < 1024);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return !isMobileOrTablet ? (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex space-x-10">
					{slides.map((index) => (
						<div className="flex-shrink-0 w-[300px] h-[400px] p-3 flex items-center justify-center text-black" key={index}>
							<Image
								src={`/homepage_imgs/img-0${index + 1}.png`}
								alt={`Slide ${index + 1}`}
								width={300}
								height={400}
								className="rounded-lg border border-transparent"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-between items-center mt-4">
				<div className="flex space-x-2">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>

				<div className="flex space-x-2">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-gray-700" : "bg-gray-300"}`}
						/>
					))}
				</div>
			</div>
		</div>
	) : (
		<div className="relative flex flex-col items-center justify-center">
			<div className="overflow-hidden max-w-[900px] h-full" ref={emblaRef}>
				<div className="flex">
					{slides.map((index) => (
						<div
							className="flex-shrink-0 w-full flex justify-center items-center space-x-3"
							key={index}
						>
								<Image
									src={`/homepage_imgs/img-0${index + 1}.png`}
									alt={`Slide ${index + 1}`}
									width={300}
									height={400}
									className="cursor-pointer h-[400px] w-[400px] sm:w-[300px] sm:h-[300px]"
								/>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-center items-center w-1/2 mt-5 gap-5">
				<PrevButton
					onClick={onPrevButtonClick}
					disabled={prevBtnDisabled}
					className="bg-[#e8d9cd] text-black w-12 h-12 rounded-full hover:bg-gray-300"
				/>
				<div className="flex justify-center items-center flex-grow gap-5">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-gray-700" : "bg-gray-500"
								}`}
						/>
					))}
				</div>
				<NextButton
					onClick={onNextButtonClick}
					disabled={nextBtnDisabled}
					className="bg-[#e8d9cd] text-black w-12 h-12 rounded-full hover:bg-gray-300"
				/>
			</div>
		</div>
	)
}
