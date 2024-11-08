import React from 'react'
import Image from 'next/image'

const Spotted = () => {
    return (
        <>
            <h1 className='font-rye text-[50px] sm:text-[60px] md:text-[70px] lg:text-[75px] mt-10 sm:mt-12 md:mt-16 text-center mb-8 sm:mb-10'>
                Spotted On
            </h1>

            <div className='flex flex-col sm:flex-row items-center justify-evenly space-y-6 sm:space-y-0'>
                <div>
                    <Image
                        src={"/images/pic1.svg"}
                        alt='pic-1'
                        width={300}
                        height={500}
                    />
                </div>
                <div>
                    <Image
                        src={"/images/pic2.svg"}
                        alt='pic-2'
                        width={300}
                        height={500}
                    />
                </div>
                <div>
                    <Image
                        src={"/images/pic3.svg"}
                        alt='pic-3'
                        width={300}
                        height={500}
                    />
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-around mt-16 md:mt-32 space-y-8 md:space-y-0'>
                <div className='flex flex-col items-center max-w-[400px] md:max-w-[536px] text-center px-4'>
                    <Image
                        src={"/images/logo1.svg"}
                        alt='logo-1'
                        width={120}
                        height={120}
                        className='mb-4'
                    />
                    <h1 className='font-playfair text-[14px] md:text-[16px]'>Ann Smith</h1>
                    <h3 className='font-lato text-[12px] md:text-[14px] mt-1'>CEO & Founder</h3>
                    <p className='text-[16px] md:text-[18px] font-bodoni mt-4'>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies metus eu euismod tincidunt.”
                    </p>
                </div>

                <div className='flex flex-col items-center max-w-[400px] md:max-w-[536px] text-center px-4'>
                    <Image
                        src={"/images/logo2.svg"}
                        alt='logo-2'
                        width={120}
                        height={120}
                        className='mb-4'
                    />
                    <h1 className='font-playfair text-[14px] md:text-[16px]'>Edison</h1>
                    <h3 className='font-lato text-[12px] md:text-[14px] mt-1'>Designer</h3>
                    <p className='text-[16px] md:text-[18px] font-bodoni mt-4'>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies metus eu euismod tincidunt.”
                    </p>
                </div>

                <div className='flex flex-col items-center max-w-[400px] md:max-w-[536px] text-center px-4'>
                    <Image
                        src={"/images/logo1.svg"}
                        alt='logo-3'
                        width={120}
                        height={120}
                        className='mb-4'
                    />
                    <h1 className='font-playfair text-[14px] md:text-[16px]'>Ann Smith</h1>
                    <h3 className='font-lato text-[12px] md:text-[14px] mt-1'>CEO & Founder</h3>
                    <p className='text-[16px] md:text-[18px] font-bodoni mt-4'>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies metus eu euismod tincidunt.”
                    </p>
                </div>
            </div>

            <div className='h-auto lg:h-[622px] bg-[#A29875] mt-16 lg:mt-44 flex flex-col lg:flex-row items-center justify-evenly py-12 lg:py-0 px-6 lg:px-0 space-y-8 lg:space-y-0'>
                <div>
                    <Image
                        src={"/images/image 1.svg"}
                        alt='about-us'
                        width={843}
                        height={551}
                    />
                </div>

                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center lg:text-left text-white">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-10">ABOUT US</h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 font-bodoni">
                        At Purity, we strive to deliver excellence, consistently. We've brought to the market a whole new standard of business ethics and product reliability.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-white px-6 sm:px-8 md:px-10 py-2 text-[#A29875] text-sm md:text-base lg:text-lg rounded-md font-bodoni">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spotted
