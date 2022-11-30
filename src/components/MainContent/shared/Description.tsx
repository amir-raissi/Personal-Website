import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Heading } from '@chakra-ui/react';

interface Props {
	size: string;
	headingColor?: string;
}

export const Description: FC<Props> = ({ headingColor = 'black', size }) => {
	return (
		<Heading size={size} color={headingColor}>
			I am{' '}
			<TypeAnimation
				sequence={descriptions}
				repeat={Infinity}
				style={{ display: 'inline', color: '#00B4D8' }}
			/>
		</Heading>
	);
};

const descriptions = [
	'a Leader',
	1000,
	'a Team Player',
	1000,
	'a Web Developer',
	1000,
	'an Engineer',
	1000,
	'a Communicator',
	1000,
	'Hardworking',
	1000,
	'an Innovator',
	1000,
];
