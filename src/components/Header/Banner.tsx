import { Flex, Box, IconButton, Center, Heading } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
interface Props {
	onShowSidebar: () => void;
	showSidebarBtn?: boolean;
}

export default function Banner({ onShowSidebar }: Props) {
	return (
		<Flex p={4} h='75px' justifyContent='center' w='100vw'>
			<Box flex='1'>
				<IconButton
					aria-label='Sidebar Menu'
					icon={<MdMenu />}
					variant='outline'
					onClick={onShowSidebar}
				/>
			</Box>
			<Center flex='3'>
				<Heading size='xl'>Amir Raissi</Heading>
			</Center>
			<Box flex='1' />
		</Flex>
	);
}
