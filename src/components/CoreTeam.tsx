import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Cpu, Code2, ShieldCheck, Radio, User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  codename: string;
  description: string;
  icon: React.ReactNode;
  color: string; // Tailwind color class for borders/shadows
}

const members: TeamMember[] = [
  {
    name: "Kaelen V.",
    role: "Lead Architect",
    codename: "THE_ARCHITECT",
    description: "Orchestrating the master plan. Focusing on scalable infrastructure and system coherence.",
    icon: <Code2 className="w-6 h-6" />,
    color: "border-arcane-500"
  },
  {
    name: "Lyra N.",
    role: "AI Research Head",
    codename: "NEURAL_WEAVER",
    description: "Training the synthetic minds. Specialist in LLMs, agents, and emergent behavior.",
    icon: <Cpu className="w-6 h-6" />,
    color: "border-neon-violet"
  },
  {
    name: "Marcus D.",
    role: "Security Ops",
    codename: "VOID_WALKER",
    description: "Ensuring zero-trust architecture. If you can see him, it's already too late.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "border-emerald-500"
  },
  {
    name: "Elara X.",
    role: "Hardware Interface",
    codename: "SIGNAL_MASTER",
    description: "Bridging the gap between digital code and physical reality. Robotics and IoT.",
    icon: <Radio className="w-6 h-6" />,
    color: "border-orange-500"
  }
];

const CoreTeam: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#060609] relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,30,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,30,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-widest">THE COUNCIL</h2>
          <div className="h-1 w-20 bg-arcane-500/50 mx-auto rounded-full blur-[1px]"></div>
          <p className="text-gray-400 font-mono text-xs mt-4 uppercase tracking-[0.2em]">
            // The Architects of the Void
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative bg-night-800/40 backdrop-blur-sm border border-white/5 p-6 overflow-hidden hover:bg-night-800/60 transition-all duration-300`}
            >
              {/* Top accent line based on role color */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-50 group-hover:opacity-100 transition-opacity ${member.color.replace('border-', 'text-')}`}></div>

              {/* Avatar / Icon Container */}
              <div className="relative mb-6 flex justify-center">
                  <div className={`w-20 h-20 rounded-full border-2 ${member.color} bg-night-900 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-shadow`}>
                      <div className="text-gray-300 group-hover:text-white transition-colors">
                          {member.icon}
                      </div>
                  </div>
                  {/* Glitch decoration */}
                  <div className="absolute top-0 right-1/4 w-2 h-2 bg-white/10 rounded-full"></div>
              </div>

              <div className="text-center space-y-2 relative z-10">
                  <h3 className="font-display text-white text-lg tracking-wide group-hover:text-arcane-300 transition-colors">
                      {member.name}
                  </h3>
                  <div className="inline-block px-2 py-1 bg-white/5 rounded text-[9px] font-mono uppercase tracking-widest text-gray-400 border border-white/5 mb-2">
                      {member.codename}
                  </div>
                  <p className="text-arcane-500 text-xs font-bold uppercase tracking-wider">
                      {member.role}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-4 border-t border-white/5 pt-4">
                      {member.description}
                  </p>
              </div>

              {/* Social/Connect Links - simulated */}
              <div className="flex justify-center gap-4 mt-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="hover:text-white transition-colors"><Github size={14} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
              </div>

              {/* Corner decorative elements */}
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-arcane-500/50 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-arcane-500/50 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;