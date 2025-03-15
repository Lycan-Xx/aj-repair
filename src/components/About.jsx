import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative order-2 lg:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team collaboration"
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            About Us
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            We're a team of passionate developers, designers, and digital craftsmen dedicated to creating exceptional digital experiences.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {[
                                { number: '10+', label: 'Years Experience' },
                                { number: '200+', label: 'Projects Completed' },
                                { number: '50+', label: 'Team Members' },
                                { number: '99%', label: 'Client Satisfaction' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;