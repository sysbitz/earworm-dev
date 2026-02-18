import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.8 } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pillVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const blurredPillVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6, transition: { duration: 0.8 } },
};

const LaunchGraphic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const percentage = useMotionValue(0);
  const springPercentage = useSpring(percentage, { stiffness: 120, damping: 25 });
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useMotionValueEvent(springPercentage, 'change', (latest) => {
    setDisplayPercentage(Math.round(latest));
  });

  useEffect(() => {
    if (isInView) {
      percentage.set(78);
    }
  }, [isInView, percentage]);

  return (
    <div className="relative w-full h-full bg-[#F3F4F6] overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-[80%] h-[80%] flex items-center justify-center"
      >
        {/* Central Vertical Line */}
        <motion.div
          variants={lineVariants}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] bottom-[20%] w-0.5 bg-[#6366F1] left-1/2 -translate-x-1/2 origin-bottom"
        />

        {/* Top Badge */}
        <motion.div
          variants={badgeVariants}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 bg-[#6366F1] text-white px-4 py-2 rounded-lg shadow-lg shadow-indigo-500/30 flex items-center gap-2 z-20 whitespace-nowrap"
        >
          <div className="w-2 h-2 rounded-full border border-white"></div>
          <span className="text-sm font-bold">Launch {displayPercentage}%</span>
        </motion.div>

        {/* Floating Pills */}
        <motion.div
          variants={pillVariants}
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[35%] left-[55%] bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2"
        >
          <span className="text-xs font-medium text-gray-700">Strategy</span>
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-2 h-2 text-white" />
          </div>
        </motion.div>

        <motion.div
          variants={pillVariants}
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute top-[50%] left-[60%] bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2"
        >
          <span className="text-xs font-medium text-gray-700">Production Setup</span>
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-2 h-2 text-white" />
          </div>
        </motion.div>

        <motion.div
          variants={pillVariants}
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute top-[65%] left-[52%] bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2"
        >
          <span className="text-xs font-medium text-gray-700">Host Sourcing</span>
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-2 h-2 text-white" />
          </div>
        </motion.div>

        {/* Decorative Pills */}
        <motion.div
          variants={blurredPillVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-[40%] right-[55%] bg-white/50 backdrop-blur-sm border border-gray-100/50 px-3 py-1.5 rounded-full flex items-center gap-2"
        >
          <span className="text-xs font-medium text-gray-400">Format</span>
        </motion.div>

        <motion.div
          variants={blurredPillVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-[55%] right-[60%] bg-white/50 backdrop-blur-sm border border-gray-100/50 px-3 py-1.5 rounded-full flex items-center gap-2"
        >
          <span className="text-xs font-medium text-gray-400">Creative Direction</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

const RunScaleGraphic = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF] overflow-hidden flex items-center justify-center">
    <img src="/Frame .png" alt="Run & Scale Process" className="w-full h-full object-contain p-4" />
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-[#E6E8EB] py-24 relative z-0">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-[#0A0A0A] tracking-tight leading-[1.2]">
            Our Services
          </h2>
          <p className="text-[#4A4A4A] text-[20px] leading-[1.5] max-w-md lg:text-right">
            We do two things: launch video podcasts properly, and run them as long-term business assets.
          </p>
        </div>

        {/* Card 1: Launch */}
        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px] mb-8 group">
          {/* Illustration Side */}
          <div className="md:w-1/2 bg-[#F9FAFB] border-b md:border-b-0 md:border-r border-gray-100 min-h-[300px] md:min-h-full">
            <LaunchGraphic />
          </div>
          {/* Text Side */}
          <div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative">
            <h3 className="text-[40px] font-display font-bold text-[#0A0A0A] mb-4 leading-[1.5]">
              Launch
            </h3>
            <h4 className="text-[24px] font-medium text-[#0A0A0A] mb-6">
              Incubating and launching video podcasts built to lead conversations.
            </h4>
            <p className="text-gray-500 text-[20px] leading-[1.5] mb-10">
              We shape the idea, define the format, and build the foundations for launch,
              covering strategy, creative direction, host sourcing, and production setup
              so your podcast starts with clarity, confidence, and intent.
            </p>
            <div>
              <button className="bg-[#00D26A] hover:bg-[#00B85C] text-[#0A0A0A] px-8 py-3 rounded-full font-bold text-[15px] flex items-center gap-2 transition-all shadow-lg shadow-green-500/20 group-hover:scale-105">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Run & Scale */}
        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px] group">
          {/* Illustration Side */}
          <div className="md:w-1/2 bg-[#F0F9FF] border-b md:border-b-0 md:border-r border-gray-100 min-h-[300px] md:min-h-full">
            <RunScaleGraphic />
          </div>
          {/* Text Side */}
          <div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
            <h3 className="text-[40px] font-display font-bold text-[#0A0A0A] mb-4 leading-[1.5]">Run & Scale</h3>
            <h4 className="text-[24px] font-medium text-[#0A0A0A] mb-6">
              End-to-end management of podcasts as long-term business channels.
            </h4>
            <p className="text-gray-500 text-[20px] leading-[1.5] mb-10">
              Once a podcast is live, we manage the entire system around it – planning, production, distribution, and
              reporting – turning each episode into consistent, high-quality content that supports marketing, sales, and
              the wider organization.
            </p>
            <div>
              <button className="bg-[#00D26A] hover:bg-[#00B85C] text-[#0A0A0A] px-8 py-3 rounded-full font-bold text-[15px] flex items-center gap-2 transition-all shadow-lg shadow-green-500/20 group-hover:scale-105">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;