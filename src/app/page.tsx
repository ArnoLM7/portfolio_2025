"use client";

import StarryBackground from "./utils/StarryBackground";
import Myprofile from "./components/Myprofile";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Schooling from "./components/Schooling";
import NewTechnoMonitoring from "./components/NewTechnoMonitoring";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			<Intro />
			<Myprofile />
			<MySkills />
			<MyProjects />
			<Schooling />
			<NewTechnoMonitoring />
			<Footer />
			<StarryBackground />
		</main>
	);
}
