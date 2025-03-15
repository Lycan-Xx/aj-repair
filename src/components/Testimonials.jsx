import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const Testimonials = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const intervalRef = useRef(null);

	const testimonials = [
		{
			name: "Michael Robinson",
			role: "Small Business Owner",
			image: "/api/placeholder/80/80",
			stars: 5,
			text: "TechFix Pro saved my business when our server crashed right before a major deadline. Their quick response and technical expertise had us back up and running in no time. I couldn't be more grateful for their service."
		},
		{
			name: "Jennifer Lee",
			role: "Photographer",
			image: "/api/placeholder/80/80",
			stars: 5,
			text: "When my laptop with all my client photos stopped working, I was devastated. The team not only recovered all my data but fixed the hardware issues that caused the failure. Their work is fast, reliable, and fairly priced."
		},
		{
			name: "Robert Garcia",
			role: "Home User",
			image: "/api/placeholder/80/80",
			stars: 4,
			text: "After my smart TV stopped connecting to the internet, I called TechFix Pro. Their technician was knowledgeable and patient, walking me through some troubleshooting steps before coming out to make the final repair. Great experience!"
		},
		{
			name: "Emily Taylor",
			role: "Student",
			image: "/api/placeholder/80/80",
			stars: 5,
			text: "My MacBook crashed during finals week, and I was panicking. TechFix Pro fixed it within 24 hours and even managed to recover my thesis draft that I hadn't backed up. They're absolute lifesavers!"
		}
	];

	// Auto-slide functionality
	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
		}, 5000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [testimonials.length]);

	const resetInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = setInterval(() => {
				setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
			}, 5000);
		}
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
		resetInterval();
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
		resetInterval();
	};

	const goToSlide = (index) => {
		setActiveIndex(index);
		resetInterval();
	};

	return (
		<section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Customer Testimonials</span>
					<h2 className="text-4xl font-bold text-white mt-2 mb-4">What Our Clients Say</h2>
					<div className="h-1 w-20 bg-white mx-auto mb-6"></div>
					<p className="text-xl text-blue-100">
						Don't just take our word for it. Here's what our satisfied customers have to say about our repair services.
					</p>
				</div>

				<div className="relative">
					{/* Large quote icon */}
					<div className="absolute top-0 left-0 opacity-10">
						<MessageSquare size={200} />
					</div>

					{/* Testimonial cards */}
					<div className="relative z-10">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="flex items-center justify-center">
								<div className="bg-white rounded-xl p-8 shadow-xl relative h-full">
									{/* Stars */}
									<div className="flex mb-4">
										{[...Array(testimonials[activeIndex].stars)].map((_, i) => (
											<Star key={i} size={20} fill="#FBBF24" color="#FBBF24" />
										))}
										{[...Array(5 - testimonials[activeIndex].stars)].map((_, i) => (
											<Star key={i + testimonials[activeIndex].stars} size={20} color="#E5E7EB" />
										))}
									</div>

									{/* Quote */}
									<p className="text-gray-700 text-lg mb-6">"{testimonials[activeIndex].text}"</p>

									{/* Customer info */}
									<div className="flex items-center">
										<img
											src={testimonials[activeIndex].image}
											alt={testimonials[activeIndex].name}
											className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-600"
										/>
										<div>
											<h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
											<p className="text-blue-600">{testimonials[activeIndex].role}</p>
										</div>
									</div>

									{/* Blue accent */}
									<div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-l-xl"></div>
								</div>
							</div>

							<div className="hidden lg:flex flex-col justify-center">
								<h3 className="text-3xl font-bold mb-6">We pride ourselves on customer satisfaction</h3>
								<p className="text-blue-100 mb-8">Our expert technicians have fixed thousands of devices for satisfied customers. We're committed to providing fast, reliable repairs with transparent pricing and exceptional customer service.</p>

								<div className="flex items-center space-x-4">
									<button
										onClick={handlePrev}
										className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
									>
										<ChevronLeft size={24} />
									</button>

									{/* Indicator dots */}
									<div className="flex space-x-2">
										{testimonials.map((_, index) => (
											<button
												key={index}
												onClick={() => goToSlide(index)}
												className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
													}`}
												aria-label={`Go to slide ${index + 1}`}
											/>
										))}
									</div>

									<button
										onClick={handleNext}
										className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
									>
										<ChevronRight size={24} />
									</button>
								</div>
							</div>
						</div>

						{/* Mobile navigation */}
						<div className="flex justify-center items-center mt-8 lg:hidden">
							<button
								onClick={handlePrev}
								className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
							>
								<ChevronLeft size={20} />
							</button>

							{/* Indicator dots */}
							<div className="flex space-x-2 mx-4">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
											}`}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>

							<button
								onClick={handleNext}
								className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
							>
								<ChevronRight size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;