import React from "react";
import { Zap, Target, BarChart3 } from "lucide-react";

interface ServicesDropdownProps {
	isOpen: boolean;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isOpen }) => {
	if (!isOpen) return null;

	const services = [
		{
			icon: <Target size={18} color="#818cf8" />,
			title: "Strategy & Planning",
			desc: "Podcast strategy · Episode planning · Research · Guest sourcing",
		},
		{
			icon: <Zap size={18} color="#818cf8" />,
			title: "Production & Creative",
			desc: "Video & audio production · Graphic design · Motion graphics",
		},
		{
			icon: <BarChart3 size={18} color="#818cf8" />,
			title: "Distribution & Insight",
			desc: "Publishing & distribution · Analytics & reporting · Audience insights",
		},
	];

	return (
		<div className="fixed top-[88px] left-1/2 -translate-x-1/2 z-[999] w-[960px] flex overflow-hidden rounded-2xl border border-white/10 bg-[rgba(20,20,20,0.95)] backdrop-blur-xl">
			{/* Col 1 — Launch */}
			<div className="flex flex-1 flex-col p-4 pb-7">
				<img
					src="/services1.png"
					alt="Launch"
					className="mb-[18px] h-[200px] w-full rounded-xl object-cover"
				/>
				<h3 className="mb-2 ml-1.5 text-[15px] font-semibold text-white">
					Launch
				</h3>
				<p className="ml-1.5 text-[13px] leading-relaxed text-white/60">
					We incubate, design, and launch podcasts that help businesses lead
					conversations
				</p>
			</div>

			{/* Divider 90% centered */}
			<div className="flex items-center self-stretch py-[5%]">
				<div className="w-px h-full bg-white/10" />
			</div>

			{/* Col 2 — Run & scale */}
			<div className="flex flex-1 flex-col p-4 pb-7">
				<img
					src="/services2.png"
					alt="Run & scale"
					className="mb-[18px] h-[200px] w-full rounded-xl object-cover"
				/>
				<h3 className="mb-2 ml-1.5 text-[15px] font-semibold text-white">
					Run & scale
				</h3>
				<p className="ml-1.5 text-[13px] leading-relaxed text-white/60">
					We manage your podcast end-to-end, turning each episode into a
					consistent, measurable growth channel.
				</p>
			</div>

			{/* Divider 90% centered */}
			<div className="flex items-center self-stretch py-[5%]">
				<div className="w-px h-full bg-white/10" />
			</div>

			{/* Col 3 — Services */}
			<div className="flex flex-1 flex-col justify-center">
				{services.map((item, i) => (
					<React.Fragment key={i}>
						{i > 0 && (
							<div className="flex justify-center items-center px-[5%]">
								<div className="h-px w-full bg-white/10" />
							</div>
						)}
						<div className="flex items-start gap-3.5 px-6 py-[22px]">
							<div className="mt-0.5 shrink-0">{item.icon}</div>
							<div>
								<h4 className="mb-1.5 text-[13px] font-semibold text-white">
									{item.title}
								</h4>
								<p className="text-xs leading-relaxed text-white/50">
									{item.desc}
								</p>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default ServicesDropdown;
