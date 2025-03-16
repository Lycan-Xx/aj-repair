import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
	const cursorRef = useRef(null);
	const sectionRef = useRef(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		const section = sectionRef.current;

		if (!cursor || !section) return;

		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			const rect = section.getBoundingClientRect();
			const x = clientX - rect.left;
			const y = clientY - rect.top;

			// Update cursor position with a slight delay for smooth effect
			setTimeout(() => {
				cursor.style.transform = `translate(${x}px, ${y}px)`;
				cursor.style.opacity = '0.15';
			}, 50);
		};

		const handleMouseLeave = () => {
			cursor.style.opacity = '0';
		};

		const handleMouseEnter = () => {
			cursor.style.opacity = '0.15';
		};

		section.addEventListener('mousemove', handleMouseMove);
		section.addEventListener('mouseleave', handleMouseLeave);
		section.addEventListener('mouseenter', handleMouseEnter);

		return () => {
			section.removeEventListener('mousemove', handleMouseMove);
			section.removeEventListener('mouseleave', handleMouseLeave);
			section.removeEventListener('mouseenter', handleMouseEnter);
		};
	}, []);

	return (
		<section
			id="home"
			ref={sectionRef}
			className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden"
		>
			{/* Cursor follow effect */}
			<div
				ref={cursorRef}
				className="absolute w-64 h-64 rounded-full bg-blue-600 blur-3xl pointer-events-none opacity-0 transition-opacity duration-200"
			></div>

			{/* Background accent elements */}
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

			{/* Abstract shapes */}
			<div className="absolute bottom-24 right-24 w-40 h-40 rounded-full border-4 border-blue-600/10 hidden lg:block"></div>
			<div className="absolute top-24 left-24 w-20 h-20 rounded-full border-2 border-indigo-600/10 hidden lg:block"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="text-left">
						<div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 mb-6">
							<Zap size={18} className="mr-2" />
							<span className="font-medium text-sm">Professional Tech Repair Services</span>
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
							Expert Tech Solutions for
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-2">
								All Your Devices
							</span>
						</h1>

						<p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
							We bring your technology back to life with fast, reliable repair services.
							Professional solutions for computers, smartphones, TVs and more.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="#contact"
								className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-600/20 transition-all flex items-center justify-center"
							>
								Book Repair Service
								<ArrowRight size={18} className="ml-2" />
							</a>

							<a
								href="#services"
								className="px-8 py-4 border-2 border-gray-700 bg-gray-800/50 text-white rounded-lg hover:border-blue-500 transition-all flex items-center justify-center"
							>
								Explore Services
							</a>
						</div>
					</div>

					<div className="relative hidden lg:block">
						<div className="relative z-10">
							<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl">
								<div className="flex items-center mb-6">
									<svg className="w-10 h-10 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#paint0_linear)" />
										<defs>
											<linearGradient id="paint0_linear" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
												<stop stopColor="#3B82F6" />
												<stop offset="1" stopColor="#4F46E5" />
											</linearGradient>
										</defs>
									</svg>
									<span className="text-2xl font-bold text-white">A.J TechFix Pro</span>
								</div>

								<div className="space-y-4">
									{[
										{ label: "Same-day Repairs", value: "For most devices" },
										{ label: "Expert Technicians", value: "Certified professionals" },
										{ label: "90-Day Warranty", value: "On all repairs" },
										{ label: "Free Diagnostics", value: "No hidden fees" }
									].map((item, index) => (
										<div key={index} className="flex justify-between items-center border-b border-gray-700 pb-3">
											<div className="text-gray-400">{item.label}</div>
											<div className="text-white font-medium">{item.value}</div>
										</div>
									))}
								</div>

								<div className="mt-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-4 rounded-lg">
									<div className="text-blue-400 text-sm font-medium mb-1">Limited Time Offer</div>
									<div className="text-white font-bold text-lg">20% Off First Repair Service</div>
								</div>
							</div>
						</div>

						{/* Decorative elements */}
						<div className="absolute top-6 right-6 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
						<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl"></div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
				<div className="text-gray-500 text-sm mb-2">Scroll to explore</div>
				<div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
					<div className="w-1.5 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
				</div>
			</div>
		</section>
	);
};

export default Hero;