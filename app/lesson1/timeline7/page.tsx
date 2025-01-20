"use client";

import Header from '@/components/homepage/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Timeline4() {

    const router = useRouter();

    return (
        <>
            <Header bgColor="#223030" />
            <div className="bg-[#e8d9cd] flex flex-col lg:flex-row w-screen h-screen mt-20"> 
                <div className="w-full lg:w-1/2 lg:h-full md:h-80 sm:h-64 flex items-center justify-center lg:p-4">
                    <Image
                        src="/lesson1_imgs/images7.png"
                        alt="Timeline 6"
                        width={519}
                        height={519}
                    />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center justify-start h-full p-5 mr-12 overflow-y-auto">
                    <div className="max-w-[90%] mx-auto text-[#223030]">
                        <h1 className="text-base lg:text-4xl sm:text-lg md:text-xl font-semibold leading-relaxed font-bold mb-4">
                            Globalization During the World Wars
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                            Until the world wars, globalization moved forward quickly.
                            Then, when World War I began, countries were forced to use their
                            resources for war rather than trade.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            The effects of the war were catastrophic, and many countries
                            once again closed their borders. These factors slowed the spread
                            of globalization.
                        </p>
                        <h1 className="text-base lg:text-4xl sm:text-lg md:text-xl font-semibold leading-relaxed font-bold mb-4">
                            Globalization in the Modern Era
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            After WWII, the General Agreement on Tariffs and Trade (GATT)
                            was established. This agreement held from 1948 to 1994 when it 
                            was replaced with the World Trade Organization (WTO).
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            Along with setting rules and mitigating disputes, GATT helped
                            to lower tariffs across the globe. With lower costs, and a governing
                            body to oversee trade, globalization once again thrived.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            Free trade institutions like the European union further eroded
                            nationalist trade agendas. After the Soviet Union collapsed and
                            the wall dividing East and West Germany fell, global trade entered
                            these areas.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            In 2001, China joined the WTO and becames the world's primary
                            manufacturer. The rise of the internet around the turn of the
                            century helped to streamline global trade networks.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed mt-4">
                            With this new technology, businesses could conduct research in
                            one country, source raw materials in another area of the world,
                            manufacturetheir products in yet another country, and then
                            distribute them across the globe. Once the internet became mainstream,
                            the truest form of globalization was born.
                        </p>
                        <div className="flex justify-end mt-4">
                            <Button
                                className="bg-[#223030] text-[#e8d9cd] hover:bg-[#1a2626]"
                                onClick={() => router.push('/lesson1/timeline6')}>
                                Prev Page
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
