import React from "react";
import img1 from "../public/marquee/lucky-saint.png";
import img2 from "../public/marquee/kpmg.png";
import img3 from "../public/marquee/cisco.png";
import img4 from "../public/marquee/ig.png";
import img5 from "../public/marquee/soldo.png";
import img6 from "../public/marquee/wenodo.png";
import img7 from "../public/marquee/finn.png";

const LogoItem: React.FC<{
  name: string;
  corner?: boolean;
}> = ({ name, corner = true }) => (
  <div className="relative group h-10 lg:h-16 flex items-center justify-center px-2">
    {/* Corner markers - Only show if corner is true */}
    {corner && (
      <>
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20"></div>
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20"></div>
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20"></div>
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20"></div>
      </>
    )}

    <div className="px-4 lg:px-6 w-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
      <span className="font-sans font-bold w-16 tracking-wider text-white whitespace-nowrap">
        <img src={name} alt="" />
      </span>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-black min-h-screen flex flex-col pt-[120px]">
      {/* Background Glow Effect - Positioned behind text */}
      <div className="absolute top-0 left-0 max-w-[1280px] bg-glow-effect pointer-events-none -translate-x-1/4 -translate-y-1/4 z-0 opacity-80"></div>

      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 z-10 flex-grow flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 lg:pt-20 pb-12 lg:pb-0 flex-grow">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left z-20 w-full lg:max-w-[50%]">
            <h1 className="text-[38px] md:text-6xl lg:text-[72px] font-display font-bold tracking-tight text-white leading-[1.1] mb-6">
              <span className="text-brand-green">Video podcasts</span> for{" "}
              <br />
              forward thinking <br />
              businesses
            </h1>

            <p className="mt-6 lg:mt-[20px] mb-[40px] text-[16px] lg:text-[20px] text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-[1.5] px-2 lg:px-0">
              We plan, produce, and distribute strategic video podcasts that
              build brand authority and support growth
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="group flex items-center justify-between gap-3 rounded-full bg-gradient-to-l from-[#818cf8] to-[#6366f1] text-lg font-medium text-white transition-all hover:opacity-90 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <span className="py-[14px] pl-[20px]">Chat to the team</span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-black transition-transform group-hover:scale-105 mr-[4px] my-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>

              <button
                className="flex items-center gap-3 
                     rounded-full 
                     border
                     bg-white/10 
                     backdrop-blur-md 
                     text-white text-xl font-medium
                     shadow-lg"
              >
                <span className="py-[14px] pl-[20px]">Watch showreel</span>

                <span
                  className="flex items-center justify-center
                       w-12 h-12
                       rounded-full
                       bg-white/15
                       border border-white/20 mr-[4px] my-[4px]"
                >
                 <img src="../public/marquee/video.png" alt=""/>
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          {/* Fixed: Use flex layout instead of absolute positioning on desktop to prevent overlap */}
          <div className="flex-1 w-full lg:w-auto mt-16 lg:mt-0 flex items-center justify-center lg:justify-end relative z-10 overflow-visible">
            <div
              className="relative overflow-visible"
              style={{ width: "489px", height: "447px" }}
            >
              {/* Ellipse glow effects - using same approach as TestimonialsSection */}
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

              {/* Shape 1: Capsule (Left) - Man with microphone - 230.37x447px */}
              <div
                className="absolute z-20 overflow-hidden"
                style={{
                  left: "0px",
                  top: "0px",
                  width: "230px",
                  height: "447px",
                  borderRadius: "999999px",
                }}
              >
                <img
                  src="/shape (2).png"
                  alt="Podcast host with microphone"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Shape 2: Circle (Right, Higher) - Red studio - 230.37x230.37px */}
              <div
                className="absolute z-30 overflow-hidden"
                style={{
                  left: "259px",
                  top: "12px",
                  width: "230px",
                  height: "230px",
                  borderRadius: "50%",
                }}
              >
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
        <div className="pb-12 lg:pb-16 mt-[174px]">
          <p className="text-center text-[16px] lg:text-[19px] text-white mb-[40px] lg:mb-12 font-medium">
            Trusted by <span className="text-[#1CF975] font-bold">100+</span>{" "}
            clever businesses
          </p>

          <div className="flex flex-wrap justify-between gap-x-8 gap-y-6 lg:gap-8 w-full mx-auto opacity-80">
            <LogoItem name={img1} />
            <LogoItem name={img2} />
            <LogoItem name={img3} />
            <LogoItem name={img4} />
            <LogoItem name={img5} />
            <LogoItem name={img6} />
            <LogoItem name={img7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
