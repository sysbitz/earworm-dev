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
			image: "/Ellipse 11.png",
		},
		{
			id: 2,
			title: "How Gen Z (and Gen Alpha) are learning about brands",
			description: "Why video-led content is shaping the next buyer journey.",
			image: "/Ellipse 12.png",
		},
		{
			id: 3,
			title: "Why podcasts are becoming video-first",
			description:
				"And what brands miss when they treat video as an afterthought.",
			image: "/face (1).png",
		},
		{
			id: 4,
			title: "Building businesses – and partnerships – that last",
			description:
				"What sustainable delivery looks like when quality and trust actually matter.",
			image: "/face (2).png",
		},
	];

	return (
		<div className="fixed top-[88px] left-1/2 -translate-x-1/2 z-[999] w-[960px] flex overflow-hidden rounded-2xl border border-white/10 bg-[rgba(20,20,20,0.95)] backdrop-blur-xl">
			{/* Left column */}
			<div className="flex w-[380px] shrink-0 flex-col p-4 pb-7">
				<img
					src="/book.png"
					alt="2026 Video Podcast Playbook"
					className="mb-5 w-full flex-1 rounded-xl object-cover"
				/>
				<h3 className="mb-2 pl-1 text-base font-bold text-white">
					2026 Video Podcast Playbook
				</h3>
				<p className="mb-3 pl-1 text-[13px] leading-relaxed text-white/60">
					How forward-thinking teams are using video podcasts to build
					authority, support pipeline, and create content that compounds.
				</p>
				<a
					href="#"
					className="flex items-center gap-1 pl-1 text-[13px] font-semibold text-white underline">
					Read it <span>›</span>
				</a>
			</div>

			{/* Vertical divider */}
			<div className="flex items-center self-stretch py-[5%]">
				<div className="w-px h-full bg-white/10" />
			</div>

			{/* Right column */}
			<div className="flex flex-1 flex-col justify-center">
				{resources.map((resource) => (
					<div
						key={resource.id}
						className="flex cursor-pointer items-start gap-4 px-7 py-[18px] transition-colors hover:bg-white/5">
						<img
							src={resource.image}
							alt={resource.title}
							className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
						/>
						<div>
							<h4 className="mb-1.5 text-sm font-bold leading-snug text-white">
								{resource.title}
							</h4>
							<p className="text-xs leading-relaxed text-white/50">
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
