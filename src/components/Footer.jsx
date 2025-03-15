import React from 'react';
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	Facebook,
	Twitter,
	Instagram,
	Youtube,
	Linkedin,
	ArrowRight,
	ChevronRight
} from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const services = [
		{ name: 'Computer Repair', link: '#services' },
		{ name: 'Smartphone Repair', link: '#services' },
		{ name: 'TV & Display Repair', link: '#services' },
		{ name: 'Smart Home Setup', link: '#services' },
		{ name: 'Data Recovery', link: '#services' },
		{ name: 'Hardware Upgrades', link: '#services' }
	];

	const quickLinks = [
		{ name: 'Home', link: '#home' },
		{ name: 'About Us', link: '#about' },
		{ name: 'Our Team', link: '#team' },
		{ name: 'Testimonials', link: '#testimonials' },
		{ name: 'Contact Us', link: '#contact' },
		{ name: 'Book Service', link: '#contact' }
	];

	const contactInfo = [
		{ icon: <Phone size={18} />, text: '(555) 123-4567', link: 'tel:+15551234567' },
		{ icon: <Mail size={18} />, text: 'support@techfixpro.com', link: 'mailto:support@techfixpro.com' },
		{ icon: <MapPin size={18} />, text: '123 Tech Street, Digital City, DC 12345', link: 'https://maps.google.com' },
		{ icon: <Clock size={18} />, text: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM', link: '#contact' }
	];

	const socialMedia = [
		{ icon: <Facebook size={20} />, name: 'Facebook', link: '#', color: 'hover:bg-blue-600' },
		{ icon: <Twitter size={20} />, name: 'Twitter', link: '#', color: 'hover:bg-blue-400' },
		{ icon: <Instagram size={20} />, name: 'Instagram', link: '#', color: 'hover:bg-pink-600' },
		{ icon: <Youtube size={20} />, name: 'YouTube', link: '#', color: 'hover:bg-red-600' },
		{ icon: <Linkedin size={20} />, name: 'LinkedIn', link: '#', color: 'hover:bg-blue-700' }
	];

	return (
		<footer className="bg-gray-900 text-white pt-16 relative overflow-hidden">
			{/* Background accent */}
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

			{/* Newsletter */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
				<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
						<div className="lg:col-span-3">
							<h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated with TechFix Pro</h3>
							<p className="text-blue-100">Subscribe to our newsletter for tech tips, service updates, and exclusive offers.</p>
						</div>
						<div className="lg:col-span-2">
							<form className="flex flex-col sm:flex-row gap-2">
								<input
									type="email"
									placeholder="Your email address"
									className="rounded-md px-4 py-3 flex-grow bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
									required
								/>
								<button
									type="submit"
									className="bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-md px-6 py-3 transition-colors flex items-center justify-center"
								>
									Subscribe
									<ArrowRight size={18} className="ml-2" />
								</button>
							</form>
						</div>
					</div>

					{/* Abstract shapes */}
					<div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full border-8 border-white/10"></div>
					<div className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-white/10"></div>
				</div>
			</div>

			{/* Main footer content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
					{/* About column */}
					<div>
						<div className="flex items-center mb-6">
							<svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">


								<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#paint0_linear)" />
								<defs>
									<linearGradient id="paint0_linear" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
										<stop stopColor="#3B82F6" />
										<stop offset="1" stopColor="#4F46E5" />
									</linearGradient>
								</defs>
							</svg>
							<span className="text-xl font-bold">TechFix Pro</span>
						</div>
						<p className="text-gray-400 mb-6">
							Professional tech repair services with a customer-first approach. Fast, reliable, and affordable solutions for all your technology needs.
						</p>
						<div className="flex space-x-2">
							{socialMedia.map((item, index) => (
								<a
									key={index}
									href={item.link}
									aria-label={item.name}
									className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 ${item.color} transition-colors`}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>

					{/* Services column */}
					<div>
						<h3 className="text-lg font-semibold mb-6 relative">
							Our Services
							<span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
						</h3>
						<ul className="space-y-3">
							{services.map((service, index) => (
								<li key={index}>
									<a href={service.link} className="text-gray-400 hover:text-white transition-colors flex items-center">
										<ChevronRight size={16} className="mr-2 text-blue-500" />
										{service.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Quick Links column */}
					<div>
						<h3 className="text-lg font-semibold mb-6 relative">
							Quick Links
							<span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
						</h3>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<a href={link.link} className="text-gray-400 hover:text-white transition-colors flex items-center">
										<ChevronRight size={16} className="mr-2 text-blue-500" />
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact column */}
					<div>
						<h3 className="text-lg font-semibold mb-6 relative">
							Contact Us
							<span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
						</h3>
						<ul className="space-y-4">
							{contactInfo.map((item, index) => (
								<li key={index}>
									<a href={item.link} className="text-gray-400 hover:text-white transition-colors flex">
										<span className="text-blue-500 mr-3 mt-1">{item.icon}</span>
										<span>{item.text}</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-800 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm mb-4 md:mb-0">
							© {currentYear} TechFix Pro. All rights reserved.
						</p>
						<div className="flex space-x-6">
							<a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
							<a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
							<a href="#sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;