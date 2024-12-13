import { FC } from 'react';
import { Section } from '../shared/Section';
import {
	Flex,
	Heading,
	Image,
	UnorderedList,
	ListItem,
	Text,
} from '@chakra-ui/react';
import Carousel from 'nuka-carousel';
import './Experiences.css';
import {
	AngularIcon,
	BashIcon,
	BitbucketIcon,
	CSSIcon,
	DB2Icon,
	EclipseIcon,
	GithubIcon,
	IntellijIcon,
	JavaIcon,
	JavaScriptIcon,
	JenkinsIcon,
	JestIcon,
	JiraIcon,
	JQueryIcon,
	NestJSIcon,
	NodeIcon,
	OfficeIcon,
	PythonIcon,
	ReactIcon,
	ReduxIcon,
	SCSSIcon,
	SlackIcon,
	SpringbootIcon,
	StorybookIcon,
	TypeScriptIcon,
	VSCodeIcon,
} from '../shared/ColoredIcons';
import kraneLogo from '../../../assets/krane.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Props {
	experiencesRef: React.RefObject<HTMLDivElement>;
}

export const Experiences: FC<Props> = ({ experiencesRef }) => {
	return (
		<Section sectionRef={experiencesRef} title='Professional Experience'>
			<div className='experiences-container'>
				<Carousel
					className='carousel-container'
					animation='zoom'
					autoplay
					wrapAround
					autoplayInterval={5000}
					pauseOnHover
					defaultControlsConfig={{
						nextButtonClassName: 'arrow-container-right',
						nextButtonText: <FaChevronRight size={24} color='#ff6d00' />,
						prevButtonClassName: 'arrow-container-left',
						prevButtonText: <FaChevronLeft size={24} color='#ff6d00' />,
						pagingDotsContainerClassName: 'hidden',
						pagingDotsClassName: 'hidden',
					}}
				>
					{experiencesData.map((experience) => (
						<Flex h='100%' key={experience.position} flexDir='column' p='5vw'>
							<Experience {...experience} />
						</Flex>
					))}
				</Carousel>
			</div>
		</Section>
	);
};

interface ExperienceProps {
	position: string;
	startEndString: string;
	location: string;
	logo: string;
	details: string[];
	icons: JSX.Element[];
	company: string;
}

function Experience({
	position,
	startEndString,
	location,
	logo,
	details,
	icons,
	company,
}: ExperienceProps) {
	return (
		<Flex flexDir='column'>
			<ExperienceHeader
				position={position}
				location={location}
				startEndString={startEndString}
				logo={logo}
				company={company}
			/>
			<hr />
			<ExperiencesList details={details} />
			<IconsRow icons={icons} />
		</Flex>
	);
}

interface ExperienceHeaderProps {
	position: string;
	location: string;
	startEndString: string;
	logo: string;
	company: string;
}

function ExperienceHeader({
	position,
	location,
	startEndString,
	logo,
	company,
}: ExperienceHeaderProps) {
	return (
		<Flex justifyContent='space-between'>
			<div className='experience-stack'>
				<Heading size={['3xs', '2xs', 'sm', 'md', 'lg']}>{position}</Heading>
				<Text fontSize={['2xs', 'sm', 'lg']}>{location}</Text>
				<Text as='em' fontSize={['3xs', 'xs', 'md']}>
					{startEndString}
				</Text>
			</div>
			<div className='experience-stack-logo'>
				<Image
					src={logo}
					alt={`${company}'s logo`}
					boxSize='100%'
					objectFit='contain'
				/>
			</div>
		</Flex>
	);
}

function ExperiencesList({ details }: { details: string[] }) {
	return (
		<UnorderedList
			mt='5px'
			mb='5px'
			fontSize={['8px', 'xs', 'sm', 'xl', '2xl']}
		>
			{details.map((detail) => (
				<ListItem key={detail}>
					<Text>{detail}</Text>
				</ListItem>
			))}
		</UnorderedList>
	);
}

function IconsRow({ icons }: { icons: JSX.Element[] }) {
	return <div className='icon-row'>{[...icons]}</div>;
}

