import React, { useState, useEffect, useRef } from "react";
import { Megaphone, Tag, Users, Handshake } from "lucide-react";

type TabId = "marketing" | "sales" | "hr" | "partnership";

interface DepartmentData {
	id: TabId;
	title: string;
	icon: React.ReactNode;
	description: string;
	image: string;
}

const departments: DepartmentData[] = [
	{
		id: "marketing",
		title: "Marketing",
		icon: <Megaphone className="w-6 h-6" />,
		description:
			"Turn one video episode into weeks of content across 15+ channels, while building brand authority, supporting demand gen, and giving your team clear insight into what actually drives engagement and pipeline.",
		image: "/lion.png",
	},
	{
		id: "sales",
		title: "Sales",
		icon: <Tag className="w-6 h-6" />,
		description:
			"Equip your sales team with high-quality content clips to overcome objections, personalize outreach, and close deals faster. Let your prospects see the expertise before they even sign the contract.",
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
	},
	{
		id: "hr",
		title: "HR/People",
		icon: <Users className="w-6 h-6" />,
		description:
			"Showcase company culture and attract top talent by sharing authentic stories from your team and leadership. Build an employer brand that people actually want to be a part of.",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
	},
	{
		id: "partnership",
		title: "Partnership",
		icon: <Handshake className="w-6 h-6" />,
		description:
			"Strengthen relationships with partners and industry leaders by co-creating valuable content that serves both audiences. Double your reach by tapping into their networks.",
		image:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
	},
];

// Scroll distance (px) consumed per tab transition
const STEP_HEIGHT = 400;

const DepartmentsSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const wrapper = wrapperRef.current;
			if (!wrapper) return;

			const wrapperTop = wrapper.offsetTop;

			// Tab transitions begin only once the section title has reached top:0.
			// The section title hits top:0 when scrollY === wrapperTop,
			// so we measure progress from that exact moment.
			const scrolledInto = window.scrollY - wrapperTop;

			if (scrolledInto < 0) {
				setActiveIndex(0);
				return;
			}

			const totalScrollRange = STEP_HEIGHT * (departments.length - 1);

			if (scrolledInto >= totalScrollRange) {
				setActiveIndex(departments.length - 1);
				return;
			}

			const index = Math.floor(scrolledInto / STEP_HEIGHT);
			setActiveIndex(Math.min(index, departments.length - 1));
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Wrapper height:
	// The sticky element is h-screen, so we need exactly that for the "dwell" time,
	// plus one STEP_HEIGHT per additional tab beyond the first.
	const totalHeight = `calc(100vh + ${STEP_HEIGHT * departments.length}px)`;

	return (
		<div
			ref={wrapperRef}
			className="bg-[#E6E8EB] relative z-10 px-20 py-24"
			style={{ height: totalHeight }}>
			{/* Sticky shell — pins when the section TOP (title) reaches top:0 */}
			<div className="sticky top-0 flex flex-col justify-center py-2 overflow-visible">
				<div className="px-2 lg:px-2 w-full">
					{/* Header */}
					<div className="mb-16 text-center">
						<h2 className="text-[32px] lg:text-[56px] nohemi font-medium text-black mb-7.5 tracking-tight leading-[1.2]">
							Video content that supports <br />
							your entire organisation
						</h2>
						<p className="text-[#373737] text-[20px] geist">
							We do two things: launch video podcasts properly, and run them as
							long-term business assets.
						</p>
					</div>

					{/* Glass Wrapper */}
					<div
						className="p-8"
						style={{
							borderRadius: "48px",
							background: "rgba(255, 255, 255, 0.35)",
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
							border: "1px solid rgba(255, 255, 255, 0.6)",
							boxShadow:
								"0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
						}}>
						{/* Main Content Card */}
						<div
							className="bg-white shadow-xl shadow-black/5 overflow-hidden flex flex-col lg:flex-row h-[min(600px,calc(100vh-280px))]"
							style={{ borderRadius: "24px" }}>
							{/* Left Side: Tabs */}
							<div className="lg:w-[70%] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
								<div className="space-y-2">
									{departments.map((dept, index) => {
										const isActive = activeIndex === index;
										return (
											<div
												key={dept.id}
												onClick={() => setActiveIndex(index)}
												className="cursor-pointer transition-all duration-300 py-4">
												<div className="flex items-start gap-4 md:gap-6">
													<div
														className={`w-1 self-stretch rounded-full transition-colors duration-300 shrink-0 ${
															isActive ? "bg-[#AB7AFF]" : "bg-transparent"
														}`}></div>

													<div className="flex-1">
														<div className="flex items-center gap-4 mb-3">
															<div
																className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
																style={{
																	background: "rgba(13, 13, 13, 0.10)",
																	color: "#0D0D0D",
																}}>
																{dept.icon}
															</div>
															<h3
																className={`text-[32px] geist font-semibold font-display tracking-tight ${
																	isActive ? "text-black" : "text-gray-700"
																}`}>
																{dept.title}
															</h3>
														</div>

														<div
															className={`grid transition-all duration-500 ease-in-out ${
																isActive
																	? "grid-rows-[1fr] opacity-100"
																	: "grid-rows-[0fr] opacity-0"
															}`}>
															<div className="overflow-hidden">
																<p className="text-[#373737] geist text-[20px] leading-relaxed pl-14 pb-1">
																	{dept.description}
																</p>
															</div>
														</div>
													</div>
												</div>
												{!isActive && (
													<div className="ml-15 mt-4 h-px bg-gray-100"></div>
												)}
											</div>
										);
									})}
								</div>
							</div>

							{/* Right Side: Crossfade Images */}
							<div
								className="lg:w-[55%] relative h-full min-h-100 bg-gray-100 overflow-hidden"
								style={{ borderRadius: "0 24px 24px 0" }}>
								{departments.map((dept, index) => (
									<img
										key={dept.id}
										src={dept.image}
										alt={dept.title}
										className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
											activeIndex === index
												? "opacity-100 scale-100"
												: "opacity-0 scale-105"
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DepartmentsSection;
