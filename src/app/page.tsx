"use client";

import StarryBackground from "./utils/StarryBackground";
import Myprofile from "./components/Myprofile";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import MyProject from "./components/MyProject";

export default function Home() {
	return (
		<div>
			<Intro />
			<Myprofile />
			<MySkills />
			<StarryBackground />
			<MyProject />
		</div>
	);
}
