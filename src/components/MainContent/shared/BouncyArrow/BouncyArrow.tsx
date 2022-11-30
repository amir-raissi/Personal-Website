import { FC } from 'react';
import { Center } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import './BouncyArrow.css';

interface Props {
	onClick: () => void;
	color?: string;
}

export const BouncyArrow: FC<Props> = ({ onClick, color = 'white' }) => {
	return (
		<Center className='arrow-container'>
			<FaArrowDown
				className='arrow-icon'
				color={color}
				size='7.5vh'
				onClick={onClick}
			/>
		</Center>
	);
};
