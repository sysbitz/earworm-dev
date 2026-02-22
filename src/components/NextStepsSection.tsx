import React from "react";

const StepCard: React.FC<{
	icon: React.ReactNode;
	title: string;
	description: string;
}> = ({ icon, title, description }) => (
	<div
		className="relative group rounded-2xl overflow-hidden p-8 flex flex-col"
		style={{
			background: "rgba(255, 255, 255, 0.07)",
			backdropFilter: "blur(10px)",
			WebkitBackdropFilter: "blur(10px)",
			border: "1px solid rgba(255,255,255,0.10)",
			boxShadow: "2px 0 8px 0 rgba(0,0,0,0.08)",
		}}>
		{/* Lamp light — top center glow */}
		<div
			className="absolute top-0 left-0 right-0 pointer-events-none"
			style={{
				height: "200px",
				background:
					"radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
			}}
		/>

		{/* Top specular highlight line */}
		<div
			className="absolute top-0 left-0 right-0 h-px pointer-events-none"
			style={{
				background:
					"linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.40) 30%, rgba(255,255,255,0.70) 50%, rgba(255,255,255,0.40) 70%, transparent 95%)",
			}}
		/>

		{/* Hover shimmer */}
		<div
			className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			style={{
				background:
					"linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)",
			}}
		/>

		{/* Icon + Title row */}
		<div className="relative z-10 flex items-center gap-4 mb-6">
			<div
				className="flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110"
				style={{
					background:
						"linear-gradient(145deg, rgba(50,50,50,1) 0%, rgba(15,15,15,1) 100%)",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					border: "1px solid rgba(255,255,255,0.13)",
					borderRadius: "9999px",
					padding: "12px",
					boxShadow:
						"inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.6)",
				}}>
				{icon}
			</div>
			<h3 className="text-[22px] font-bold text-white font-display tracking-tight geist">
				{title}
			</h3>
		</div>

		<p className="relative z-10 text-gray-400 text-[16px] leading-relaxed group-hover:text-gray-300 transition-colors geist">
			{description}
		</p>
	</div>
);

const CalendarWidget = () => {
	return (
		<div className="bg-white w-full mx-auto rounded-4xl overflow-hidden shadow-2xl">
			<iframe
				src="https://cal.com/dashbloom/rezkarim?duration=20&theme=light"
				style={{
					width: "100%",
					height: "750px",
					border: "none",
				}}
				title="Book a discovery call with Rez"
				loading="lazy"
			/>
		</div>
	);
};

const NextStepsSection: React.FC = () => {
	return (
		<div className="bg-[#0D0D0D] py-24 relative overflow-hidden">
			<div className="px-20 relative z-10 max-w-360 mx-auto">
				{/* Header */}
				<div className="text-center mb-20">
					<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-4 tracking-tight leading-[1.2] nohemi">
						What happens next?
					</h2>
					<p className="text-gray-400 text-[20px] leading-normal geist mb-0">
						Our team reviews every inquiry personally.
					</p>
				</div>

				{/* Steps Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-0 mt-10">
					<StepCard
						icon={
							<img
								src="/marquee/mail-open.svg"
								alt="Initial enquiry"
								className="w-6 h-6"
							/>
						}
						title="Initial enquiry"
						description="Once you share a few details, we'll confirm receipt and take a proper look. Nothing is automated - every enquiry is read by someone on our team."
					/>
					<StepCard
						icon={
							<img
								src="/marquee/search-02.svg"
								alt="Considered review"
								className="w-6 h-6"
							/>
						}
						title="Considered review"
						description="We take time to understand your business, goals, and where a podcast might fit. This helps us be honest about whether we're the right partner - and whether now is the right moment."
					/>
					<StepCard
						icon={
							<img
								src="/marquee/calendar-04.svg"
								alt="Discovery Call"
								className="w-6 h-6"
							/>
						}
						title="Discovery Call"
						description="If it feels like a good match, we'll suggest a short call to talk through your goals, our approach, and whether it makes sense to explore things further."
					/>
				</div>

				{/* Earth Background Section */}
				<div className="relative">
					{/* Earth Illustration */}
					<div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/4 w-300 h-300 pointer-events-none z-0">
						<img
							src="/earth.png"
							alt=""
							className="w-full h-full object-contain opacity-60"
						/>
					</div>

					{/* Ellipse Blur Effects */}
					<img
						src="/Ellipse 11.png"
						alt=""
						className="absolute pointer-events-none blur-sm opacity-30 z-0"
						style={{
							left: "15%",
							top: "20%",
							transform: "translate(-50%, -50%) scale(1.2)",
							mixBlendMode: "screen",
						}}
					/>
					<img
						src="/Ellipse 12.png"
						alt=""
						className="absolute pointer-events-none blur-sm opacity-30 z-0"
						style={{
							right: "10%",
							top: "30%",
							transform: "translate(50%, -50%) scale(1.2)",
							mixBlendMode: "screen",
						}}
					/>

					{/* Transition to Calendar */}
					<div className="text-center relative z-10 pt-20">
						<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-6 tracking-tight leading-[1.2] nohemi">
							Book a free 1:1 consultation <br />
							with our workflow experts
						</h2>
						<p className="text-gray-400 text-[20px] leading-normal flex items-center justify-center gap-2 geist">
							<span className="w-2 h-2 rounded-full bg-gray-500"></span>
							Have a project in mind? Schedule a time with us.
							<span className="w-2 h-2 rounded-full bg-gray-500"></span>
						</p>
					</div>

					{/* Calendar Embed */}
					<div className="relative z-10 py-15 mt-0">
						<CalendarWidget />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NextStepsSection;
