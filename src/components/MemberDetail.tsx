import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ArrowLeft, Cpu, Code2, ShieldCheck, Radio, Mail, MapPin, Calendar } from 'lucide-react';

interface MemberData {
  name: string;
  role: string;
  codename: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  fullBio: string;
  skills: string[];
  projects: { name: string; description: string }[];
  stats: { label: string; value: string }[];
  location: string;
  joined: string;
  email: string;
}

const membersData: Record<string, MemberData> = {
  'kaelen-v': {
    name: "Kaelen V.",
    role: "Lead Architect",
    codename: "THE_ARCHITECT",
    description: "Orchestrating the master plan. Focusing on scalable infrastructure and system coherence.",
    icon: <Code2 className="w-10 h-10" />,
    color: "border-arcane-500",
    fullBio: "Kaelen has been building distributed systems for over a decade. Starting from humble beginnings in open-source communities, they rose through the ranks of various tech giants before deciding to forge their own path. Now, as the Lead Architect of Nightshade, Kaelen orchestrates the intricate dance of microservices, APIs, and infrastructure that powers our operations. Their philosophy: 'Code is poetry, but architecture is the universe it inhabits.'",
    skills: ["System Design", "Distributed Systems", "Kubernetes", "Rust", "Go", "Cloud Architecture", "API Design"],
    projects: [
      { name: "Project Nexus", description: "Core infrastructure backbone handling 10M+ requests/day" },
      { name: "Void Engine", description: "Custom orchestration layer for AI workloads" },
      { name: "Shadow Protocol", description: "Encrypted communication framework for internal systems" }
    ],
    stats: [
      { label: "Systems Built", value: "47" },
      { label: "Uptime Record", value: "99.99%" },
      { label: "Code Reviews", value: "2,340" }
    ],
    location: "Distributed",
    joined: "2021",
    email: "architect@nightshade.dev"
  },
  'lyra-n': {
    name: "Lyra N.",
    role: "AI Research Head",
    codename: "NEURAL_WEAVER",
    description: "Training the synthetic minds. Specialist in LLMs, agents, and emergent behavior.",
    icon: <Cpu className="w-10 h-10" />,
    color: "border-neon-violet",
    fullBio: "Lyra's fascination with artificial intelligence began when they first encountered neural networks in graduate school. Since then, they've published numerous papers on emergent behavior in multi-agent systems and pioneered new approaches to training large language models. At Nightshade, Lyra leads our AI research division, pushing the boundaries of what synthetic minds can achieve. Their mantra: 'Intelligence is not created, it is cultivated.'",
    skills: ["Machine Learning", "PyTorch", "Transformers", "Reinforcement Learning", "Multi-Agent Systems", "Python", "CUDA"],
    projects: [
      { name: "Synthetic Oracle", description: "Proprietary LLM fine-tuned for specialized domains" },
      { name: "Agent Swarm", description: "Multi-agent coordination framework for complex tasks" },
      { name: "Neural Forge", description: "Custom training infrastructure for large-scale models" }
    ],
    stats: [
      { label: "Models Trained", value: "156" },
      { label: "Papers Published", value: "23" },
      { label: "GPU Hours", value: "1.2M" }
    ],
    location: "The Cloud",
    joined: "2022",
    email: "neural@nightshade.dev"
  },
  'marcus-d': {
    name: "Marcus D.",
    role: "Security Ops",
    codename: "VOID_WALKER",
    description: "Ensuring zero-trust architecture. If you can see him, it's already too late.",
    icon: <ShieldCheck className="w-10 h-10" />,
    color: "border-emerald-500",
    fullBio: "Marcus spent years in the shadows of cybersecurity, working with government agencies and private security firms before joining Nightshade. Their expertise in offensive security gives them a unique perspective on defense—they think like an attacker to build impenetrable systems. Marcus has a simple philosophy: 'Trust nothing, verify everything, and always have an exit strategy.'",
    skills: ["Penetration Testing", "Zero Trust Architecture", "Cryptography", "Incident Response", "Threat Modeling", "Rust", "Assembly"],
    projects: [
      { name: "Fortress Protocol", description: "Zero-trust security framework for all internal systems" },
      { name: "Shadow Scanner", description: "Automated vulnerability detection and patching system" },
      { name: "Phantom Auth", description: "Multi-layer authentication system with biometric support" }
    ],
    stats: [
      { label: "Vulns Patched", value: "892" },
      { label: "Attacks Blocked", value: "∞" },
      { label: "Security Audits", value: "67" }
    ],
    location: "Unknown",
    joined: "2021",
    email: "void@nightshade.dev"
  },
  'elara-x': {
    name: "Elara X.",
    role: "Hardware Interface",
    codename: "SIGNAL_MASTER",
    description: "Bridging the gap between digital code and physical reality. Robotics and IoT.",
    icon: <Radio className="w-10 h-10" />,
    color: "border-orange-500",
    fullBio: "Elara is where the digital meets the physical. With a background in electrical engineering and embedded systems, they've designed everything from custom PCBs to full robotic systems. At Nightshade, Elara leads our hardware initiatives, creating the physical manifestations of our digital dreams. Their belief: 'Software is the soul, but hardware is the body that lets it interact with the world.'",
    skills: ["Embedded Systems", "PCB Design", "Robotics", "IoT", "C/C++", "FPGA", "Signal Processing"],
    projects: [
      { name: "Sentinel Array", description: "Distributed sensor network for environmental monitoring" },
      { name: "Automaton Core", description: "Modular robotics platform for rapid prototyping" },
      { name: "Signal Bridge", description: "Universal IoT gateway with edge computing capabilities" }
    ],
    stats: [
      { label: "Devices Built", value: "234" },
      { label: "PCBs Designed", value: "89" },
      { label: "Robots Active", value: "12" }
    ],
    location: "The Workshop",
    joined: "2022",
    email: "signal@nightshade.dev"
  }
};

