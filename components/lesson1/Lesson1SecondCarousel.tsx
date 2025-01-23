import Image from "next/image";
import { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "@/components/CarouselNavigation";
import { PrevButton, NextButton, usePrevNextButtons } from "@/components/CarouselButton";

interface SlideContent {
    image: string;
    text: React.ReactNode;
}

interface PropType {
    slides: SlideContent[];
    options?: EmblaOptionsType;
}

export default function Lesson1SecondCarousel(props: PropType) {

    const [isMobileOrTable, setIsMobileOrTablet] = useState(false);

    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel({
        ...options,
        skipSnaps: false,
    });

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return !isMobileOrTable ? (
        <div className="relative flex flex-col items-center justify-between">
            <div
                className="overflow-hidden w-full h-full mx-4 max-w-[400px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px]"
                ref={emblaRef}
            >
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div
                            className="flex-shrink-0 w-full flex items-stretch"
                            key={index}
                            style={{ flex: "0 0 100%" }}
                        >
                            <div className="w-1/2 h-[400px]">
                                <Image
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    width={300}
                                    height={400}
                                    className="cursor-pointer h-full w-full"
                                />
                            </div>

                            <div className="bg-[#e8d9cd] w-1/2 h-[400px] flex items-center justify-center p-10">
                                <div className="text-[#223030] text-center">{slide.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center w-full mt-5">
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
                            className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-black" : "bg-gray-500"
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
    ) : (
        <div className="relative flex flex-col items-center justify-between">
            <div
                className="overflow-hidden w-full h-full max-w-[400px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px]"
                ref={emblaRef}
            >
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div
                            className="flex-shrink-0 w-full flex flex-col sm:flex-row"
                            key={index}
                            style={{ flex: "0 0 100%" }}
                        >
                            <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px]">
                                <Image
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    width={300}
                                    height={400}
                                    className="cursor-pointer h-full w-full object-cover"
                                />
                            </div>

                            <div className="bg-[#e8d9cd] w-full sm:w-1/2 flex items-center justify-center p-5 sm:p-10">
                                <div className="text-[#223030] text-center">{slide.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center w-full mt-5">
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
                            className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-black" : "bg-gray-500"
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
    );
}
