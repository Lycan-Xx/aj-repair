import React from 'react';

function Featurebox(props) {
    return (
        <div className='a-box bg-black w-64 h-96 m-5 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105'>
            <div class="a-b-img">
                <img src={props.image} alt="" className='w-full h-full object-cover' />

            </div>
            <div className="a-b-text text-center p-4">
                <h2 className='text-white'> {props.title} </h2>
                <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident explicabo suscipit ut ad quo veniam perspiciatis iste esse vero quaerat!</p>
            </div>
        </div>
    )
}

export default Featurebox;