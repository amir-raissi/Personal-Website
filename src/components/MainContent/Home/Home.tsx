import {
	Avatar,
	Center,
	Flex,
	Heading,
	Tooltip,
	VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import HomeBackground from '../../../assets/homebackground.jpg';
import { BouncyArrow } from '../shared/BouncyArrow/BouncyArrow';
import { Description } from '../shared/Description';
import './Home.css';

interface Props {
	homeRef: React.RefObject<HTMLDivElement>;
	aboutRef: React.RefObject<HTMLDivElement>;
}

export const Home: FC<Props> = ({ homeRef, aboutRef }) => {
	return (
		<Center w='100%' h='100vh' bgImage={HomeBackground} ref={homeRef}>
			<Center w='100%' h='100%' bg='rgba(0, 0, 0, 0.5)'>
				<Flex w='100%' h='100%' justifyContent='center' flexFlow='column'>
					<HomeContents />
					<Tooltip label='Scroll down!'>
						<div className='bottom-arrow'>
							<BouncyArrow
								onClick={() =>
									aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
								}
							/>
						</div>
					</Tooltip>
				</Flex>
			</Center>
		</Center>
	);
};

function HomeContents() {
	return (
		<Center flexDir='column' h='100%'>
			<VStack>
				<Avatar
					size='45%'
					name='Amir Raissi'
					src='https://media-exp1.licdn.com/dms/image/C5603AQG8aFbB2BGh6A/profile-displayphoto-shrink_200_200/0/1624227581577?e=1672876800&v=beta&t=xh4wzJYV_yCU30J5eMj1OBYhchtNSBItD6A9X6nqR94'
				/>
				<Heading size='3xl' color='white'>
					Amir Raissi
				</Heading>
				<Description size='lg' headingColor='white' />
			</VStack>
		</Center>
	);
}
