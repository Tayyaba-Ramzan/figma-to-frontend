import React from 'react'
import Image from 'next/image'

const Images = () => {
    return (
        <div className='bg-[#A29875] h-auto min-h-screen flex flex-col justify-center items-center relative px-4 mt-36'>

            <div className="relative flex justify-center items-center w-full">
                <Image
                    src={"/images/two-hand.svg"}
                    alt="side-img"
                    width={768}
                    height={970.09}
                    className="max-w-full h-auto"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src={"/images/second.svg"}
                        alt="center-img"
                        width={200}
                        height={200}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            <div className='flex flex-col items-center text-center mt-10'>
                <h1 className='text-[40px] text-[#FFFFFF] font-bodoni max-w-[340px] mx-auto mb-6'>
                    Jewelry for Every Occasion
                </h1>
                <button className='text-[18px] text-[#A29875] bg-[#FFFFFF] w-[239.08px] h-[66px] rounded-2xl font-bodoni'>
                    Shop Now
                </button>
            </div>

            <div className='mt-10'>
                <Image
                    src={"/images/Section.svg"}
                    alt='side-img'
                    width={360}
                    height={448}
                    className="max-w-full h-auto"
                />
            </div>

            <div className='absolute bottom-0 right-0 hidden md:block w-[90%] max-w-[270px]'>
                <Image
                    src={"/images/bottom.svg"}
                    alt='bottom-img'
                    height={336}
                    width={370}
                    className="w-full h-auto"
                />
            </div>

        </div>
    )
}

export default Images
