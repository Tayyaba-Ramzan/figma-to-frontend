import React from 'react';
import Image from 'next/image';

const Trendy = () => {
  return (
    <>
      <h1 className='font-rye text-[32px] sm:text-[50px] md:text-[60px] lg:text-[75px] mt-12 text-center mb-10'>Trendy Collection</h1>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap'>
        {[
          {
            src: "/images/Component 1.svg",
            alt: 'Cable Chain Chokar',
            price: '₹20,000'
          },
          {
            src: "/images/Component 2.svg",
            alt: 'Link Chain Earrings',
            price: '₹20,000'
          },
          {
            src: "/images/Component 3.svg",
            alt: 'Yona Signet Ring',
            price: '₹20,000'
          },
          {
            src: "/images/Component 4.svg",
            alt: 'Anna Ribbed Bangle',
            price: '₹20,000'
          }
        ].map((item, index) => (
          <div key={index} className='flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-2'>
            <Image
              src={item.src}
              alt={item.alt}
              width={300}
              height={300}
              className='mb-2 max-w-full h-auto'
            />
            <p className='text-[18px] sm:text-[22px] lg:text-[24px] text-[#938965] text-center'>
              {item.alt} <br />
              <span>{item.price}</span>
            </p>
          </div>
        ))}
      </div>

      <div>
      </div>

    </>
  );
}

export default Trendy;
