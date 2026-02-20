import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";

interface AnimatedStatProps {
	value: string;
	isAnimated?: boolean;
	className?: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
	value,
	isAnimated = false,
	className = "",
}) => {
	const [displayValue, setDisplayValue] = useState<number | string>(
		isAnimated ? 0 : value
	);
	const [hasAnimated, setHasAnimated] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isAnimated || hasAnimated) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
					const targetNumber = parseInt(value.replace(/[^0-9]/g, ""));
					const duration = 2000;
					const startTime = Date.now();

					const animate = () => {
						const elapsed = Date.now() - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const current = Math.floor(progress * targetNumber);
						setDisplayValue(current);

						if (progress < 1) {
							requestAnimationFrame(animate);
						} else {
							setDisplayValue(targetNumber);
						}
					};

					requestAnimationFrame(animate);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.3 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [value, isAnimated, hasAnimated]);

	// Extract prefix and suffix from value (e.g. "$5bn+" -> prefix "$", suffix "bn+")
	const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
	const prefix = match ? match[1] : "";
	const suffix = match ? match[3] : "";

	return (
		<div
			ref={ref}
			className={`text-3xl md:text-[40px] font-display font-bold text-white mb-2 leading-[1.5] ${className}`}>
			{prefix}
			{displayValue}
			{suffix}
		</div>
	);
};

const TestimonialsSection: React.FC = () => {
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
					<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white tracking-tight leading-[1.2] nohemi">
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
							src="/testi.png"
							alt="Jake Thomson"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Right Content */}
					<div className="flex-1 flex flex-col justify-center py-4 pr-4 md:pr-8">
						<blockquote className="text-[20px] md:text-[24px] font-sans text-gray-200 leading-[1.6] mb-10 geist">
							â€œEarworm has completely transformed how I manage my podcast.
							Automated scheduling and reminders save hours every week,
							eliminating the back-and-forth and keeping every recording on
							track. It's a seamless, reliable workflow I'd recommend to any
							growing show.â€
						</blockquote>

						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto">
							<div className="flex items-center gap-6">
								<div>
									<h4 className="text-white font-bold text-[20px] geist">
										Jake Thomson
									</h4>
									<p className="text-gray-500 text-[16px] geist">
										Marketing Consultant
									</p>
								</div>

								{/* Divider */}
								<div className="w-px h-10 bg-white/10 hidden md:block"></div>

								{/* Logo */}
								<div className="flex items-center gap-2 text-white">
									<Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
									<span className="font-display font-bold text-xl geist">ZenZap</span>
								</div>
							</div>

							{/* Navigation Arrows */}
							<div className="flex items-center gap-3">
								<button className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all bg-white/5">
									<ArrowLeft className="w-5 h-5" />
								</button>
								<button className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all bg-white/5">
									<ArrowRight className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Stats Row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center border-t border-white/5 pt-12">
					<div>
						<AnimatedStat value="$5bn+" isAnimated={true} className="geist" />
						<div className="text-gray-500 text-[16px] geist">
							In yearly card spend
						</div>
					</div>
					<div>
						<AnimatedStat value="4m+" isAnimated={true} className="geist" />
						<div className="text-gray-500 text-[16px] geist">Virtual card issued</div>
					</div>
					<div>
						<AnimatedStat value="3k+" isAnimated={true} className="geist" />
						<div className="text-gray-500 text-[16px] geist">Happy customers</div>
					</div>
					<div className="relative">
						<AnimatedStat value="$100m+" isAnimated={true} className="geist" />
						<div className="text-gray-500 text-[16px] geist">Earned in cash back</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSection;
