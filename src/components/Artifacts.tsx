import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertTriangle, CheckCircle, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Artifact } from '../types';

const artifacts: Artifact[] = [
  {
    id: '1',
    title: 'Echo_Chamber',
    category: 'Living Demo',
    status: 'Deployed',
    description: 'An AI chatbot trained specifically on NightShade ideology and manifesto texts. It does not answer; it preaches.'
  },
  {
    id: '2',
    title: 'Project: Chimera',
    category: 'System',
    status: 'In Development',
    description: 'A multi-agent autonomous trading swarm designed to predict market anomalies using sentiment analysis from dark web forums.'
  },
  {
    id: '3',
    title: 'Vision_Zero',
    category: 'Research',
    status: 'Failed Experiment',
    description: 'Attempted image super-resolution using recursive fractals. Resulted in data corruption. Valuable lessons in entropy gained.'
  }
];

const Artifacts: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-night-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="font-display text-4xl text-white mb-2 tracking-widest">ARTIFACTS</h2>
                <p className="text-gray-400 font-body">Case logs of our engineering conquests.</p>
            </div>
            <div className="text-right">
                <span className="text-xs uppercase tracking-widest text-arcane-500 animate-pulse">System Status: Online</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artifacts.map((artifact, idx) => (
                <motion.div 
                    key={artifact.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-black/40 border border-white/10 p-6 relative hover:bg-white/5 transition-colors group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] uppercase tracking-widest px-2 py-1 border ${
                            artifact.category === 'Living Demo' ? 'border-neon-cyan text-neon-cyan' : 
                            artifact.category === 'Research' ? 'border-neon-violet text-neon-violet' : 'border-gray-500 text-gray-400'
                        }`}>
                            {artifact.category}
                        </span>
                        {artifact.status === 'Deployed' && <CheckCircle className="w-4 h-4 text-green-500" />}
                        {artifact.status === 'In Development' && <Beaker className="w-4 h-4 text-yellow-500" />}
                        {artifact.status === 'Failed Experiment' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                    </div>

                    <h3 className="font-display text-xl text-white mb-2 group-hover:text-arcane-300 transition-colors">{artifact.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{artifact.description}</p>

                    {artifact.id === '1' ? (
                        <Link to="/echo-chamber" className="flex items-center gap-2 text-xs text-arcane-400 font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer">
                            Enter the Chamber <ExternalLink className="w-3 h-3" />
                        </Link>
                    ) : (
                        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
                            Access Log <ExternalLink className="w-3 h-3" />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Artifacts;
