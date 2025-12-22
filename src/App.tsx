import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./components/Home";
import EchoChamber from "./components/EchoChamber";
import PathDetail from "./components/PathDetail";
import MemberDetail from "./components/MemberDetail";

const App: React.FC = () => {
	return (
		<HashRouter>
			<div className="min-h-screen bg-[#050508] text-gray-200 selection:bg-arcane-500 selection:text-white overflow-hidden">
				<ParticleBackground />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/echo-chamber" element={<EchoChamber />} />
					<Route path="/path/:pathId" element={<PathDetail />} />
					<Route path="/member/:memberId" element={<MemberDetail />} />
				</Routes>
			</div>
		</HashRouter>
	);
};

export default App;
