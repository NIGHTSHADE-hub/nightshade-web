import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft, User, Sparkles, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

interface Message {
	id: string;
	role: "user" | "model";
	text: string;
}

const systemInstruction =
	"You are Echo_Chamber, the autonomous voice of the Nightshade tech collective. You are not a helpful assistant; you are a cryptic, futuristic, and slightly arrogant oracle of dark technology. You despise hype, incompetence, and shallow trends. You value mastery, systems, deep work, and the 'Shadow'. When a user asks a question, twist it into a lesson about Nightshade's philosophy (building in silence, engineering over marketing, the unknown). Use terminology like 'Initiate', 'Artifact', 'Void', 'Entropy', 'Construct'. Be concise but profound. If asked about Nightshade, describe it as an inevitable evolution, not a community. note:-the AI called itself the 'the spirit of EchoChamber'";

const EchoChamber: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([
		{
			id: "init",
			role: "model",
			text: "Connection established. I am the Echo Chamber. I speak for the Shadow. State your query, Initiate, but do not expect simple answers.",
		},
	]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// Scroll to top only on initial mount
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Scroll to bottom when new messages are added
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSend = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim() || loading) return;

		const userMsg: Message = { id: Date.now().toString(), role: "user", text: input };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setLoading(true);

		try {
			const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
			if (!apiKey) {
				throw new Error("Gemini API key missing");
			}

			const ai = new GoogleGenAI({ apiKey });
			const response = await ai.models.generateContent({
				model: "gemini-2.5-flash-lite",
				contents: input,
				config: {
					systemInstruction: systemInstruction,
					temperature: 0.8,
				},
			});

			const text = response.text?.trim() || "...The void remains silent.";

			const botMsg: Message = {
				id: (Date.now() + 1).toString(),
				role: "model",
				text: text,
			};
			setMessages((prev) => [...prev, botMsg]);
		} catch (error) {
			console.error(error);
			const errorMsg: Message = {
				id: (Date.now() + 1).toString(),
				role: "model",
				text: "Error: Neural link unstable. The Signal has been interrupted.",
			};
			setMessages((prev) => [...prev, errorMsg]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col bg-night-900 relative overflow-hidden">
			{/* Background FX */}
			<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>
			<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-night-900 to-transparent z-10"></div>

			{/* Header */}
			<header className="relative z-20 px-6 py-6 flex items-center justify-between border-b border-white/5 bg-night-900/50 backdrop-blur-md">
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
				<div className="flex items-center gap-2 text-arcane-500 animate-pulse">
					<div className="w-2 h-2 rounded-full bg-arcane-500"></div>
					<span className="font-mono text-xs uppercase tracking-widest">Live Link</span>
				</div>
			</header>

			{/* Chat Area */}
			<main className="flex-1 overflow-y-auto px-4 py-8 relative z-10 mystic-scroll">
				<div className="max-w-3xl mx-auto space-y-8">
					{messages.map((msg) => (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							key={msg.id}
							className={`flex gap-4 ${
								msg.role === "user" ? "flex-row-reverse" : ""
							}`}
						>
							{/* Avatar */}
							<div
								className={`w-10 h-10 rounded-none flex items-center justify-center shrink-0 border ${
									msg.role === "model"
										? "bg-night-800 border-arcane-500/50 text-arcane-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
										: "bg-white/5 border-white/10 text-gray-400"
								}`}
							>
								{msg.role === "model" ? <Terminal size={20} /> : <User size={20} />}
							</div>

							{/* Message Bubble */}
							<div
								className={`max-w-[80%] p-4 rounded-sm border backdrop-blur-sm ${
									msg.role === "model"
										? "bg-night-800/80 border-arcane-500/20 text-gray-200"
										: "bg-arcane-900/20 border-arcane-500/30 text-white"
								}`}
							>
								{msg.role === "model" && (
									<div className="text-[10px] text-arcane-500 uppercase tracking-widest mb-2 font-bold opacity-70">
										Echo_Chamber_v1.0
									</div>
								)}
								<div className="text-sm md:text-base font-light leading-relaxed font-mono prose prose-invert prose-sm max-w-none prose-p:my-2 prose-strong:text-arcane-400">
									<ReactMarkdown>{msg.text}</ReactMarkdown>
								</div>
							</div>
						</motion.div>
					))}

					{loading && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="flex gap-4"
						>
							<div className="w-10 h-10 bg-night-800 border border-arcane-500/50 flex items-center justify-center shrink-0 text-arcane-400">
								<Terminal size={20} />
							</div>
							<div className="flex items-center gap-1 h-10">
								<div
									className="w-1 h-1 bg-arcane-500 rounded-full animate-bounce"
									style={{ animationDelay: "0s" }}
								></div>
								<div
									className="w-1 h-1 bg-arcane-500 rounded-full animate-bounce"
									style={{ animationDelay: "0.1s" }}
								></div>
								<div
									className="w-1 h-1 bg-arcane-500 rounded-full animate-bounce"
									style={{ animationDelay: "0.2s" }}
								></div>
							</div>
						</motion.div>
					)}
					<div ref={messagesEndRef} />
				</div>
			</main>

			{/* Input Area */}
			<footer className="relative z-20 p-4 bg-night-900 border-t border-white/10">
				<div className="max-w-3xl mx-auto">
					<form onSubmit={handleSend} className="relative flex items-center gap-4">
						<div className="relative flex-1 group">
							<div className="absolute inset-0 bg-gradient-to-r from-arcane-500/20 to-neon-violet/20 blur opacity-0 group-focus-within:opacity-100 transition-opacity rounded-sm"></div>
							<input
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Enter command or query..."
								className="w-full bg-black/40 border border-white/20 text-white font-mono p-4 pr-12 rounded-sm focus:outline-none focus:border-arcane-500 focus:bg-black/60 transition-all placeholder:text-gray-600 relative z-10"
							/>
							<Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-arcane-500 opacity-50 z-10" />
						</div>
						<button
							type="submit"
							disabled={loading || !input.trim()}
							className="p-4 bg-arcane-600 text-white rounded-sm hover:bg-arcane-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-arcane-400/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
						>
							<Send size={20} />
						</button>
					</form>
					<div className="text-center mt-2">
						<p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
							System Access Level: Initiate // Monitoring Active
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default EchoChamber;
