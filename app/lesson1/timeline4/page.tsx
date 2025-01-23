"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Timeline1() {
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
        <div className="flex flex-row w-screen h-screen">
            <div className="w-full lg:w-1/2 lg:h-full flex items-center justify-center lg:p-4">
                <Image
                    src="/lesson1_imgs/images4.png"
                    alt="Timeline 4"
                    width={519}
                    height={519}
                />
            </div>
            <div className="w-full lg:w-1/2 lg:h-full flex items-center p-5 mr-10">
                <div className="max-w-[90%] mx-auto text-gray-200">
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                        Global trade was established as early
                        as the 1st Century BC when luxury goods
                        from China began appearing in Rome.
                        Mainly, the transactions that took place during
                        this time consisted of extremely expensive items
                        like silk and some spices.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        These trade routes involved many parties, from
                        those that created the items, to those that
                        transported them, and finally the buyers.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        Eventually, the silk roads ceased operating
                        when the respective empires fell. However,
                        they reemerged in the late medieval time
                        as the Mongols took control of the area and
                        reestablished the trade routes.
                    </p>
                    <div className="flex justify-end mt-4">
                        <Button 
                            className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                            onClick={() => router.push('/lesson1/timeline5')}>
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
                    src="/lesson1_imgs/images4.png"
                    alt="Timeline 4"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full flex items-center p-5">
                <div className="max-w-[90%] mx-auto text-gray-200">
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                        Global trade was established as early
                        as the 1st Century BC when luxury goods
                        from China began appearing in Rome.
                        Mainly, the transactions that took place during
                        this time consisted of extremely expensive items
                        like silk and some spices.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        These trade routes involved many parties, from
                        those that created the items, to those that
                        transported them, and finally the buyers.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                        Eventually, the silk roads ceased operating
                        when the respective empires fell. However,
                        they reemerged in the late medieval time
                        as the Mongols took control of the area and
                        reestablished the trade routes.
                    </p>
                    <div className="flex justify-end mt-4">
                        <Button
                            className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                            onClick={() => router.push('/lesson1/timeline5')}
                        >
                            Next Page
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
