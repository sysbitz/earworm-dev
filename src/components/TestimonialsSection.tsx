import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsSection: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			id: 1,
			image: "/testi/jake.png",
			name: "Jake Thomson",
			role: "Marketing Consultant",
			company: "ZenZap",
			logo: "/testi/jake_zen.png",
			quote:
				"Earworm has completely transformed how I manage my podcast. Automated scheduling and reminders save hours every week, eliminating the back-and-forth and keeping every recording on track. It's a seamless, reliable workflow I'd recommend to any growing show.",
		},
		{
			id: 2,
			image: "/testi/sonia.png",
			name: "Sonia Seekunto",
			role: " Un-Seen Legacies",
			company: "SoundWave",
			logo: "/testi/sonia_unseen.png",
			quote:
				"This is my first foray into the world of podcasting and my goodness am I glad I chose Earworm to support me through it! From the very first call, to the consultancy to the onboarding, I felt heard, understood and supported",
		},
		{
			id: 3,
			image: "/testi/Ruari.png",
			name: "Ruari Fairbairns",
			role: "One Year No Beer",
			company: "Beat Labs",
			logo: "/testi/ruari_oy.png",
			quote:
				"Earworm podcast agency goes above and beyond in every aspect of podcasting. Not only do they deliver top-notch production quality, but they also suggest innovative strategies to help our business thrive.",
		},
		{
			id: 4,
			image: "/testi/Cesar.png",
			name: "Cesar Gamio",
			role: "Dharma Wellbeing",
			company: "Dharma wellbeing",
			logo: "/testi/cesar_dharma.png",
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
		<div className="py-24 px-20 relative overflow-hidden">
			
		

			<div className="px-6 lg:px-12 relative z-10">
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
				<div
					className="relative rounded-4xl p-3 flex flex-col md:flex-row gap-0 overflow-hidden max-w-6xl mx-auto"
					style={{
						background:
							"radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.03) 100%)",
						backdropFilter: "blur(32px) saturate(160%)",
						WebkitBackdropFilter: "blur(32px) saturate(160%)",
						border: "1px solid rgba(255,255,255,0.15)",
						boxShadow:
							"0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.2)",
					}}>
					{/* Top specular highlight */}
					<div
						className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
						style={{
							background:
								"linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.45) 30%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.45) 70%, transparent 95%)",
						}}
					/>

					{/* Inner shimmer */}
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							background:
								"linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
						}}
					/>

					{/* Left Image */}
					<div className="w-full md:w-[340px] h-[280px] md:h-auto flex-shrink-0 relative rounded-[24px] overflow-hidden">
						<img
							src={current.image}
							alt={current.name}
							className="w-full h-full object-cover"
						/>
						{/* subtle vignette on image */}
						<div
							className="absolute inset-0 rounded-[24px]"
							style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)" }}
						/>
					</div>

					{/* Right Content */}
					<div className="flex-1 flex flex-col justify-between py-8 px-8 md:px-10 relative z-10">
						<blockquote className="text-[19px] md:text-[22px] font-sans text-white/90 leading-[1.7] mb-8">
							"{current.quote}"
						</blockquote>

						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
							<div className="flex items-center gap-5">
								<div>
									<h4 className="text-white font-bold text-[18px] mb-0.5">
										{current.name}
									</h4>
									<p className="text-white/50 text-[14px]">{current.role}</p>
								</div>

								{/* Divider */}
								<div className="w-px h-10 bg-white/15 hidden md:block"></div>

								{/* Company Logo */}
								<img
									src={current.logo}
									alt={current.company}
									className="h-7 w-auto object-contain opacity-90"
								/>
							</div>

							{/* Navigation Arrows */}
							<div className="flex items-center gap-3">
								<button
									onClick={handlePrevious}
									className="w-11 h-11 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
									style={{
										background: "rgba(255,255,255,0.08)",
										border: "1px solid rgba(255,255,255,0.12)",
									}}>
									<ArrowLeft className="w-4 h-4" />
								</button>
								<button
									onClick={handleNext}
									className="w-11 h-11 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
									style={{
										background: "rgba(255,255,255,0.08)",
										border: "1px solid rgba(255,255,255,0.12)",
									}}>
									<ArrowRight className="w-4 h-4" />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Testimonial Indicators */}

				{/* Stats Row (fixed: no border line) */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center pt-12">
					<div>
						<div className="text-3xl md:text-[40px] font-display font-bold text-white mb-2 leading-normal">
							$5bn+
						</div>
						<div className="text-gray-500 text-[16px]">
							In yearly card spend
						</div>
					</div>
					<div>
						<div className="text-3xl md:text-[40px] font-display font-bold text-white mb-2 leading-normal">
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