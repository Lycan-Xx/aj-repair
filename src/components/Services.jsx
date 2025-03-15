import React from 'react';
import { Smartphone, Monitor, Tv, Home, Cpu, Shield } from 'lucide-react';

const Services = () => {
	const serviceItems = [
		{
			icon: <Monitor size={32} />,
			title: 'PC & Laptop Repair',
			description: 'Hardware troubleshooting, software installation, and performance optimization for all computer brands.'
		},
		{
			icon: <Smartphone size={32} />,
			title: 'Mobile Device Repair',
			description: 'Screen replacements, battery upgrades, and software fixes for smartphones and tablets.'
		},
		{
			icon: <Tv size={32} />,
			title: 'TV & Display Service',
			description: 'Smart TV troubleshooting, panel repairs, and calibration for crystal-clear picture quality.'
		},
		{
			icon: <Home size={32} />,
			title: 'Smart Home Setup',
			description: 'Installation and configuration of smart home devices, hubs, and automation systems.'
		},
		{
			icon: <Cpu size={32} />,
			title: 'Hardware Upgrades',
			description: 'RAM expansion, storage upgrades, and component installations to boost your device performance.'
		},
		{
			icon: <Shield size={32} />,
			title: 'Data Recovery',
			description: 'Professional data recovery services for hard drives, SSDs, memory cards, and mobile devices.'
		}
	];

	return (
		<section id="services" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Professional Services</span>
					<h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Expert Tech Repair & Solutions</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600">
						We diagnose and repair all types of electronics with precision and care, getting your devices back up and running quickly.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{serviceItems.map((service, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
						>
							<div className="p-4 rounded-full bg-white shadow-md inline-flex items-center justify-center mb-6 text-blue-600 group-hover:text-indigo-600 transition-colors">
								{service.icon}
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
							<p className="text-gray-600">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;