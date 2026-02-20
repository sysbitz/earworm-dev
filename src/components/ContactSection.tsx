import React, { useState, useRef } from "react";
import { ArrowRight, Volume2, Monitor, Zap, ChevronDown } from "lucide-react";

const ContactSection: React.FC = () => {
	const [objective, setObjective] = useState("Brand Authority");
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

	const inputClass =
		"w-full bg-[#1a1a1a] border border-white/8 rounded-full px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors text-[15px] geist";

	const textareaClass =
		"w-full bg-[#1a1a1a] border border-white/8 rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 resize-none transition-colors text-[15px] geist";

	const numberBadge = (n: number) => (
		<div
			className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
			style={{
				background:
					"linear-gradient(145deg, rgba(60,60,60,0.9) 0%, rgba(20,20,20,0.95) 100%)",
				border: "1px solid rgba(255,255,255,0.13)",
				boxShadow:
					"inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.5)",
			}}>
			{n}
		</div>
	);

	return (
		<div className="bg-[#0D0D0D] py-24 px-6 md:px-20 relative overflow-hidden border-t border-white/5">
			{/* Background glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

			<div className="relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-[32px] lg:text-[56px] font-medium text-white mb-6 tracking-tight leading-[1.2] nohemi">
						Let's get in Touch
					</h2>
					<p className="text-gray-400 text-[16px] geist">
						Have questions about our products or the latest promotions?{" "}
						<br className="hidden md:block" />
						Reach out to us via email for responsive support.
					</p>
				</div>

				{/* Form Card */}
				<div className="max-w-[720px] mx-auto">
					<div
						ref={cardRef}
						onMouseMove={handleMouseMove}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="relative group">
						{/* Gradient border on hover */}
						<div
							className="absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
							style={{
								background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
							}}
						/>

						{/* Card */}
						<div
							className="relative rounded-[28px] p-8 md:p-10 overflow-hidden z-10"
							style={{
								background: "rgba(255,255,255,0.05)",
								backdropFilter: "blur(10px)",
								WebkitBackdropFilter: "blur(10px)",
								border: "1px solid rgba(255,255,255,0.08)",
								boxShadow:
									"0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)",
							}}>
							{/* Top specular highlight */}
							<div
								className="absolute top-0 left-0 right-0 h-px pointer-events-none"
								style={{
									background:
										"linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.35) 30%, rgba(255,255,255,0.60) 50%, rgba(255,255,255,0.35) 70%, transparent 95%)",
								}}
							/>

							{/* Lamp glow */}
							<div
								className="absolute top-0 left-0 right-0 pointer-events-none"
								style={{
									height: "220px",
									background:
										"radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
								}}
							/>

							{/* Mouse shimmer */}
							<div
								className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-[28px]"
								style={{
									opacity: isHovered ? 1 : 0,
									background: `radial-gradient(ellipse 50% 40% at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 60%)`,
								}}
							/>

							{/* ── 1. Objective ── */}
							<div className="mb-10 relative">
								<div className="flex items-center gap-3 mb-6">
									{numberBadge(1)}
									<h3 className="text-[20px] font-medium text-white geist">
										What Is Your Primary Objective?
									</h3>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
									{[
										{
											id: "Brand Authority",
											icon: <Volume2 className="w-5 h-5 mb-3" />,
											desc: "Establish thought leadership in your industry.",
										},
										{
											id: "Video Content",
											icon: <Monitor className="w-5 h-5 mb-3" />,
											desc: "Generate multi-channel content.",
										},
										{
											id: "Lead Generation",
											icon: <Zap className="w-5 h-5 mb-3" />,
											desc: "Drive conversions and high value leads.",
										},
									].map(({ id, icon, desc }) => (
										<button
											key={id}
											type="button"
											onClick={() => setObjective(id)}
											className={`p-5 rounded-2xl border text-left transition-all h-full ${
												objective === id
													? "bg-white/10 border-white/20"
													: "bg-[#161616] border-white/[0.06] hover:border-white/15 hover:bg-white/[0.05]"
											}`}>
											<div
												className={
													objective === id ? "text-white" : "text-gray-500"
												}>
												{icon}
											</div>
											<h4 className="text-white font-semibold text-[14px] mb-1.5 geist">
												{id}
											</h4>
											<p className="text-gray-500 text-[13px] geist leading-snug">
												{desc}
											</p>
										</button>
									))}
								</div>
							</div>

							{/* ── 2. Scope & Timeline ── */}
							<div className="mb-10 relative">
								<div className="flex items-center gap-3 mb-6">
									{numberBadge(2)}
									<h3 className="text-[20px] font-medium text-white geist">
										Project Scope & Timeline
									</h3>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
									{[
										{
											label: "Episode Frequency",
											options: ["Weekly", "Bi-Weekly", "Monthly"],
										},
										{
											label: "Format",
											options: ["Video & Audio", "Audio Only", "Video Only"],
										},
										{
											label: "Expected Launch Time",
											options: ["1 Month", "3 Months", "6 Months+"],
										},
										{
											label: "Annual Budget",
											options: ["£10k-£20k", "£20k-£50k", "£50k+"],
										},
									].map((field) => (
										<div key={field.label}>
											<label className="block text-[13px] text-gray-500 mb-2 pl-1 font-medium geist">
												{field.label}
											</label>
											<div className="relative">
												<select
													title={field.label}
													aria-label={field.label}
													className="w-full bg-[#1a1a1a] border border-white/8 rounded-full px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-white/20 transition-colors cursor-pointer text-[15px] geist pr-10">
													{field.options.map((opt) => (
														<option key={opt}>{opt}</option>
													))}
												</select>
												<ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
											</div>
										</div>
									))}
								</div>
							</div>

							{/* ── 3. Details ── */}
							<div className="mb-8 relative">
								<div className="flex items-center gap-3 mb-6">
									{numberBadge(3)}
									<h3 className="text-[20px] font-medium text-white geist">
										Your Details
									</h3>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
									<div>
										<label className="block text-[13px] text-gray-500 mb-2 pl-1 font-medium geist">
											Full Name
										</label>
										<input
											type="text"
											placeholder="Enter full name"
											className={inputClass}
										/>
									</div>
									<div>
										<label className="block text-[13px] text-gray-500 mb-2 pl-1 font-medium geist">
											Work Email
										</label>
										<input
											type="email"
											placeholder="Enter work email"
											className={inputClass}
										/>
									</div>
								</div>

								<div className="space-y-5">
									<div>
										<label className="block text-[13px] text-gray-500 mb-2 pl-1 font-medium geist">
											Phone Number
										</label>
										<input
											type="tel"
											placeholder="Enter your phone number"
											className={inputClass}
										/>
									</div>
									<div>
										<label className="block text-[13px] text-gray-500 mb-2 pl-1 font-medium geist">
											Company Website
										</label>
										<input
											type="url"
											placeholder="https://yourcompany.com"
											className={inputClass}
										/>
									</div>
									<div>
										<label className="block text-[13px] text-gray-500 mb-2 pl-1 font-medium geist">
											Anything Else?
										</label>
										<textarea
											placeholder="Type your messages"
											rows={4}
											className={textareaClass}
										/>
									</div>
								</div>
							</div>

							{/* Footer */}
							<div className="flex flex-col gap-6 pt-2 relative">
								<label className="flex items-center gap-3 cursor-pointer group">
									<div className="relative w-5 h-5 flex-shrink-0">
										<input
											type="checkbox"
											defaultChecked
											className="peer appearance-none w-5 h-5 rounded border border-gray-500 checked:bg-[#00D26A] checked:border-[#00D26A] cursor-pointer transition-all"
										/>
										<svg
											className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M10 3L4.5 8.5L2 6"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<span className="text-sm text-gray-400 group-hover:text-white transition-colors geist">
										I hereby agree to our{" "}
										<span className="text-[#00D26A] underline decoration-[#00D26A]/30 underline-offset-4 hover:decoration-[#00D26A]">
											Privacy Policy
										</span>{" "}
										terms.
									</span>
								</label>

								<button className="w-full py-4 rounded-full bg-[#00D26A] text-black font-bold text-[16px] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-[0_0_24px_rgba(0,210,106,0.25)] geist">
									Submit Inquiry
									<ArrowRight className="w-5 h-5" />
								</button>

								<p className="text-center text-xs text-gray-500 geist">
									We typically respond to qualified inquiries within 24 hours.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
