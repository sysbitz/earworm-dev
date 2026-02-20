import React from "react";

const logos = [
	"/marquee/lucky-saint.png",
	"/marquee/kpmg.png",
	"/marquee/cisco.png",
	"/marquee/ig.png",
	"/marquee/soldo.png",
	"/marquee/wenodo.png",
	"/marquee/finn.png",
];

const LogoItem: React.FC<{ name: string }> = ({ name }) => (
	<div
		className="relative flex-shrink-0 h-10 lg:h-16 flex items-center justify-center px-2"
		style={{ minWidth: "100px" }}>
		{/* Corner bracket markers - 1px stroke rgba(255,255,255,0.30) */}
		<div
			className="absolute top-0 left-0 w-3 h-3"
			style={{
				borderTop: "1px solid rgba(255,255,255,0.30)",
				borderLeft: "1px solid rgba(255,255,255,0.30)",
			}}></div>
		<div
			className="absolute top-0 right-0 w-3 h-3"
			style={{
				borderTop: "1px solid rgba(255,255,255,0.30)",
				borderRight: "1px solid rgba(255,255,255,0.30)",
			}}></div>
		<div
			className="absolute bottom-0 left-0 w-3 h-3"
			style={{
				borderBottom: "1px solid rgba(255,255,255,0.30)",
				borderLeft: "1px solid rgba(255,255,255,0.30)",
			}}></div>
		<div
			className="absolute bottom-0 right-0 w-3 h-3"
			style={{
				borderBottom: "1px solid rgba(255,255,255,0.30)",
				borderRight: "1px solid rgba(255,255,255,0.30)",
			}}></div>

		<div className="px-4 lg:px-6 w-full flex items-center justify-center">
			<img
				src={name}
				alt=""
				className="w-16 object-contain"
				style={{ filter: "brightness(0) invert(1)" }}
			/>
		</div>
	</div>
);

const Hero: React.FC = () => {
	return (
		<div
			className="relative min-h-screen flex flex-col pt-[120px] overflow-hidden"
			style={{ backgroundColor: "#000000" }}>
			{/* Background Glow Effect — dark teal radial glow */}
			<div
				className="absolute pointer-events-none z-0"
				style={{
					top: "-10%",
					left: "-5%",
					width: "75vw",
					height: "75vw",
					maxWidth: "900px",
					maxHeight: "900px",
					background:
						"radial-gradient(ellipse at 55% 40%, rgba(13, 80, 55, 0.75) 0%, rgba(10, 55, 38, 0.5) 25%, rgba(5, 30, 20, 0.3) 50%, transparent 70%)",
					filter: "blur(40px)",
				}}
			/>

			<div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 z-10 flex-grow flex flex-col">
				<div className="flex flex-col lg:flex-row items-center justify-between pt-8 lg:pt-20 pb-[120px] lg:pb-0 flex-grow">
					{/* Left Text Content */}
					<div className="nohemi flex-1 text-center lg:text-left z-20 w-full lg:max-w-[50%]">
						<h1 className="text-[38px] md:text-6xl lg:text-[72px] font-display font-bold tracking-tight text-white leading-[1.1] mb-6">
							<span className="text-brand-green">Video podcasts</span> for{" "}
							<br />
							forward thinking <br />
							businesses
						</h1>

						<p className="geist mt-6 lg:mt-[20px] mb-[40px] text-[16px] lg:text-[20px] text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-[1.5] px-2 lg:px-0">
							We plan, produce, and distribute strategic video podcasts that
							build brand authority and support growth
						</p>

						<div className="geist flex flex-wrap items-center justify-center lg:justify-start gap-4">
							<button className="group flex items-center justify-between gap-3 rounded-[50px] bg-[linear-gradient(264deg,#FFF_-74.9%,#645BEF_64.18%)] text-lg font-medium text-white transition-all hover:opacity-90 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
								<span className="py-[14px] pl-[20px]">Chat to the team</span>
								<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-black transition-transform group-hover:scale-105 mr-[4px] my-[4px]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										className="h-5 w-5 text-white">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
										/>
									</svg>
								</div>
							</button>

							<button
								className="flex items-center gap-2 rounded-[50px] border border-white/20 backdrop-blur-xl text-white text-xl font-semibold relative overflow-hidden transition-all duration-300 pr-[5px] pl-[24px] py-[5px]"
								style={{
									background:
										"linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
									boxShadow:
										"0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.2),inset 0 -1px 0 rgba(0,0,0,0.2)",
								}}>
								<span
									className="absolute inset-0 rounded-[50px] pointer-events-none"
									style={{
										background:
											"linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
									}}
								/>
								<span className="relative z-10 py-2">Watch showreel</span>
								<span
									className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/25 flex-shrink-0"
									style={{
										background:
											"linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 100%)",
										boxShadow:
											"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.3)",
									}}>
									<img src="marquee/video.png" alt="" />
								</span>
							</button>
						</div>
					</div>

					{/* Right Image Composition */}
					<div className="flex-1 w-full lg:w-auto mt-16 lg:mt-0 flex items-center justify-center lg:justify-end relative z-10 overflow-visible">
						<div
							className="relative overflow-visible"
							style={{ width: "489px", height: "447px" }}>
							<img
								src="/Ellipse 11.png"
								alt=""
								className="absolute pointer-events-none opacity-30 blur-sm"
								style={{
									left: "20%",
									top: "50%",
									transform: "translate(-50%, -50%) scale(1.0)",
									mixBlendMode: "screen",
									zIndex: 0,
								}}
							/>
							<img
								src="/Ellipse 12.png"
								alt=""
								className="absolute pointer-events-none opacity-30 blur-sm"
								style={{
									left: "70%",
									top: "40%",
									transform: "translate(-50%, -50%) scale(1.0)",
									mixBlendMode: "screen",
									zIndex: 0,
								}}
							/>

							{/* Shape 1: Capsule (Left) */}
							<div
								className="absolute z-20 overflow-hidden"
								style={{
									left: "0px",
									top: "0px",
									width: "230px",
									height: "447px",
									borderRadius: "999999px",
								}}>
								<img
									src="/shape (2).png"
									alt="Podcast host with microphone"
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Shape 2: Circle (Right, Higher) */}
							<div
								className="absolute z-30 overflow-hidden"
								style={{
									left: "259px",
									top: "12px",
									width: "230px",
									height: "230px",
									borderRadius: "50%",
								}}>
								<img
									src="/shape (1).png"
									alt="Red studio background"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Trusted By Section */}
				<div className="geist pb-12 lg:pb-16 mt-[174px]">
					<p className="text-center text-[16px] lg:text-[19px] text-white mb-[40px] lg:mb-12 font-medium">
						Trusted by <span className="text-[#1CF975] font-bold">100+</span>{" "}
						clever businesses
					</p>

					{/* Marquee container */}
					<div className="relative w-full overflow-hidden">
						{/* Fade edges */}
						<div
							className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
							style={{
								background: "linear-gradient(to right, #000000, transparent)",
							}}
						/>
						<div
							className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
							style={{
								background: "linear-gradient(to left, #000000, transparent)",
							}}
						/>

						{/* Marquee track */}
						<div
							className="flex gap-16"
							style={{
								animation: "marquee 28s linear infinite",
								width: "max-content",
							}}>
							{/* Double the logos for seamless loop */}
							{[...logos, ...logos].map((logo, i) => (
								<LogoItem key={i} name={logo} />
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Marquee keyframes */}
			<style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
		</div>
	);
};

export default Hero;
