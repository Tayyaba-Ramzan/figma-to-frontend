import React from 'react'
import Image from 'next/image'

const Purity = () => {
    return (
        <>
            <h1 className="font-rye text-center mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Purity on Instagram
            </h1>

            <div className='flex flex-wrap items-center justify-center mt-28 space-x-4 space-y-4'>
                <div>
                    <Image
                        src="/images/Component 13.svg"
                        alt='Component 1'
                        height={250}
                        width={250}
                        className='h-auto w-auto'
                    />
                </div>
                <div>
                    <Image
                        src="/images/Component 14.svg"
                        alt='Component 2'
                        height={250}
                        width={250}
                        className='h-auto w-auto'
                    />
                </div>
                <div>
                    <Image
                        src="/images/Component 15.svg"
                        alt='Component 3'
                        height={250}
                        width={250}
                        className='h-auto w-auto'
                    />
                </div>
                <div>
                    <Image
                        src="/images/Component 15 (1).svg"
                        alt='Component 4'
                        height={250}
                        width={250}
                        className='h-auto w-auto'
                    />
                </div>
                <div>
                    <Image
                        src="/images/Component 16.svg"
                        alt='Component 5'
                        height={250}
                        width={250}
                        className='h-auto w-auto'
                    />
                </div>
            </div>

            <h1 className='font-rye text-[40px] sm:text-[60px] lg:text-[75px] mt-16 text-center'>Newsletter</h1>
            <p className='font-bodoni text-[20px] sm:text-[25px] lg:text-[30px] mt-8 text-center'>
                Sign up to receive 10% off your next purchase. Plus hear about new arrivals and offers.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center mb-20 mt-16'>
                <input
                    type="email"
                    placeholder="Email Address"
                    className='border border-[#A29875] font-bodoni w-[90%] sm:w-[300px] h-[57px] px-4 text-[#A29875] rounded-l-md focus:outline-none'
                />
                <button className='w-[90%] sm:w-[120px] h-[57px] text-[#FFFFFF] bg-[#A29875] rounded-r-md font-bodoni mt-4 sm:mt-0'>
                    Subscribe
                </button>
            </div>


        </>
    )
}

export default Purity
