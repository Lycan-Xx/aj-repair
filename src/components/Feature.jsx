import React from 'react';

import Featurebox from './Featurebox';
import fimage1 from '../assets/welcome.png';
import fimage2 from '../assets/credit.png';
import fimage3 from '../assets/debit.png';
import fimage4 from '../assets/security.png';


function Feature() {
    return (
        <div id='features' className='w-full h-screen flex flex-col items-center justify-center pt-10 bg-black'>
            <h1 className='text-white text-3xl'>FEATURES</h1>
            <div className='a-container flex justify-center items-center'>
                <Featurebox image={fimage1} title="Welcome" />
                <Featurebox image={fimage2} title="Credit" />
                <Featurebox image={fimage3} title="Debit" />
                <Featurebox image={fimage4} title="Security" />
            </div>
        </div>
    )
}

export default Feature;