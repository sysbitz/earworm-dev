import React, { useState, useEffect, useRef } from "react";
import type { MouseEvent } from "react";

interface StatCardProps {
	title: string;
	stat: string;
	description: string;
	source: string;
	isAnimated?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
	title,
	stat,
	description,
	source,
	isAnimated = false,
}) => {
	const [displayValue, setDisplayValue] = useState<number | string>(
		isAnimated ? 0 : stat
	);
	const [hasAnimated, setHasAnimated] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (cardRef.current) {
			const rect = cardRef.current.getBoundingClientRect();
			setMousePosition({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		}
	};

	useEffect(() => {
		if (!isAnimated || hasAnimated) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
					const targetNumber = parseInt(stat);
					const duration = 2000; // 2 seconds
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

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => observer.disconnect();
	}, [stat, isAnimated, hasAnimated]);

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="border border-white/20 rounded-3xl p-8 md:p-10 flex flex-col h-full relative overflow-hidden group hover:border-white/30 transition-all duration-300"
			style={{
				background:
					"linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0.4) 100%)",
				boxShadow:
					"inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.5)",
				backdropFilter: "blur(20px)",
			}}>
			{/* Top border shine */}
			<div
				className="absolute top-0 left-0 right-0 h-px pointer-events-none"
				style={{
					background:
						"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)",
				}}
			/>

			{/* Mouse-tracked glow */}
			<div
				className="absolute inset-0 opacity-100 transition-opacity duration-700 pointer-events-none"
				style={{
					background: isHovered
						? `radial-gradient(ellipse 120% 60% at ${mousePosition.x}px 0px, rgba(255,255,255,0.13), rgba(255,255,255,0.04) 50%, transparent 75%)`
						: `radial-gradient(ellipse 120% 60% at 50% 0%, rgba(255,255,255,0.10), rgba(255,255,255,0.03) 50%, transparent 75%)`,
				}}
			/>

			{/* Glass inner sheen */}
			<div
				className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
				style={{
					background:
						"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
				}}
			/>

			<h3 className="max-w-72 lg:text-[32px] font-sans text-white mb-[100px] relative z-10 font-semibold leading-tight tracking-wide geist">
				{title}
			</h3>

			<div className="relative z-10 flex flex-col h-full">
				<div className="flex items-center mb-4 relative">
					<span
						className="text-6xl md:text-7xl lg:text-[5rem] font-display font-bold tracking-tighter leading-none inline-block geist"
						style={{
							background:
								"linear-gradient(149deg, #2CFF82 37.8%, #DFFFEC 73.24%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}>
						{isAnimated ? displayValue : stat}
						{isAnimated && "%"}
					</span>
				</div>

				<p className="text-gray-300 text-[20px] mb-10 leading-normal font-sans font-normal geist">
					{description}
				</p>

				{/* Push to bottom */}
				<div className="mt-auto">
					<div className="w-8 border-t border-gray-600 mb-4"></div>
					<p className="text-gray-500 font-sans geist">{source}</p>
				</div>
			</div>
		</div>
	);
};

const StatsSection: React.FC = () => {
	return (
		<div className="bg-[#0D0D0D] py-30 px-20 relative z-10">
			<div className=" mx-auto px-6 lg:px-0">
				{/* Header */}
				<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
					<h2 className="nohemi text-[32px] lg:text-[56px] font-display font-medium text-white tracking-tight leading-[1.2] max-w-4xl geist">
						Why brands are investing <br className="hidden lg:block" />
						in monthly podcast content
					</h2>
					<p className="text-gray-400 text-[20px] leading-[1.5] max-w-[450px] lg:text-left geist">
						The best video podcasts don't just build awareness - they open
						doors, build trust, and can power your whole content strategy.
					</p>
				</div>

				{/* Grid */}
				<div className="geist grid grid-cols-1 md:grid-cols-3 gap-5">
					<StatCard
						title="Buyers are listening"
						stat="74"
						description="B2B decision-makers listen to podcasts weekly."
						source="Source: Edison Research"
						isAnimated={true}
					/>

					<StatCard
						title="Build brand authority"
						stat="65"
						description="Podcast guests say it led to new business or speaking invites."
						source="Source: Podchaser Pro"
						isAnimated={true}
					/>

					<StatCard
						title="Turn episodes into content"
						stat="10-20x"
						description="Video Podcasts generate 10-20x more reusable content than blog posts."
						source="Internal agency data / industry benchmarks"
						isAnimated={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default StatsSection;
