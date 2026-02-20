import React, { useState } from 'react';
import { generateSongConcept } from '../services/geminiService';
import { SongConcept } from '../types';
import { Sparkles, Loader2, Music4, Copy } from 'lucide-react';

const DemoSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SongConcept | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResult(null);
    try {
      const data = await generateSongConcept(prompt);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="demo" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Input Side */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3 mr-2" />
              Live Demo
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              DESCRIBE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">
                PERFECT TRACK
              </span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Type a mood, genre, or scenario. Earworm's Gemini-powered engine will construct the DNA of your next hit song instantly.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. A lo-fi hip hop track about studying in the rain, with a nostalgic piano melody..."
                  className="w-full bg-gray-900/50 border border-white/10 rounded-xl p-6 text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all h-40 resize-none font-sans text-lg"
                />
              </div>
              <button 
                onClick={handleGenerate}
                disabled={isLoading || !prompt}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                  isLoading 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-brand-lime hover:scale-[1.02]'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" /> Generate Concept
                  </>
                )}
              </button>
            </div>
            
            <div className="mt-8 flex gap-4 text-sm text-gray-500">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Pop</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Trap</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Indie Rock</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Ambient</span>
            </div>
          </div>

          {/* Result Side */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-brand-lime to-brand-purple opacity-20 blur-2xl rounded-3xl"></div>
             
             <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden min-h-[500px] flex flex-col">
               {/* Header */}
               <div className="h-12 bg-gray-900/50 border-b border-white/5 flex items-center px-4 gap-2">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                 </div>
                 <div className="mx-auto text-xs text-gray-500 font-mono">Earworm_Output_v2.json</div>
               </div>

               {/* Content */}
               <div className="p-8 flex-1 overflow-y-auto">
                 {!result ? (
                   <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                     <Music4 className="w-16 h-16 opacity-20" />
                     <p>Ready to synthesize...</p>
                   </div>
                 ) : (
                   <div className="space-y-8 animate-fade-in">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                           <h3 className="text-3xl font-display font-bold text-white">{result.title}</h3>
                           <span className="px-2 py-1 rounded bg-brand-purple/20 text-brand-purple text-xs font-bold uppercase">{result.genre}</span>
                        </div>
                        <p className="text-gray-400 italic">{result.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Mood</div>
                          <div className="text-white font-medium">{result.mood}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Tempo</div>
                          <div className="text-white font-medium">{result.tempo}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-brand-lime uppercase tracking-wider mb-3 font-bold">Generated Lyrics</div>
                        <div className="space-y-2 font-mono text-sm">
                          {result.lyrics.map((line, i) => (
                            <p key={i} className="text-gray-300 border-l-2 border-white/10 pl-4 py-1 hover:border-brand-lime hover:bg-white/5 transition-colors cursor-default">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                         <div className="text-xs text-brand-accent uppercase tracking-wider mb-3 font-bold">Suggested Chords</div>
                         <div className="flex flex-wrap gap-2">
                           {result.chords.map((chord, i) => (
                             <span key={i} className="px-3 py-2 rounded bg-brand-gray border border-white/10 text-white font-bold font-mono text-lg shadow-lg">
                               {chord}
                             </span>
                           ))}
                         </div>
                      </div>
                   </div>
                 )}
               </div>
               
               {/* Footer */}
               {result && (
                 <div className="p-4 bg-gray-900/80 border-t border-white/10 flex justify-between items-center">
                   <div className="text-xs text-gray-500">AI Model: Gemini 3 Flash</div>
                   <button className="text-xs text-white hover:text-brand-lime flex items-center gap-1 transition-colors">
                     <Copy className="w-3 h-3" /> Copy Project
                   </button>
                 </div>
               )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DemoSection;
