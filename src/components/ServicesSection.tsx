import React from "react";
import { ArrowRight } from "lucide-react";

const glassStyle: React.CSSProperties = {
	borderRadius: "48px",
	background: "rgba(255, 255, 255, 0.35)",
	backdropFilter: "blur(20px)",
	WebkitBackdropFilter: "blur(20px)",
	border: "1px solid rgba(255, 255, 255, 0.6)",
	boxShadow:
		"0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
};

const ServicesSection: React.FC = () => {
	return (
		<div className="bg-[#E4E5E9] py-15 relative z-0 px-20">
			<div className="px-4 lg:px-0">
				{/* Header */}
				<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
					<h2 className="text-[32px] lg:text-[56px] nohemi text-[#0D0D0D] tracking-tight leading-[1.2]">
						Our Services
					</h2>
					<p className="text-[#373737] max-w-xl text-xl geist">
						We do two things: launch video podcasts properly, and run them as
						long-term business assets.
					</p>
				</div>

				{/* Card 1: Launch */}
				<div
					className="relative p-8 geist"
					style={{ ...glassStyle, marginBottom: "64px" }}>
					<div className="rounded-3xl bg-white overflow-hidden flex flex-col md:flex-row p-8 gap-8">
						<div
							className="md:w-1/2 overflow-hidden rounded-2xl"
							style={{ maxHeight: "400px" }}>
							<img
								src="./services_launch.png"
								alt="Launch Service"
								className="w-full h-full object-cover object-center"
								style={{ maxHeight: "400px" }}
							/>
						</div>
						<div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
							<h3 className="text-[40px] font-display font-bold text-[#0A0A0A] mb-4 leading-tight geist">
								Launch
							</h3>
							<h4 className="text-[24px] font-medium text-[#373737] mb-6 geist">
								Incubating and launching video podcasts built to lead
								conversations.
							</h4>
							<p className="text-gray-500 text-[20px] leading-relaxed mb-10 geist">
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
									<span className="relative z-10 geist">Read More</span>
									<span className="relative z-10 w-7 h-7 rounded-full bg-black flex items-center justify-center p-1 transition-transform duration-300 group-hover:translate-x-1">
										<ArrowRight className="w-4 h-4 text-white" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Card 2: Run & Scale */}
				<div className="relative p-8 geist" style={glassStyle}>
					<div className="rounded-3xl bg-white overflow-hidden flex flex-col md:flex-row p-8 gap-8">
						<div
							className="md:w-1/2 overflow-hidden rounded-2xl"
							style={{ maxHeight: "400px" }}>
							<img
								src="/Frame .png"
								alt="Run & Scale Service"
								className="w-full h-full object-cover object-center"
								style={{ maxHeight: "400px" }}
							/>
						</div>
						<div className="md:w-1/2 p-8 flex flex-col justify-center">
							<h3 className="text-[40px] font-display font-bold text-[#0A0A0A] mb-4 leading-normal geist">
								Run & Scale
							</h3>
							<h4 className="text-[24px] font-medium text-[#373737] mb-6 geist">
								End-to-end management of podcasts as long-term business
								channels.
							</h4>
							<p className="text-gray-500 text-[20px] leading-normal mb-10 geist">
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
									<span className="relative z-10 geist">Read More</span>
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
