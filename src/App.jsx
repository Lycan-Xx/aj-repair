import React, { useState } from 'react';
import { Menu, X, Rocket, Zap, Users, Mail, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contacts';




function App() {

	const [isOpen, setIsOpen] = useState(false);


	const toggleMenu = () => setIsOpen(!isOpen);

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'features', label: 'Features' },
		{ id: 'offer', label: 'Offer' },
		{ id: 'about', label: 'About' },
		{ id: 'contact', label: 'Contact' },

	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			<Navbar isOpen={isOpen} toggleMenu={toggleMenu} navItems={navItems} />

			<main className="pt-16">

				<Hero />
				<Features />
				<Offer />
				<About />
				<Contact />

			</main>

		</div>
	);
}

export default App;
