import React from 'react';
import Image from 'next/image';

const Categories = () => {
    return (
        <>
            <h1 className='font-rye text-center text-4xl lg:text-[75px] mt-28'>Shop By Categories</h1>

            <div className='flex flex-wrap justify-center gap-4 lg:gap-10 mt-10 text-xl lg:text-4xl text-[#6C757D] font-bodoni'>
                <h3>Earrings</h3>
                <h3>Necklace</h3>
                <h3>Bracelet</h3>
                <h3>Rings</h3>
            </div>

            <div className='flex flex-wrap justify-center gap-4 lg:justify-evenly mt-10'>
                <Image src={"/images/banner.svg"} alt="banner-img" width={400} height={300} className='mt-6' />
                <Image src={"/images/hand.svg"} alt="hand-img" width={200} height={300} className='mt-6' />
                <Image src={"/images/face.svg"} alt="face-img" width={200} height={300} className='mt-6' />
            </div>

            <div className='flex flex-wrap justify-center gap-4 lg:justify-evenly mt-10'>
                <Image src={"/images/bracelate.svg"} alt="bracelet-img" width={200} height={300} className='mt-6' />
                <Image src={"/images/chain.svg"} alt="chain-img" width={200} height={300} className='mt-6' />
                <Image src={"/images/ear-rings.svg"} alt="earrings-img" width={400} height={300} className='mt-6' />
            </div>

            <div className='flex flex-wrap justify-center gap-10 lg:justify-evenly mt-20'>
                <div className='text-center max-w-xs'>
                    <Image src={"/images/SVG.svg"} alt='logo1' width={53} height={53} className='mb-5 mx-auto' />
                    <h1 className='text-lg lg:text-2xl font-bodoni font-bold mb-2'>Shipping Worldwide</h1>
                    <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className='text-center max-w-xs'>
                    <Image src={"/images/SVG (1).svg"} alt='logo2' width={53} height={53} className='mb-5 mx-auto' />
                    <h1 className='text-lg lg:text-2xl font-bodoni font-bold mb-2'>14 Days Return</h1>
                    <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className='text-center max-w-xs'>
                    <Image src={"/images/SVG (2).svg"} alt='logo3' width={53} height={53} className='mb-5 mx-auto' />
                    <h1 className='text-lg lg:text-2xl font-bodoni font-bold mb-2'>Security Payment</h1>
                    <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </>
    )
}

export default Categories;
