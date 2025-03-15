import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
	{
		name: "Michael Robinson",
		role: "Small Business Owner",
		stars: 5,
		text: "TechFix Pro saved my business when our server crashed right before a major deadline. Their quick response and technical expertise had us back up and running in no time."
	},
	{
		name: "Jennifer Lee",
		role: "Photographer",
		stars: 5,
		text: "When my laptop with all my client photos stopped working, I was devastated. The team not only recovered all my data but fixed the hardware issues that caused the failure."
	},
	{
		name: "Robert Garcia",
		role: "Home User",
		stars: 4,
		text: "After my smart TV stopped connecting to the internet, I called TechFix Pro. Their technician was knowledgeable and patient, walking me through the troubleshooting steps."
	},
	{
		name: "Emily Taylor",
		role: "Student",
		stars: 5,
		text: "My MacBook crashed during finals week, and I was panicking. TechFix Pro fixed it within 24 hours and even managed to recover my thesis draft. They're absolute lifesavers!"
	}
];

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
					<p className="text-blue-200 text-lg">What our customers say about our services</p>
				</div>

				<div className="relative h-96">
					<AnimatePresence initial={false} mode="popLayout">
						<motion.div
							key={currentIndex}
							initial={{
								opacity: 0,
								x: direction > 0 ? 200 : -200,
								scale: 0.8
							}}
							animate={{
								opacity: 1,
								x: 0,
								scale: 1,
								rotateZ: 0
							}}
							exit={{
								opacity: 0,
								x: direction < 0 ? 200 : -200,
								scale: 0.8,
								rotateZ: direction > 0 ? 10 : -10
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30
							}}
							className="absolute inset-0"
						>
							<div className="bg-white rounded-2xl shadow-2xl p-8 mx-auto max-w-xl h-full relative overflow-hidden">
								<Quote className="text-purple-200 absolute top-4 right-4" size={40} />

								<div className="flex gap-1 mb-6">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											size={20}
											className={i < testimonials[currentIndex].stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
										/>
									))}
								</div>

								<p className="text-gray-700 text-lg mb-8 leading-relaxed">
									"{testimonials[currentIndex].text}"
								</p>

								<div className="absolute bottom-8 left-8 right-8">
									<div className="border-t border-gray-200 pt-4 flex items-center gap-4">
										<img
											src={`https://picsum.photos/seed/${encodeURIComponent(testimonials[currentIndex].name)}/80/80`}
											alt={testimonials[currentIndex].name}
											className="w-12 h-12 rounded-full object-cover"
										/>
										<div>
											<h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
											<p className="text-purple-600">{testimonials[currentIndex].role}</p>
										</div>
									</div>
								</div>

								<div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-blue-600" />
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Indicator dots */}
					<div className="absolute left-0 right-0 bottom-0 flex justify-center gap-4 -mb-16 pt-8">
						{testimonials.map((_, idx) => (
							<motion.div
								key={idx}
								className={`h-2 rounded-full ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
								animate={{ scale: idx === currentIndex ? 1 : 0.8 }}
								transition={{ type: "spring", stiffness: 300, damping: 30 }}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
