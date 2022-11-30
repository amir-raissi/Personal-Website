import { FC } from 'react';
import { Spinner } from '@chakra-ui/react';
import './FullPageSpinner.css';

export const FullPageSpinner: FC = () => {
	return (
		<div className='loading-container'>
			<Spinner className='spinner' size='xl' color='#ff6d00' />
		</div>
	);
};
