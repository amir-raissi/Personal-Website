import { FC } from 'react';
import { Flex, Tooltip, Text, Link } from '@chakra-ui/react';
import { BouncyArrow } from '../shared/BouncyArrow/BouncyArrow';
import './Footer.css';

interface Props {
	homeRef: React.RefObject<HTMLDivElement>;
}

export const Footer: FC<Props> = ({ homeRef }) => {
	return (
		<>
			<Flex w='100%' justifyContent='center' pb='20px' flexDir='column'>
				<Tooltip label='Back to the top!'>
					<div className='rotate-180'>
						<BouncyArrow
							onClick={() =>
								homeRef.current?.scrollIntoView({ behavior: 'smooth' })
							}
							color='#00B4D8'
						/>
					</div>
				</Tooltip>
				<Flex ml='5vh' mr='5vh'>
					<Text mt='5vh' fontSize='xs' fontWeight='bold'>
						Website Designed by Amir Hossien Raissi | Copyright © 2022 Amir
						Hossien Raissi | Code released under{' '}
						<Link
							href='https://github.com/amir-raissi/Personal-Website/blob/main/LICENSE'
							color='#00B4D8'
						>
							MIT
						</Link>{' '}
						license | Last Updated: 30 November, 2022
					</Text>
				</Flex>
			</Flex>
		</>
	);
};
