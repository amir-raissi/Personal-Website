import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

interface Props {
	sectionRef: React.RefObject<HTMLDivElement>;
	title: string;
	children: JSX.Element | JSX.Element[];
}

export const Section: FC<Props> = ({ sectionRef, title, children }) => {
	return (
		<div className='section-container' ref={sectionRef}>
			<div className='section'>
				<Heading as='h1' size='xl'>
					{title}
				</Heading>
				<div className='section-divider-container'>
					<span className='section-divider-1' />
					<span className='section-divider-2' />
				</div>
			</div>
			<br />
			{children}
		</div>
	);
};
