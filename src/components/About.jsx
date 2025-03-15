import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
	return (
		<section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
			{/* Background accents */}
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
			<div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-4 border-blue-600/10 hidden md:block"></div>
			<div className="absolute top-32 left-16 w-16 h-16 rounded-full border-2 border-indigo-600/10 hidden md:block"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
					<h2 className="text-4xl font-bold text-white mt-2 mb-4">About TechFix Pro</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-300">
						We bring technology back to life with expert repairs and exceptional service.
					</p>
				</div>

				{/* Consistent two-column layout: Image on left, text on right */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<img
							src="https://picsum.photos/seed/technician/600/400"
							alt="Technician at work"
							className="rounded-xl shadow-xl relative z-10"
						/>
						<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-xl"></div>

						{/* Abstract shapes */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-blue-600/10 z-0"></div>
						<div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-indigo-600/10 z-0"></div>

						{/* Feature card overlay */}
						<div className="absolute -bottom-8 -right-8 bg-gray-800 rounded-lg shadow-xl p-6 z-20 hidden md:block">
							<div className="flex items-center mb-3">
								<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
									<svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none">
										<path d="M9 12L11 14L15 10M12 3L13 2L21 10L13 22L3 10L11 2L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<span className="font-semibold text-gray-100">90-Day Warranty</span>
							</div>
							<p className="text-gray-400 text-sm">All repairs come with our industry-leading warranty</p>
						</div>
					</div>

					<div>
						<h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
							Your Tech Repair Experts
							<span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
						</h3>

						<p className="text-gray-300 mb-6">
							We're certified experts providing fast, reliable repairs for all your devices at competitive rates. With continuous training and a customer-first approach, we ensure your technology stays up and running.
						</p>

						<div className="grid grid-cols-2 gap-6 mb-8">
							{[
								{ number: '10+', label: 'Years Experience' },
								{ number: '2000+', label: 'Repairs Completed' },
								{ number: '25+', label: 'Certified Technicians' },
								{ number: '99%', label: 'Client Satisfaction' }
							].map((stat, index) => (
								<div
									key={index}
									className="text-center p-4 bg-gray-800 rounded-lg shadow-md border-t-2 border-blue-600"
								>
									<div className="text-2xl font-bold text-blue-400">{stat.number}</div>
									<div className="text-gray-300">{stat.label}</div>
								</div>
							))}
						</div>

						<a
							href="#services"
							className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg px-6 py-3 transition-all hover:shadow-lg hover:shadow-blue-600/20"
						>
							Our Services
							<ArrowRight size={18} className="ml-2" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
