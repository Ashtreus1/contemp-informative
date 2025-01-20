"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/homepage/Header";
import Lesson1FirstCarousel from "@/components/lesson1/Lesson1FirstCarousel";
import Lesson1SecondCarousel from "@/components/lesson1/Lesson1SecondCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';


const OPTIONS1: EmblaOptionsType = { align: 'start', loop: true };
const OPTIONS2: EmblaOptionsType = { align: 'center', loop: true };

const SLIDE_COUNT1 = 4;
const SLIDES1 = Array.from(Array(SLIDE_COUNT1).keys());

export default function Globalization() {
    return (
        <>
            <Header bgColor="#223030" />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </>
    );
}

function Section1() {
    const { scrollYProgress } = useScroll();

    const h1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const startLeft = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);
    const endRight = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);

    return (
        <div
            className="bg-[#223030] flex flex-col items-center justify-center h-screen w-full relative"
        >
            <motion.div
                className="text-center font-bold font-fjalla uppercase tracking-widest z-10"
                style={{ opacity: h1Opacity }}
            >
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
                    Globalization
                </h1>
            </motion.div>

            <motion.div
                className="absolute bottom-0 left-0 w-full h-[6px] sm:h-[8px] md:h-[10px] bg-[#e8d9cd]"
                style={{ left: startLeft, right: endRight }}
            />
        </div>
    );
}

function Section2() {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/lesson1_imgs/img2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative min-h-screen flex justify-center items-end max-w-6xl px-6 sm:px-10">
                <p className="text-white sm:text-md md:text-lg lg:text-xl p-4 sm:p-6 md:p-10 font-semibold">
                    Globalization describes the growing interdependence of the world’s
                    economies, cultures, and populations, brought about by cross-border
                    trade in goods and services, technology, and flows of investment,
                    people, and information. Countries have built economic partnerships to
                    facilitate these movements over many centuries. The term gained
                    popularity after the Cold War in the early 1990s, as these cooperative
                    arrangements shaped modern everyday life.
                </p>
            </div>
        </div>
    );
}


function Section3() {
    const section3Ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: section3Ref,
        offset: ["start end", "end start"],
    });

    const textSlide = useTransform(scrollYProgress, [0.1, 0.5], ["-100%", "0%"]);
    const imageSlide = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);
    const lineWidth = useTransform(scrollYProgress, [0.2, 0.9], ["0%", "100%"]);

    const [isLargeBreakpoint, setIsLargeBreakpoint] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            const lgBreakpoint = 1024;
            setIsLargeBreakpoint(window.innerWidth >= lgBreakpoint);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isLargeBreakpoint ? (
        <div
            ref={section3Ref}
            className="relative h-screen bg-[#223030] flex items-center justify-center overflow-hidden gap-5"
        >
            <motion.p
                className="text-white text-2xl font-semibold lg:w-1/2"
                style={{
                    translateX: textSlide,
                }}
            >
                {`
                    According to WHO, globalization can be defined as "the increased
                interconnectedness and interdependence of people and countries". It is
                generally understood to include two inter-related elements: the opening of
                international borders to increasingly fast flows of goods, services,
                finance, people and ideas; and the changes in institutions and policies
                at national and international levels that facilitate or promote such flows.
                `}
            </motion.p>

            <motion.div
                style={{
                    translateX: imageSlide,
                }}
            >
                <Image
                    src="/lesson1_imgs/images3.png"
                    width={400}
                    height={150}
                    alt="Globalization Image"
                    className="rounded-lg h-[450px] w-[400px]"
                />
            </motion.div>

            <motion.div
                className="absolute bottom-0 left-0 h-[10px] bg-[#e8d9cd]"
                style={{
                    width: lineWidth,
                }}
            />
        </div>
    ) : (
        <div
            ref={section3Ref}
            className="relative h-screen bg-[#223030] flex flex-col items-center justify-center overflow-hidden gap-5"
        >
            <div className="h-[10px] bg-[#e8d9cd] w-80" />
            <Image
                src="/lesson1_imgs/images3.png"
                width={400}
                height={150}
                alt="Globalization Image"
                className="rounded-lg h-[300px] w-[300px]"
            />
            <p className="text-white text-md font-semibold mx-12">
                {`
                According to WHO, globalization can be defined as "the increased
                interconnectedness and interdependence of people and countries". It is
                generally understood to include two inter-related elements: the opening of
                international borders to increasingly fast flows of goods, services,
                finance, people and ideas; and the changes in institutions and policies
                at national and international levels that facilitate or promote such flows.
                `}
            </p>
            <motion.div
                className="absolute bottom-0 left-0 h-[10px] bg-[#e8d9cd]"
                style={{
                    width: lineWidth,
                }}
            />
        </div>
    );
}

