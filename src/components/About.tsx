import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-24 md:py-32 bg-night-900 border-t border-white/5 overflow-hidden">
      {/* Background Sigil Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-arcane-500/10 rounded-full opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] border-[1px] border-arcane-500/10 rotate-45 pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-12 relative inline-block">
            <span className="relative z-10 tracking-widest">THE MANIFESTO</span>
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-arcane-500 to-transparent"></div>
          </h2>

          <div className="bg-night-800/80 backdrop-blur-md p-8 md:p-12 border border white/5 rounded-none relative">
             {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-arcane-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-arcane-500"></div>
            
            <p className="font-body text-gray-300 text-lg md:text-2xl leading-relaxed mb-8 font-light">
              We operate in the unseen. While others hype, we build. <br/>
              We don't seek validation. We seek <span className="text-arcane-300 font-semibold">mastery</span>.
            </p>
            
            <div className="h-px w-24 bg-arcane-500/30 mx-auto my-8"></div>

            <p className="font-display text-xl md:text-3xl text-white uppercase tracking-wider leading-tight">
              "NightShade is a system for shaping future engineers through real work."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