const MemberDetail: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const member = memberId ? membersData[memberId] : null;

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Member Not Found</h1>
          <Link to="/" className="text-arcane-500 hover:text-arcane-400">
            Return to Base
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060609] relative overflow-hidden py-12 px-6">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,30,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,30,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm"
          >
            <ArrowLeft size={16} />
            <span>// RETURN_TO_BASE</span>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          {/* Avatar */}
          <div className={`w-32 h-32 rounded-full border-2 ${member.color} bg-night-900 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] shrink-0 mx-auto md:mx-0`}>
            <div className="text-white">
              {member.icon}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-white/5 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/10 mb-3">
              {member.codename}
            </div>
            <h1 className="font-display text-4xl text-white mb-2 tracking-wide">{member.name}</h1>
            <p className="text-arcane-500 font-bold uppercase tracking-wider mb-4">{member.role}</p>
            
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-mono justify-center md:justify-start">
              <span className="flex items-center gap-1"><MapPin size={12} /> {member.location}</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> Joined {member.joined}</span>
              <span className="flex items-center gap-1"><Mail size={12} /> {member.email}</span>
            </div>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-night-800/40 backdrop-blur-sm border border-white/5 p-6 mb-8"
        >
          <h2 className="font-display text-lg text-white mb-4 tracking-wider">// DOSSIER</h2>
          <p className="text-gray-400 leading-relaxed">{member.fullBio}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {member.stats.map((stat, index) => (
            <div key={index} className="bg-night-800/40 backdrop-blur-sm border border-white/5 p-4 text-center">
              <div className="text-2xl font-display text-arcane-400 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-night-800/40 backdrop-blur-sm border border-white/5 p-6 mb-8"
        >
          <h2 className="font-display text-lg text-white mb-4 tracking-wider">// SKILL_MATRIX</h2>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-arcane-500/10 border border-arcane-500/30 text-arcane-300 text-xs font-mono rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-night-800/40 backdrop-blur-sm border border-white/5 p-6 mb-8"
        >
          <h2 className="font-display text-lg text-white mb-4 tracking-wider">// ACTIVE_PROJECTS</h2>
          <div className="space-y-4">
            {member.projects.map((project, index) => (
              <div key={index} className="border-l-2 border-arcane-500/50 pl-4">
                <h3 className="text-white font-mono text-sm mb-1">{project.name}</h3>
                <p className="text-gray-500 text-xs">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
        </motion.div>
      </div>
    </div>
  );
};

export default MemberDetail;
