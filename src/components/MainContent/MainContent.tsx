import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { About } from './About/About';
import { Experiences } from './Experiences/Experiences';
import { Footer } from './Footer/Footer';
import { Home } from './Home/Home';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

interface Props {
	variants: any;
	refs: {
		homeRef: React.RefObject<HTMLDivElement>;
		aboutRef: React.RefObject<HTMLDivElement>;
		skillsRef: React.RefObject<HTMLDivElement>;
		experiencesRef: React.RefObject<HTMLDivElement>;
		projectsRef: React.RefObject<HTMLDivElement>;
	};
}

export const MainContent: FC<Props> = ({ variants, refs }) => {
	return (
		<VStack
			// @ts-ignore
			ml={!variants?.navigationButton && '30%'}
		>
			<Home homeRef={refs.homeRef} aboutRef={refs.aboutRef} />
			<About aboutRef={refs.aboutRef} />
			<Skills skillsRef={refs.skillsRef} />
			<Experiences experiencesRef={refs.experiencesRef} />
			<Projects projectsRef={refs.projectsRef} />
			<Footer homeRef={refs.homeRef} />
		</VStack>
	);
};
