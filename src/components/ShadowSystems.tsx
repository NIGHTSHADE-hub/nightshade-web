import React from 'react';
import { Lock, Database, Code } from 'lucide-react';

const ShadowSystems: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#030305] border-y border-arcane-900/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-8">
                <h2 className="font-display text-3xl text-white tracking-widest flex items-center gap-3">
                    <Lock className="w-6 h-6 text-arcane-500" />
                    SHADOW SYSTEMS
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Members of the Order gain access to our internal infrastructure. These tools are hidden from the public web.
                </p>
                
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg white/5 rounded-md text-neon-cyan"><Terminal size={16} /></div>
                        <div>
                            <h4 className="text-white font-display text-sm tracking-wide">Shadow Console</h4>
                            <p className="text-gray-500 text-sm">Real-time project status, server health, and AI experiment logs.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-white/5 rounded-md text-neon-violet"><Database size={16} /></div>
                        <div>
                            <h4 className="text-white font-display text-sm tracking-wide">The Grimoire</h4>
                            <p className="text-gray-500 text-sm">Our private knowledge base. Whitepapers, architectural patterns, and forbidden code snippets.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-white/5 rounded-md text-orange-400"><Code size={16} /></div>
                        <div>
                            <h4 className="text-white font-display text-sm tracking-wide">Summoning Board</h4>
                            <p className="text-gray-500 text-sm">Where new ideas are proposed and voted upon by the Entities.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-arcane-500/10 blur-3xl rounded-full"></div>
                <div className="relative bg-night-900 border border-white/10 p-1 rounded-lg shadow-2xl overflow-hidden group">
                    <div className="bg-[#0f0f15] p-2 flex items-center gap-2 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <div className="ml-2 text-[10px] text-gray-500 font-mono">user@nightshade:~/shadow_console</div>
                    </div>
                    <div className="p-6 font-mono text-xs md:text-sm text-green-400/80 leading-relaxed min-h-[250px] relative">
                        <p className="mb-2">&gt; CONNECTING TO SECURE GATEWAY...</p>
                        <p className="mb-2">&gt; IDENTITY VERIFIED.</p>
                        <p className="mb-2 text-white">&gt; WELCOME, INITIATE.</p>
                        <br/>
                        <div className="grid grid-cols-2 gap-4 text-gray-500">
                            <div className="border border-white/5 p-2 bg-black/40">
                                <span className="block text-[10px] uppercase">Active Nodes</span>
                                <span className="text-xl text-white">42</span>
                            </div>
                            <div className="border border-white/5 p-2 bg-black/40">
                                <span className="block text-[10px] uppercase">Network Load</span>
                                <span className="text-xl text-white">89%</span>
                            </div>
                        </div>
                        
                        {/* Overlay implying lock */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center">
                            <Lock className="w-8 h-8 text-gray-400 mb-2" />
                            <span className="text-white font-display tracking-widest text-sm">ACCESS RESTRICTED</span>
                            <span className="text-xs text-gray-500">Initiation Required</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

// Quick fix for the missing icon import in this specific file content
const Terminal = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);

export default ShadowSystems;
