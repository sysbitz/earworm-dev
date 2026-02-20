import React from 'react';

const ProductionPlannerSection: React.FC = () => {
  return (
    <div className="bg-linear-to-b from-[#0D0D0D] via-[#050505] to-[#0D0D0D] py-15 px-20 **:relative overflow-hidden">
      {/* Text Content */}
      <div className="text-center px-6 mb-16 relative z-10">
        <h2 className="text-[32px] lg:text-[56px] font-medium text-white mb-5 leading-[1.2] nohemi">
          Access to an industry <br />
          leading production planner
        </h2>
        <p className="text-[#E0E0E0] text-[20px] leading-normal max-w-2xl mx-auto">
          Plan content, track updates & collaborate on ideas. PodPlanner brings
          teams together to deliver content that performs.
        </p>
      </div>

      {/* Main Visual Container */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0 relative z-10">
        {/* Background Gradient Mesh */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 blur-3xl rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(100,255,100,0.15) 0%, rgba(100,100,255,0.15) 50%, rgba(0,0,0,0) 80%)",
          }}
        ></div>

        {/* Production Planner Frame */}
        <img
          src="/ipadf.png"
          alt="PodPlanner Production Interface"
          className="mx-auto rounded-3xl shadow-2xl"
          style={{ width: "1280px", height: "784px", maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default ProductionPlannerSection;