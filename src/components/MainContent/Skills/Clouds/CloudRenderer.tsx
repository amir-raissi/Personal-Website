import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import '../Skills.css';

export type tagType = {
	value: string;
	count: number;
	icon: JSX.Element;
	bgColor: string;
	fontColor: string;
};

export const CloudRenderer: FC<tagType> = ({
	value,
	icon,
	bgColor,
	fontColor,
}: tagType) => {
	return (
		<Flex
			bg={bgColor}
			key={value}
			width='max-content'
			flexDir='row'
			style={{
				border: `2px solid ${bgColor}`,
				margin: '3px',
				padding: '3px',
				display: 'inline-block',
				color: fontColor,
				fontWeight: 'bold',
			}}
		>
			<div className='item'>
				{icon}
				<Text ml='10px' fontSize='3xl'>
					{value}
				</Text>
			</div>
		</Flex>
	);
};
