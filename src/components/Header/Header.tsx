import { useState } from 'react';
import { background, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Banner from './Banner';

interface Props {
	variants: any;
	refActions: {
		navHome: () => void | undefined;
		navAbout: () => void | undefined;
		navSkills: () => void | undefined;
		navExperiences: () => void | undefined;
		navProjects: () => void | undefined;
	};
}

export default function Header({ variants, refActions }: Props) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

	return (
		<div className='header'>
			<Sidebar
				variant={variants?.navigation}
				isOpen={sidebarOpen}
				onClose={toggleSidebar}
				refActions={refActions}
			/>
			{variants?.navigation === 'drawer' && (
				<Box
					// @ts-ignore
					ml={!variants?.navigationButton && '30%'}
				>
					<Banner
						showSidebarBtn={variants?.navigationButton}
						onShowSidebar={toggleSidebar}
					/>
				</Box>
			)}
		</div>
	);
}
