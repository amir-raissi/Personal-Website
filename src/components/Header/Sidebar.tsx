import {
	Box,
	Button,
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerBody,
	DrawerContent,
	VStack,
	Image,
	HStack,
	IconButton,
	Container,
	Text,
	useToast,
	Tooltip,
} from '@chakra-ui/react';
import initals from '../../assets/initals.svg';
import resume from '../../assets/Resume.pdf';
import {
	FaHome,
	FaUserAlt,
	FaList,
	FaBriefcase,
	FaProjectDiagram,
	FaLinkedin,
	FaGithub,
	FaEnvelope,
	FaFileDownload,
} from 'react-icons/fa';

interface Props {
	onClose: () => void;
	isOpen: boolean;
	variant?: string;
	refActions: {
		navHome: () => void | undefined;
		navAbout: () => void | undefined;
		navSkills: () => void | undefined;
		navExperiences: () => void | undefined;
		navProjects: () => void | undefined;
	};
}

export default function Sidebar({
	onClose,
	isOpen,
	variant,
	refActions,
}: Props) {
	return variant === 'sidebar' ? (
		<Box
			position='fixed'
			left={0}
			p={5}
			w='30%'
			top={0}
			h='100%'
			boxShadow={'0px 0px 10px rgba(0,0,0,0.5)'}
		>
			<SidebarContent onClose={onClose} refActions={refActions} />
		</Box>
	) : (
		<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody>
						<SidebarContent onClose={onClose} refActions={refActions} />
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
}

interface SidebarContentProps {
	onClose: () => void;
	refActions: {
		navHome: () => void | undefined;
		navAbout: () => void | undefined;
		navSkills: () => void | undefined;
		navExperiences: () => void | undefined;
		navProjects: () => void | undefined;
	};
}

function SidebarContent({ onClose, refActions }: SidebarContentProps) {
	return (
		<VStack height='100%' w='100%' spacing='5%' p='2.5%'>
			<Image
				src={initals}
				objectFit='cover'
				maxWidth='80%'
				pb='5px'
				alt={`Amir Raissi's initials`}
			/>
			<SidebarButton
				onClick={() => nav(refActions.navHome, onClose)}
				label={'Home'}
			/>
			<SidebarButton
				onClick={() => nav(refActions.navAbout, onClose)}
				label={'About'}
			/>
			<SidebarButton
				onClick={() => nav(refActions.navSkills, onClose)}
				label={'Skills'}
			/>
			<SidebarButton
				onClick={() => nav(refActions.navExperiences, onClose)}
				label={'Experiences'}
			/>
			<SidebarButton
				onClick={() => nav(refActions.navProjects, onClose)}
				label={'Projects'}
			/>
			<Socials />
		</VStack>
	);
}

const nav = (navFunction: () => void | undefined, onClose: () => void) => {
	navFunction();
	onClose();
};

interface SidebarButtonProps {
	onClick: () => void;
	label: string;
}

function SidebarButton({ onClick, label }: SidebarButtonProps) {
	return (
		<Button onClick={onClick} w='100%' h='10%' justifyContent='flex-start'>
			<Container display='flex' minW='fit-content' verticalAlign='baseline'>
				{getButtonIcon(label)}&nbsp;&nbsp;&nbsp;&nbsp;
				<Text fontSize='lg'>{label}</Text>
			</Container>
		</Button>
	);
}

function getButtonIcon(label: string) {
	switch (label) {
		case 'Home':
			return <FaHome fontSize='lg' />;
		case 'About':
			return <FaUserAlt fontSize='lg' />;
		case 'Skills':
			return <FaList fontSize='lg' />;
		case 'Experiences':
			return <FaBriefcase fontSize='lg' />;
		case 'Projects':
			return <FaProjectDiagram fontSize='lg' />;
		default:
			return <></>;
	}
}

function Socials() {
	const toast = useToast();
	return (
		<HStack w='100%' justifyContent='space-evenly'>
			<Tooltip label='Navigate to Linkedin'>
				<IconButton
					variant='ghost'
					onClick={() =>
						openInNewTab('https://www.linkedin.com/in/amir-raissi', undefined)
					}
					aria-label={`Amir Raissi's Linkedin`}
					icon={<FaLinkedin size='32px' />}
					colorScheme='linkedin'
				/>
			</Tooltip>
			<Tooltip label='Navigate to Github'>
				<IconButton
					variant='ghost'
					onClick={() =>
						openInNewTab('https://www.github.com/amir-raissi', undefined)
					}
					aria-label={`Amir Raissi's Github`}
					icon={<FaGithub size='32px' />}
					colorScheme='blackAlpha'
				/>
			</Tooltip>
			<Tooltip label='Copy Email'>
				<IconButton
					variant='ghost'
					onClick={() => openInNewTab('mailto:amir_raissi@yahoo.com', toast)}
					aria-label={`Amir Raissi's Email`}
					icon={<FaEnvelope size='32px' />}
					colorScheme='messenger'
				/>
			</Tooltip>
			<Tooltip label='Download Resume'>
				<IconButton
					variant='ghost'
					onClick={() => downloadResume()}
					aria-label={`Amir Raissi's Resume`}
					icon={<FaFileDownload size='32px' />}
					colorScheme='teal'
				/>
			</Tooltip>
		</HStack>
	);
}

export const openInNewTab = (url: string, toast: any) => {
	if (toast) {
		navigator.clipboard.writeText('amir_raissi@yahoo.com');
		toast({
			title: 'Email Copied!',
			status: 'success',
			duration: 5000,
			position: 'bottom',
		});
	}
	window.open(url, '_blank', 'noopener,noreferrer');
};

export const downloadResume = () => {
	const blob = new Blob([resume], { type: 'pdf' });
	const link = document.createElement('a');
	const url = URL.createObjectURL(blob);
	link.href = url;
	link.download = 'Amir Raissi Resume.pdf';
	document.body.appendChild(link);
	link.click();
	setTimeout(() => {
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	}, 0);
};
