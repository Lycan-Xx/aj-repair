import React from 'react';

const Offer = () => {
    return (
        <section id="offer" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            What We Offer
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We provide comprehensive solutions tailored to your needs, ensuring your success in the digital landscape.
                        </p>
                        <div className="space-y-4">
                            {[
                                'Custom Software Development',
                                'UI/UX Design',
                                'Cloud Solutions',
                                'Digital Transformation',
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    <span className="text-lg text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                            alt="Modern office workspace"
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/10 rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;