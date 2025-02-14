"use client";

import StarryBackground from "./utils/StarryBackground";
import Myprofile from "./components/Myprofile";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import MyProject from "./components/MyProject";
import Schooling from "./components/Schooling";
import NewTechnoMonitoring from "./components/NewTechnoMonitoring";

export default function Home() {
	return (
		<div>
			<Intro />
			<Myprofile />
			<MySkills />
			<StarryBackground />
			<MyProject />
			<Schooling />
			<NewTechnoMonitoring />
		</div>
	);
}
