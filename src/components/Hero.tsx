import React from "react";

const logos = [
  { src: "/marquee/lucky-saint.png", w: 60, h: 36 },
  { src: "/marquee/kpmg.png", w: 83, h: 32 },
  { src: "/marquee/cisco.png", w: 120, h: 66 },
  { src: "/marquee/ig.png", w: 87, h: 32 },
  { src: "/marquee/soldo.png", w: 70, h: 29 },
  { src: "/marquee/wenodo.png", w: 87, h: 87 },
  { src: "/marquee/finn.png", w: 70, h: 21 },
];

type LogoProps = {
  src: string;
  w: number;
  h: number;
};

const LogoItem: React.FC<LogoProps> = ({ src, w, h }) => (
  <div
    className="relative shrink-0 h-10 lg:h-16 flex items-center justify-center px-2"
    style={{ minWidth: "100px" }}
  >
    {/* Corner bracket markers - 1px stroke rgba(255,255,255,0.30) */}
    <div
      className="absolute top-0 left-0 w-3 h-3"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.30)",
        borderLeft: "1px solid rgba(255,255,255,0.30)",
      }}
    ></div>
    <div
      className="absolute top-0 right-0 w-3 h-3"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.30)",
        borderRight: "1px solid rgba(255,255,255,0.30)",
      }}
    ></div>
    <div
      className="absolute bottom-0 left-0 w-3 h-3"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.30)",
        borderLeft: "1px solid rgba(255,255,255,0.30)",
      }}
    ></div>
    <div
      className="absolute bottom-0 right-0 w-3 h-3"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.30)",
        borderRight: "1px solid rgba(255,255,255,0.30)",
      }}
    ></div>

    <div className="px-4 lg:px-6 w-full flex items-center justify-center">
      <img
        src={src}
        alt=""
        className="object-contain"
        style={{
          width: `${w}px`,
          height: `${h}px`,
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col pt-40 px-20 overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      {/* Background Glow Effect — large teal radial blob, centered top-right behind images */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "-20%",
          right: "-10%",
          width: "70vw",
          height: "90vh",
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(0, 120, 80, 0.85) 0%, rgba(0, 90, 60, 0.6) 20%, rgba(0, 60, 40, 0.35) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="w-full max-w-360 mx-auto px-6 lg:px-0 z-10 grow flex flex-col">
        <div className="flex flex-col lg:flex-row items-start justify-between pt-8 lg:pt-20 pb-30 lg:pb-0 grow">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left z-20 w-full lg:max-w-[50%]">
            <h1 className="text-[38px] md:text-6xl lg:text-[72px] font-medium tracking-tight text-white leading-[110%] mb-6 nohemi">
              <span className="text-[#1CFA76]">Video podcasts</span> for <br />
              forward thinking <br />
              businesses
            </h1>

            <p className="mt-6 lg:mt-5 mb-10 text-[16px] lg:text-[18px] text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-[150%] px-2 lg:px-0 geist">
              We plan, produce, and distribute strategic video podcasts that
              build brand authority and support growth
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-8.5">
              <button className="group flex items-center justify-between gap-3 rounded-[50px] bg-[linear-gradient(264deg,#FFF_-74.9%,#645BEF_64.18%)] text-lg font-medium text-white transition-all hover:opacity-90 shadow-[0_0_20px_rgba(99,102,241,0.3)] geist">
                <span className="py-3.5 pl-5">Chat to the team</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-105 mr-1 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>

              <button
                className="group flex items-center gap-2 rounded-[50px] border border-white/20 backdrop-blur-xl text-white text-xl font-semibold relative overflow-hidden transition-all duration-300 pr-1.25 pl-6 py-1.25"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.2),inset 0 -1px 0 rgba(0,0,0,0.2)",
                }}
              >
                <span
                  className="absolute inset-0 rounded-[50px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
                  }}
                />
                <span className="relative z-10 py-2 geist">Watch showreel</span>
                <span
                  className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full shrink-0 transition-transform group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 100%)",
                  }}
                >
                  <img src="marquee/video.svg" alt="" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="flex-1 w-full lg:w-auto mt-16 lg:mt-0 flex items-start justify-center lg:justify-end relative z-10 overflow-visible">
            <div
              className="relative overflow-visible"
              style={{ width: "489px", height: "447px" }}
            >
              {/* <img
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
							/> */}

              {/* Shape 1: Capsule (Left) */}
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

              {/* Shape 2: Circle (Right, Higher) */}
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
        <div className="pb-12 lg:pb-15 mt-35">
          <p className="text-center text-[16px] lg:text-[24px] text-white mb-10 lg:mb-12 font-semibold geist">
            Trusted by <span className="text-[#1CF975]">100+</span> clever
            businesses
          </p>

          {/* Marquee container */}
          <div className="relative w-full overflow-hidden">
            {/* Fade left */}
            <div
              className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #0D0D0D, transparent)",
              }}
            />
            {/* Fade right */}
            <div
              className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, #0D0D0D, transparent)",
              }}
            />

            {/* Marquee: single strip of 3x logos so there's always content visible */}
            <div
              style={{
                display: "flex",
                gap: "4rem",
                width: "max-content",
                animation: "marquee 28s linear infinite",
                willChange: "transform",
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <LogoItem key={i} src={logo.src} w={logo.w} h={logo.h} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
