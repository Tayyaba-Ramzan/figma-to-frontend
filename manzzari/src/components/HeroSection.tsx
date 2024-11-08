import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-start lg:items-center mx-auto px-6 lg:px-0'>
            <div className='w-full lg:w-1/2 lg:ml-24 text-center lg:text-left'>
                <h1 className='text-[32px] md:text-[40px] lg:text-[48px] w-full lg:w-[496px] text-[#000000] font-bodoni font-bold mt-16 md:mt-24 lg:mt-32'>
                    IMPECCABLE CRAFTSMAN AND FINESSE
                </h1>
                <p className='text-[#787054] text-[18px] md:text-[24px] lg:text-[30px] mt-4 md:mt-6 lg:mt-7'>
                    An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                </p>
                <button className='font-bodoni bg-[#787054] px-8 py-2 md:px-10 md:py-3 text-[#FFFFFF] rounded mt-6 md:mt-8'>
                    Explore Now
                </button>
            </div>
            <div className='flex justify-center lg:justify-end mt-8 md:mt-10 lg:mt-0 lg:ml-40'>
                <Image
                    src={"/images/hero.svg"}
                    alt='hero-img'
                    width={300}
                    height={500}
                    className='w-[70%] md:w-[80%] lg:w-auto mt-14'
                />
            </div>
        </div>
    );
};

export default HeroSection;
