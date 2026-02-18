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

const DepartmentsSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const isScrollingRef = useRef(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	// Handle mouse wheel scroll with cooldown — only when cursor is inside the section
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const handleWheel = (event: WheelEvent) => {
			if (isScrollingRef.current) return;

			// Check if the wheel event cursor position is within the section bounds
			const rect = section.getBoundingClientRect();
			const insideSection =
				event.clientX >= rect.left &&
				event.clientX <= rect.right &&
				event.clientY >= rect.top &&
				event.clientY <= rect.bottom;

			if (!insideSection) return;

			isScrollingRef.current = true;

			if (event.deltaY > 0) {
				setActiveIndex((prev) => (prev + 1) % departments.length);
			} else {
				setActiveIndex(
					(prev) => (prev - 1 + departments.length) % departments.length
				);
			}

			setTimeout(() => {
				isScrollingRef.current = false;
			}, 600);
		};

		window.addEventListener("wheel", handleWheel, { passive: true });

		return () => {
			window.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<div className="bg-[#E6E8EB] pt-32 pb-24 -mt-20 relative z-10">
			<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
				{/* Header */}
				<div className="mb-16">
					<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-[#0A0A0A] mb-6 tracking-tight leading-[1.2] max-w-3xl">
						Video content that supports <br />
						your entire organisation
					</h2>
					<p className="text-[#4A4A4A] text-[20px] leading-[1.5] max-w-2xl">
						We do two things: launch video podcasts properly, and run them as
						long-term business assets.
					</p>
				</div>

				{/* Main Content Card */}
				<div
					ref={sectionRef}
					className="bg-white rounded-[40px] shadow-2xl shadow-black/5 overflow-hidden flex flex-col lg:flex-row min-h-[600px] transition-all duration-500 ease-in-out">
					{/* Left Side: Tabs */}
					<div className="lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
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
												className={`w-1 self-stretch rounded-full transition-colors duration-300 flex-shrink-0 ${
													isActive ? "bg-[#6366F1]" : "bg-transparent"
												}`}></div>

											<div className="flex-1">
												<div className="flex items-center gap-4 mb-3">
													<div
														className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
															isActive
																? "bg-[#F3F4F6] text-black"
																: "bg-transparent text-gray-600"
														}`}>
														{dept.icon}
													</div>
													<h3
														className={`text-[28px] font-bold font-display tracking-tight ${
															isActive ? "text-black" : "text-gray-700"
														}`}>
														{dept.title}
													</h3>
												</div>

												<div
													className={`overflow-hidden transition-all duration-500 ease-in-out ${
														isActive
															? "max-h-[200px] opacity-100"
															: "max-h-0 opacity-0"
													}`}>
													<p className="text-[#4A4A4A] text-[16px] leading-relaxed pl-[56px]">
														{dept.description}
													</p>
												</div>
											</div>
										</div>
										{!isActive && (
											<div className="ml-[60px] mt-4 h-px bg-gray-100"></div>
										)}
									</div>
								);
							})}
						</div>
					</div>

					{/* Right Side: Crossfade Images */}
					<div className="lg:w-[55%] relative min-h-[400px] lg:min-h-full bg-gray-100 overflow-hidden">
						{departments.map((dept, index) => (
							<img
								key={dept.id}
								src={dept.image}
								alt={dept.title}
								className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
									activeIndex === index ? "opacity-100" : "opacity-0"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DepartmentsSection;
