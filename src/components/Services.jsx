import React from 'react';
import {
	FaLaptop,
	FaMobileAlt,
	FaTv,
	FaHome,
	FaMicrochip,
	FaHdd,
	FaChevronRight
} from 'react-icons/fa';

const Services = () => {
	const serviceItems = [
		{
			icon: <FaLaptop size={36} />,
			title: 'PC & Laptop Repair',
			description: 'Hardware troubleshooting, software installation, and performance optimization for all computer brands.',
			gradient: 'from-blue-500 to-indigo-600'
		},
		{
			icon: <FaMobileAlt size={36} />,
			title: 'Mobile Device Repair',
			description: 'Screen replacements, battery upgrades, and software fixes for smartphones and tablets.',
			gradient: 'from-indigo-500 to-purple-600'
		},
		{
			icon: <FaTv size={36} />,
			title: 'TV & Display Service',
			description: 'Smart TV troubleshooting, panel repairs, and calibration for crystal-clear picture quality.',
			gradient: 'from-blue-600 to-cyan-500'
		},
		{
			icon: <FaHome size={36} />,
			title: 'Smart Home Setup',
			description: 'Installation and configuration of smart home devices, hubs, and automation systems.',
			gradient: 'from-indigo-600 to-blue-500'
		},
		{
			icon: <FaMicrochip size={36} />,
			title: 'Hardware Upgrades',
			description: 'RAM expansion, storage upgrades, and component installations to boost your device performance.',
			gradient: 'from-blue-500 to-cyan-600'
		},
		{
			icon: <FaHdd size={36} />,
			title: 'Data Recovery',
			description: 'Professional data recovery services for hard drives, SSDs, memory cards, and mobile devices.',
			gradient: 'from-purple-500 to-indigo-600'
		}
	];

	return (
		<section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
			{/* Background accent elements */}
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

			{/* Abstract decorative elements */}
			<div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-4 border-blue-600/10 hidden md:block"></div>
			<div className="absolute top-32 left-16 w-16 h-16 rounded-full border-2 border-indigo-600/10 hidden md:block"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Professional Services</span>
					<h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Expert Tech Repair &amp; Solutions</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
					<p className="text-lg md:text-xl text-gray-400">
						We diagnose and repair all types of electronics with precision and care, getting your devices back up and running quickly.
					</p>
				</div>

				{/* Card grid layout */}
				<div className="flex flex-wrap justify-center max-w-6xl mx-auto">
					{serviceItems.map((service, index) => (
						<div
							key={index}
							className="w-full sm:w-1/2 lg:w-1/3 p-4"
						>
							<div
								className={`
                  bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                  hover:-translate-y-2 relative overflow-hidden group border border-gray-700
                `}
							>
								{/* Background gradient overlay on hover */}
								<div className={`
                  absolute inset-0 bg-gradient-to-r ${service.gradient} 
                  opacity-5 group-hover:opacity-15 transition-opacity duration-300
                `}></div>

								<div className="p-8 relative z-10">
									{/* Icon with gradient background */}
									<div className={`
                    p-4 rounded-full bg-gradient-to-r ${service.gradient}
                    inline-flex items-center justify-center mb-6 text-white
                    shadow-md transform group-hover:scale-110 transition-transform
                  `}>
										{service.icon}
									</div>

									<h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
										{service.title}
									</h3>

									<p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
										{service.description}
									</p>

									<div className="flex items-center text-blue-400 font-medium">
										<span>Learn more</span>
										<FaChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Subtle divider at bottom */}
			<div className="max-w-7xl mx-auto px-8 mt-16">
				<div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
			</div>
		</section>
	);
};

export default Services;