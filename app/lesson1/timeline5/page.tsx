"use client";

import Header from '@/components/homepage/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Timeline2() {

    const router = useRouter();

    return (
        <>
            <Header bgColor="#223030" />
            <div className="bg-[#e8d9cd] flex flex-col lg:flex-row w-screen h-screen">
                <div className="w-full lg:w-1/2 lg:h-full md:h-80 sm:h-64 flex items-center justify-center lg:p-4">
                    <Image
                        src="/lesson1_imgs/images5.png"
                        alt="Timeline 5"
                        width={519}
                        height={519}
                    />
                </div>
                <div className="w-full lg:w-1/2 lg:h-full flex items-center p-5 mr-10">
                    <div className="max-w-[90%] mx-auto text-[#223030]">
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                            From the 7th to 15th centuries, spices made their way
                            across Europe, Asia, and Northeast Africa. Primarily,
                            the goods traded during this time were spices, like
                            cloves, nutmeg, and mcae which originated in the
                            Maluku islands of Indonesia
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            Like silk, spices were luxury items, and trade volume
                            remained low. However, the spice trade was conducted
                            via ship - adding a new aspect to international trade.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            With the advent of spice routes, the connection between
                            the East and West was strengthened as new sea routes
                            were established.
                        </p>
                        <div className="flex justify-between mt-4">
                            <Button
                                className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                                onClick={() => router.push('/lesson1/timeline4')}>
                                Prev Page
                            </Button>
                            <Button 
                                className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                                onClick={() => router.push('/lesson1/timeline6')}>
                                Next Page
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
