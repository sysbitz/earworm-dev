import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsSection: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			id: 1,
			image: "/person1.png",
			name: "Jake Thomson",
			role: "Marketing Consultant",
			company: "ZenZap",
			logo: "/logos/zenzap.png",
			quote:
				"Earworm has completely transformed how I manage my podcast. Automated scheduling and reminders save hours every week, eliminating the back-and-forth and keeping every recording on track. It's a seamless, reliable workflow I'd recommend to any growing show.",
		},
		{
			id: 2,
			image: "/person2.png",
			name: "Sarah Mitchell",
			role: "Creative Director",
			company: "SoundWave",
			logo: "/logos/soundwave.png",
			quote:
				"The AI-powered composition tools have revolutionized our creative process. We can now experiment with multiple styles in minutes instead of hours. The quality and creativity suggestions are outstanding.",
		},
		{
			id: 3,
			image: "/person3.png",
			name: "Marcus Chen",
			role: "Music Producer",
			company: "Beat Labs",
			logo: "/logos/beat-labs.png",
			quote:
				"Finally, a tool that understands music production workflow. Earworm integrates seamlessly with our existing tools and has cut our production time in half. Worth every penny.",
		},
		{
			id: 4,
			image:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
			name: "Emily Rodriguez",
			role: "Sound Engineer",
			company: "Audio Dynamics",
			logo: "/logos/audio-dynamics.png",
			quote:
				"The precision and accuracy of Earworm's AI is impressive. It understands nuances in music composition that most tools miss. Our team has adopted it as our primary tool.",
		},
	];

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const current = testimonials[currentIndex];

	return (
		<div className="bg-[#050505] py-24 relative overflow-hidden">
			{/* Ellipse decorative elements - exported from Figma */}
			<img
				src="/Ellipse 11.png"
				alt=""
				className="absolute pointer-events-none opacity-30 blur-sm z-20"
				style={{
					left: "40%",
					top: "25%",
					transform: "translate(-50%, -50%) scale(1.0)",
					mixBlendMode: "screen",
				}}
			/>
			<img
				src="/Ellipse 12.png"
				alt=""
				className="absolute pointer-events-none opacity-30 blur-sm z-20"
				style={{
					left: "50%",
					top: "30%",
					transform: "translate(-50%, -50%) scale(1.0)",
					mixBlendMode: "screen",
				}}
			/>

			<div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 relative">
					<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white tracking-tight leading-[1.2]">
						See what our
						<br />
						<span className="text-brand-green relative inline-block mx-2">
							happy clients
						</span>{" "}
						are saying
					</h2>
				</div>

				{/* Testimonial Card */}
				<div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row gap-8 md:gap-12 relative overflow-hidden">
					{/* Subtle gradient bg for card */}
					<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

					{/* Left Image */}
					<div className="w-full md:w-[400px] h-[300px] md:h-[400px] flex-shrink-0 relative rounded-[32px] overflow-hidden">
						<img
							src={current.image}
							alt={current.name}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Right Content */}
					<div className="flex-1 flex flex-col justify-center py-4 pr-4 md:pr-8">
						<blockquote className="text-[20px] md:text-[24px] font-sans text-gray-200 leading-[1.6] mb-10">
							"{current.quote}"
						</blockquote>

						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto">
							<div className="flex items-center gap-6">
								<div>
									<h4 className="text-white font-bold text-[20px]">
										{current.name}
									</h4>
									<p className="text-gray-500 text-[16px]">{current.role}</p>
								</div>

								{/* Divider */}
								<div className="w-px h-10 bg-white/10 hidden md:block"></div>

								{/* Company Logo */}
								<img
									src={current.logo}
									alt={current.company}
									className="h-8 w-auto object-contain"
								/>
							</div>

							{/* Navigation Arrows */}
							<div className="flex items-center gap-3">
								<button
									onClick={handlePrevious}
									className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all bg-white/5">
									<ArrowLeft className="w-5 h-5" />
								</button>
								<button
									onClick={handleNext}
									className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all bg-white/5">
									<ArrowRight className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Testimonial Indicators */}
				<div className="flex justify-center gap-2 mt-8">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 rounded-full transition-all ${
								index === currentIndex
									? "bg-brand-green w-8"
									: "bg-white/20 w-2"
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>

				{/* Stats Row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center border-t border-white/5 pt-12">
					<div>
						<div className="text-3xl md:text-[40px] font-display font-bold text-white mb-2 leading-[1.5]">
							$5bn+
						</div>
						<div className="text-gray-500 text-[16px]">
							In yearly card spend
						</div>
					</div>
					<div>
						<div className="text-3xl md:text-[40px] font-display font-bold text-white mb-2 leading-[1.5]">
							4m+
						</div>
						<div className="text-gray-500 text-[16px]">Virtual card issued</div>
					</div>
					<div>
						<div className="text-3xl md:text-[40px] font-display font-bold text-white mb-2 leading-[1.5]">
							3k+
						</div>
						<div className="text-gray-500 text-[16px]">Happy customers</div>
					</div>
					<div className="relative">
						<div className="text-3xl md:text-[40px] font-display font-bold text-white mb-2 leading-[1.5]">
							$100m+
						</div>
						<div className="text-gray-500 text-[16px]">Earned in cash back</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSection;
