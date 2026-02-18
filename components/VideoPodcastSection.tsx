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
    <div className="relative w-full aspect-video md:aspect-[2.35/1] rounded-[40px] overflow-hidden border border-white/10 bg-black group">
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
  icon: React.ReactNode;
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
        className="absolute -inset-[1px] rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />
      
      {/* Card Content */}
      <div className="relative bg-[#0D0D0D] rounded-[24px] p-10 flex flex-col h-full border border-white/[0.08] overflow-hidden transition-all duration-500 group-hover:border-white/20">
        
        {/* Top Glow Effect on Hover - extends to center */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: isHovered 
              ? `radial-gradient(ellipse 100% 80% at ${mousePosition.x}px 0px, rgba(255,255,255,0.15), rgba(255,255,255,0.05) 40%, transparent 70%)`
              : 'none',
          }}
        />
        
        {/* Static subtle top gradient */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
        />

        {/* Icon */}
        <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-10 text-white/80 group-hover:text-white group-hover:border-white/40 transition-all duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="relative z-10 text-[20px] font-semibold text-white mb-3 font-display tracking-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="relative z-10 text-gray-500 text-[15px] leading-relaxed group-hover:text-gray-400 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};

const VideoPodcastSection: React.FC = () => {
  return (
    <div className="bg-brand-black py-24 relative overflow-hidden">
      
      {/* Background Glow - Top Right */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-6 tracking-tight leading-[1.2]">
            Plug the power of a video <br className="hidden md:block" />
            podcast into your business
          </h2>
          <p className="text-gray-400 text-[20px] leading-[1.5] max-w-2xl mx-auto">
            From consultancy and guest booking to studio-quality production and delivery,
            we own your video podcast channel.
          </p>
        </div>

        {/* Custom Video Player */}
        <div className="mb-8">
          <CustomVideoPlayer />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="Own the conversation"
            description="Create content that resonates with your buyers"
          />
          <FeatureCard
            icon={<Share2 className="w-6 h-6" />}
            title="Connect with industry leaders"
            description="We get you and your team booked on established shows in your sector."
          />
          <FeatureCard
            icon={<Clapperboard className="w-6 h-6" />}
            title="Clips, reels and more"
            description="We create podcast roadmaps and content plans that align with your marketing goals."
          />
        </div>

      </div>
    </div>
  );
};

export default VideoPodcastSection;