import React, { useState, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import GlassIconButton from "./ui/GlassIconButton";

// ============================================
// HolographicBlobs Component
// ============================================
const HolographicBlobs: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const floatingAnimation = { y: [0, -25, 0] };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-160 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(120% 90% at 0% 0%, rgba(100,91,239,0.35), transparent 60%),
            radial-gradient(100% 80% at 0% 100%, rgba(44,255,130,0.35), transparent 65%),
            radial-gradient(120% 100% at 100% 100%, rgba(0,200,255,0.25), transparent 70%),
            linear-gradient(180deg, #050505 0%, #000000 100%)
          `,
          filter: "blur(80px)",
        }}
      />
      <motion.div
        className="relative w-115 h-220"
        animate={isInView && !prefersReducedMotion ? floatingAnimation : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/holographic-blobs.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-50 blur-2xl"
        />
        <img
          src="/holographic-blobs.png"
          alt="Holographic 3D Shapes"
          className="relative w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

// ============================================
// ProcessCard Component
// ============================================
const ProcessCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number; // Added missing prop
}> = ({ icon, title, description, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      className="sticky w-full group geist"
      style={{
        top: `${140 + index * 120}px`,
        zIndex: index + 1,
      }}
    >
      {/* Gradient Border Effect */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      {/* Card Content */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-[#0D0D0D] rounded-3xl p-8 md:p-10 flex flex-col border border-white/8 overflow-hidden transition-all duration-500 group-hover:border-white/20"
      >
        {/* Top Glow Effect */}
        <div
          className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: isHovered
              ? `radial-gradient(
          ellipse 100% 80% at ${mousePosition.x}px 0px,
          rgba(255,255,255,0.15),
          rgba(255,255,255,0.05) 40%,
          transparent 70%
        )`
              : `radial-gradient(
          ellipse 100% 80% at 50% 0%,
          rgba(255,255,255,0.12),
          rgba(255,255,255,0.04) 50%,
          transparent 70%
        )`,
          }}
        />

        {/* Static subtle top line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
        />

        {/* Header */}
        <div className="relative z-10 flex items-center gap-5.5 mb-10">
          <GlassIconButton closeIcon={icon} h={64} w={64} iconSize={32} />
          <h3 className="text-[32px] font-semibold text-[#EDEDED] tracking-wide geist">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="relative z-10 text-[#E0E0E0] text-[16px] transition-colors geist">
          {description}
        </p>
      </div>
    </div>
  );
};

// ============================================
// Main ProcessSection
// ============================================
const ProcessSection: React.FC = () => {
  const processData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M10.667 13.5554L16.1646 8.05776C17.6645 6.55794 18.4143 5.80802 19.2419 5.20402C20.9399 3.96477 22.9094 3.149 24.9863 2.82461C25.9987 2.6665 27.0593 2.6665 29.1803 2.6665C29.2911 2.6665 29.3337 2.71733 29.3337 2.81989C29.3337 4.94096 29.3337 6.0015 29.1755 7.01378C28.8511 9.09074 28.0354 11.0602 26.7962 12.7582C26.1922 13.5858 25.4422 14.3357 23.9425 15.8356L18.4447 21.3332"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.7883 10.7977C11.5178 10.7977 8.66403 10.3167 6.53939 11.1968C4.98261 11.8416 3.83705 13.3348 2.66699 14.5048L7.07495 16.3938C8.2431 16.8945 7.52901 18.3686 7.33562 19.3356C7.12013 20.413 7.13214 20.4528 7.9091 21.2297L10.7704 24.091C11.5474 24.868 11.5871 24.8801 12.6645 24.6645C13.6315 24.4712 15.1057 23.757 15.6062 24.9252L17.4954 29.3332C18.6654 28.1632 20.1586 27.0176 20.8034 25.4608C21.6835 23.3361 21.2025 20.4824 21.2025 18.2118"
            stroke="white"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M16.0003 26.6665L14.667 27.9998"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.3337 16L4.00037 17.3333"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.0004 5.43994C21.6004 5.67994 23.2804 6.31994 24.2156 7.27994C25.4105 8.33614 26.2404 9.75994 26.5604 11.9999"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
          />
          <path
            d="M23.9204 8.08008L22.0004 10.0001"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      ),
      title: "Create",
      description:
        "We shape the foundations of the show - sourcing the right host, defining themes, naming the podcast, setting creative direction, and agreeing clear timelines. We incubate the idea properly, so you’re ready to launch with confidence, not guesswork.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M14.6664 8H27.9997"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M14.6664 16H27.9997"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M14.6664 24H27.9997"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M3.99963 9.85706C3.99963 9.85706 5.33297 10.7261 5.99963 11.9999C5.99963 11.9999 7.99963 6.99992 10.6663 5.33325"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.99963 24.5239C3.99963 24.5239 5.33297 25.3929 5.99963 26.6667C5.99963 26.6667 7.99963 21.6667 10.6663 20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Produce",
      description:
        "Every episode is carefully planned and managed end-to-end. We handle scheduling, research, guest sourcing, recording, and production - so your podcast runs smoothly on autopilot.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M27.9996 8.66675C27.9996 10.8759 26.2088 12.6667 23.9996 12.6667C21.7904 12.6667 19.9996 10.8759 19.9996 8.66675C19.9996 6.45761 21.7904 4.66675 23.9996 4.66675C26.2088 4.66675 27.9996 6.45761 27.9996 8.66675Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M11.9996 16C11.9996 18.2092 10.2088 20 7.99963 20C5.7905 20 3.99963 18.2092 3.99963 16C3.99963 13.7908 5.7905 12 7.99963 12C10.2088 12 11.9996 13.7908 11.9996 16Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M27.9996 23.3333C27.9996 25.5425 26.2088 27.3333 23.9996 27.3333C21.7904 27.3333 19.9996 25.5425 19.9996 23.3333C19.9996 21.1241 21.7904 19.3333 23.9996 19.3333C26.2088 19.3333 27.9996 21.1241 27.9996 23.3333Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M11.6377 14.3326L20.3043 10.3333M11.6377 17.6666L20.3043 21.6659"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
      title: "Publish",
      description:
        "One episode becomes content everywhere. Each recording is distributed as video, audio, clips, teasers, reels, blog content, and newsletters - designed to show up consistently across every channel that matters.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M19.333 6.66675H16.6664C12.8951 6.66675 11.0095 6.66675 9.83796 7.83832C8.66638 9.00989 8.66638 10.8955 8.66638 14.6667V21.3334C8.66638 25.1046 8.66638 26.9902 9.83796 28.1618C11.0095 29.3334 12.8951 29.3334 16.6664 29.3334H18.4572C19.5472 29.3334 20.0922 29.3334 20.5822 29.1305C21.0724 28.9274 21.4577 28.5421 22.2285 27.7713L25.7709 24.2289C26.5417 23.4581 26.927 23.0727 27.1301 22.5826C27.333 22.0926 27.333 21.5475 27.333 20.4575V14.6667C27.333 10.8955 27.333 9.00989 26.1614 7.83832C24.9898 6.66675 23.1042 6.66675 19.333 6.66675Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.9996 28.6667V27.3333C19.9996 24.8192 19.9996 23.5621 20.7807 22.7811C21.5618 22 22.8188 22 25.333 22H26.6663"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.66638 25.3334C6.45725 25.3334 4.66638 23.5426 4.66638 21.3334V10.6667C4.66638 6.89551 4.66638 5.00989 5.83796 3.83832C7.00953 2.66675 8.89514 2.66675 12.6664 2.66675H19.3336C21.5426 2.66676 23.3336 4.45767 23.3336 6.66679"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3344 17.3333H18.6677M13.3344 12H22.6677"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Report",
      description:
        "Decision-grade reporting that goes beyond downloads. See who’s listening, how content is performing, audience trends, and engagement signals - giving your team the insight needed to refine strategy and support growth.",
    },
  ];

  return (
    <div className="bg-[#E4E5E9]">
      <div
        className="bg-[#0D0D0D] py-15 relative z-20"
        style={{
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <div className="px-20 max-w-360 mx-auto py-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Column: Sticky Title + Image */}
            <div className="lg:w-[40%] lg:sticky lg:top-35 self-start">
              <h2 className="text-[32px] lg:text-[56px] nohemi font-medium text-white mb-5 tracking-tight leading-[1.2]">
                Our process
              </h2>
              <p className="text-[#E0E0E0] text-[20px] mb-16 max-w-2xl text-justify geist">
                Our process is designed to take the complexity out of
                podcasting. We handle everything from idea to insight, so your
                show runs consistently and delivers real value for the business.
              </p>

              {/* Holographic 3D Blobs */}
              <HolographicBlobs />
            </div>

            {/* Right Column (The Card Stack) */}
            <div
              className="lg:w-[60%] flex flex-col gap-5 geist"
              style={{
                paddingBottom: `calc(100vh + ${
                  (processData.length - 1) * 100
                }px - 100px)`,
              }}
            >
              {processData.map((item, idx) => (
                <ProcessCard
                  key={idx}
                  index={idx}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
