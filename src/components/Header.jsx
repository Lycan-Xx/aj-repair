import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Transform Your Vision Into
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Digital Reality
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        We craft exceptional digital experiences that inspire, engage, and deliver results.
                        Let's build something amazing together.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={32} className="text-gray-400" />
            </div>
        </section>
    );
};

export default Hero;