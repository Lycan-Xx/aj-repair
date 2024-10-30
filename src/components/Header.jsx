import React from 'react';

function Header() {
    return (
        <div id='main'>
            <div className='header-heading text-center text-3xl mt-24 pt-24 text-white flex justify-center items-center'>
                <h2>STEP UP YOUR</h2>
                <h1><span className='text-red-600'>FITNESS</span> WITH US</h1>
                <p className='details text-lg'>Build your body and fitness with profesiolnal touch</p>

                <div className="header-btns">
                    <a href="#" className='header-btn'>JOIN US</a>
                    <button onClick={handleClick} className=''>JOIN US</button>
                </div>
            </div>

        </div>
    )
}

export default Header;