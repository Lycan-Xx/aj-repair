import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, ShoppingBag } from 'lucide-react';

const Navbar = ({ isOpen, toggleMenu, navItems }) => {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [dropdownOpen, setDropdownOpen] = useState(false);

	// Handle scroll events
	useEffect(() => {
		const handleScroll = () => {
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

	const serviceDropdownItems = [
		{ label: 'Computer Repair', id: 'computer-repair' },
		{ label: 'Phone Repair', id: 'phone-repair' },
		{ label: 'TV Repair', id: 'tv-repair' },
		{ label: 'Smart Home', id: 'smart-home' }
	];

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
					? 'bg-white shadow-md py-2'
					: 'bg-transparent py-6'
				}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<a href="#home" className="flex items-center">
							<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
							<span className={`ml-2 text-xl font-bold transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
								AJ TechFix Pro
							</span>
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-1">
						{navItems.map((item, index) => {
							// For services with dropdown
							if (item.id === 'services') {
								return (
									<div key={item.id} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
										<button
											className={`px-4 py-2 rounded-md flex items-center transition-colors ${activeSection === item.id || dropdownOpen
													? 'text-blue-600'
													: scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
												}`}
										>
											{item.label}
											<ChevronDown size={16} className="ml-1" />
										</button>

										{/* Dropdown menu */}
										{dropdownOpen && (
											<div className="absolute top-full left-0 w-56 mt-1 bg-white rounded-md shadow-lg py-2 z-50">
												{serviceDropdownItems.map((service) => (
													<a
														key={service.id}
														href={`#${service.id}`}
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
													>
														{service.label}
													</a>
												))}
											</div>
										)}
									</div>
								);
							}

							// Regular nav items
							return (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`px-4 py-2 rounded-md transition-colors ${activeSection === item.id
											? 'text-blue-600'
											: scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
										}`}
								>
									{item.label}
								</button>
							);
						})}
					</div>

					{/* Call to action buttons */}
					<div className="hidden lg:flex items-center space-x-4">
						<a href="tel:+15551234567" className="flex items-center text-sm font-medium">
							<Phone size={18} className={`mr-2 ${scrolled ? 'text-blue-600' : 'text-blue-400'}`} />
							<span className={scrolled ? 'text-gray-700' : 'text-white'}>
								(555) 123-4567
							</span>
						</a>
						<button
							className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm hover:shadow-md transition-all"
						>
							Book Service
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden flex items-center">
						<button
							className={`px-3 py-1 mr-2 text-xs font-medium text-white rounded-full ${scrolled ? 'bg-blue-600' : 'bg-blue-500/80'}`}
						>
							Book Now
						</button>
						<button
							onClick={toggleMenu}
							className={`p-2 rounded-md ${scrolled
									? 'text-gray-600 hover:text-blue-600'
									: 'text-white hover:text-blue-200'
								}`}
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="lg:hidden bg-white shadow-lg border-t">
					<div className="px-4 pt-2 pb-4 space-y-1">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`block px-3 py-2 text-base font-medium w-full text-left rounded-md ${activeSection === item.id
										? 'text-blue-600 bg-blue-50'
										: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
									}`}
							>
								{item.label}
							</button>
						))}
						<div className="mt-4 pt-4 border-t border-gray-200">
							<a href="tel:+15551234567" className="flex items-center px-3 py-2 text-base font-medium text-gray-600">
								<Phone size={20} className="mr-3 text-blue-600" />
								(555) 123-4567
							</a>
							<button className="mt-3 w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md">
								Book Service
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Background overlay for transparent navigation */}
			{!scrolled && (
				<div
					className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent -z-10"
					style={{ height: '100px' }}
				></div>
			)}
		</nav>
	);
};

export default Navbar;