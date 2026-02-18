import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
  id: string;
  clientLogo: React.ReactNode;
  image: string;
  video: string;
  title: string;
  description: string;
}

const LogoText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "",
}) => (
  <span
    className={`font-display font-bold text-white tracking-wider uppercase text-lg ${className}`}
  >
    {text}
  </span>
);

// Play Button / Circular Progress Component
const PlayProgressButton: React.FC<{
  progress: number;
  isPlaying: boolean;
  onClick: () => void;
}> = ({ progress, isPlaying, onClick }) => {
  const radius = 10;
  const strokeWidth = 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full cursor-pointer hover:bg-black/70 transition-all"
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="play"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
          </motion.div>
        ) : (
          <motion.svg
            key="progress"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background ring */}
            <circle
              cx="12"
              cy="12"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth={strokeWidth}
            />
            {/* Progress ring */}
            <motion.circle
              cx="12"
              cy="12"
              r={radius}
              fill="none"
              stroke="#ffffff"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 12 12)"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
};

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    clientLogo: <LogoText text="FNTV" className="text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Carrier 2.0",
    description: "Reimagining the logistics conversation.",
  },
  {
    id: "2",
    clientLogo: <LogoText text="Polly" className="font-serif capitalize" />,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Pretty Covered",
    description: "Insurance doesn't have to be boring.",
  },
  {
    id: "3",
    clientLogo: <LogoText text="wanodo" className="lowercase" />,
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1000&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Dig In",
    description: "A culinary journey exploring hidden stories.",
  },
  {
    id: "4",
    clientLogo: <LogoText text="PULSETTO" />,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "No Stress",
    description: "Health-tech meets real talk.",
  },
  {
    id: "5",
    clientLogo: <LogoText text="soldo" className="lowercase" />,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "The CFO Playbook",
    description: "Targeting the C-Suite with high-value insights.",
  },
  {
    id: "6",
    clientLogo: <LogoText text="COLLYER BRISTOW" className="text-xs" />,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "UK/US Tax Talk",
    description: "Complex legal topics made accessible.",
  },
];

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-[580px] rounded-[24px] overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glass Border Frame */}
      <div className="absolute inset-0 rounded-[24px] border border-[#707070]/30 z-20 pointer-events-none"></div>
      <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10 z-20 pointer-events-none"></div>

      {/* Background Image (shows when video not playing) */}
      <img
        src={study.image}
        alt={study.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
      />

      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={study.video}
        playsInline
        muted
      />

      {/* Gradient Overlay - subtle, bottom focused */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

      {/* Top Elements */}
      <div className="absolute top-5 left-5 z-10">{study.clientLogo}</div>
      <div className="absolute top-5 right-5 z-10">
        <PlayProgressButton
          progress={progress}
          isPlaying={isPlaying}
          onClick={togglePlay}
        />
      </div>

      {/* Bottom Content - Glass Panel with Fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Gradient fade blur layer */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-sm"
          style={{
            maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 60%, transparent 100%)",
          }}
        ></div>

        <div className="relative p-5">
          <h3 className="text-[22px] font-display font-bold text-white mb-2 tracking-wide">
            {study.title}
          </h3>

          <p className="text-gray-400 text-[14px] leading-relaxed mb-4 line-clamp-3">
            Body text describing the services offered in a summary. Body text
            describing the service
          </p>

          <div className="flex justify-end">
            <div className="w-8 h-8 rounded-full bg-[#00D9D0] text-black flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  return (
    <div className="bg-[#0A0A0A] pt-24 pb-24 relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-[32px] lg:text-[48px] font-display font-medium text-white mb-3 tracking-tight leading-[1.2]">
              Case studies
            </h2>
            <p className="text-gray-500 text-[16px] leading-[1.5]">
              We've launched hundreds of shows and measured the impact
            </p>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] transition-all group whitespace-nowrap">
            <span className="font-medium text-sm">View All Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="mb-8 transition-all duration-300 transform">
            <CaseStudyCard study={caseStudies[currentIndex]} />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-gray-700"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
