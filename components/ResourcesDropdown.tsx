import React from "react";
import { ArrowRight } from "lucide-react";

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
				"We're diving the shift from written content to video—it means for brands.",
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
				"We'd be mad to ignore video and when they need video as an afterthought.",
			image: "/face (1).png",
		},
		{
			id: 4,
			title: "Building businesses - and partnerships - that last",
			description:
				"What sustainable growth and delivery looks like when quality and trust actually matter.",
			image: "/face (2).png",
		},
	];

	return (
		<div
			className="fixed top-[88px] left-1/2 -translate-x-1/2 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-8 z-[999] overflow-hidden"
			style={{
				width: "992px",
				backgroundColor: "rgba(30,30,30, 0.88)",
				backdropFilter: "blur(10px) saturate(180%) brightness(1.1)",
				boxShadow:
					"0 8px 64px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
			}}>
			{/* Soft glass effect overlay at bottom */}
			<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/[0.03] to-transparent rounded-b-2xl pointer-events-none"></div>

			<div className="grid grid-cols-2 gap-8 relative z-10">
				{/* Left Side - Book Image */}
				<div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent h-full flex items-center justify-center">
					<img
						src="/book.png"
						alt="Resources guide"
						className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
					/>
				</div>

				{/* Right Side - Resource Items */}
				<div className="flex flex-col space-y-4">
					{resources.map((resource) => (
						<div
							key={resource.id}
							className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
							{/* Resource Thumbnail */}
							<div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
								<img
									src={resource.image}
									alt={resource.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
							</div>

							{/* Resource Info */}
							<div className="flex-1 min-w-0">
								<h4 className="text-sm font-semibold text-white leading-tight group-hover:text-indigo-400 transition-colors">
									{resource.title}
								</h4>
								<p className="text-xs text-gray-400 mt-1 line-clamp-2">
									{resource.description}
								</p>
							</div>

							{/* Arrow Icon */}
							<ArrowRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					))}

					{/* View All Resources Link */}
					<div className="pt-4 border-t border-white/10">
						<button className="flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
							View all resources
							<ArrowRight className="w-4 h-4 ml-2" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourcesDropdown;
