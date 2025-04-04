import { useState } from 'react'
import { Menu, X, Rocket, Zap, Users, Mail, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/BookingForm';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

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
		<div className="min-h-screen">
			<Navbar isOpen={isOpen} toggleMenu={toggleMenu} navItems={navItems} />

			<main className="w-full">
				<Header />
				<Features />
				<Services />
				<Process />
				<Offer />
				<About />
				<Team />
				<Testimonials />
				<Contact />
				<Footer />

			</main>
		</div>
	);
}
export default App;
