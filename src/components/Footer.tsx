import React from "react";
// import { Instagram, Mail, X } from "lucide-react"; // swapped Twitter → X

const Footer: React.FC = () => {
	const socialLinks = [
		{ href: "#", src: "/social/instagram.svg", alt: "Instagram" },
		{ href: "#", src: "/social/mail-01.svg", alt: "Mail" },
		{ href: "#", src: "/social/new-twitter.svg", alt: "X" },
	];

	return (
		<footer className="bg-[#0D0D0D] pt-20 pb-10 font-sans">
			<div className="px-20 max-w-360 mx-auto">
				{/* Two persistent columns */}
				<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-40 mb-20">
					{/* LEFT COLUMN: logo + description + form + US office */}
					<div className="flex flex-col justify-between">
						<div>
							<div className="mb-20">
								<img
									src="/earworm_logo_white_rgb_1080px_w_300ppi 1.png"
									alt="Earworm"
									className="h-10 w-auto"
								/>
							</div>

							<p
								className="leading-normal mb-10 max-w-md pb-10 geist"
								style={{
									color: "#E0E0E0",
									fontSize: "20px",
									fontWeight: 400,
									lineHeight: "150%",
								}}>
								We help businesses grow through podcasting offering video
								production, guest booking, and strategy that drives brand reach
								and results.
							</p>

							<div>
								<h4 className="text-white font-medium uppercase tracking-wider mb-4 text-sm geist">
									Get Updates
								</h4>
								<div className="relative max-w-md">
									<form
										onSubmit={(e) => {
											e.preventDefault();
											const form = e.target as HTMLFormElement;
											const input = form.elements.namedItem(
												"footer-email",
											) as HTMLInputElement;
											if (!input.value.match(/^\S+@\S+\.\S+$/)) {
												input.setCustomValidity(
													"Please enter a valid email address.",
												);
												input.reportValidity();
											} else {
												input.setCustomValidity("");
												// You can handle the email submission here
												// e.g., send to API or show a success message
											}
										}}
										className="relative max-w-md">
										<input
											type="email"
											name="footer-email"
											autoComplete="email"
											placeholder="E-MAIL"
											className="w-full bg-[#111] border border-white/10 rounded-full py-4 pl-6 pr-36 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors text-[16px] geist"
											style={{ textTransform: "none" }}
											onInput={(e) => {
												const input = e.currentTarget;
												input.setCustomValidity("");
											}}
											required
										/>
										<button
											type="submit"
											className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black font-bold rounded-full px-6 text-xs hover:bg-gray-200 transition-colors uppercase geist">
											Subscribe
										</button>
									</form>
									<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black font-bold rounded-full px-6 text-xs hover:bg-gray-200 transition-colors uppercase geist">
										Subscribe
									</button>
								</div>
							</div>
						</div>

						{/* US Office — bottom of left column */}
						<div className="flex items-start gap-3 mt-20">
							<div className="w-12 h-12 shrink-0 pt-1">
								<img
									src="/us office.png"
									alt="US Office"
									style={{ width: "57.611px", height: "48px" }}
									className="object-contain"
								/>
							</div>
							<div>
								<h4 className="text-white text-lg font-medium mb-1 geist">
									US Office
								</h4>
								<p className="text-gray-400 text-sm leading-relaxed geist">
									Earworm Agency 99 Wall Street #2421, New York, NY 10005
								</p>
							</div>
						</div>
					</div>

					{/* RIGHT COLUMN: nav links + UK office */}
					<div className="flex flex-col justify-between">
						{/* Nav links row */}
						<div className="flex flex-col md:flex-row gap-8 lg:gap-20">
							{/* Info & Links */}
							<div>
								<h4
									style={{
										color: "var(--White, #EDEDED)",
										fontFamily: "Geist",
										fontSize: "24px",
										fontStyle: "normal",
										fontWeight: 600,
										lineHeight: "normal",
										marginBottom: "16px",
									}}>
									Info & Links
								</h4>
								<ul
									style={{
										color: "#E0E0E0",
										fontFamily: "Geist",
										fontSize: "20px",
										fontStyle: "normal",
										fontWeight: 400,
										lineHeight: "150%",
									}}>
									<li>
										<a href="#" className="hover:text-white transition-colors">
											Client Login
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white transition-colors">
											Blog
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white transition-colors">
											Careers
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white transition-colors">
											Contact
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white transition-colors">
											Privacy Policy
										</a>
									</li>
									<li>
										<a href="#" className="hover:text-white transition-colors">
											GDPR
										</a>
									</li>
								</ul>
							</div>

							{/* Services */}
							<div>
								<h4
									style={{
										color: "var(--White, #EDEDED)",
										fontFamily: "Geist",
										fontSize: "24px",
										fontStyle: "normal",
										fontWeight: 600,
										lineHeight: "normal",
										marginBottom: "16px",
									}}>
									Services
								</h4>
								<ul
									style={{
										color: "#E0E0E0",
										fontFamily: "Geist",
										fontSize: "20px",
										fontStyle: "normal",
										fontWeight: 400,
										lineHeight: "150%",
									}}>
									<li>
										<a href="#" className="hover:text-white transition-colors">
											Video Podcasts
										</a>
									</li>
								</ul>
							</div>

							{/* Social */}
							<div>
								<h4
									style={{
										color: "var(--White, #EDEDED)",
										fontFamily: "Geist",
										fontSize: "24px",
										fontStyle: "normal",
										fontWeight: 600,
										lineHeight: "normal",
										marginBottom: "16px",
									}}>
									Social
								</h4>
								<div className="flex gap-3 geist ">
									{socialLinks.map(({ href, src, alt }, idx) => (
										<a
											key={idx}
											href={href}
											className="flex justify-center items-center gap-2 "
											style={{
												width: "48px",
												height: "48px",
												aspectRatio: "1/1",
												borderRadius: "56px",
												background: "rgba(255, 255, 255, 0.10)",
											}}
											target="_blank"
											rel="noopener noreferrer">
											<img
												src={src}
												alt={alt}
												className="object-contain w-5 h-5"
											/>
										</a>
									))}
								</div>
							</div>
						</div>

						{/* UK Office — bottom of right column, aligns under Info & Links */}
						<div className="flex items-start gap-3 mt-20">
							<div className="w-12 h-12 shrink-0 pt-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="81"
									height="36"
									viewBox="0 0 81 36"
									fill="none"
									style={{
										display: "block",
										marginLeft: "-12px",
										marginRight: "16px",
									}}>
									<path
										d="M33.0159 35.5205H24.3761V30.6342H33.0159V35.5205Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M55.9273 35.5205H47.2874V30.6342H55.9273V35.5205Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M32.4597 29.6426L39.7464 26.8051"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M0.206543 30.6357H32.3866"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M49.1753 4.80045H48.0269V30.6357H49.1753V4.80045Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M55.2997 4.80045H54.1512V30.6357H55.2997V4.80045Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M48.6 3.0226L47.6431 4.7998H49.557L48.6 3.0226Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M54.7242 3.0226L53.7675 4.7998H55.6814L54.7242 3.0226Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M47.2875 25.7568H55.9275"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M47.2875 20.0557H55.9275"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M47.2875 14.3545H55.9275"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M47.2875 8.65527H55.9275"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M49.748 8.65527L51.6072 0.206964L53.5621 8.65527"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M52.9265 8.65527V6.77727L51.6554 5.95704L50.384 6.77727V8.65527"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M50.27 10.7832C50.0422 10.7832 49.8575 10.9679 49.8575 11.1955V12.9893H50.6823V11.1955C50.6823 10.9679 50.4979 10.7832 50.27 10.7832Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M51.6557 10.7832C51.4279 10.7832 51.2434 10.9679 51.2434 11.1955V12.9893H52.0678V11.1955C52.0678 10.9679 51.8835 10.7832 51.6557 10.7832Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M53.0409 10.7832C52.8131 10.7832 52.6284 10.9679 52.6284 11.1955V12.9893H53.4532V11.1955C53.4532 10.9679 53.2687 10.7832 53.0409 10.7832Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M50.27 16.6139C50.0422 16.6139 49.8575 16.7988 49.8575 17.0264V18.8203H50.6823V17.0264C50.6823 16.7988 50.4979 16.6139 50.27 16.6139Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M51.6557 16.6139C51.4279 16.6139 51.2434 16.7988 51.2434 17.0264V18.8203H52.0678V17.0264C52.0678 16.7988 51.8835 16.6139 51.6557 16.6139Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M53.0409 16.6139C52.8131 16.6139 52.6284 16.7988 52.6284 17.0264V18.8203H53.4532V17.0264C53.4532 16.7988 53.2687 16.6139 53.0409 16.6139Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M50.27 22.4461C50.0422 22.4461 49.8575 22.631 49.8575 22.8584V24.6523H50.6823V22.8584C50.6823 22.631 50.4979 22.4461 50.27 22.4461Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M51.6557 22.4461C51.4279 22.4461 51.2434 22.631 51.2434 22.8584V24.6523H52.0678V22.8584C52.0678 22.631 51.8835 22.4461 51.6557 22.4461Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M53.0409 22.4461C52.8131 22.4461 52.6284 22.631 52.6284 22.8584V24.6523H53.4532V22.8584C53.4532 22.631 53.2687 22.4461 53.0409 22.4461Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M26.2622 4.80045H25.1138V30.6357H26.2622V4.80045Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M32.3873 4.80045H31.239V30.6357H32.3873V4.80045Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M25.6882 3.0226L24.7312 4.7998H26.6449L25.6882 3.0226Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M31.8126 3.0226L30.8556 4.7998H32.7695L31.8126 3.0226Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M24.3756 25.7568H33.0154"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M24.3756 20.0557H33.0154"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M24.3756 14.3545H33.0154"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M24.3756 8.65527H33.0154"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M26.8369 8.65527L28.6963 0.206964L30.651 8.65527"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M30.0151 8.65527V6.77727L28.7437 5.95704L27.4722 6.77727V8.65527"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M27.3581 10.7832C27.1303 10.7832 26.9458 10.9679 26.9458 11.1955V12.9893H27.7702V11.1955C27.7702 10.9679 27.5859 10.7832 27.3581 10.7832Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M28.744 10.7832C28.5162 10.7832 28.3315 10.9679 28.3315 11.1955V12.9893H29.1561V11.1955C29.1561 10.9679 28.9717 10.7832 28.744 10.7832Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M30.1292 10.7832C29.9011 10.7832 29.7167 10.9679 29.7167 11.1955V12.9893H30.5412V11.1955C30.5412 10.9679 30.357 10.7832 30.1292 10.7832Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M27.3581 16.6139C27.1303 16.6139 26.9458 16.7988 26.9458 17.0264V18.8203H27.7702V17.0264C27.7702 16.7988 27.5859 16.6139 27.3581 16.6139Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M28.744 16.6139C28.5162 16.6139 28.3315 16.7988 28.3315 17.0264V18.8203H29.1561V17.0264C29.1561 16.7988 28.9717 16.6139 28.744 16.6139Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M30.1292 16.6139C29.9011 16.6139 29.7167 16.7988 29.7167 17.0264V18.8203H30.5412V17.0264C30.5412 16.7988 30.357 16.6139 30.1292 16.6139Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M27.3581 22.4461C27.1303 22.4461 26.9458 22.631 26.9458 22.8584V24.6523H27.7702V22.8584C27.7702 22.631 27.5859 22.4461 27.3581 22.4461Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M28.744 22.4461C28.5162 22.4461 28.3315 22.631 28.3315 22.8584V24.6523H29.1561V22.8584C29.1561 22.631 28.9717 22.4461 28.744 22.4461Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M30.1292 22.4461C29.9011 22.4461 29.7167 22.631 29.7167 22.8584V24.6523H30.5412V22.8584C30.5412 22.631 30.357 22.4461 30.1292 22.4461Z"
										stroke="#2CFF82"
										strokeWidth="0.41311"
										strokeLinejoin="round"
									/>
									<path
										d="M48.026 11.0342H32.3867V9.83141H48.026V11.0342Z"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M25.114 29.5714H0.206543V30.6357H25.114V29.5714Z"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M32.8459 30.6357C32.8459 30.6357 34.5744 28.8203 39.7463 26.806"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M47.926 29.6426L40.6395 26.8051"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M47.5397 30.6357C47.5397 30.6357 45.8113 28.8203 40.6395 26.806"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M25.114 8.85608C25.114 8.85608 20.1379 25.3119 0.206543 29.5713"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M17.4094 20.6103V29.5713"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M21.5873 15.667V29.5713"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M80.2066 30.6357H48.0264"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M55.2986 29.5714H80.2062V30.6357H55.2986V29.5714Z"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M55.2986 8.85608C55.2986 8.85608 60.2749 25.3119 80.2062 29.5713"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M58.8251 15.667V29.5713"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M22.1903 14.7605V29.5713"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M17.9664 20.0567V29.5713"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M58.2228 14.7595V29.6426"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M26.2627 31.6025H24.3756"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M27.203 32.2998H24.3763"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M29.6298 32.2998H33.0158"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M31.9537 31.6025H33.016"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M24.3763 34.416H33.0159"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M31.8129 33.6426H33.0154"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M25.7898 33.6426H24.3763"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M26.2631 15.0352H31.2388"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M26.2631 20.7539H31.2388"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M26.2631 26.3857H31.2388"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M26.2631 9.30762H31.2388"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M31.8129 4.80045V30.6357"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M25.6885 4.80045V30.6357"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M29.1561 7.30626H28.3315V8.65527H29.1561V7.30626Z"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M49.1753 31.6025H47.2882"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M50.1149 32.2998H47.2882"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M52.5422 32.2998H55.9283"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M54.8656 31.6025H55.9279"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M47.2882 34.416H55.9278"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M54.7253 33.6426H55.9279"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M48.7017 33.6426H47.2882"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M49.1748 15.0352H54.1505"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M49.1748 20.7539H54.1505"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M49.1748 26.3857H54.1505"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M49.1748 9.30762H54.1505"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M54.7253 4.80045V30.6357"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M48.6002 4.80045V30.6357"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M52.068 7.30626H51.2434V8.65527H52.068V7.30626Z"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
									<path
										d="M32.4604 11.6357H47.9263"
										stroke="#2CFF82"
										strokeWidth="0.206555"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="px-5">
								<h4 className="text-white text-lg font-medium mb-1 geist">
									UK Office
								</h4>
								<p className="text-gray-400 text-sm leading-relaxed geist">
									Earworm Agency Ltd Generator Building, Bristol BS1 6BX
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Separator */}
				<div
					style={{
						width: "100%",
						height: "1px",
						background: "rgba(255,255,255,0.10)",
						marginTop: "20px",
						marginBottom: "40px",
					}}></div>

				{/* Copyright */}
				<div className="text-center text-gray-500 text-xs font-medium leading-[1.6] geist">
					<p>
						© Earworm Agency Ltd. Registered company no. 14843820. VAT no. 449
						7546 43
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
