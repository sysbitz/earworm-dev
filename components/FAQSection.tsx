import React, { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";

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
			className="relative group cursor-pointer"
			style={{ isolation: "isolate" }}>
			{/* Outer glow border on hover */}
			<div
				className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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

				<div className="flex items-center justify-between p-6 md:p-8 relative z-10">
					<h3 className="text-[18px] md:text-[20px] font-bold text-white pr-8 leading-snug">
						{faq.question}
					</h3>

					{/* Glass morphic icon button */}
					<div
						className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
						style={
							isOpen
								? {
										/* Active state: bright glass pill */
										background:
											"linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(220,220,220,0.85) 100%)",
										boxShadow:
											"0 2px 12px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.1)",
										border: "1px solid rgba(255,255,255,0.8)",
										color: "#000",
									}
								: {
										/* Inactive: glass morphism */
										background:
											"linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
										backdropFilter: "blur(12px)",
										WebkitBackdropFilter: "blur(12px)",
										boxShadow:
											"0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.15)",
										border: "1px solid rgba(255,255,255,0.15)",
										color: "rgba(255,255,255,0.7)",
									}
						}>
						{isOpen ? (
							<Minus style={{ width: "16px", height: "16px" }} />
						) : (
							<Plus style={{ width: "16px", height: "16px" }} />
						)}
					</div>
				</div>

				{/* Answer — animated expand */}
				<div
					className="relative z-10 overflow-hidden transition-all duration-300 ease-in-out"
					style={{
						maxHeight: isOpen ? "200px" : "0px",
						opacity: isOpen ? 1 : 0,
					}}>
					{/* Subtle divider line */}
					<div
						className="mx-6 md:mx-8"
						style={{
							height: "1px",
							background:
								"linear-gradient(90deg, transparent, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.10) 70%, transparent)",
						}}
					/>
					<p className="px-6 md:px-8 py-6 text-gray-300 leading-relaxed text-[16px]">
						{faq.answer}
					</p>
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
		<div className="bg-[#050505] py-24 border-t border-white/5">
			<div className="max-w-[900px] mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-4 tracking-tight leading-[1.2]">
						Most asked questions
					</h2>
					<p className="text-gray-400 text-sm md:text-base">
						If you don't see the answer you're looking for, get in touch
					</p>
				</div>

				{/* Accordion */}
				<div className="space-y-4">
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
