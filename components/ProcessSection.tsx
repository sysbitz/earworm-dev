import React, { useState, useRef } from "react";
import { Rocket, Share2, FileText, ListVideo } from "lucide-react";
import { motion, useReducedMotion, useInView, useScroll } from "framer-motion";

// ============================================
// HolographicBlobs Component
// ============================================
const HolographicBlobs: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const floatingAnimation = { y: [0, -30, 0] };
  const transition = {
    duration: 5,
    ease: [0.45, 0.05, 0.55, 0.95],
    repeat: Infinity,
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #2CFF82 0%, #4E3D99 100%)",
          filter: "blur(100px)",
          opacity: 0.2,
        }}
      />
      <motion.div
        className="relative w-[300px] h-[300px]"
        animate={isInView && !prefersReducedMotion ? floatingAnimation : {}}
        transition={transition}
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
  const [isHovered, setIsHovered] = useState(false); // Added missing state
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      className="sticky w-full mb-10 group"
      style={{
        top: `${120 + index * 100}px`,
        zIndex: index + 1,
      }}
    >
      {/* Gradient Border Effect */}
      <div
        className="absolute -inset-[1px] rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      {/* Card Content */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-[#0D0D0D] rounded-[24px] p-8 md:p-10 flex flex-col border border-white/[0.08] overflow-hidden transition-all duration-500 group-hover:border-white/20 shadow-2xl"
      >
        {/* Top Glow Effect on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: isHovered
              ? `radial-gradient(ellipse 100% 80% at ${mousePosition.x}px 0px, rgba(255,255,255,0.15), rgba(255,255,255,0.05) 40%, transparent 70%)`
              : "none",
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
        <div className="relative z-10 flex items-center gap-5 mb-6">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 flex-shrink-0 group-hover:text-white group-hover:border-white/40 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-[24px] font-medium text-white tracking-wide font-sans">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="relative z-10 text-gray-500 text-[16px] leading-relaxed group-hover:text-gray-400 transition-colors">
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
      icon: <Rocket className="w-6 h-6" />,
      title: "Create",
      description:
        "We shape the foundations of the show - sourcing the right host, defining themes, naming the podcast, setting creative direction, and agreeing clear timelines.",
    },
    {
      icon: <ListVideo className="w-6 h-6" />,
      title: "Produce",
      description:
        "Every episode is carefully planned and managed end-to-end. We handle scheduling, research, guest sourcing, recording, and production.",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Publish",
      description:
        "One episode becomes content everywhere. Each recording is distributed as video, audio, clips, teasers, reels, and newsletters across all channels.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Report",
      description:
        "Decision-grade reporting that goes beyond downloads. See who's listening, audience trends, and engagement signals needed to support growth.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] py-24 relative overflow-visible rounded-b-[60px] md:rounded-b-[80px] z-20">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Sticky Title + Image */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
            <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-8 tracking-tight leading-[1.2]">
              Our process
            </h2>
            <p className="text-gray-400 text-[20px] leading-[1.5] mb-16 max-w-md">
              Our process is designed to take the complexity out of podcasting.
              We handle everything from idea to insight, so your show runs
              consistently and delivers real value for the business.
            </p>

            {/* Holographic 3D Blobs */}
            <HolographicBlobs />
          </div>

          {/* Right Column (The Card Stack) */}
          <div className="lg:w-2/3 flex flex-col pb-[20vh]">
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
  );
};

export default ProcessSection;
