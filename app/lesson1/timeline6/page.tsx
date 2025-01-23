"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Timeline3() {
    const router = useRouter();
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return !isMobileOrTablet ? (
        <div className="flex flex-col lg:flex-row w-screen h-screen">
            <div className="w-full lg:w-1/2 lg:h-full md:h-80 sm:h-64 flex items-center justify-center lg:p-4">
                <Image
                    src="/lesson1_imgs/images6.png"
                    alt="Timeline 4"
                    width={519}
                    height={519}
                />
            </div>
            <div className="w-full lg:w-1/2 lg:h-full flex items-center p-5 mr-10">
                <div className="max-w-[90%] mx-auto text-gray-200">
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                        {`
                            Global trade began in earnest during the "Age of Discovery"
                            when European merchants began seeking out new avenues for
                            trade. The Americas were "discovered" during this time,
                            and they opened the door for additional trade.
                            `}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        Previously unavailable goods like potatoes, tomatoes,
                        coffeee, and chocolate were making their way to Europe
                        during this time.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        With the expansion of trade routes, previously exclusive goods
                        like spices became more readily available with fewer middlemen
                        to drive up prices. In addition, the scientific discoveries of
                        the time furthered a trade in knowledge as well as goods.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        {`
                            During the so-called "Scientific Revolution" major strides were
                            made in the fields of mechanics, astronomy, and shipping, and this
                            information followed trade routes to spread throughout the world.
                            `}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        While trade routes during this time connected continents, the
                        global economy had not yet developed into the system we know today.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        Business ventures were heavily skewed toward wealthy Europeans
                        and most trade was conducted between European countries and their colonies.
                    </p>
                    <div className="flex justify-between mt-4">
                        <Button
                            className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                            onClick={() => router.push('/lesson1/timeline5')}>
                            Prev Page
                        </Button>
                        <Button
                            className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                            onClick={() => router.push('/lesson1/timeline7')}>
                            Next Page
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="flex flex-col w-screen h-auto">
            <div className="w-full h-64 sm:h-80 md:h-96 flex-shrink-0 relative">
                <Image
                    src="/lesson1_imgs/images6.png"
                    alt="Timeline 4"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full flex items-center p-5">
                <div className="max-w-[90%] mx-auto text-gray-200">
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                        {`
                            Global trade began in earnest during the "Age of Discovery"
                            when European merchants began seeking out new avenues for
                            trade. The Americas were "discovered" during this time,
                            and they opened the door for additional trade.
                            `}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        Previously unavailable goods like potatoes, tomatoes,
                        coffeee, and chocolate were making their way to Europe
                        during this time.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        With the expansion of trade routes, previously exclusive goods
                        like spices became more readily available with fewer middlemen
                        to drive up prices. In addition, the scientific discoveries of
                        the time furthered a trade in knowledge as well as goods.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        {`
                            During the so-called "Scientific Revolution" major strides were
                            made in the fields of mechanics, astronomy, and shipping, and this
                            information followed trade routes to spread throughout the world.
                            `}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        While trade routes during this time connected continents, the
                        global economy had not yet developed into the system we know today.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        Business ventures were heavily skewed toward wealthy Europeans
                        and most trade was conducted between European countries and their colonies.
                    </p>
                    <div className="flex justify-between mt-4">
                        <Button
                            className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                            onClick={() => router.push('/lesson1/timeline5')}>
                            Prev Page
                        </Button>
                        <Button
                            className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                            onClick={() => router.push('/lesson1/timeline7')}>
                            Next Page
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}