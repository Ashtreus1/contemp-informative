import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButton";
import { DotButton, useDotButton } from "./CarouselNavigation";

interface PropType {
    slides: number[];
    options?: EmblaOptionsType;
}

export default function HomepageCarousel(props: PropType) {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex space-x-10">
                    {slides.map((index) => (
                        <div
                            className="flex-shrink-0 w-[300px] h-[400px] bg-white border border-black rounded-lg shadow-md p-6 flex items-center justify-center text-black"
                            key={index}
                        >
                            <span className="text-2xl font-semibold">Slide {index + 1}</span>
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
                            className={`w-3 h-3 rounded-full ${selectedIndex === index ? "bg-black" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
