import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import CustomDropdown from "./ui/CustomDropdown";

const autofillStyle = `
  .contact-input:-webkit-autofill,
  .contact-input:-webkit-autofill:hover,
  .contact-input:-webkit-autofill:focus,
  .contact-input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset !important;
    -webkit-text-fill-color: #ffffff !important;
    caret-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

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
		"contact-input w-full bg-[#191919] border border-white/8 rounded-full px-4 py-3.5 text-white focus:outline-none focus:border-white/20 transition-colors text-[15px] geist";

	const textareaClass =
		"contact-input w-full bg-[#191919] border border-white/8 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-white/20 resize-none transition-colors text-[15px] geist";

	const numberBadge = (n: number) => (
		<div
			className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
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
		<div className="bg-[#0D0D0D] py-24 px-6 md:px-20 relative overflow-hidden ">
			<style>{autofillStyle}</style>
			{/* Background glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-white/3 blur-[120px] rounded-full pointer-events-none" />

			<div className="relative z-10">
				{/* Header */}
				<div
					className="text-center"
					style={{ marginTop: "60px", marginBottom: "64px" }}>
					<h2
						className="text-[56px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.2] nohemi"
						style={{ marginBottom: "20px" }}>
						Let's get in Touch
					</h2>
					<p className="text-gray-400 text-[20px] geist">
						Have questions about our products or the latest promotions?{" "}
						<br className="hidden md:block" />
						Reach out to us via email for responsive support.
					</p>
				</div>

				{/* Form Card */}
				<div className="max-w-4xl mx-auto">
					<div
						ref={cardRef}
						onMouseMove={handleMouseMove}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="relative group">
						{/* Gradient border on hover */}
						<div
							className="absolute -inset-px rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
							style={{
								background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
							}}
						/>

						{/* Card */}
						<div
							className="relative p-8 md:p-10 overflow-hidden z-10"
							style={{
								borderRadius: "48px",
								border: "1px solid #E4E5E9",
								background: "linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 100%)",
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
									<h3 className="text-[24px] font-medium text-white geist">
										What Is Your Primary Objective?
									</h3>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
									{[
										{
											id: "Brand Authority",
											icon: (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none">
													<path
														d="M14.9263 4.41054L8.27352 7.60403C7.76151 7.8498 7.21443 7.91138 6.65675 7.78644C6.29177 7.70468 6.10926 7.6638 5.9623 7.64702C4.13743 7.43863 3 8.88293 3 10.5438V11.4552C3 13.1161 4.13743 14.5604 5.9623 14.352C6.10926 14.3352 6.29178 14.2943 6.65675 14.2126C7.21443 14.0876 7.76151 14.1492 8.27352 14.395L14.9263 17.5885C16.4534 18.3216 17.217 18.6881 18.0684 18.4024C18.9197 18.1167 19.2119 17.5036 19.7964 16.2775C21.4012 12.9107 21.4012 9.08836 19.7964 5.72147C19.2119 4.49537 18.9197 3.88232 18.0684 3.59661C17.217 3.31091 16.4534 3.67745 14.9263 4.41054Z"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M12.999 16.999V17.499C12.999 18.7831 12.999 19.4251 12.775 19.7876C12.4763 20.2709 11.9302 20.544 11.3643 20.4929C10.9399 20.4547 10.4263 20.0694 9.39902 19.299L8.19902 18.399C7.22155 17.6659 6.99902 17.2208 6.99902 15.999V14.499"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M7.5 14V8"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											),
											desc: "Establish thought leadership in your industry.",
										},
										{
											id: "Video Content",
											icon: (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none">
													<path
														d="M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17H12M14 21H10M12 17H11.5V19.5C11.5 20.3284 10.8284 21 10 21M12 17V21M10 21H8"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M16 2.99951H8C5.17157 2.99951 3.75736 2.99951 2.87868 3.87819C2 4.75687 2 6.17108 2 8.99951V10.9995C2 13.8279 2 15.2421 2.87868 16.1208C3.75736 16.9995 5.17157 16.9995 8 16.9995H16C18.8284 16.9995 20.2426 16.9995 21.1213 16.1208C22 15.2421 22 13.8279 22 10.9995V8.99951C22 6.17108 22 4.75687 21.1213 3.87819C20.2426 2.99951 18.8284 2.99951 16 2.99951Z"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M14.575 9.23402L11.188 7.11714C11.0645 7.03995 10.9218 6.99902 10.7761 6.99902C10.3469 6.99902 9.99902 7.34695 9.99902 7.77614V12.2219C9.99902 12.6511 10.3469 12.999 10.7761 12.999C10.9218 12.999 11.0645 12.9581 11.188 12.8809L14.575 10.764C14.8388 10.5991 14.999 10.31 14.999 9.99902C14.999 9.68798 14.8388 9.39887 14.575 9.23402Z"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											),
											desc: "Generate multi-channel content.",
										},
										{
											id: "Lead Generation",
											icon: (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none">
													<path
														d="M14 17.9995C18.4183 17.9995 22 14.4178 22 9.99951C22 5.58123 18.4183 1.99951 14 1.99951C9.58172 1.99951 6 5.58123 6 9.99951C6 14.4178 9.58172 17.9995 14 17.9995Z"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
													/>
													<path
														d="M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
													/>
													<path
														d="M15.7712 8.20396C15.555 7.29183 14.4546 6.46876 13.1337 7.08451C11.8128 7.70026 11.603 9.68141 13.601 9.89187C14.5041 9.987 15.0928 9.78149 15.6319 10.3628C16.1709 10.9441 16.2711 12.5607 14.8931 12.9964C13.5151 13.4321 12.1506 12.7513 12.002 11.7847M13.9862 6.00293V6.87197M13.9862 13.1305V14.0029"
														stroke="white"
														stroke-width="1.5"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											),
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
													: "bg-[#161616] border-white/6 hover:border-white/15 hover:bg-white/5"
											}`}>
											<div
												className={
													objective === id ? "text-white" : "text-gray-500"
												}>
												{icon}
											</div>
											<h4 className="text-white font-semibold text-[20px] mb-1.5 geist">
												{id}
											</h4>
											<p className="text-gray-500 text-[16px] geist leading-snug">
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

								<div
									style={{
										display: "flex",
										padding: "20px",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: "24px",
										alignSelf: "stretch",
										borderRadius: "24px",
										background: "rgba(255, 255, 255, 0.05)",
									}}>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
										{[
											{
												label: "Episode Frequency",
												options: [
													"Weekly",
													"Bi-Weekly",
													"Monthly",
													"Limited Series",
													"Unsure",
												],
											},
											{
												label: "Format",
												options: [
													"Audio & Video",
													"Audio Only",
													"Live Event",
													"Unsure",
												],
											},
											{
												label: "Launch Time",
												options: [
													"ASAP",
													"1 Month",
													"3 Months",
													"6+ Months",
													"Unsure",
												],
											},
											{
												label: "Budget",
												options: [
													"£10k–£20k|Smaller projects or early-stage exploration",
													"£20k–£40k|Running a podcast as a serious channel",
													"£40k–£75k|Multi-episode, multi-channel programmes",
													"£75k+|Enterprise or multi-show partnerships",
													"Unsure",
												],
											},
										].map((field) => (
											<div key={field.label}>
												<label className="block text-[13px] text-gray-500 mb-2 pl-1 font-medium geist">
													{field.label}
												</label>
												<CustomDropdown options={field.options} />
											</div>
										))}
									</div>
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
