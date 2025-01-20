import Image from "next/image";
import Link from 'next/link';
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "@/components/homepage/CarouselNavigation";
import { PrevButton, NextButton, usePrevNextButtons } from "@/components/homepage/CarouselButton";

interface PropType {
    slides: number[];
    options?: EmblaOptionsType;
}

export default function Lesson1FirstCarousel(props: PropType) {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    return (
        <div className="bg-[#e8d9cd] relative flex flex-col lg:flex-row items-center justify-between p-5 lg:gap-12 shadow-3xl">
            <div className="relative flex flex-col items-start justify-center w-full lg:w-[420px] text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold uppercase font-fjalla text-[#223030]">History of Globalization</h1>
                <p className="mt-4 text-lg md:text-xl font-semibold text-[#223030]">Global Connection through Time and Trade</p>
            </div>
            <div className="overflow-hidden max-w-[700px] h-full" ref={emblaRef}>
                <div className="flex">
                    {slides.map((index) => (
                        <div
                            className="flex-shrink-0 w-[350px] h-[400px] flex items-center justify-center"
                            key={index}
                        >
                            <Link href={`/lesson1/timeline${index + 4}`}>
                                <Image
                                    src={`/lesson1_imgs/images${index + 4}.png`}
                                    alt={`Slide ${index + 4}`}
                                    width={300}
                                    height={400}
                                    className="shadow-xl cursor-pointer hover:scale-105 hover:bg-black transform transition-all duration-300"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center w-full">
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                        className="bg-[#223030] text-white w-12 h-12 rounded-full"
                    />
                    <div className="flex justify-center items-center flex-grow gap-5">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-[#223030]" : "bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                        className="bg-[#223030] text-white w-12 h-12 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

