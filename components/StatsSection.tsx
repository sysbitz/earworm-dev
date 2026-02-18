import React, { useState, useEffect, useRef, MouseEvent } from 'react';

interface StatCardProps {
  title: string; 
  stat: string; 
  description: string; 
  source: string;
  isAnimated?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, stat, description, source, isAnimated = false }) => {
  const [displayValue, setDisplayValue] = useState<number | string>(isAnimated ? 0 : stat);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    if (!isAnimated || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const targetNumber = parseInt(stat);
          const duration = 2000; // 2 seconds
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * targetNumber);
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(targetNumber);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [stat, isAnimated, hasAnimated]);

  return (
  <div 
    ref={cardRef} 
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col h-full relative overflow-hidden group hover:border-white/20 transition-all duration-300"
  >
     {/* Top Glow Effect on Hover */}
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
         background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
       }}
     />
     
     {/* Top subtle light effect */}
     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

     <h3 className="text-[24px] font-sans font-medium text-white mb-20 relative z-10 leading-tight tracking-wide">
       {title}
     </h3>
     
     <div className="mt-auto relative z-10">
        <div className="flex items-center mb-6 relative">
            <span className="text-6xl md:text-7xl lg:text-[5rem] font-display font-bold text-brand-green tracking-tighter leading-none">
              {isAnimated ? displayValue : stat}{isAnimated && '%'}
            </span>
        </div>
        
        <p className="text-gray-300 text-[20px] mb-10 leading-[1.5] font-sans font-normal max-w-[90%]">
            {description}
        </p>

        <div className="pt-2">
            <div className="w-8 border-t border-gray-600 mb-4"></div>
            <p className="text-gray-500 text-[16px] font-sans">{source}</p>
        </div>
     </div>
  </div>
  );
};

const StatsSection: React.FC = () => {
    return (
        <div className="bg-brand-black py-24 relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
                    <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white tracking-tight leading-[1.2] max-w-4xl">
                        Why brands are investing <br className="hidden lg:block"/>
                        in monthly podcast content
                    </h2>
                    <p className="text-gray-400 text-[20px] leading-[1.5] max-w-sm lg:text-left lg:pt-2">
                        The best video podcasts don't just build awareness - they open doors, build trust, and can power your whole content strategy.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard 
                        title="Buyers are listening" 
                        stat="74" 
                        description="B2B decision-makers listen to podcasts weekly." 
                        source="Source: Edison Research"
                        isAnimated={true}
                    />

                    <StatCard 
                        title="Build brand authority" 
                        stat="65" 
                        description="Podcast guests say it led to new business or speaking invites." 
                        source="Source: Podchaser Pro"
                        isAnimated={true}
                    />

                    <StatCard 
                        title="Turn episodes into content" 
                        stat="10-20x" 
                        description="Video Podcasts generate 10-20x more reusable content than blog posts." 
                        source="Internal agency data / industry benchmarks"
                        isAnimated={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default StatsSection;