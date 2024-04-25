// Import images
import Image1 from '../images/rh.png';
import Image2 from '../images/rh2t.png';
import Image3 from '../images/rh3.png';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Système de Gestion des Ressources Humaines',
		publishDate: 'Dec 26, 2023',
	   tags: 'Web Developpemnt',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Système de Gestion des Ressources Humaines',
			img: Image1,
		},
		{
			id: 2,
			title: 'Oracle Apex',
			img: Image2,
		},
		
	],
	ProjectInfo: {
		
		ObjectivesHeading: 'Objectif',
		ObjectivesDetails:
			"Notre objectif dans le développement du Système de Gestion des Ressources Humaines (HRMS) sur Oracle APEX était de créer une solution efficace et conviviale, adaptée pour répondre aux exigences complexes de gestion des fonctions RH au sein de notre organisation. Avec cette plateforme, nous avons cherché à centraliser et rationaliser tous les aspects des opérations RH, de la gestion des données des employés aux processus de recrutement.",
		Technologies: [
			{
				title: 'Technologies',
				techs: [
					'Oracle Apex'
				],
			},
		],
		ProjectDetailsHeading: 'Défi',
		ProjectDetails: [
			{
				id: 1,
				details:
					"Dans notre projet de Système de Gestion des Ressources Humaines (HRMS) développé sur Oracle APEX, nous nous sommes concentrés sur la création d'une solution intégrée et conviviale pour répondre aux besoins complexes de gestion des ressources humaines au sein de notre organisation.",
			},
			{
				id: 2,
				details:
					"Avec cette plateforme, nous pouvons facilement gérer toutes les informations liées aux employés, depuis les données personnelles jusqu'à l'historique de l'emploi, les évaluations de performance et les cours de formation terminés. De plus, nous avons intégré des modules de recrutement et de gestion des candidats pour rationaliser nos processus de recrutement, permettant aux recruteurs de publier des offres d'emploi, de suivre les candidatures, de mener des évaluations, le tout en centralisant toutes les données dans un seul système.",
			},
			{
				id: 3,
				details:
					"Ce qui rend ce projet encore plus puissant, c'est sa flexibilité. Nous avons conçu le système pour être facilement personnalisable afin de s'adapter aux flux de travail spécifiques de notre entreprise et aux politiques en matière de ressources humaines. Cela signifie que nous pouvons ajuster les formulaires, les rapports et les processus en fonction de nos besoins évolutifs, ce qui permet d'optimiser notre efficacité opérationnelle. ",
			},
			{
				id: 4,
				details:
					"De plus, nous avons mis en place des mesures de sécurité avancées pour protéger les données sensibles, garantissant que seuls les utilisateurs autorisés ont accès aux informations pertinentes. Grâce à cette combinaison de puissance, de flexibilité et de sécurité, notre Système de Gestion des Ressources Humaines sur Oracle APEX est devenu un pilier crucial de notre infrastructure, nous aidant à stimuler la croissance organisationnelle tout en assurant une gestion efficace de notre capital humain.",
			},
		],
		SocialSharingHeading: 'Partagez ceci',
		SocialSharing: [
			
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			}
		],
	},
	RelatedProject: {
		title: 'Projets en liaison',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
