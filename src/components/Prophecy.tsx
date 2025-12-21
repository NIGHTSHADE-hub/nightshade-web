import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { ProphecyItem } from '../types';

const timeline: ProphecyItem[] = [
  {
    era: 'Q4 2024',
    title: 'The Awakening',
    description: 'The idea of NightShade was conceived. Core members united under a single vision. Dark-tech identity, manifesto, and long-term direction defined.',
    status: 'Fulfilled'
  },
  {
    era: 'Q1 2025',
    title: 'First Manifestation',
    description: 'NightShade takes form as a focused tech team. Website groundwork initiated. Early experiments in AI, frontend systems, DevOps, and robotics begin.',
    status: 'In Progress'
  },
  {
    era: 'Q3 2025',
    title: 'The Shadow Forge',
    description: 'Internal systems designed. Project-based collaboration becomes the core workflow. Selective recruitment of Initiates through skills, not hype.',
    status: 'Prophesied'
  },
  {
    era: '2026',
    title: 'Ascension Phase',
    description: 'Public release of first major intelligent artifacts. AI-driven systems move from experiments to usable products. NightShade establishes itself as a serious dark-tech collective.',
    status: 'Prophesied'
  },
  {
    era: 'Beyond',
    title: 'The Unknown',
    description: 'Autonomous systems. Decentralized collaboration. Projects that operate beyond a single team or location.',
    status: 'Prophesied'
  }
];

const Prophecy: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-night-900 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arcane-900/10 via-night-900 to-night-900 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-widest mb-4">
            PROPHECY TIMELINE
          </h2>
          <p className="text-arcane-300 font-mono text-sm tracking-[0.2em] uppercase opacity-80">
            The path from origin to ascension
          </p>
        </motion.div>
        
        <div className="relative mb-24">
            {/* Center Line - Glowing Beam */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-arcane-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

            <div className="space-y-12 md:space-y-24">
                {timeline.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <p className="text-gray-500 font-mono text-xs md:text-sm tracking-widest italic opacity-60 hover:opacity-100 transition-opacity duration-500">
                “The prophecy is not fixed. It evolves with every system we build.”
            </p>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: ProphecyItem, index: number }) => {
    const isLeft = index % 2 === 0;
    
    return (
        <motion.div 
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isLeft ? '' : 'md:flex-row-reverse'}`}
        >
            
            {/* Text Side (Card) */}
            <div className={`w-full md:w-[45%] ${isLeft ? 'md:text-right' : 'md:text-left'} relative group`}>
                <div className={`
                    relative p-6 bg-night-800/60 backdrop-blur-sm border border-white/5 rounded-sm transition-all duration-300
                    hover:border-arcane-500/40 hover:bg-night-800/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                    group-hover:translate-y-[-2px]
                `}>
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-arcane-400 transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-arcane-400 transition-colors"></div>

                    <div className={`flex flex-col ${isLeft ? 'md:items-end items-center text-center' : 'md:items-start items-center text-center'}`}>
                        <div className="flex items-center gap-2 mb-2 text-arcane-400 font-mono text-xs tracking-widest uppercase">
                            <span>{item.era}</span>
                            {item.status === 'Fulfilled' && <CheckCircle2 size={12} className="text-green-400" />}
                            {item.status === 'In Progress' && <Clock size={12} className="text-yellow-400 animate-pulse" />}
                            {item.status === 'Prophesied' && <Sparkles size={12} className="text-purple-400" />}
                        </div>
                        
                        <h3 className="text-white font-display text-xl md:text-2xl mb-3 group-hover:text-arcane-200 transition-colors">
                            {item.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Center Node */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
                {/* Connector Line (Horizontal) - Hidden on mobile, visible on MD */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-px bg-arcane-500/50 hidden md:block ${isLeft ? 'right-full mr-4' : 'left-full ml-4'}`}></div>

                {/* Node Icon */}
                <div className={`
                    w-4 h-4 rotate-45 border-2 transition-all duration-500
                    ${item.status === 'Fulfilled' ? 'bg-arcane-500 border-arcane-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]' : 
                      item.status === 'In Progress' ? 'bg-night-900 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]' : 
                      'bg-night-900 border-gray-600'}
                `}></div>
                
                {/* Ping animation for active */}
                {item.status === 'In Progress' && (
                    <div className="absolute inset-0 border border-yellow-400/50 rounded-full animate-ping opacity-40"></div>
                )}
            </div>

            {/* Empty Side for balance */}
            <div className="w-full md:w-[45%] hidden md:block"></div>
        </motion.div>
    );
}

export default Prophecy;
