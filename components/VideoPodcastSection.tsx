import React, { useState, useRef } from 'react';
import { 
  Play,
  MessageCircle, 
  Share2, 
  Clapperboard,
} from 'lucide-react';

// Simple Video Player Component - Play button only
const CustomVideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const posterSrc = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2400&auto=format&fit=crop";

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
    <div className="relative w-full aspect-video md:aspect-[2.35/1] rounded-[40px] overflow-hidden border border-white/30 bg-black group">
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
        className="absolute -inset-[1px] rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition?.x || 0}px ${mousePosition?.y || 0}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      {/* Card */}
      <div
        className="
      relative
      bg-[#0D0D0D]
      rounded-[24px]
      p-10
      flex
      flex-col
      h-full
      border
      border-white/[0.08]
      overflow-hidden
      transition-all
      duration-500
      group-hover:border-white/20
      shadow-[0_20px_40px_rgba(0,0,0,0.6)]
    "
      >
        {/* Static top glow (always visible, subtle) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)",
          }}
        />

        {/* Icon - Glass */}
        <div
          className="
        relative z-10
        w-12 h-12
        rounded-full
        mb-10
        flex items-center justify-center
        bg-white/10
        backdrop-blur-md
        border border-white/20
        text-white/80
        transition-all duration-300
        group-hover:text-white
        group-hover:border-white/50
      "
        >
          <img src={icon} alt="" className='w-[20px]'/>
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-[20px] font-semibold text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-gray-400 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};

const VideoPodcastSection: React.FC = () => {
  return (
    <div className="bg-brand-black py-[60px] relative overflow-hidden">
      {/* Right Purple Glow */}
      <div
        className="absolute top-0 right-0 w-[50%] h-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(70% 70% at 100% 50%, rgba(100,91,239,0.4), transparent 70%)",
        }}
      />

      {/* Background Glow - Top Right */}
      <div className="absolute top-0 right-0 bg-[#0D0D0D] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4 z-0"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 relative z-10">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-5 tracking-tight leading-[1.2]">
            Plug the power of a video <br className="hidden md:block" />
            podcast into your business
          </h2>
          <p className="text-gray-400 text-[20px] leading-[1.5] max-w-3xl mx-auto">
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
            icon="../public/marquee/messages.svg"
            title="Own the conversation"
            description="Create content that resonates with your buyers"
          />
          <FeatureCard
            icon="../public/marquee/share.svg"
            title="Connect with industry leaders"
            description="We get you and your team booked on established shows in your sector."
          />
          <FeatureCard
            icon="../public/marquee/laptop.svg"
            title="Clips, reels and more"
            description="We create podcast roadmaps and content plans that align with your marketing goals."
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPodcastSection;