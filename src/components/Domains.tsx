import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Terminal, CircuitBoard, Network, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Path } from "../types";

const paths: Path[] = [
	{
		id: "ai-alchemist",
		title: "AI Alchemist",
		icon: <FlaskConical className="w-8 h-8 text-neon-violet" />,
		description:
			"Forging synthetic minds. You train models, fine-tune LLMs, and experiment with the unknown.",
		skills: ["PyTorch", "LLMs", "RAG", "Agents"],
	},
	{
		id: "frontend-architect",
		title: "Frontend Architect",
		icon: <Terminal className="w-8 h-8 text-cyan-400" />,
		description:
			"Constructing the visual interface of the Order. You build high-performance portals.",
		skills: ["React", "WebGL", "Three.js", "UI/UX"],
	},
	{
		id: "devops-warden",
		title: "DevOps Warden",
		icon: <Network className="w-8 h-8 text-emerald-400" />,
		description: "Keeper of the infrastructure. You ensure our systems never fall to the void.",
		skills: ["Docker", "K8s", "AWS", "CI/CD"],
	},
	{
		id: "robotics-engineer",
		title: "Robotics Engineer",
		icon: <CircuitBoard className="w-8 h-8 text-orange-400" />,
		description: "Bridging the digital and physical. You give the machine spirit a body.",
		skills: ["ROS", "Embedded", "C++", "Sensors"],
	},
	{
		id: "mobile-sorcerer",
		title: "Mobile Sorcerer",
		icon: <Smartphone className="w-8 h-8 text-blue-400" />,
		description: "Wielding Flutter and Android to conjure apps that live in pockets worldwide.",
		skills: ["Flutter", "Dart", "Android", "Kotlin"],
	},
];

const Paths: React.FC = () => {
	return (
		<section className="py-24 px-6 bg-[#08080c] relative">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-widest">
						CHOOSE YOUR PATH
					</h2>
					<p className="text-gray-400 font-body max-w-2xl mx-auto">
						The Order is divided into specialized disciplines. To Initiate, you must
						walk one of these paths.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{paths.map((path, index) => (
						<Link to={`/path/${path.id}`} key={path.id}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5 }}
								className="group relative p-6 bg-night-800/40 border border-white/10 hover:border-arcane-500/50 transition-all duration-300 cursor-pointer h-full"
							>
								<div className="mb-6 bg-night-900/50 w-14 h-14 flex items-center justify-center border border-white/5 group-hover:border-arcane-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
									{path.icon}
								</div>

								<h3 className="font-display text-lg text-white mb-3 tracking-wide">
									{path.title}
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[80px]">
									{path.description}
								</p>

								<div className="border-t border-white/5 pt-4">
									<div className="flex flex-wrap gap-2">
										{path.skills.map((skill) => (
											<span
												key={skill}
												className="text-[10px] uppercase tracking-wider text-arcane-300 bg-arcane-900/30 px-2 py-1 rounded"
											>
												{skill}
											</span>
										))}
									</div>
								</div>

								{/* Hover indicator */}
								<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
									<span className="text-arcane-400 text-xs font-mono uppercase tracking-wider">
										Explore →
									</span>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Paths;