function Section4() {
    return (
        <div className="bg-[#223030] flex justify-center items-center h-screen">
            <Lesson1FirstCarousel slides={SLIDES1} options={OPTIONS1} />
        </div>

    );
}

const slidesContent = [
    {
        image: "/lesson1_imgs/carousel_img1.png",
        text: (
            <>
                <h1 className="font-bold text-lg">
                    What is Globalization in Geography?
                </h1>
                <p className="text-black text-md text-left mt-5">
                    In geography, globalization is defined as the set of processese
                    (economic, social, cultural, technological, institutional)
                    that contribute to the relationship between societies and individuals
                    around the world. It is a progressive process by which exchanges and flows
                    between different parts of the world are intensified.
                </p>
            </>
        )
    },
    {
        image: "/lesson1_imgs/carousel_img2.png",
        text: (
            <>
                <h1 className="font-bold text-lg">
                    Examples of Globalization
                </h1>
                <p className="text-black text-md text-left mt-5">
                    <span className="font-bold">Economic Globalization: </span>
                    is the development of trade systems within transnational
                    actors such as corporations or NGOs.
                </p>
                <p className="text-black text-md text-left mt-5">
                    <span className="font-bold">Financial Globalization: </span>
                    can be linked with the rise of a global financial system
                    with internation financial exchanges and monetary exchanges.
                    Stock markets, for instance, are a great example of th
                    financially connected global world since when one stock market
                    has a decline, it affects other markets negatively as well
                    as the economy as a whole.
                </p>
            </>
        ),
    },
    {
        image: "/lesson1_imgs/carousel_img3.png",
        text: (
            <>
                <p className="text-black text-md text-left">
                    <span className="font-bold">Cultural Globalization: </span>
                    refers to the interpenetration of cultures which, as a
                    consequence, means nations adipt principles, beliefs,
                    and customes of other nations, losing their unique culture
                    to a unique, globalized supra-culture.
                </p>
                <p className="text-black text-md text-left mt-3">
                    <span className="font-bold">Political Globalization: </span>
                    the development and growing influence of international
                    organizations such as the UN or WHO means governmental action
                    takes place at an international level. There are other bodies
                    operating at a global level such as NGos like DOctors without
                    borders or Oxfam.
                </p>
            </>
        )
    },
    {
        image: "/lesson1_imgs/carousel_img4.png",
        text: (
            <>
                <p className="text-black text-md text-left">
                    <span className="font-bold">Sociological Globalization: </span>
                    information moves almost in real-time, together with the
                    interconnection and interdependence of events and their
                    consequences. People move all the time too, mixing and
                    integrating different societies.
                </p>
                <p className="text-black text-md text-left mt-3">
                    <span className="font-bold">Technological Globalization: </span>
                    the phenomenon by which millions of people are interconnected
                    thatnks to the power of the digital world via platformss
                    such as Facebook, Twitter, Instagram, and others.
                </p>
            </>
        )
    },
    {
        image: "/lesson1_imgs/carousel_img5.png",
        text: (
            <>
                <p className="text-black text-md text-left">
                    <span className="font-bold">Geographic Globalization: </span>
                    is the new organization and hierarchy of different regions
                    of the world that is constantly changing. Moreoverm with transportation
                    and flying made so easy and affordable, apart from a few countries
                    with demanding visas, it is  possible to travel the world without barely
                    andy restrictions.
                </p>
                <p className="text-black text-md text-left mt-3 mb-5">
                    <span className="font-bold">Ecological Globalization: </span>
                    accounts for the idea of considering planet Earth as a single global entry -
                    a common good all societies should protect since the weather affects everyone
                    and we are all protected by the same atmosphere. To this regard, it is often
                    said that the poorest countries that have been polluting the least will suffer the most
                    from climate change.
                </p>
            </>
        )
    },
]

function Section5() {
    return (
        <div className="bg-[#223030] flex justify-center items-center h-screen">
            <Lesson1SecondCarousel slides={slidesContent} options={OPTIONS2} />
        </div>
    )
}