import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: 'Lightning Fast',
            description: 'Optimized performance that keeps your applications running at peak efficiency'
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: 'Secure by Design',
            description: 'Built-in security features to protect your data and users'
        },
        {
            icon: <Smartphone className="w-8 h-8 text-blue-600" />,
            title: 'Mobile First',
            description: 'Responsive designs that work seamlessly across all devices'
        },
        {
            icon: <Globe className="w-8 h-8 text-blue-600" />,
            title: 'Global Scale',
            description: 'Infrastructure that grows with your business needs'
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Powerful Features
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Everything you need to succeed in the digital world
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;