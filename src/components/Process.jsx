import React from 'react';
import { ClipboardCheck, ThumbsUp, Truck } from 'lucide-react';

const Process = () => {
	const steps = [
		{
			icon: <ClipboardCheck size={32} />,
			title: 'Diagnostics',
			description: 'We thoroughly examine your device to identify all issues and provide an accurate assessment.'
		},
		{
			icon: <Truck size={32} />,
			title: 'Repair',
			description: 'Our certified technicians repair your device using high-quality parts and advanced tools.'
		},
		{
			icon: <ThumbsUp size={32} />,
			title: 'Quality Check',
			description: 'Every repaired device undergoes extensive testing to ensure optimal performance.'
		},
		{
			icon: <Truck size={32} />,
			title: 'Return',
			description: 'Your device is safely packaged and returned with a warranty on all our repair services.'
		}
	];

	return (
		<section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">How We Work</span>
					<h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Our Repair Process</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600">
						We follow a systematic approach to ensure fast, reliable, and high-quality repairs for all your devices.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{steps.map((step, index) => (
						<div key={index} className="relative">
							<div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center relative z-10">
								<div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 inline-flex items-center justify-center mb-6 text-white relative">
									{step.icon}
									<span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-white text-blue-600 rounded-full text-sm font-bold border-2 border-blue-600">
										{index + 1}
									</span>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>

							{/* Connector line (not shown for the last item) */}
							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 z-0">
									<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-600 rounded-full"></div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Process;