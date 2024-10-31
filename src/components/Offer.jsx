import React from 'react';

function Offer() {
    return (
        <div id='offer' className='offer-container w-full h-[768px] bg-cover bg-center flex justify-end items-end text-white p-5 relative'>
            <div className="pr-heading mb-5 text-center">
                <h1>WHAT WE DO, <span className='text-red-600'>THE SKY IS THE LIMIT</span> - WE FIX ALL KINDS OF COMPUTERS</h1>
                <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, id!</p>

                <div className="pr-btns mt-4">
                    <a href="#" className='header-btn bg-red-600 text-white py-3 px-8 rounded'>COME NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Offer;