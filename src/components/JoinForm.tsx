import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Eye, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Initiation: React.FC = () => {
	const location = useLocation();
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		identity: "",
		comm: "",
		origin: "",
		path: "AI Alchemist",
	});

	// Auto-select path from URL query parameter
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const pathFromUrl = searchParams.get("path");
		const validPaths = [
			"AI Alchemist",
			"Frontend Architect",
			"DevOps Warden",
			"Robotics Engineer",
		];

		if (pathFromUrl && validPaths.includes(pathFromUrl)) {
			setFormData((prev) => ({ ...prev, path: pathFromUrl }));
		}
	}, [location.search]);

	const generateWelcomeMessage = (name: string, path: string) => {
		const messages: Record<string, string> = {
			"AI Alchemist": `Welcome, ${name}. You have chosen the path of the AI Alchemist. Your journey into the depths of machine intelligence begins now. Master the arcane arts of neural networks and transform data into wisdom.`,
			"Frontend Architect": `Welcome, ${name}. You have chosen the path of the Frontend Architect. Your destiny is to craft digital realms that captivate and inspire. Build interfaces that bridge the gap between human and machine.`,
			"DevOps Warden": `Welcome, ${name}. You have chosen the path of the DevOps Warden. You shall guard the sacred pipelines and ensure the eternal flow of deployment. Infrastructure bends to your will.`,
			"Robotics Engineer": `Welcome, ${name}. You have chosen the path of the Robotics Engineer. Breathe life into metal and code. The physical and digital worlds merge under your command.`,
		};
		return messages[path] || `Welcome, ${name}. Your journey with NightShade begins now.`;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const welcomeMessage = generateWelcomeMessage(formData.identity, formData.path);

		try {
			// Send email to user with welcome message and community link
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
				{
					to_email: formData.comm,
					to_name: formData.identity,
					welcome_message: welcomeMessage,
					chosen_path: formData.path,
					community_link: import.meta.env.VITE_COMMUNITY_LINK,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);

			// Send notification email to admin
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
				{
					user_name: formData.identity,
					user_email: formData.comm,
					user_origin: formData.origin,
					user_path: formData.path,
					submission_date: new Date().toLocaleString(),
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);

			setSubmitted(true);
		} catch (error) {
			console.error("Failed to send email:", error);
			alert("Failed to submit. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id="initiation"
			className="py-24 px-6 relative flex items-center justify-center min-h-[80vh] overflow-hidden"
		>
			{/* Background Runes/Fog Effect */}
			<div className="absolute inset-0 bg-night-900">
				<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-arcane-900/20 blur-[120px] rounded-full"></div>
			</div>

			<div className="relative z-10 w-full max-w-2xl bg-[#0a0a0f]/80 backdrop-blur-xl p-8 md:p-12 border border-arcane-500/20 shadow-[0_0_60px_rgba(126,34,206,0.1)]">
				<div className="text-center mb-10">
					<h2 className="font-display text-4xl text-white mb-4 tracking-widest">
						BEGIN INITIATION
					</h2>
					<p className="text-gray-400 font-body max-w-lg mx-auto">
						To join the Order, you must pass the Trials. Submit your identity to receive
						your first challenge.
					</p>
				</div>

				{submitted ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="text-center py-16 border border-green-500/20 bg-green-500/5"
					>
						<Eye className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
						<h3 className="text-2xl font-display text-white mb-4">
							Transmission Received
						</h3>
						<p className="text-gray-400">
							The first Trial has been sent to your inbox.
							<br />
							Do not fail.
						</p>
					</motion.div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="group">
								<label
									htmlFor="identity"
									className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2"
								>
									Identity (Full Name)
								</label>
								<input
									type="text"
									id="identity"
									required
									value={formData.identity}
									onChange={handleChange}
									className="w-full bg-night-800 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-arcane-500 focus:bg-night-800/50 transition-colors font-mono text-sm"
									placeholder="ENTER NAME"
								/>
							</div>
							<div className="group">
								<label
									htmlFor="comm"
									className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2"
								>
									Comm Channel (Email)
								</label>
								<input
									type="email"
									id="comm"
									required
									value={formData.comm}
									onChange={handleChange}
									className="w-full bg-night-800 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-arcane-500 focus:bg-night-800/50 transition-colors font-mono text-sm"
									placeholder="ENTER EMAIL"
								/>
							</div>
						</div>

						<div className="group">
							<label
								htmlFor="origin"
								className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2"
							>
								Origin (University/Org)
							</label>
							<input
								type="text"
								id="origin"
								required
								value={formData.origin}
								onChange={handleChange}
								className="w-full bg-night-800 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-arcane-500 focus:bg-night-800/50 transition-colors font-mono text-sm"
								placeholder="ENTER ORIGIN"
							/>
						</div>

						<div className="group">
							<label
								htmlFor="path"
								className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2"
							>
								Chosen Path
							</label>
							<select
								id="path"
								value={formData.path}
								onChange={handleChange}
								className="w-full bg-night-800 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-arcane-500 transition-colors font-mono text-sm appearance-none cursor-pointer"
							>
								<option>AI Alchemist</option>
								<option>Frontend Architect</option>
								<option>DevOps Warden</option>
								<option>Robotics Engineer</option>
							</select>
						</div>

						<motion.button
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
							type="submit"
							disabled={loading}
							className="w-full mt-8 bg-arcane-700/80 hover:bg-arcane-600 text-white font-display font-bold py-4 tracking-[0.2em] flex items-center justify-center gap-3 border border-arcane-500/50 hover:shadow-[0_0_30px_rgba(126,34,206,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? (
								<>
									<Loader2 className="w-4 h-4 animate-spin" />
									<span>TRANSMITTING...</span>
								</>
							) : (
								<>
									<span>SUBMIT TO THE TRIALS</span>
									<Send className="w-4 h-4" />
								</>
							)}
						</motion.button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Initiation;
