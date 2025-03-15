import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Navbar = ({ isOpen, toggleMenu, navItems }) => {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	// Handle scroll events
	useEffect(() => {
		const handleScroll = () => {
			// Set scrolled state for navbar styling
			setScrolled(window.scrollY > 20);

			// Find which section is currently in view
			const sections = navItems.map(item => document.getElementById(item.id));
			const viewportHeight = window.innerHeight;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section) {
					const rect = section.getBoundingClientRect();
					if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.3) {
						setActiveSection(navItems[i].id);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [navItems]);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		if (isOpen) toggleMenu();
	};

	return (
		<>
			{/* Top info bar */}
			<div className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
					<div className="flex items-center space-x-4">
						<div className="flex items-center">
							<Clock size={14} className="mr-1" />
							<span>Mon-Fri: 8AM-6PM, Sat: 9AM-3PM</span>
						</div>
						<div className="flex items-center">
							<MapPin size={14} className="mr-1" />
							<span>123 Tech Street, Digital City</span>
						</div>
					</div>
					<div className="flex items-center">
						<Phone size={14} className="mr-1" />
						<span>Emergency Support: (555) 123-4567</span>
					</div>
				</div>
			</div>

			{/* Main navigation */}
			<nav className={`fixed top-0 md:top-9 w-full ${scrolled ? 'bg-white/95' : 'bg-white/80'} backdrop-blur-sm shadow-sm z-50 transition-all duration-300`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex-shrink-0">
							<span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
								<svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="2" />
									<defs>
										<linearGradient id="paint0_linear" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
											<stop stopColor="#3B82F6" />
											<stop offset="1" stopColor="#4F46E5" />
										</linearGradient>
										<linearGradient id="paint1_linear" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
											<stop stopColor="#3B82F6" />
											<stop offset="1" stopColor="#4F46E5" />
										</linearGradient>
									</defs>
								</svg>
								TechFix Pro
							</span>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-center space-x-1">
								{navItems.map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeSection === item.id
												? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600'
												: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
											}`}
									>
										{item.label}
									</button>
								))}
								<button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-all">
									Book Service
								</button>
							</div>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden flex items-center">
							<button className="px-4 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-all mr-2">
								Book
							</button>
							<button
								onClick={toggleMenu}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
							>
								{isOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`block px-3 py-2 text-base font-medium w-full text-left rounded-md ${activeSection === item.id
											? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600'
											: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
										}`}
								>
									{item.label}
								</button>
							))}
							<div className="mt-4 pt-4 border-t border-gray-200">
								<div className="flex items-center px-3 py-2 text-sm text-gray-600">
									<Clock size={16} className="mr-2" />
									<span>Mon-Fri: 8AM-6PM, Sat: 9AM-3PM</span>
								</div>
								<div className="flex items-center px-3 py-2 text-sm text-gray-600">
									<Phone size={16} className="mr-2" />
									<span>(555) 123-4567</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;