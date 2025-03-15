import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Have a project in mind? Let's talk about it.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Mail className="w-6 h-6 text-blue-600" />,
                            title: 'Email',
                            content: 'contact@example.com',
                        },
                        {
                            icon: <Phone className="w-6 h-6 text-blue-600" />,
                            title: 'Phone',
                            content: '+1 (555) 123-4567',
                        },
                        {
                            icon: <MapPin className="w-6 h-6 text-blue-600" />,
                            title: 'Location',
                            content: 'San Francisco, CA',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;