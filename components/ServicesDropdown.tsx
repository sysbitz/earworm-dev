import React from "react";
import { Zap, Target, BarChart3 } from "lucide-react";

interface ServicesDropdownProps {
	isOpen: boolean;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isOpen }) => {
	if (!isOpen) return null;

	return (
		<div
			className="fixed top-[88px] left-1/2 -translate-x-1/2 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-8 z-[999] overflow-hidden w-[920px]"
			style={{
				backgroundColor: "rgba(30,30,30, 0.88)",
				backdropFilter: "blur(10px) saturate(180%) brightness(1.1)",
				boxShadow:
					"0 8px 64px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
			}}>
			{/* Soft glass effect overlay at bottom */}
			<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/[0.03] to-transparent rounded-b-2xl pointer-events-none"></div>

			<div className="grid grid-cols-3 gap-6 relative z-10">
				{/* Left Column - Launch Card with image on top */}
				<div className="border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent p-6 flex flex-col justify-between">
					{/* Image at the top of Launch card */}
					<div className="rounded-lg overflow-hidden mb-4">
						<img
							src="/services1.png"
							alt="Launch showcase"
							className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
						/>
					</div>
					<div>
						<h3 className="text-lg font-bold text-white mb-4">Launch</h3>
						<p className="text-sm text-gray-300 mb-6 leading-relaxed">
							We incubate, design, and launch podcasts that help businesses lead
							conversations
						</p>
						{/* <div className="space-y-3">
							<div className="flex items-center text-green-400 text-sm font-semibold">
								<span className="w-2 h-2 bg-green-400 rounded-full mr-2.5"></span>
								Launch™
							</div>
							<div className="flex items-center text-gray-300 text-sm">
								<span className="text-indigo-500 mr-2.5">•</span>
								Strategy
							</div>
							<div className="flex items-center text-gray-300 text-sm">
								<span className="text-indigo-500 mr-2.5">•</span>
								Creative Direction
							</div>
							<div className="flex items-center text-gray-300 text-sm">
								<span className="text-indigo-500 mr-2.5">•</span>
								Production Setup
							</div>
							<div className="flex items-center text-gray-300 text-sm">
								<span className="text-indigo-500 mr-2.5">•</span>
								Host Training
							</div>
						</div> */}
					</div>
				</div>

				{/* Middle Column - Run & Scale Card with Image */}
				<div className="border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent p-6 flex flex-col">
					<h3 className="text-lg font-bold text-white mb-4">Run & scale</h3>
					<p className="text-sm text-gray-300 mb-4 leading-relaxed">
						We manage your podcast end-to-end, turning each episode into a
						consistent, measurable growth channel.
					</p>

					{/* Image in Run & Scale Card */}
					<div className="rounded-lg overflow-hidden mb-4 flex-grow">
						<img
							src="/services2.png"
							alt="Run and scale interface"
							className="w-full h-40 object-cover"
						/>
					</div>

					{/* <div className="space-y-2.5">
						<div className="flex items-center text-gray-300 text-sm">
							<span className="text-indigo-500 mr-2.5">•</span>
							Planning
						</div>
						<div className="flex items-center text-gray-300 text-sm">
							<span className="text-indigo-500 mr-2.5">•</span>
							Production
						</div>
						<div className="flex items-center text-gray-300 text-sm">
							<span className="text-indigo-500 mr-2.5">•</span>
							Distribution
						</div>
						<div className="flex items-center text-gray-300 text-sm">
							<span className="text-indigo-500 mr-2.5">•</span>
							Reporting
						</div>
					</div> */}
				</div>

				{/* Right Column - Services List only (image removed) */}
				<div className="flex flex-col justify-between">
					<div className="space-y-4">
						{/* Service Item 1 */}
						<div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
							<Target className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
							<div>
								<h4 className="text-sm font-semibold text-white">
									Strategy & Planning
								</h4>
								<p className="text-xs text-gray-400 mt-1">
									Podcast strategy • Episode planning • Research: Guest sourcing
								</p>
							</div>
						</div>

						{/* Service Item 2 */}
						<div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
							<Zap className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
							<div>
								<h4 className="text-sm font-semibold text-white">
									Production & Creative
								</h4>
								<p className="text-xs text-gray-400 mt-1">
									Video & audio production • Graphic design • Motion graphics
								</p>
							</div>
						</div>

						{/* Service Item 3 */}
						<div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
							<BarChart3 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
							<div>
								<h4 className="text-sm font-semibold text-white">
									Distribution & Insight
								</h4>
								<p className="text-xs text-gray-400 mt-1">
									Publishing & distribution • Analytics & reporting • Audience
									insights
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesDropdown;