const experiencesData = [
	{
		position: 'Software Engineer',
		startEndString: 'January 2023 - Present',
		location: 'Highlands Ranch, CO',
		logo: 'https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png',
		details: [
			'Led team in story and code enhancement delivery.',
			'Contributed to numerous critical production-facing enhancements.',
			'Led ground-up redesign of web application using Angular 18 and progressive disclosure design principles.',
			'Documented and tested reusable components using Storybook and Jest.',
			'Designed and enhanced Spring Boot APIs.',
		],
		icons: [
			<JavaScriptIcon />,
			<JavaIcon />,
			<SCSSIcon />,
			<JQueryIcon />,
			<DB2Icon />,
			<SpringbootIcon />,
			<AngularIcon />,
			<JestIcon />,
			<StorybookIcon />,
			<PythonIcon />,
			<BashIcon />,
			<JenkinsIcon />,
			<JiraIcon />,
			<BitbucketIcon />,
			<IntellijIcon />,
			<VSCodeIcon />,
		],
		company: 'Visa',
	},
	{
		position: 'Frontend Software Engineer',
		startEndString: 'September 2022 - December 2022',
		location: 'Remote',
		logo: kraneLogo,
		details: [
			'Worked in Agile environment',
			'Led creation of an enterprise-level web application using TypeScript, React, and Redux.',
			'Ensured adherence to AA and AAA accessibility guidelines.',
			'Collaborated with engineers and product owners to gather and implement product requirements.',
			'Designed and implemented new RESTful API endpoints utilizing Nest.js.',
		],
		icons: [
			<TypeScriptIcon />,
			<ReactIcon />,
			<ReduxIcon />,
			<CSSIcon />,
			<NestJSIcon />,
			<GithubIcon />,
			<VSCodeIcon />,
			<SlackIcon />,
		],
		company: 'Krane',
	},
	{
		position: 'Software Engineer Intern',
		startEndString: 'May 2022 - August 2022',
		location: 'Highlands Ranch, CO',
		logo: 'https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png',
		details: [
			'Worked on 6 production facing tasks.',
			'Developed new UI components using jQuery.',
			'Enhanced existing RESTful APIs utilizing Springboot Framework.',
			'Ensured data integrity of IBM DB2 databases.',
			'Collaborated with other developers to complete tasks.',
		],
		icons: [
			<JavaScriptIcon />,
			<JavaIcon />,
			<CSSIcon />,
			<DB2Icon />,
			<JQueryIcon />,
			<SpringbootIcon />,
			<JenkinsIcon />,
			<JiraIcon />,
			<BitbucketIcon />,
			<VSCodeIcon />,
			<EclipseIcon />,
			<OfficeIcon />,
		],
		company: 'Visa',
	},
	{
		position: 'Undergraduate Teaching Assistant',
		startEndString: 'January 2022 – May 2022',
		location: 'Fort Collins, CO',
		logo: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png',
		details: [
			'Was UTA for CS-314 Software Engineering at Colorado State University.',
			'Taught students best practices for React/Spark development, teamwork, Agile methodologies, and creating a maintainable and usable codebase.',
			'Developed and maintained core frontend components and features utilizing React.',
			'Wrote bash script to deploy hotfixes to over 30 different student repos.',
		],
		icons: [
			<JavaScriptIcon />,
			<JavaIcon />,
			<ReactIcon />,
			<CSSIcon />,
			<NodeIcon />,
			<JestIcon />,
			<GithubIcon />,
			<VSCodeIcon />,
			<SlackIcon />,
			<BashIcon />,
		],
		company: 'Colorado State University',
	},
	{
		position: 'Application Consultant Intern',
		startEndString: 'January 2021 – April 2022',
		location: 'Remote',
		logo: 'https://www.teamim.com/hubfs/TEAM%20Website%202020/Logos/team-blue-rgb.svg',
		details: [
			'Worked in Agile environment on 5 different development teams.',
			'Worked with development teams and product managers to cater product to client’s needs.',
			'Developed new user-facing features utilizing Angular and TypeScript.',
			'Created RESTful APIs utilizing Springboot Framework.',
			'Maintained code base integrity and organization.',
		],
		icons: [
			<TypeScriptIcon />,
			<JavaIcon />,
			<CSSIcon />,
			<AngularIcon />,
			<SpringbootIcon />,
			<NodeIcon />,
			<JenkinsIcon />,
			<JiraIcon />,
			<BitbucketIcon />,
			<VSCodeIcon />,
			<EclipseIcon />,
			<OfficeIcon />,
		],
		company: 'team im',
	},
	{
		position: 'Advanced Repair Agent',
		startEndString: 'September 2019 - December 2020',
		location: 'Loveland, CO',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Geek_Squad_logo.png/1280px-Geek_Squad_logo.png',
		details: [
			'Diagnosed and repaired client devices (desktops, laptops, Apple devices).',
			'Top 1% of company in terms of repairs per hour, starting second month.',
			'Set and managed client expectations.',
			'Trained new agents.',
		],
		icons: [],
		company: 'Geek Squad',
	},
	{
		position: 'Sales Associate',
		startEndString: 'May 2017 - September 2019',
		location: 'Lakewood, CO',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png',
		details: [
			'Top 1% of company in terms of sales metrics, starting my second month.',
			'Worked in fast paced environment.',
			'Communicated with customers in order to provide customer with complete solution.',
		],
		icons: [],
		company: 'Best Buy',
	},
];
