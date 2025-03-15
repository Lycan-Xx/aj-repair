import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const Testimonials = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const testimonials = [
		{
			name: "John Smith",
			role: "Business Owner",
			text: "Their phone repair service is exceptional. Quick, professional, and very reliable.",
			image: "https://randomuser.me/api/portraits/men/1.jpg"
		},
		{
			name: "Sarah Johnson",
			role: "Tech Professional",
			text: "Best repair service I've ever used. They fixed my laptop when others couldn't.",
			image: "https://randomuser.me/api/portraits/women/2.jpg"
		},
		{
			name: "Mike Wilson",
			role: "Student",
			text: "Affordable and fast service. Saved my phone just before finals week!",
			image: "https://randomuser.me/api/portraits/men/3.jpg"
		}
	];

	const prevTestimonial = () => {
		setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const nextTestimonial = () => {
		setActiveIndex((prev) => (prev + 1) % testimonials.length);
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/3">
						<div className="bg-white rounded-xl shadow-lg p-8 relative">
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

					<div className="hidden lg:flex flex-col justify-center gap-4">
						{/* Navigation buttons */}
						<button
							onClick={prevTestimonial}
							className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
						>
							<ChevronLeft size={24} />
						</button>
						<button
							onClick={nextTestimonial}
							className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
						>
							<ChevronRight size={24} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;