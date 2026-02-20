import React, { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import GlassIconButton from "./ui/GlassIconButton";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		id: "1",
		question: "Is a podcast right for my business?",
		answer:
			"Yes if you're looking to build brand authority, reach niche audiences, or support your content strategy. We'll help you decide the right format and approach.",
	},
	{
		id: "2",
		question: "Can you support with finding a host?",
		answer:
			"Absolutely. We have a vast network of professional hosts and industry experts, or we can train someone from your internal team to take the mic.",
	},
	{
		id: "3",
		question: "Do you handle the creative direction?",
		answer:
			"Yes. From show branding and tone of voice to episode structures and script guidance, we ensure your podcast resonates with your target audience.",
	},
	{
		id: "4",
		question: "Will this be lots of extra work for my team?",
		answer:
			"Not at all. Our 'Production Planner' and managed service model is designed to minimize your team's workload. We handle the heavy lifting; you provide the expertise.",
	},
	{
		id: "5",
		question: "How do you source guests for our show?",
		answer:
			"We have a dedicated booking team that handles outreach, scheduling, and pre-interview prep to secure high-caliber guests relevant to your industry.",
	},
	{
		id: "6",
		question: "How can we book a meeting?",
		answer:
			"Simply click the 'Lets Talk' button in the navigation or footer to schedule a discovery call with our strategy team.",
	},
];

const FAQCard: React.FC<{
	faq: FAQItem;
	isOpen: boolean;
	onToggle: () => void;
}> = ({ faq, isOpen, onToggle }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onToggle}
			className="relative group cursor-pointer geist max-w-4xl mx-auto rounded-3xl"
			style={{ isolation: "isolate" }}>
			{/* Outer glow border on hover */}
			<div
				className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
				style={{
					background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.18), transparent 40%)`,
					borderRadius: "1rem",
				}}
			/>

			{/* Liquid Glass Card */}
			<div
				className="relative rounded-2xl overflow-hidden transition-all duration-300"
				style={{
					/* Liquid glass base */
					background: isOpen
						? "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.04) 100%)"
						: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)",
					backdropFilter: "blur(24px) saturate(180%)",
					WebkitBackdropFilter: "blur(24px) saturate(180%)",
					border: isOpen
						? "1px solid rgba(255,255,255,0.18)"
						: "1px solid rgba(255,255,255,0.10)",
					boxShadow: isOpen
						? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)"
						: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.15)",
					transition: "all 0.3s ease",
				}}>
				{/* Inner liquid shimmer layer — mouse-reactive */}
				<div
					className="absolute inset-0 pointer-events-none transition-opacity duration-500"
					style={{
						opacity: isHovered ? 1 : 0,
						background: `radial-gradient(ellipse 80% 60% at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.09), transparent 60%)`,
					}}
				/>

				{/* Top specular highlight line */}
				<div
					className="absolute top-0 left-0 right-0 h-px pointer-events-none"
					style={{
						background:
							"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 25%, rgba(255,255,255,0.80) 50%, rgba(255,255,255,0.45) 75%, transparent 100%)",
						opacity: isHovered ? 1 : 0.7,
						transition: "opacity 0.3s ease",
					}}
				/>

				{/* Bottom shadow line */}
				<div
					className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
					style={{
						background:
							"linear-gradient(90deg, transparent, rgba(0,0,0,0.3) 50%, transparent)",
					}}
				/>

				{/* Content wrapper — 32px padding around everything */}
				<div className="p-8 relative z-10">
					<div className="flex items-center justify-between">
						<h3 className="text-[18px] font-semibold text-white pr-8 geist">
							{faq.question}
						</h3>

						{/* Glass morphic icon button */}
						<GlassIconButton
							h={50}
							w={50}
							isOpen={isOpen}
							openIcon={<Minus size={18} />}
							closeIcon={<Plus size={18} />}
							onClick={(e) => {
								e.stopPropagation();
								onToggle();
							}}
						/>
					</div>

					{/* Answer — animated expand */}
					<div
						className="overflow-hidden transition-all duration-300 ease-in-out"
						style={{
							maxHeight: isOpen ? "200px" : "0px",
							opacity: isOpen ? 1 : 0,
						}}>
						<p className="mt-[10px] text-[#E0E0E0] leading-relaxed text-[16px] geist">
							{faq.answer}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const FAQSection: React.FC = () => {
	const [openId, setOpenId] = useState<string | null>("1");

	const toggle = (id: string) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<div className="bg-[#0D0D0D] py-15 px-20">
			<div className=" px-6  lg:px-0">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-[32px] lg:text-[56px] nohemi font-medium text-white mb-5 tracking-tight leading-[1.2]">
						Most asked questions
					</h2>
					<p className="text-[#E0E0E0] text-sm md:text-[20px] geist">
						If you don't see the answer you're looking for, get in touch
					</p>
				</div>

				{/* Accordion */}
				<div className="space-y-5 geist">
					{faqs.map((faq) => (
						<FAQCard
							key={faq.id}
							faq={faq}
							isOpen={openId === faq.id}
							onToggle={() => toggle(faq.id)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
