import { Center } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Section } from '../shared/Section';
import ReactCardFlip from 'react-card-flip';
import './Projects.css';
import cal3dly from '../../../assets/cal3dly.png';
import personal from '../../../assets/personal.png';
import {
	CSSIcon,
	JavaIcon,
	JestIcon,
	MySQLIcon,
	ReactIcon,
	TypeScriptIcon,
	Web3Icon,
	JavaScriptIcon,
	NodeIcon,
	SolidityIcon,
	BunIcon,
} from '../shared/ColoredIcons';
import { FrontCard } from './Cards/FrontCard';
import { BackCard } from './Cards/BackCard';
import { FaExternalLinkSquareAlt, FaGithub, FaEnvelope } from 'react-icons/fa';
import chess from '../../../assets/chess.png';
import trip from '../../../assets/trip.png';

interface Props {
	projectsRef: React.RefObject<HTMLDivElement>;
}

export const Projects: FC<Props> = ({ projectsRef }) => {
	return (
		<Section sectionRef={projectsRef} title='Personal Projects'>
			<Center>
				<div className='projects-grid'>
					{projects.map((project) => (
						<ProjectCard
							{...project}
							key={project.frontCardProps.projectName}
						/>
					))}
				</div>
			</Center>
		</Section>
	);
};

interface ProjectCardProps {
	frontCardProps: {
		projectName: string;
		imgSrc: string;
	};
	backCardProps: {
		descriptions: string[];
		icons: JSX.Element[];
		links: {
			label: string;
			url: string;
			icon: JSX.Element;
		}[];
	};
}

function ProjectCard({ frontCardProps, backCardProps }: ProjectCardProps) {
	const [showFront, toggleShowFront] = useState(true);
	return (
		<ReactCardFlip isFlipped={!showFront}>
			<FrontCard {...frontCardProps} toggle={() => toggleShowFront(false)} />
			<BackCard {...backCardProps} toggle={() => toggleShowFront(true)} />
		</ReactCardFlip>
	);
}

const projects = [
	{
		frontCardProps: {
			projectName: 'Personal Portfolio',
			imgSrc: personal,
		},
		backCardProps: {
			descriptions: [
				'Wrote personal portfolio website using React and TypeScript.',
				'Deployed using Surge.sh.',
			],
			icons: [<TypeScriptIcon />, <ReactIcon />, <CSSIcon />, <BunIcon />],
			links: [
				{
					label: 'View on Github',
					url: 'https://github.com/amir-raissi/Personal-Website',
					icon: <FaGithub />,
				},
			],
		},
	},
	{
		frontCardProps: {
			projectName: 'Web3 Calendly',
			imgSrc: cal3dly,
		},
		backCardProps: {
			descriptions: [
				'Wrote and deployed Web3 Calendly application using React and Surge.sh.',
				'Developed, deployed and tested Calendly smart contract on the Goleri test network using Hardhat.',
			],
			icons: [
				<TypeScriptIcon />,
				<SolidityIcon />,
				<Web3Icon />,
				<ReactIcon />,
				<CSSIcon />,
			],
			links: [
				{
					label: 'Access Project',
					url: 'https://cal3dly.surge.sh/',
					icon: <FaExternalLinkSquareAlt />,
				},
				{
					label: 'View on Github',
					url: 'https://github.com/csu-hci-projects/Cal3dly-Web3-Usability',
					icon: <FaGithub />,
				},
			],
		},
	},
	{
		frontCardProps: {
			projectName: 'Chess App',
			imgSrc: chess,
		},
		backCardProps: {
			descriptions: [
				'Developed an asynchronous chess application using React and Java.',
				'Designed and implemented database tables for game play and user authentication.',
			],
			icons: [
				<JavaScriptIcon />,
				<JavaIcon />,
				<ReactIcon />,
				<CSSIcon />,
				<MySQLIcon />,
				<JestIcon />,
				<NodeIcon />,
			],
			links: [
				{
					label: 'Email me for more info',
					url: 'mailto:amir_raissi@yahoo.com',
					icon: <FaEnvelope />,
				},
			],
		},
	},
	{
		frontCardProps: {
			projectName: 'Trip Planner',
			imgSrc: trip,
		},
		backCardProps: {
			descriptions: [
				'Developed a trip planning application using React and Java.',
				'Implemented K Nearest Neighbors algorithm to optimize user’s trip.',
			],
			icons: [
				<JavaScriptIcon />,
				<JavaIcon />,
				<ReactIcon />,
				<CSSIcon />,
				<MySQLIcon />,
				<JestIcon />,
				<NodeIcon />,
			],
			links: [
				{
					label: 'Email me for more info',
					url: 'mailto:amir_raissi@yahoo.com',
					icon: <FaEnvelope />,
				},
			],
		},
	},
];
