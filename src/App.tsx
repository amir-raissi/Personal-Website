import Header from './components/Header/Header';
import { useBreakpointValue } from '@chakra-ui/react';
import { MainContent } from './components/MainContent/MainContent';
import { useRef } from 'react';
const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

function App() {
	const variants = useBreakpointValue({ base: smVariant, md: mdVariant });
	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const experiencesRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	const navHome = getNavFunction(homeRef);
	const navAbout = getNavFunction(aboutRef);
	const navSkills = getNavFunction(skillsRef);
	const navExperiences = getNavFunction(experiencesRef);
	const navProjects = getNavFunction(projectsRef);

	const refs = { homeRef, aboutRef, skillsRef, experiencesRef, projectsRef };
	const refActions = {
		navHome,
		navAbout,
		navSkills,
		navExperiences,
		navProjects,
	};
	return (
		<>
			<Header variants={variants} refActions={refActions} />
			<MainContent variants={variants} refs={refs} />
		</>
	);
}

function getNavFunction(ref: React.RefObject<HTMLDivElement>) {
	//@ts-ignore
	return () => ref.current.scrollIntoView({ behavior: 'smooth' });
}

export default App;
