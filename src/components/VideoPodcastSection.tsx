import React, { useState, useRef } from "react";
import { Play, } from "lucide-react";
import GlassIconButton from "./ui/GlassIconButton";

// Simple Video Player Component - Play button only
const CustomVideoPlayer: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const videoSrc =
		"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
	const posterSrc = "/video_layer.png";

	const togglePlay = () => {
		if (!videoRef.current) return;

		if (isPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
    <div className="relative w-full h-150 aspect-video md:aspect-[2.35/1] rounded-[48px] overflow-hidden border border-white/30 bg-[#0D0D0D] group">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        playsInline
      />

      {/* Center Play Button (when paused) */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center pl-2 transition-transform duration-300 hover:scale-110 hover:bg-white/20">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
          </div>
        </div>
      )}
    </div>
  );
};

const FeatureCard: React.FC<{
	icon: string;
	title: string;
	description: string;
}> = ({ icon, title, description }) => {
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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Gradient Border Effect */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition?.x || 0}px ${mousePosition?.y || 0}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-3xl p-10 flex flex-col h-full overflow-hidden transition-all duration-500 group-hover:border-white/25"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0.35) 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.13), inset 0 -1px 0 rgba(0,0,0,0.2), 0 20px 40px rgba(0,0,0,0.6)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Top border shine */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0.15) 70%, transparent 100%)",
          }}
        />

        {/* Inner glass sheen */}
        <div
          className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
          }}
        />

        {/* Mouse-tracked glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background: isHovered
              ? `radial-gradient(ellipse 120% 60% at ${mousePosition.x}px 0px, rgba(255,255,255,0.10), rgba(255,255,255,0.03) 50%, transparent 75%)`
              : `radial-gradient(ellipse 120% 60% at 50% 0%, rgba(255,255,255,0.07), rgba(255,255,255,0.02) 50%, transparent 75%)`,
          }}
        />

        {/* Icon - Glass */}
        <GlassIconButton
          closeIcon={
            <img src={icon} alt="" className="w-7.5 h-7.5 object-contain" />
          }
          h={64}
          w={64}
          className="mb-10"
        />

        {/* Title */}
        <h3 className="relative z-10 text-[24px] font-semibold text-[#EDEDED] mb-3 geist">
          {title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-[#E0E0E0] text-[16px] group-hover:text-gray-300 transition-colors geist">
          {description}
        </p>
      </div>
    </div>
  );
};

const VideoPodcastSection: React.FC = () => {
	return (
    <div className="bg-[#0D0D0D] py-15  px-20 relative overflow-hidden">
      {/* Right Background Gradient SVG */}
      <img
        src="/marquee/bg-grad.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 -right-62.5 w-[45%] h-[80%] pointer-events-none z-0 object-contain"
      />

      {/* Background Glow - Top Right */}
      <div className="absolute top-0 right-0 bg-[#0D0D0D] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4 z-0"></div>

      <div className=" px-6 lg:px-0 relative z-10">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-5 tracking-tight leading-[1.2] nohemi">
            Plug the power of a video <br className="hidden md:block" />
            podcast into your business
          </h2>
          <p className="text-gray-400 text-[20px] leading-normal max-w-3xl mx-auto geist">
            From consultancy and guest booking to studio-quality production and
            delivery, we own your video podcast channel.
          </p>
        </div>

        {/* Custom Video Player */}
        <div className="mb-5">
          <CustomVideoPlayer />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            icon="/marquee/messages.svg"
            title="Own the conversation"
            description="Create content that resonates with your buyers"
          />
          <FeatureCard
            icon="/marquee/share.svg"
            title="Connect with industry leaders"
            description="We get you and your team booked on established shows in your sector."
          />
          <FeatureCard
            icon="/marquee/laptop.svg"
            title="Clips, reels and more"
            description="We create podcast roadmaps and content plans that align with your marketing goals."
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPodcastSection;
