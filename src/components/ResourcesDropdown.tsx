import React from "react";

interface ResourcesDropdownProps {
	isOpen: boolean;
}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({ isOpen }) => {
	if (!isOpen) return null;

	const resources = [
		{
			id: 1,
			title: "How the global content market is actually changing",
			description:
				"What's driving the shift from written content to video – and what it means for brands.",
			image: "/mega-menu/res_1.png",
		},
		{
			id: 2,
			title: "How Gen Z (and Gen Alpha) are learning about brands",
			description: "Why video-led content is shaping the next buyer journey.",
			image: "/mega-menu/res_2.png",
		},
		{
			id: 3,
			title: "Why podcasts are becoming video-first",
			description:
				"And what brands miss when they treat video as an afterthought.",
			image: "/mega-menu/res_3.png",
		},
		{
			id: 4,
			title: "Building businesses – and partnerships – that last",
			description:
				"What sustainable delivery looks like when quality and trust actually matter.",
			image: "/mega-menu/res_4.png",
		},
	];

	return (
		<div
			className="fixed top-22 left-1/2 -translate-x-1/2 z-999 w-247.5 flex rounded-3xl border border-white/13 p-10"
			style={{
				background:
					"linear-gradient(135deg, rgba(15,15,15,0.55) 0%, rgba(10,10,10,0.60) 100%)",
				backdropFilter: "blur(48px) saturate(220%)",
				WebkitBackdropFilter: "blur(48px) saturate(220%)",
				boxShadow:
					"inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.3)",
			}}>
			{/* Left column */}
			<div className="flex w-95 shrink-0 flex-col pr-8">
				<img
					src="/book.png"
					alt="2026 Video Podcast Playbook"
					className="mb-5 w-full flex-1 rounded-xl object-cover"
				/>
				<h3 className="mb-2 text-base font-bold text-white">
					2026 Video Podcast Playbook
				</h3>
				<p className="mb-3 text-[13px] leading-relaxed text-white/60">
					How forward-thinking teams are using video podcasts to build
					authority, support pipeline, and create content that compounds.
				</p>
				<a
					href="#"
					className="flex items-center gap-1 text-[13px] font-semibold text-white underline">
					Read it <span>›</span>
				</a>
			</div>

			{/* Vertical divider */}
			<div className="flex items-center self-stretch">
				<div className="w-px h-full bg-white/10" />
			</div>

			{/* Right column */}
			<div className="flex flex-1 flex-col justify-center pl-8">
				{resources.map((resource) => (
					<div
						key={resource.id}
						className="flex cursor-pointer items-center gap-4 py-4.5 transition-colors hover:bg-white/5 rounded-xl px-3 -mx-3">
						<img
							src={resource.image}
							alt={resource.title}
							className="h-18 w-18 shrink-0 rounded-lg object-cover"
						/>
						<div className="geist">
							<h4 className="mb-1.5 text-[18px] font-bold leading-snug text-white">
								{resource.title}
							</h4>
							<p className="text-[16px] leading-relaxed text-white/50">
								{resource.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResourcesDropdown;
