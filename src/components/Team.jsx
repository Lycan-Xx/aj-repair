import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const carouselRef = useRef(null);
	const intervalRef = useRef(null);

	const teamMembers = [
		{
			name: 'Alex Johnson',
			role: 'PC Hardware Specialist',
			expertise: 'Custom Builds & Graphics Card Repair',
			image: '/api/placeholder/400/400',
			description: '10 years experience working with all major computer brands. Expert in component-level repairs and performance optimization.'
		},
		{
			name: 'Sarah Chen',
			role: 'Mobile Device Technician',
			expertise: 'Apple & Android Repair',
			image: '/api/placeholder/400/400',
			description: 'Certified mobile repair specialist with expertise in screen replacements, water damage recovery, and microsoldering.'
		},
		{
			name: 'Marcus Williams',
			role: 'Smart Home Engineer',
			expertise: 'IoT & Home Automation',
			image: '/api/placeholder/400/400',
			description: 'Specializes in smart home setup, troubleshooting, and integration between different ecosystem devices.'
		},
		{
			name: 'Priya Patel',
			role: 'Data Recovery Expert',
			expertise: 'Drive Recovery & File Restoration',
			image: '/api/placeholder/400/400',
			description: 'Expert in retrieving data from damaged drives, corrupted storage, and system recovery for all device types.'
		},
		{
			name: 'David Rodriguez',
			role: 'TV & Audio Specialist',
			expertise: 'Display Calibration & Sound Systems',
			image: '/api/placeholder/400/400',
			description: 'Certified in advanced display technologies with specialized training in OLED and QLED repair techniques.'
		},
		{
			name: 'Michelle Lee',
			role: 'Software Solutions Engineer',
			expertise: 'System Optimization & Malware Removal',
			image: '/api/placeholder/400/400',
			description: 'Expert in software troubleshooting, virus removal, and system performance optimization for all platforms.'
		}
	];

	// Items to show based on viewport
	const getItemsToShow = () => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth >= 1280) return 4; // xl
			if (window.innerWidth >= 768) return 3; // md
			if (window.innerWidth >= 640) return 2; // sm
			return 1; // xs
		}
		return 3; // Default for SSR
	};

	const [itemsToShow, setItemsToShow] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			setItemsToShow(getItemsToShow());
		};

		handleResize(); // Initial setup
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		// Auto rotation
		intervalRef.current = setInterval(() => {
			handleNext();
		}, 5000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [currentIndex, isAnimating]);

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		setCurrentIndex((prevIndex) => {
			if (prevIndex === 0) {
				return teamMembers.length - itemsToShow;
			}
			return prevIndex - 1;
		});

		setTimeout(() => setIsAnimating(false), 500);
	};

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);

		setCurrentIndex((prevIndex) => {
			if (prevIndex >= teamMembers.length - itemsToShow) {
				return 0;
			}
			return prevIndex + 1;
		});

		setTimeout(() => setIsAnimating(false), 500);
	};

	const resetInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = setInterval(() => {
				handleNext();
			}, 5000);
		}
	};

	const goToSlide = (index) => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex(index);
		resetInterval();
		setTimeout(() => setIsAnimating(false), 500);
	};

	return (
		<section id="team" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
					<h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Expert Technicians</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600">
						Our dedicated team of certified specialists is ready to fix all your electronic devices with precision and care.
					</p>
				</div>

				<div className="relative">
					{/* Carousel navigation buttons */}
					<button
						onClick={() => { handlePrev(); resetInterval(); }}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors hidden md:block"
						aria-label="Previous slide"
					>
						<ChevronLeft size={24} />
					</button>

					<button
						onClick={() => { handleNext(); resetInterval(); }}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors hidden md:block"
						aria-label="Next slide"
					>
						<ChevronRight size={24} />
					</button>

					{/* Carousel container */}
					<div
						ref={carouselRef}
						className="overflow-hidden"
					>
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{
								transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
								width: `${(teamMembers.length / itemsToShow) * 100}%`
							}}
						>
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className="px-4"
									style={{ width: `${100 / teamMembers.length * itemsToShow}%` }}
								>
									<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
										<div className="relative aspect-square overflow-hidden">
											<img
												src={member.image}
												alt={member.name}
												className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
												<div className="p-4 text-white">
													<p className="font-medium">{member.expertise}</p>
												</div>
											</div>
										</div>
										<div className="p-6">
											<h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
											<p className="text-blue-600 font-medium mb-3">{member.role}</p>
											<p className="text-gray-600 text-sm">{member.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Indicator dots */}
					<div className="flex justify-center mt-8 space-x-2">
						{Array.from({ length: teamMembers.length - itemsToShow + 1 }).map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
									}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>

					{/* Mobile navigation */}
					<div className="flex justify-between mt-6 md:hidden">
						<button
							onClick={() => { handlePrev(); resetInterval(); }}
							className="p-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
							aria-label="Previous slide"
						>
							<ChevronLeft size={20} />
						</button>

						<button
							onClick={() => { handleNext(); resetInterval(); }}
							className="p-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
							aria-label="Next slide"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;