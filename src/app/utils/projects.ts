export const projects = [
	{
		date: "Octobre 2023",
		title: "Webdocumentaire",
		description:
			"Ce webdocumentaire a été réalisé dans le cadre d'un projet scolaire en deuxième année de BUT, en groupe de 4, sur le thème d'Octobre Rose. Nous avons réalisé un site web complet sur l'évènement qui s'est déroulé à la Ferté-sous-jouarre en octobre 2023. Nous y avons réalisé des interviews, des vidéos, des prises sons.. puis nous avons integré au site des articles, des infographies, etc. Le principal objectif était de sensibiliser les utilisateurs au dépistage du cancer du sein grâce aux témoignages de professionels de la santé et à des recherches personnelles.",
		images: [
			"/assets/octobre-rose/intro.png",
			"/assets/octobre-rose/home.png",
			"/assets/octobre-rose/home2.png",
			"/assets/octobre-rose/interview.png",
			"/assets/octobre-rose/video.png",
		],
		icon: "/assets/projects/ruban.svg",
		up: true,
		technologies: ["HTML", "CSS", "Javascript"],
		github: "https://github.com/ArnoLM7/Webdocumentaire-Octobre-rose",
	},
	{
		date: "Mars 2024",
		title: "Commande de sushi",
		description:
			"Ce site web a été réalisé en 2ème année de BUT, en groupe de 4. Le but était de réaliser un site de commande de sushi en ligne. Nous avons réalisé une API et un front-office pour les clients. Je me suis occupé plus particulèrement du développement front et de la partie responsive mobile.",
		images: [
			"/assets/nagashima/home.png",
			"/assets/nagashima/liste.png",
			"/assets/nagashima/thon.png",
			"/assets/nagashima/paiement.png",
		],
		icon: "/assets/projects/sushi.svg",
		mobile: true,
		technologies: ["NodeJS", "Angular", "Bootstrap"],
		github: "https://github.com/RubenDavidAbreu/nagashima",
	},
	{
		date: "Juin 2024",
		title: "Questionnaire",
		description:
			"J'ai réalisé ces maquettes dans le cadre d'une proposition graphique pour un test de connaissance sur mobile, en stage de 2ème année de BUT. Ce test a pour but de délivrer un certificat \"Professionel du gaz\" à des installateurs de gaz à travers des série de questions sur l'installation, la maintenance et la sécurité du gaz. J'ai réalisé ces maquettes sur Figma et créé un prototype cliquable pour présenter le projet à l'entreprise.",
		images: [
			"/assets/questionnaire/accueil.png",
			"/assets/questionnaire/recap_info.png",
			"/assets/questionnaire/consignes.png",
			"/assets/questionnaire/page_test.png",
			"/assets/questionnaire/liste_questions.png",
			"/assets/questionnaire/recap_reponses.png",
			"/assets/questionnaire/test_fini.png",
		],
		icon: "/assets/projects/check-list.svg",
		mobile: true,
		up: true,
		technologies: ["Figma", "Photoshop"],
	},
	{
		date: "2024-2025",
		title: "Eye-care",
		description:
			"Eye-care est un projet de fin d'études en groupe de 5, au cours duquel nous avons utilisé la méthode Agile. Le principal objectif de ce site web est d'informer et de sensibiliser l'utilisateur des différents problèmes oculaires. Nous avons intégré des articles, des tests de vue, des commentaires, une page profil utilisateur, un mode jour/nuit ainsi qu'un back-office. Le site a été réalisé tout au long de ma 3ème annéee de BUT et le développement d'une application mobile du projet est en cours.",
		images: [
			"/assets/eye-care/login.png",
			"/assets/eye-care/home.png",
			"/assets/eye-care/articles.png",
			"/assets/eye-care/comments.png",
			"/assets/eye-care/tests.png",
			"/assets/eye-care/profile.png",
		],
		icon: "/assets/projects/loupe-eye.svg",
		technologies: ["Symfony", "ReactJS", "SCSS"],
		github: "https://github.com/Raphi04/Eye-Care_SAE501",
		web: "https://eye-care-project.netlify.app/",
	},
];
