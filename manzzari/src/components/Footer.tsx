import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="h-auto bg-[#A29875] py-8 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                    <div className="text-white">
                        <h1 className="font-bodoni mb-6 text-[24px] lg:text-[30px]">MY ACCOUNT</h1>
                        <ul className="space-y-4">
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Career at Eldy</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">About us</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Sustainability</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Press</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bodoni mb-6 text-[24px] lg:text-[30px]">HELP</h1>
                        <ul className="space-y-4">
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">FAQ</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Shipping</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Returns</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Order Status</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bodoni mb-6 text-[24px] lg:text-[30px]">FOLLOW US ON</h1>
                        <ul className="space-y-4">
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Twitter</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Facebook</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Google Plus</li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">Instagram</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="font-bodoni mb-6 text-[24px] lg:text-[30px]">ABOUT US</h1>
                        <ul className="space-y-4">
                            <li className="font-lato font-semibold text-[18px] lg:text-[20px]">
                                <span className="text-[#222222]">Phone:</span>purity_jewel@gmail.com
                            </li>
                            <li className="font-lato font-semibold text-[18px] lg:text-[22px]">
                                <span className="text-[#222222]">Phone:</span> 0987654321
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-[64px] bg-[#504933]"></div>
        </>
    );
};

export default Footer;
