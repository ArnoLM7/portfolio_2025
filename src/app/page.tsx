"use client";

import StarryBackground from "./utils/StarryBackground";
import Myprofile from "./components/Myprofile";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import MyProject from "./components/MyProject";
import Schooling from "./components/Schooling";
import NewTechnoMonitoring from "./components/NewTechnoMonitoring";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<Intro />
			<Myprofile />
			<MySkills />
			<MyProject />
			<Schooling />
			<NewTechnoMonitoring />
			<Footer />
			<StarryBackground />
		</main>
	);
}
