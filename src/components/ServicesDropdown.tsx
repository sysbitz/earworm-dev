import React from "react";

interface ServicesDropdownProps {
	isOpen: boolean;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isOpen }) => {
	if (!isOpen) return null;

	const services = [
		{
			icon: (
				<img
					src="/mega-menu/service_1.svg"
					alt="Strategy"
					className="w-6 h-6"
				/>
			),
			title: "Strategy & Planning",
			desc: "Podcast strategy · Episode planning · Research · Guest sourcing",
		},
		{
			icon: (
				<img
					src="/mega-menu/service_2.svg"
					alt="Production"
					className="w-6 h-6"
				/>
			),
			title: "Production & Creative",
			desc: "Video & audio production · Graphic design · Motion graphics",
		},
		{
			icon: (
				<img
					src="/mega-menu/service_3.svg"
					alt="Distribution"
					className="w-6 h-6"
				/>
			),
			title: "Distribution & Insight",
			desc: "Publishing & distribution · Analytics & reporting · Audience insights",
		},
	];

	return (
		<div
			className="fixed top-[88px] left-1/2 -translate-x-1/2 z-[999] w-[1040px] flex rounded-3xl border border-white/[0.13] p-10"
			style={{
				background:
					"linear-gradient(135deg, rgba(15,15,15,0.55) 0%, rgba(10,10,10,0.60) 100%)",
				backdropFilter: "blur(48px) saturate(220%)",
				WebkitBackdropFilter: "blur(48px) saturate(220%)",
				boxShadow:
					"inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.3)",
			}}>
			{/* Col 1 — Launch */}
			<div className="flex flex-1 flex-col pr-8">
				<img
					src="/services1.png"
					alt="Launch"
					className="mb-[18px] w-full rounded-xl object-cover object-top"
				/>
				<h3 className="mb-2 geist text-[18px] font-bold text-white">Launch</h3>
				<p className="geist text-[16px] leading-relaxed text-white/60">
					We incubate, design, and launch podcasts that help businesses lead
					conversations
				</p>
			</div>

			{/* Vertical divider */}
			<div className="flex items-center self-stretch">
				<div className="w-px h-full bg-white/10" />
			</div>

			{/* Col 2 — Run & scale */}
			<div className="flex flex-1 flex-col px-8">
				<img
					src="/services2.png"
					alt="Run & scale"
					className="mb-[18px] w-full rounded-xl object-cover object-top"
				/>
				<h3 className="mb-2 geist text-[18px] font-bold text-white">
					Run & scale
				</h3>
				<p className="geist text-[16px] leading-relaxed text-white/60">
					We manage your podcast end-to-end, turning each episode into a
					consistent, measurable growth channel.
				</p>
			</div>

			{/* Vertical divider */}
			<div className="flex items-center self-stretch">
				<div className="w-px h-full bg-white/10" />
			</div>

			{/* Col 3 — Services */}
			<div className="flex flex-1 flex-col justify-center pl-6">
				{services.map((item, i) => (
					<React.Fragment key={i}>
						{i > 0 && <div className="h-px w-full bg-white/10" />}
						<div className="flex items-start gap-3.5 py-[22px]">
							<div className="shrink-0 mt-1">{item.icon}</div>
							<div className="geist min-w-0">
								<h4 className="mb-1.5 text-[18px] font-bold text-white">
									{item.title}
								</h4>
								<p className="text-[16px] leading-relaxed text-white/50 line-clamp-2">
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
