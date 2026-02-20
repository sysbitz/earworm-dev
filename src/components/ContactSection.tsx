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

	return (
		<div className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
			{/* Background glow effects */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

			<div className="max-w-[1000px] mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-6 tracking-tight leading-[1.2] nohemi">
						Let's get in Touch
					</h2>
					<p className="text-gray-400 text-[20px] leading-[1.5] geist">
						Have questions about our products or the latest promotions?{" "}
						<br className="hidden md:block" />
						Reach out to us via email for responsive support.
					</p>
				</div>

				{/* Form Card with Gradient Hover Effect */}
				<div
					ref={cardRef}
					onMouseMove={handleMouseMove}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className="relative group">
					{/* Gradient Border Effect */}
					<div
						className="absolute -inset-[1px] rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						style={{
							background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
						}}
					/>

					{/* Card Content */}
					<div
						className="relative rounded-[32px] p-6 md:p-12 shadow-2xl transition-all duration-300 overflow-hidden"
						style={{
							background: "rgba(255, 255, 255, 0.07)",
							backdropFilter: "blur(10px)",
							WebkitBackdropFilter: "blur(10px)",
							border: "1px solid rgba(255,255,255,0.10)",
							boxShadow:
								"0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
						}}>
						{/* Lamp light — static glow at top center */}
						<div
							className="absolute top-0 left-0 right-0 pointer-events-none"
							style={{
								height: "260px",
								background:
									"radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
							}}
						/>

						{/* Top specular highlight line */}
						<div
							className="absolute top-0 left-0 right-0 h-px pointer-events-none"
							style={{
								background:
									"linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.45) 30%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.45) 70%, transparent 95%)",
							}}
						/>

						{/* Mouse-reactive shimmer */}
						<div
							className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-[32px]"
							style={{
								opacity: isHovered ? 1 : 0,
								background: `radial-gradient(ellipse 50% 40% at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 60%)`,
							}}
						/>

						{/* 1. Objective */}
						<div className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<div
									className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-display flex-shrink-0"
									style={{
										background:
											"linear-gradient(145deg, rgba(60,60,60,0.9) 0%, rgba(20,20,20,0.95) 100%)",
										backdropFilter: "blur(10px)",
										WebkitBackdropFilter: "blur(10px)",
										border: "1px solid rgba(255,255,255,0.13)",
										boxShadow:
											"inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.5)",
									}}>
									1
								</div>
								<h3 className="text-[24px] font-medium text-white geist">
									What Is Your Primary Objective?
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{/* Card 1 */}
								<button
									type="button"
									onClick={() => setObjective("Brand Authority")}
									className={`p-6 rounded-2xl border text-left transition-all relative group h-full ${objective === "Brand Authority" ? "bg-white/10 border-white/30 ring-1 ring-white/10" : "bg-[#111] border-white/5 hover:border-white/20"}`}>
									<Volume2
										className={`w-6 h-6 mb-4 ${objective === "Brand Authority" ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
									/>
									<h4 className="text-white font-bold mb-2 geist">Brand Authority</h4>
									<p className="text-[12px] text-gray-500 leading-relaxed geist">
										Establish thought leadership in your industry.
									</p>
								</button>

								{/* Card 2 */}
								<button
									type="button"
									onClick={() => setObjective("Video Content")}
									className={`p-6 rounded-2xl border text-left transition-all relative group h-full ${objective === "Video Content" ? "bg-white/10 border-white/30 ring-1 ring-white/10" : "bg-[#111] border-white/5 hover:border-white/20"}`}>
									<Monitor
										className={`w-6 h-6 mb-4 ${objective === "Video Content" ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
									/>
									<h4 className="text-white font-bold mb-2 geist">Video Content</h4>
									<p className="text-[12px] text-gray-500 leading-relaxed geist">
										Generate multi-channel content.
									</p>
								</button>

								{/* Card 3 */}
								<button
									type="button"
									onClick={() => setObjective("Lead Generation")}
									className={`p-6 rounded-2xl border text-left transition-all relative group h-full ${objective === "Lead Generation" ? "bg-white/10 border-white/30 ring-1 ring-white/10" : "bg-[#111] border-white/5 hover:border-white/20"}`}>
									<Zap
										className={`w-6 h-6 mb-4 ${objective === "Lead Generation" ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
									/>
									<h4 className="text-white font-bold mb-2 geist">Lead Generation</h4>
									<p className="text-[12px] text-gray-500 leading-relaxed geist">
										Drive conversions and high value leads.
									</p>
								</button>
							</div>
						</div>

						{/* 2. Scope & Timeline */}
						<div className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<div
									className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-display flex-shrink-0"
									style={{
										background:
											"linear-gradient(145deg, rgba(60,60,60,0.9) 0%, rgba(20,20,20,0.95) 100%)",
										backdropFilter: "blur(10px)",
										WebkitBackdropFilter: "blur(10px)",
										border: "1px solid rgba(255,255,255,0.13)",
										boxShadow:
											"inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.5)",
									}}>
									2
								</div>
								<h3 className="text-[24px] font-medium text-white geist">
									Project Scope & Timeline
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
								].map((field, idx) => (
									<div key={idx}>
										<label className="block text-[14px] text-gray-500 mb-2 pl-1 font-medium geist">
											{field.label}
										</label>
										<div className="relative">
											<select
												title={field.label}
												aria-label={field.label}
												className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-brand-green/50 transition-colors cursor-pointer text-[16px] geist">
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

						{/* 3. Details */}
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-6">
								<div
									className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-display flex-shrink-0"
									style={{
										background:
											"linear-gradient(145deg, rgba(60,60,60,0.9) 0%, rgba(20,20,20,0.95) 100%)",
										backdropFilter: "blur(10px)",
										WebkitBackdropFilter: "blur(10px)",
										border: "1px solid rgba(255,255,255,0.13)",
										boxShadow:
											"inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.5)",
									}}>
									3
								</div>
								<h3 className="text-[24px] font-medium text-white">
									Your Details
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div>
									<label className="block text-[14px] text-gray-500 mb-2 pl-1 font-medium geist">
										Full Name
									</label>
									<input
										type="text"
										placeholder="Enter full name"
										className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/50 transition-colors text-[16px] geist"
									/>
								</div>
								<div>
									<label className="block text-[14px] text-gray-500 mb-2 pl-1 font-medium geist">
										Work Email
									</label>
									<input
										type="email"
										placeholder="Enter last name"
										className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/50 transition-colors text-[16px] geist"
									/>
								</div>
							</div>

							<div className="space-y-6">
								<div>
									<label className="block text-[14px] text-gray-500 mb-2 pl-1 font-medium geist">
										Phone Number
									</label>
									<input
										type="tel"
										placeholder="Enter your organization"
										className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/50 transition-colors text-[16px] geist"
									/>
								</div>
								<div>
									<label className="block text-[14px] text-gray-500 mb-2 pl-1 font-medium geist">
										Company Website
									</label>
									<input
										type="url"
										placeholder="Enter your organization"
										className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/50 transition-colors text-[16px] geist"
									/>
								</div>
								<div>
									<label className="block text-[14px] text-gray-500 mb-2 pl-1 font-medium geist">
										Anything Else?
									</label>
									<textarea
										placeholder="Type your messages"
										rows={4}
										className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/50 resize-none transition-colors text-[16px] geist"
									/>
								</div>
							</div>
						</div>

						{/* Footer Checkbox & Button */}
						<div className="flex flex-col gap-8 pt-4">
							<label className="flex items-center gap-3 cursor-pointer group">
								<div className="relative w-5 h-5">
									<input
										type="checkbox"
										defaultChecked
										className="peer appearance-none w-5 h-5 rounded bg-brand-green border border-brand-green checked:bg-brand-green cursor-pointer transition-all"
									/>
									<svg
										className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
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
								<span className="text-sm text-gray-300 group-hover:text-white transition-colors geist">
									I hereby agree to our{" "}
									<span className="text-brand-green underline decoration-brand-green/30 underline-offset-4 hover:decoration-brand-green">
										Privacy Policy
									</span>{" "}
									terms.
								</span>
							</label>

							<button className="w-full py-4 rounded-full bg-brand-green hover:bg-[#00B85C] text-black font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,210,106,0.2)] geist">
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
	);
};

export default ContactSection;
