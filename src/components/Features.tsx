import React from 'react';
import { Mic2, Layers, Zap, Globe, Cpu, Radio } from 'lucide-react';
import type { Feature } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Instant Lyrics',
    description: 'Break writer\'s block forever. Generate verse, chorus, and bridge structures instantly.',
    icon: <Mic2 className="w-6 h-6 text-brand-lime" />
  },
  {
    id: '2',
    title: 'Multi-Track Layering',
    description: 'Visualize complex arrangements. AI suggests instrument pairings that fit your vibe.',
    icon: <Layers className="w-6 h-6 text-brand-purple" />
  },
  {
    id: '3',
    title: 'Lightning Fast',
    description: 'Powered by Gemini Flash, experience zero-latency creative feedback loops.',
    icon: <Zap className="w-6 h-6 text-brand-accent" />
  },
  {
    id: '4',
    title: 'Global Genres',
    description: 'From K-Pop to Afrobeat, our model is trained on the world\'s diverse musical landscape.',
    icon: <Globe className="w-6 h-6 text-pink-500" />
  },
  {
    id: '5',
    title: 'Smart Chord Progressions',
    description: 'Get harmonic suggestions that perfectly match your melody\'s emotional arc.',
    icon: <Radio className="w-6 h-6 text-orange-400" />
  },
  {
    id: '6',
    title: 'Neural Audio Engine',
    description: 'High-fidelity audio concepts that sound like a finished master, not a MIDI toy.',
    icon: <Cpu className="w-6 h-6 text-blue-500" />
  }
];

const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-brand-black relative">
       {/* Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            BUILT FOR <span className="text-brand-lime">PRODUCERS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Earworm isn't just a toy. It's a professional suite of generative tools designed to augment human creativity, not replace it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
