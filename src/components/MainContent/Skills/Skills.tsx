import {
	Flex,
	Breadcrumb,
	BreadcrumbItem,
	Heading,
	BreadcrumbLink,
	Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Section } from '../shared/Section';
import './Skills.css';
import { LanguageCloud } from './Clouds/LanguageCloud';
import { TechnologyCloud } from './Clouds/TechnologyCloud';
import { ToolsCloud } from './Clouds/ToolsCloud';

interface Props {
	skillsRef: React.RefObject<HTMLDivElement>;
}

type skillsType = 'lang' | 'tech' | 'tools';

export const Skills: FC<Props> = ({ skillsRef }) => {
	const [skillsState, setSkillsState] = useState<skillsType>('lang');
	return (
		<Section sectionRef={skillsRef} title='Skills'>
			<Flex flexDir='column'>
				<SkillsHeader
					skillsState={skillsState}
					setSkillsState={setSkillsState}
				/>
				<SkillsContent skillState={skillsState} />
			</Flex>
		</Section>
	);
};

interface SkillsHeaderProps {
	skillsState: skillsType;
	setSkillsState: React.Dispatch<React.SetStateAction<skillsType>>;
}

function SkillsHeader({ skillsState, setSkillsState }: SkillsHeaderProps) {
	return (
		<Breadcrumb separator={<strong>|</strong>} mb='1vh'>
			<BreadcrumbItem>
				<SkillsBreadCrumb
					onClick={() => setSkillsState('lang')}
					isSelected={skillsState === 'lang'}
					title='Languages'
				/>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<SkillsBreadCrumb
					onClick={() => setSkillsState('tech')}
					isSelected={skillsState === 'tech'}
					title='Technologies'
				/>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<SkillsBreadCrumb
					onClick={() => setSkillsState('tools')}
					isSelected={skillsState === 'tools'}
					title='Tools'
				/>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}

interface SkillsBreadCrumbProps {
	onClick: () => void;
	isSelected: boolean;
	title: string;
}

function SkillsBreadCrumb({
	onClick,
	isSelected,
	title,
}: SkillsBreadCrumbProps) {
	return (
		<BreadcrumbLink onClick={onClick}>
			<Heading size='md'>{isSelected ? <u>{title}</u> : title}</Heading>
		</BreadcrumbLink>
	);
}

function SkillsContent({ skillState }: { skillState: skillsType }) {
	return (
		<Flex flexDir='column' pb='5px'>
			{getSkillsInfo(skillState)}
			{getSkillsCloud(skillState)}
		</Flex>
	);
}

function getSkillsInfo(skillsState: skillsType) {
	return (
		<Flex mb='5px'>
			<Text fontSize='lg'>
				{skillsState === 'lang' &&
					'These are the programming languages I have used in my career.'}
				{skillsState === 'tech' &&
					'These are the technologies I have used in my career.'}
				{skillsState === 'tools' &&
					'These are the tools I have used in my career.'}
			</Text>
		</Flex>
	);
}

function getSkillsCloud(skillsState: skillsType) {
	return (
		<div className='skills-cloud-container'>
			{skillsState === 'lang' && <LanguageCloud />}
			{skillsState === 'tech' && <TechnologyCloud />}
			{skillsState === 'tools' && <ToolsCloud />}
		</div>
	);
}
