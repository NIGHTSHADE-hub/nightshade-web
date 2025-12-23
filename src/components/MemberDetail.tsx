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
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const membersData: Record<string, MemberData> = {
  'nitesh-badgujar': {
  name: "Nitesh Badgujar",
  role: "Founder & AIML Lead",
  codename: "THE_SHADEMASTER",
  description: "Driving NightShade’s vision. Building intelligent systems with AI, ML, and Generative models.",
  icon: <img src="src\assets\images\na.jpg" alt="Kaelen V." className="w-full h-full object-cover rounded-full" />,
  color: "border-arcane-500",
  fullBio: "Nitesh is an AIML and Generative AI enthusiast focused on building practical, future-ready systems. Starting as a curious learner exploring machine learning fundamentals, he quickly moved toward hands-on experimentation with AI models, system design, and product thinking. As the founder and lead of NightShade, Nitesh defines the technical direction of the team—bridging intelligence, automation, and dark-themed innovation. His philosophy: 'AI is not magic, but in the right hands, it feels like it.'",
  skills: [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Python",
    "Data Structures",
    "Model Building",
    "AI System Design"
  ],
  projects: [
    { 
      name: "NightShade Core", 
      description: "Foundation systems powering NightShade projects and experiments" 
    },
    { 
      name: "Echo Chamber", 
      description: "AI-powered conversational system with dark-tech personality" 
    },
    { 
      name: "Image Super-Resolution AI", 
      description: "Enhancing low-quality images using deep learning models (SRGAN / ESRGAN)" 
    }
  ],
  stats: [
    { label: "AI Models Built", value: "15+" },
    { label: "Projects Led", value: "10+" },
    { label: "Active Experiments", value: "Always" }
  ],
  location: "India",
  joined: "2024",
  email: "niteshbadgujar32@gmail.com",
  socials: {
    github: "https://github.com/NiteshBadgujar",
      twitter: "https://x.com/NiteshBadg15562",
      linkedin: "https://www.linkedin.com/in/nitesh-badgujar-8a5218329/"
  }
},

  'atharva-jangale': {
  name: "Atharva Jangale",
  role: "Moderator & Core Member",
  codename: "THE_CATALYST",
  description: "Driving momentum, aligning people with purpose, and turning ideas into execution.",
  icon: <Code2 className="w-10 h-10" />,
  color: "border-arcane-500",
  fullBio: "Atharva is a Computer Science engineering student with a strong passion for building meaningful tech and communities that actually ship. Known for bridging the gap between complex tech and real people, he plays a key role in shaping Night Shade’s culture, collaboration, and execution. From hackathons and workshops to AI-powered projects and modern web stacks, Atharva thrives at the intersection of leadership, learning, and action. His approach is simple: learn fast, build smarter, and help others level up along the way.",
  skills: [
    "Community Leadership",
    "Web Development",
    "Next.js",
    "React",
    "Firebase",
    "AI Tooling",
    "Git & GitHub",
    "Cloud Fundamentals",
    "System Thinking"
  ],
  projects: [
    { name: "Night Shade Community", description: "Building a focused, high-signal tech community driven by learning and execution" },
    { name: "AI Resume Generator", description: "Hackathon project focused on AI-driven personalization and usability" },
    { name: "TripTuner", description: "AI-powered personalized travel itinerary generator" }
  ],
  stats: [
    { label: "Events Organized", value: "10+" },
    { label: "Projects Led", value: "8+" },
    { label: "Community Members Impacted", value: "200+" }
  ],
  location: "India",
  joined: "2024",
  email: "atharvajangale778@gmail.com",
  socials: {
    github: "https://github.com/atharvajangale",
    twitter: "https://twitter.com/atharvajangale",
    linkedin: "https://linkedin.com/in/atharvajangale"
  }
},
  'om-satote': {
  name: "Om Satote",
  role: "Full Stack Web Developer",
  codename: "DEVILLUCIFER",
  description: "Building intelligent, scalable web solutions powered by modern tech and AI.",
  icon: <img src="src\assets\images\na.jpg" alt="Kaelen V." className="w-full h-full object-cover rounded-full" />,
  color: "border-indigo-500",

  fullBio: "Om Satote is a full stack web developer with a strong interest in building modern web applications, AI-powered systems, and innovative tech solutions. With hands-on experience across frontend technologies and exposure to backend, AI, and hardware-integrated projects, Om focuses on creating impactful, real-world applications. Driven by curiosity and continuous learning, Om blends creativity with technical skill to turn ideas into functional digital products.",

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GitHub",
    "Python",
    "Java",
    "C / C++",
    "Full Stack Web Development"
  ],

  projects: [
    {
      name: "Kisan Scheme App",
      description: "A web platform designed to help farmers easily access and understand government schemes."
    },
    {
      name: "AI-Powered Resume Builder with ATS System",
      description: "An intelligent resume builder that creates ATS-friendly resumes using AI-based analysis."
    },
    {
      name: "SonicLink Music App",
      description: "A responsive music streaming application with playlist management and modern UI."
    },
    {
      name: "Cabin Automation System",
      description: "An automation project enabling smart control of cabin appliances using hardware and sensors."
    },
    {
      name: "Human Following Robot",
      description: "A robotics system capable of detecting and following humans using sensors and vision logic."
    },
    {
      name: "AI Script Writer Chatbot",
      description: "An AI chatbot that generates scripts and creative content based on user input."
    },
    {
      name: "Object Detection System",
      description: "A computer vision application that detects and classifies objects in images and live video."
    }
  ],

  stats: [
    { label: "Major Projects", value: "7+" },
    { label: "Core Focus", value: "Full Stack & AI" },
    { label: "Tech Domains", value: "Web, AI, Robotics" }
  ],

  location: "Nashik",
  joined: "2025",
  email: "omsatote142005@gmail.com",

  socials: {
    github: "https://github.com/omsatote",
    linkedin: "https://www.linkedin.com/in/om-satote-a7aa6a325/"
  }
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
    email: "signal@nightshade.dev",
    socials: {
      github: "https://github.com/signalmaster",
      twitter: "https://twitter.com/signalmaster",
      linkedin: "https://linkedin.com/in/signalmaster"
    }
  },
 'atharva-k': {
    name: "Atharva Kale",
    role: "Flutter & Android Developer",
    codename: "CODE_REACTIVE",
    description: "Building seamless cross-platform interfaces with integrated machine learning capabilities.",
    icon: <img src="src\assets\images\na.jpg" alt="Kiran M." className="w-full h-full object-cover rounded-full" />,
    color: "border-sky-400",
    fullBio: "Atharva is a developer focused on the Flutter ecosystem and native Android integration. He specializes in creating responsive user interfaces that don't just look good, but perform complex tasks like on-device image processing and real-time data syncing. By combining Dart with his background in Computer Vision, he builds mobile apps that are intelligent, fast, and scalable.",
    skills: ["Flutter", "Dart", "Android Studio", "Firebase", "SQLite", "TFLite", "Git/GitHub", "Provider/Riverpod"],
    projects: [
      { name: "SmileScan App", description: "Mobile diagnostic tool built with Flutter and TensorFlow Lite for automated dental analysis." },
      { name: "Biometric Portal", description: "Secure Android implementation of face-recognition auth using custom Flutter MethodChannels." },
      { name: "HCI Mobile Suite", description: "Experimenting with MediaPipe integration in Flutter for gesture-based app navigation." }
    ],
    stats: [
      { label: "Builds Shipped", value: "15+" },
      { label: "Crash-Free Rate", value: "99%" },
      { label: "Avg. Frame Rate", value: "60fps" }
    ],
    location: "Pune, India",
    joined: "2024",
    email: "atharvakale31@gmail.com",
    socials: {
      github: "https://github.com/Atharvakale11",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/atharva-kale-411980374"
    }
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
          {member.socials.github && (
            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MemberDetail;
