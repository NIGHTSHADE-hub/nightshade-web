import React from 'react';
import { Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: '#', icon: <Github size={20} /> },
  { platform: 'Twitter', url: '#', icon: <Twitter size={20} /> },
  { platform: 'LinkedIn', url: '#', icon: <Linkedin size={20} /> },
  { platform: 'Discord', url: '#', icon: <MessageCircle size={20} /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-night-900 py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl text-white tracking-widest">NIGHTSHADE</h2>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Nightshade | Built in the Shadows</p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              className="text-gray-500 hover:text-arcane-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 p-2 rounded-full hover:bg-white/5"
              aria-label={link.platform}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
