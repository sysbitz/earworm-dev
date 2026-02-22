import React from "react";

/**
 * SectionWrapper
 *
 * Provides a single unified dark background for CaseStudiesSection and
 * TestimonialsSection so they bleed into each other without any visible
 * colour seam or rounded-corner break.
 *
 * Usage:
 *   <SectionWrapper>
 *     <CaseStudiesSection />
 *     <TestimonialsSection />
 *   </SectionWrapper>
 *
 * Both child components should use the "inner" variants exported below
 * (or you can pass the originals — the wrapper overrides the outer shell).
 */

interface SectionWrapperProps {
	children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
	return (
		<div style={{ background: "#E4E5E9" }}>
			<div
				className="relative"
				style={{
					background: "#0D0D0D",
					borderRadius: "80px 80px 0 0",
				}}>
				{/* Glow 1: Purple radial at top-center — sits behind CaseStudies */}
				<div
					className="absolute pointer-events-none"
					style={{
						top: 0,
						left: "50%",
						transform: "translateX(-50%)",
						width: "800px",
						height: "800px",
						background:
							"radial-gradient(ellipse at 50% 20%, rgba(130,102,255,0.28) 0%, rgba(130,102,255,0.10) 40%, transparent 70%)",
						zIndex: 0,
					}}
				/>

				{/* Glow 2: Ellipses centered in Testimonials section (bottom half) */}
				<img
					src="/Ellipse 11.png"
					alt=""
					className="absolute pointer-events-none opacity-30 blur-sm"
					style={{
						left: "40%",
						top: "65%",
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
						left: "50%",
						top: "70%",
						transform: "translate(-50%, -50%) scale(1.0)",
						mixBlendMode: "screen",
						zIndex: 0,
					}}
				/>
				<div className="relative z-10">{children}</div>
			</div>
		</div>
	);
};

export default SectionWrapper;
