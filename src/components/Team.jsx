import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

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
			image: 'https://picsum.photos/seed/alex/240/320',
			description: '10 years experience working with all major computer brands. Expert in component-level repairs and performance optimization.'
		},
		{
			name: 'Sarah Chen',
			role: 'Mobile Device Technician',
			expertise: 'Apple & Android Repair',
			image: 'https://picsum.photos/seed/sarah/240/320',
			description: 'Certified mobile repair specialist with expertise in screen replacements, water damage recovery, and microsoldering.'
		},
		{
			name: 'Marcus Williams',
			role: 'Smart Home Engineer',
			expertise: 'IoT & Home Automation',
			image: 'https://picsum.photos/seed/marcus/240/320',
			description: 'Specializes in smart home setup, troubleshooting, and integration between different ecosystem devices.'
		},
		{
			name: 'Priya Patel',
			role: 'Data Recovery Expert',
			expertise: 'Drive Recovery & File Restoration',
			image: 'https://picsum.photos/seed/priya/240/320',
			description: 'Expert in retrieving data from damaged drives, corrupted storage, and system recovery for all device types.'
		},
		{
			name: 'David Rodriguez',
			role: 'TV & Audio Specialist',
			expertise: 'Display Calibration & Sound Systems',
			image: 'https://picsum.photos/seed/david/240/320',
			description: 'Certified in advanced display technologies with specialized training in OLED and QLED repair techniques.'
		},
		{
			name: 'Michelle Lee',
			role: 'Software Solutions Engineer',
			expertise: 'System Optimization & Malware Removal',
			image: 'https://picsum.photos/seed/michelle/240/320',
			description: 'Expert in software troubleshooting, virus removal, and system performance optimization for all platforms.'
		}
	];

	useEffect(() => {
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
			const newIndex = prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1;
			setTimeout(() => setIsAnimating(false), 500);
			return newIndex;
		});
	};

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prevIndex) => {
			const newIndex = prevIndex >= teamMembers.length - 1 ? 0 : prevIndex + 1;
			setTimeout(() => setIsAnimating(false), 500);
			return newIndex;
		});
	};

	const resetInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = setInterval(() => {
				handleNext();
			}, 5000);
		}
	};

	const currentMember = teamMembers[currentIndex];

	return (
		<section id="team" className="py-20 bg-gray-900 relative overflow-hidden">
			{/* Background accent */}
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
					<h2 className="text-4xl font-bold text-white mt-2 mb-4">Expert Technicians</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-300">
						Our dedicated team of certified specialists is ready to fix all your electronic devices with precision and care.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Team Member Details - Left Column */}
					<div className="order-2 lg:order-1">
						<div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8 shadow-xl relative overflow-hidden">
							{/* Detail Header */}
							<div className="flex items-center mb-6">
								<div className="bg-blue-600/20 p-3 rounded-lg mr-4">
									<Users size={24} className="text-blue-400" />
								</div>
								<div>
									<h3 className="text-3xl font-bold text-white">{currentMember.name}</h3>
									<p className="text-blue-400 font-medium">{currentMember.role}</p>
								</div>
							</div>

							{/* Expertise */}
							<div className="mb-6">
								<div className="text-gray-300 mb-2 font-medium">Expertise</div>
								<div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 mb-4">
									<span className="font-medium text-sm">{currentMember.expertise}</span>
								</div>
							</div>

							{/* Description */}
							<div className="mb-8">
								<div className="text-gray-300 mb-2 font-medium">Background</div>
								<p className="text-gray-300">{currentMember.description}</p>
							</div>

							{/* Stats/Skills */}
							<div className="grid grid-cols-2 gap-4 mb-6">
								{[
									{ label: 'Experience', value: '10+ Years' },
									{ label: 'Certifications', value: 'Industry Leading' },
								].map((stat, index) => (
									<div key={index} className="bg-gray-900/50 p-3 rounded-lg">
										<div className="text-gray-400 text-sm">{stat.label}</div>
										<div className="text-white font-medium">{stat.value}</div>
									</div>
								))}
							</div>

							{/* Abstract shapes */}
							<div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full border-8 border-white/5"></div>
							<div className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-white/5"></div>
						</div>
					</div>

					{/* Team Member Carousel - Right Column */}
					<div className="order-1 lg:order-2 relative">
						<div className="relative">
							<button
								onClick={() => { handlePrev(); resetInterval(); }}
								className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800 rounded-full p-2 shadow-md text-gray-300 hover:text-blue-400 transition-colors"
								aria-label="Previous team member"
							>
								<ChevronLeft size={24} />
							</button>

							<button
								onClick={() => { handleNext(); resetInterval(); }}
								className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800 rounded-full p-2 shadow-md text-gray-300 hover:text-blue-400 transition-colors"
								aria-label="Next team member"
							>
								<ChevronRight size={24} />
							</button>

							<div ref={carouselRef} className="overflow-hidden">
								<div
									className="flex transition-transform duration-500 ease-in-out"
									style={{
										transform: `translateX(-${currentIndex * 100}%)`
									}}
								>
									{teamMembers.map((member, index) => (
										<div
											key={index}
											className="w-full flex-shrink-0 flex justify-center"
										>
											<div className="relative bg-gradient-to-b from-transparent to-gray-900/80 rounded-xl overflow-hidden shadow-xl max-w-xs">
												<img
													src={member.image}
													alt={member.name}
													className="w-full h-full object-cover aspect-[3/4] rounded-xl"
												/>
												<div className="absolute bottom-0 left-0 right-0 p-4 text-center">
													<h4 className="text-lg font-bold text-white">{member.name}</h4>
													<p className="text-blue-400 text-sm font-medium">{member.role}</p>
												</div>

												{/* Highlight current member */}
												{currentIndex === index && (
													<div className="absolute inset-0 border-4 border-blue-500 rounded-xl"></div>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Progress indicator */}
						<div className="flex justify-center mt-8">
							<div className="h-1 bg-gray-700 rounded-full w-full max-w-sm overflow-hidden">
								<div
									className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
									style={{
										width: `${((currentIndex + 1) / teamMembers.length) * 100}%`
									}}
								/>
							</div>
						</div>

						{/* Team member navigation dots */}
						<div className="flex justify-center mt-4 space-x-2">
							{teamMembers.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										setCurrentIndex(index);
										resetInterval();
									}}
									className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-600'
										}`}
									aria-label={`Go to team member ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;