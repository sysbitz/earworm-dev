import React from 'react';

const ProductionPlannerSection: React.FC = () => {
  return (
    <div className="bg-[#050505] py-24 relative overflow-hidden">
      
      {/* Text Content */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-6 tracking-tight leading-[1.2]">
            Access to an industry <br />
            leading production planner
        </h2>
        <p className="text-gray-400 text-[20px] leading-[1.5] max-w-2xl mx-auto">
            Plan content, track updates & collaborate on ideas. PodPlanner 
            brings teams together to deliver content that performs.
        </p>
      </div>

      {/* Main Visual Container */}
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Background Gradient Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 blur-3xl rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(100,255,100,0.15) 0%, rgba(100,100,255,0.15) 50%, rgba(0,0,0,0) 80%)' }}>
        </div>

        {/* Production Planner Frame */}
        <img 
          src="/Frame 2.png" 
          alt="PodPlanner Production Interface" 
          className="mx-auto rounded-[24px] shadow-2xl"
          style={{ width: '1280px', height: '784px', maxWidth: '100%' }}
        />

      </div>
    </div>
  );
};

export default ProductionPlannerSection;