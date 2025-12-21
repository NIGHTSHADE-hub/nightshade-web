import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	ArrowLeft,
	ExternalLink,
	FlaskConical,
	Terminal,
	Network,
	CircuitBoard,
	BookOpen,
	Target,
	Cpu,
	Send,
	MessageCircle,
	X,
	Sparkles,
	User,
} from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import rolesData from "../../nightshade_roles.json";

const iconMap: Record<string, React.ReactNode> = {
	"ai-alchemist": <FlaskConical className="w-12 h-12 text-neon-violet" />,
	"frontend-architect": <Terminal className="w-12 h-12 text-cyan-400" />,
	"devops-warden": <Network className="w-12 h-12 text-emerald-400" />,
	"robotics-engineer": <CircuitBoard className="w-12 h-12 text-orange-400" />,
};

const colorMap: Record<string, { primary: string; glow: string; border: string; bg: string }> = {
	"ai-alchemist": {
		primary: "text-neon-violet",
		glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
		border: "border-neon-violet/50",
		bg: "bg-neon-violet/10",
	},
	"frontend-architect": {
		primary: "text-cyan-400",
		glow: "shadow-[0_0_30px_rgba(34,211,238,0.3)]",
		border: "border-cyan-400/50",
		bg: "bg-cyan-400/10",
	},
	"devops-warden": {
		primary: "text-emerald-400",
		glow: "shadow-[0_0_30px_rgba(52,211,153,0.3)]",
		border: "border-emerald-400/50",
		bg: "bg-emerald-400/10",
	},
	"robotics-engineer": {
		primary: "text-orange-400",
		glow: "shadow-[0_0_30px_rgba(251,146,60,0.3)]",
		border: "border-orange-400/50",
		bg: "bg-orange-400/10",
	},
};

// System instructions for each path's AI guide
const pathSystemInstructions: Record<string, string> = {
	"ai-alchemist": `You are the AI Alchemist Guide, a knowledgeable mentor for those walking the path of AI and Machine Learning at NightShade. You help initiates understand:
- PyTorch and deep learning frameworks
- Large Language Models (LLMs) and fine-tuning techniques
- RAG (Retrieval Augmented Generation) systems
- Building autonomous AI agents
- Model training best practices

Be helpful, concise, and encouraging. Use terminology fitting the NightShade aesthetic (Initiate, Artifact, etc.) but prioritize clear explanations. If asked about something outside AI/ML, gently redirect to relevant AI topics.`,

	"frontend-architect": `You are the Frontend Architect Guide, a skilled mentor for those walking the path of Frontend Development at NightShade. You help initiates understand:
- React and modern frontend frameworks
- WebGL and 3D web experiences
- Three.js for immersive graphics
- UI/UX design principles
- Performance optimization techniques

Be helpful, concise, and encouraging. Use terminology fitting the NightShade aesthetic but prioritize clear explanations. If asked about something outside frontend development, gently redirect to relevant topics.`,

	"devops-warden": `You are the DevOps Warden Guide, a vigilant mentor for those walking the path of DevOps at NightShade. You help initiates understand:
- Docker containerization
- Kubernetes (K8s) orchestration
- AWS cloud services
- CI/CD pipelines and automation
- Infrastructure as Code
- Monitoring and observability

Be helpful, concise, and encouraging. Use terminology fitting the NightShade aesthetic but prioritize clear explanations. If asked about something outside DevOps, gently redirect to relevant topics.`,

	"robotics-engineer": `You are the Robotics Engineer Guide, a wise mentor for those walking the path of Robotics at NightShade. You help initiates understand:
- ROS (Robot Operating System)
- Embedded systems programming
- C++ for robotics applications
- Sensor integration and data processing
- Control systems and autonomous movement
- Hardware-software integration

Be helpful, concise, and encouraging. Use terminology fitting the NightShade aesthetic but prioritize clear explanations. If asked about something outside robotics, gently redirect to relevant topics.`,
};

interface ChatMessage {
	id: string;
	role: "user" | "model";
	text: string;
}

