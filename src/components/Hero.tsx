import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Scroll } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToManifesto = () => {
    const section = document.getElementById('manifesto');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInitiation = () => {
    const section = document.getElementById('initiation');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-arcane-900 rounded-full blur-[120px] opacity-20 -z-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-5xl"
      >
        <motion.h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 animate-glow drop-shadow-2xl"
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.1em", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          NIGHTSHADE
        </motion.h1>

        <motion.h2 
          className="font-body text-lg md:text-xl mt-8 text-arcane-300 font-light tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          We don't chase trends. We build systems.
        </motion.h2>

        <motion.p 
          className="font-body text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed italic opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          "NightShade is not a community, not a startup, not a club. It is a long-term system for building intelligent artifacts."
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <button 
            onClick={scrollToInitiation}
            className="group relative px-8 py-3 bg-transparent border border-arcane-500 text-arcane-300 font-display font-bold tracking-wider hover:bg-arcane-500/10 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 w-0 bg-arcane-500 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Begin Initiation
            </span>
          </button>

          <button 
            onClick={scrollToManifesto}
            className="group px-8 py-3 bg-night-800 text-white border border-white/10 font-display font-bold tracking-wider hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="flex items-center gap-2">
                <Scroll className="w-4 h-4" /> Read the Manifesto
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 z-10 cursor-pointer text-gray-500 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToManifesto}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
