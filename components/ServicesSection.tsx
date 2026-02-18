import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection: React.FC = () => {
	const [launchHovered, setLaunchHovered] = useState(false);
	const [runHovered, setRunHovered] = useState(false);

	return (
		<div className="bg-[#E6E8EB] py-24 relative z-0">
			<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
				{/* Header */}
				<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
					<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-[#0A0A0A] tracking-tight leading-[1.2]">
						Our Services
					</h2>
					<p className="text-[#4A4A4A] leading-[1.5] max-w-lg lg:text-right text-xl">
						We do two things: launch video podcasts properly, and run them as
						long-term business assets.
					</p>
				</div>

				{/* Card 1: Launch */}
				<div
					className="rounded-[48px] mb-8"
					style={{
						padding: "1px",
						background:
							"linear-gradient(180deg, #FFFFFF 0%, #DADADA 56.13%, #0D0D0D 5%)",
					}}>
					<div
						className="rounded-[47px] overflow-hidden flex flex-col md:flex-row min-h-[500px]"
						style={{ background: "#FFFFFF", padding: "32px" }}>
						{/* Image Side */}
						<div className="md:w-1/2 min-h-[300px] md:min-h-full overflow-hidden rounded-[24px]">
							<img
								src="../public/services_launch.png"
								alt="Launch Service"
								className="w-full h-full object-cover"
							/>
						</div>
						{/* Text Side */}
						<div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative">
							<h3 className="text-[40px] font-display font-bold text-[#0A0A0A] mb-4 leading-[1.5]">
								Launch
							</h3>
							<h4 className="text-[24px] font-medium text-[#0A0A0A] mb-6">
								Incubating and launching video podcasts built to lead
								conversations.
							</h4>
							<p className="text-gray-500 text-[20px] leading-[1.5] mb-10">
								We shape the idea, define the format, and build the foundations
								for launch, covering strategy, creative direction, host
								sourcing, and production setup so your podcast starts with
								clarity, confidence, and intent.
							</p>
							<div>
								<button className="relative px-6 py-2.5 rounded-full font-bold text-[15px] text-[#0A0A0A] flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(28,249,117,0.35)] transition-shadow duration-300 overflow-hidden bg-white group">
									<span
										className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"
										style={{
											background:
												"linear-gradient(267deg, #CDFFE1 18.74%, #1CF975 94.61%)",
										}}
									/>
									<span className="relative z-10">Read More</span>
									<span className="relative z-10 w-7 h-7 rounded-full bg-black flex items-center justify-center p-1 transition-transform duration-300 group-hover:translate-x-1">
										<ArrowRight className="w-4 h-4 text-white" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Card 2: Run & Scale */}
				<div
					className="rounded-[48px]"
					style={{
						background: "rgba(0, 0, 0, 0.15)",
						backdropFilter: "blur(20px) saturate(180%)",
						WebkitBackdropFilter: "blur(20px) saturate(180%)",
					}}>
					<div
						className="rounded-[47px] overflow-hidden flex flex-col md:flex-row min-h-[500px]"
						style={{ background: "#FFFFFF", padding: "32px" }}>
						{/* Image Side */}
						<div className="md:w-1/2 min-h-[300px] md:min-h-full overflow-hidden rounded-[24px]">
							<img
								src="/Frame .png"
								alt="Run & Scale Service"
								className="w-full h-full object-cover"
							/>
						</div>
						{/* Text Side */}
						<div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
							<h3 className="text-[40px] font-display font-bold text-[#0A0A0A] mb-4 leading-[1.5]">
								Run & Scale
							</h3>
							<h4 className="text-[24px] font-medium text-[#0A0A0A] mb-6">
								End-to-end management of podcasts as long-term business
								channels.
							</h4>
							<p className="text-gray-500 text-[20px] leading-[1.5] mb-10">
								Once a podcast is live, we manage the entire system around it —
								planning, production, distribution, and reporting — turning each
								episode into consistent, high-quality content that supports
								marketing, sales, and the wider organization.
							</p>
							<div>
								<button className="relative px-6 py-2.5 rounded-full font-bold text-[15px] text-[#0A0A0A] flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(28,249,117,0.35)] transition-shadow duration-300 overflow-hidden bg-white group">
									<span
										className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"
										style={{
											background:
												"linear-gradient(267deg, #CDFFE1 18.74%, #1CF975 94.61%)",
										}}
									/>
									<span className="relative z-10">Read More</span>
									<span className="relative z-10 w-7 h-7 rounded-full bg-black flex items-center justify-center p-1 transition-transform duration-300 group-hover:translate-x-1">
										<ArrowRight className="w-4 h-4 text-white" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