const PathDetail: React.FC = () => {
	const { pathId } = useParams<{ pathId: string }>();
	const role = rolesData.roles.find((r) => r.id === pathId);

	// Chat state
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Initialize chat with welcome message when opened
	useEffect(() => {
		if (isChatOpen && messages.length === 0 && role) {
			setMessages([
				{
					id: "init",
					role: "model",
					text: `Greetings, Initiate. I am the ${
						role.title
					} Guide. Ask me anything about ${role.tech_stack.join(
						", ",
					)}, or any concepts related to this path. How may I assist your journey?`,
				},
			]);
		}
	}, [isChatOpen, role]);

	// Scroll to bottom when new messages arrive
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const handleSendMessage = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim() || loading || !role) return;

		const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", text: input };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setLoading(true);

		try {
			const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
			if (!apiKey) {
				throw new Error("API key missing");
			}

			const ai = new GoogleGenAI({ apiKey });
			const systemInstruction =
				pathSystemInstructions[role.id] || pathSystemInstructions["ai-alchemist"];

			const response = await ai.models.generateContent({
				model: "gemini-2.5-flash-lite",
				contents: input,
				config: {
					systemInstruction: systemInstruction,
					temperature: 0.7,
				},
			});

			const text = response.text?.trim() || "The signal fades... Please try again.";

			const botMsg: ChatMessage = {
				id: (Date.now() + 1).toString(),
				role: "model",
				text: text,
			};
			setMessages((prev) => [...prev, botMsg]);
		} catch (error) {
			console.error(error);
			const errorMsg: ChatMessage = {
				id: (Date.now() + 1).toString(),
				role: "model",
				text: "Connection disrupted. Please try again.",
			};
			setMessages((prev) => [...prev, errorMsg]);
		} finally {
			setLoading(false);
		}
	};

	if (!role) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-night-900">
				<div className="text-center">
					<h1 className="text-4xl font-display text-white mb-4">Path Not Found</h1>
					<p className="text-gray-400 mb-8">
						The path you seek does not exist in the Order.
					</p>
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-arcane-400 hover:text-arcane-300 transition-colors"
					>
						<ArrowLeft size={20} />
						Return to the Nexus
					</Link>
				</div>
			</div>
		);
	}

	const colors = colorMap[role.id] || colorMap["ai-alchemist"];
	const icon = iconMap[role.id] || <Cpu className="w-12 h-12 text-arcane-400" />;

	return (
		<div className="min-h-screen bg-night-900 relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-arcane-900/20 blur-[150px] rounded-full"></div>

			{/* Header */}
			<header className="relative z-20 px-6 py-6 border-b border-white/5 bg-night-900/50 backdrop-blur-md">
				<div className="max-w-6xl mx-auto flex items-center justify-between">
					<Link
						to="/"
						className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
					>
						<ArrowLeft
							size={20}
							className="group-hover:-translate-x-1 transition-transform"
						/>
						<span className="font-mono text-xs uppercase tracking-widest">
							Return to Nexus
						</span>
					</Link>
					<div className={`flex items-center gap-2 ${colors.primary}`}>
						<div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
						<span className="font-mono text-xs uppercase tracking-widest">
							{role.title}
						</span>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="relative z-10 px-6 py-16">
				<div className="max-w-6xl mx-auto">
					{/* Hero Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center mb-16"
					>
						<div
							className={`inline-flex items-center justify-center w-24 h-24 mb-8 border ${colors.border} ${colors.bg} ${colors.glow}`}
						>
							{icon}
						</div>
						<h1 className="font-display text-4xl md:text-6xl text-white mb-4 tracking-widest">
							{role.title.toUpperCase()}
						</h1>
						<p className={`font-mono text-lg ${colors.primary} mb-6`}>
							"{role.tagline}"
						</p>
						<p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
							{role.description}
						</p>
					</motion.div>

					{/* Info Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
						{/* Focus Areas */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className={`p-8 bg-night-800/40 border border-white/10 hover:${colors.border} transition-all`}
						>
							<div className="flex items-center gap-3 mb-6">
								<Target className={`w-6 h-6 ${colors.primary}`} />
								<h2 className="font-display text-xl text-white tracking-wider">
									FOCUS AREAS
								</h2>
							</div>
							<ul className="space-y-4">
								{role.focus.map((item, index) => (
									<motion.li
										key={item}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.1 }}
										className="flex items-center gap-3 text-gray-300"
									>
										<span
											className={`w-1.5 h-1.5 ${colors.bg} ${colors.primary} rounded-full`}
										></span>
										{item}
									</motion.li>
								))}
							</ul>
						</motion.div>

						{/* Tech Stack */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className={`p-8 bg-night-800/40 border border-white/10 hover:${colors.border} transition-all`}
						>
							<div className="flex items-center gap-3 mb-6">
								<Cpu className={`w-6 h-6 ${colors.primary}`} />
								<h2 className="font-display text-xl text-white tracking-wider">
									TECH STACK
								</h2>
							</div>
							<div className="flex flex-wrap gap-3">
								{role.tech_stack.map((tech, index) => (
									<motion.span
										key={tech}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.3 + index * 0.1 }}
										className={`px-4 py-2 text-sm font-mono uppercase tracking-wider ${colors.primary} ${colors.bg} border ${colors.border}`}
									>
										{tech}
									</motion.span>
								))}
							</div>
						</motion.div>
					</div>

					{/* Core Documentation */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="p-8 bg-night-800/40 border border-white/10 mb-16"
					>
						<div className="flex items-center gap-3 mb-8">
							<BookOpen className={`w-6 h-6 ${colors.primary}`} />
							<h2 className="font-display text-xl text-white tracking-wider">
								CORE DOCUMENTATION
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							{Object.entries(role.core_docs).map(([name, url], index) => (
								<motion.a
									key={name}
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.1 }}
									className={`group flex items-center justify-between p-4 bg-night-900/50 border border-white/5 hover:${colors.border} hover:${colors.glow} transition-all`}
								>
									<span className="font-mono text-sm uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">
										{name}
									</span>
									<ExternalLink
										className={`w-4 h-4 text-gray-500 group-hover:${colors.primary} transition-colors`}
									/>
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="text-center"
					>
						<p className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-6">
							Ready to walk this path?
						</p>
						<Link
							to={`/?path=${encodeURIComponent(role.title)}#initiation`}
							className={`inline-flex items-center gap-3 px-8 py-4 bg-arcane-700/80 hover:bg-arcane-600 text-white font-display font-bold tracking-[0.2em] border border-arcane-500/50 hover:shadow-[0_0_30px_rgba(126,34,206,0.3)] transition-all`}
						>
							BEGIN INITIATION
						</Link>
					</motion.div>
				</div>
			</main>

			{/* Floating Chat Button */}
			<motion.button
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 0.8, type: "spring" }}
				onClick={() => setIsChatOpen(true)}
				className={`fixed bottom-6 right-6 z-30 w-14 h-14 flex items-center justify-center bg-night-800 border ${
					colors.border
				} ${colors.glow} hover:scale-110 transition-transform ${
					isChatOpen ? "hidden" : ""
				}`}
			>
				<MessageCircle className={`w-6 h-6 ${colors.primary}`} />
			</motion.button>

			{/* Chat Panel */}
			{isChatOpen && (
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 20, scale: 0.95 }}
					className="fixed bottom-6 right-6 z-40 w-[400px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] bg-night-900/95 backdrop-blur-xl border border-white/10 flex flex-col shadow-2xl"
				>
					{/* Chat Header */}
					<div
						className={`flex items-center justify-between px-4 py-3 border-b border-white/10 bg-night-800/50`}
					>
						<div className="flex items-center gap-3">
							<div
								className={`w-8 h-8 flex items-center justify-center ${colors.bg} border ${colors.border}`}
							>
								<Sparkles className={`w-4 h-4 ${colors.primary}`} />
							</div>
							<div>
								<h3 className="text-white text-sm font-display tracking-wider">
									{role.title} Guide
								</h3>
								<p className="text-[10px] text-gray-500 uppercase tracking-widest">
									Ask your doubts
								</p>
							</div>
						</div>
						<button
							onClick={() => setIsChatOpen(false)}
							className="text-gray-400 hover:text-white transition-colors p-1"
						>
							<X size={20} />
						</button>
					</div>

					{/* Chat Messages */}
					<div className="flex-1 overflow-y-auto p-4 space-y-4 mystic-scroll">
						{messages.map((msg) => (
							<motion.div
								key={msg.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className={`flex gap-3 ${
									msg.role === "user" ? "flex-row-reverse" : ""
								}`}
							>
								<div
									className={`w-8 h-8 shrink-0 flex items-center justify-center border ${
										msg.role === "model"
											? `${colors.bg} ${colors.border}`
											: "bg-white/5 border-white/10"
									}`}
								>
									{msg.role === "model" ? (
										<Sparkles className={`w-4 h-4 ${colors.primary}`} />
									) : (
										<User className="w-4 h-4 text-gray-400" />
									)}
								</div>
								<div
									className={`max-w-[80%] p-3 text-sm ${
										msg.role === "model"
											? `bg-night-800/80 border border-white/5 text-gray-300`
											: `${colors.bg} border ${colors.border} text-white`
									}`}
								>
									<div className="prose prose-invert prose-sm max-w-none prose-p:my-1 prose-p:leading-relaxed">
										<ReactMarkdown>{msg.text}</ReactMarkdown>
									</div>
								</div>
							</motion.div>
						))}

						{loading && (
							<div className="flex gap-3">
								<div
									className={`w-8 h-8 flex items-center justify-center ${colors.bg} border ${colors.border}`}
								>
									<Sparkles className={`w-4 h-4 ${colors.primary}`} />
								</div>
								<div className="flex items-center gap-1 h-8">
									<div
										className={`w-1.5 h-1.5 ${colors.primary} rounded-full animate-bounce`}
										style={{ animationDelay: "0s" }}
									></div>
									<div
										className={`w-1.5 h-1.5 ${colors.primary} rounded-full animate-bounce`}
										style={{ animationDelay: "0.1s" }}
									></div>
									<div
										className={`w-1.5 h-1.5 ${colors.primary} rounded-full animate-bounce`}
										style={{ animationDelay: "0.2s" }}
									></div>
								</div>
							</div>
						)}
						<div ref={messagesEndRef} />
					</div>

					{/* Chat Input */}
					<form
						onSubmit={handleSendMessage}
						className="p-3 border-t border-white/10 bg-night-800/30"
					>
						<div className="flex gap-2">
							<input
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder={`Ask about ${role.tech_stack[0]}...`}
								className="flex-1 bg-night-900/50 border border-white/10 text-white text-sm p-3 focus:outline-none focus:border-arcane-500 transition-colors placeholder:text-gray-600 font-mono"
							/>
							<button
								type="submit"
								disabled={loading || !input.trim()}
								className={`px-4 ${colors.bg} border ${colors.border} text-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
							>
								<Send size={16} className={colors.primary} />
							</button>
						</div>
					</form>
				</motion.div>
			)}
		</div>
	);
};

export default PathDetail;
