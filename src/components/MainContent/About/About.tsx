import { FC } from 'react';
import {
	Link,
	Flex,
	HStack,
	Center,
	Text,
	Button,
	Tooltip,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { Section } from '../shared/Section';
import { Description } from '../shared/Description';
import {
	FaSchool,
	FaCalendarAlt,
	FaAtlas,
	FaEnvelope,
	FaBook,
	FaPhone,
	FaSmileBeam,
	FaLinkedin,
	FaGithub,
	FaFileDownload,
	FaMapMarkedAlt,
} from 'react-icons/fa';
import { openInNewTab, downloadResume } from '../../Header/Sidebar';
import './About.css';

interface Props {
	aboutRef: React.RefObject<HTMLDivElement>;
}

export const About: FC<Props> = ({ aboutRef }) => {
	return (
		<Section sectionRef={aboutRef} title='About Me'>
			<Opening />
			<br />
			<InfoGrid />
			<br />
			<ContactButtons />
		</Section>
	);
};

function Opening() {
	return (
		<div>
			<Description size='md' />
			<br />
			<Text display='inline' fontSize='md'>
				Hi there! My name is{' '}
			</Text>
			<Text fontSize='md' color='#ff6d00' fontWeight='bold' display='inline'>
				Amir Raissi
			</Text>
			<Text fontSize='md' display='inline'>
				. I graduated from Colorado State University with a Bachelor of Science
				in Computer Science and I am currently working as a Software Engineer at
				Visa.
			</Text>
		</div>
	);
}

function InfoGrid() {
	return (
		<div className='about-grid'>
			<School />
			<GraduationDate />
			<Major />
			<Minor />
			<Email />
			<PhoneNumber />
			<Location />
			<Intrests />
		</div>
	);
}

function IconDescription({ Icon, iconLabel }: any) {
	return (
		<HStack alignItems='baseline'>
			{Icon}
			<Text fontWeight='semibold' fontSize='md'>
				{iconLabel}:
			</Text>
		</HStack>
	);
}

function Item({ children }: { children: JSX.Element }) {
	return (
		<Flex alignItems='flex-end' maxWidth='250px' fontSize='md'>
			{children}
		</Flex>
	);
}

function School() {
	return (
		<>
			<IconDescription Icon={<FaSchool />} iconLabel='University' />
			<Item>
				<Link color='#00B4D8' href='https://www.colostate.edu/'>
					Colorado State University
				</Link>
			</Item>
		</>
	);
}

function GraduationDate() {
	return (
		<>
			<IconDescription Icon={<FaCalendarAlt />} iconLabel='Graduation Year' />
			<Item>
				<Text>December 2022</Text>
			</Item>
		</>
	);
}

function Major() {
	return (
		<>
			<IconDescription Icon={<FaAtlas />} iconLabel='Major' />
			<Item>
				<Link color='#00B4D8' href='https://compsci.colostate.edu/'>
					Computer Science
				</Link>
			</Item>
		</>
	);
}

function Minor() {
	return (
		<>
			<IconDescription Icon={<FaBook />} iconLabel='Minor' />
			<Item>
				<Link color='#00B4D8' href='https://economics.colostate.edu/'>
					Economics
				</Link>
			</Item>
		</>
	);
}

function Email() {
	return (
		<>
			<IconDescription Icon={<FaEnvelope />} iconLabel='E-Mail' />
			<Item>
				<Link color='#00B4D8' href='mailto:amir_raissi@yahoo.com'>
					amir_raissi@yahoo.com
				</Link>
			</Item>
		</>
	);
}

function PhoneNumber() {
	return (
		<>
			<IconDescription Icon={<FaPhone />} iconLabel='Phone' />
			<Item>
				<Link color='#00B4D8' href='tel:+17202126272'>
					+1 (720)-212-6272
				</Link>
			</Item>
		</>
	);
}

function Location() {
	return (
		<>
			<IconDescription Icon={<FaMapMarkedAlt />} iconLabel='Location' />
			<Item>
				<Link color='#00B4D8' href='https://goo.gl/maps/cQ2JfL7nHQYB34mb9'>
					Denver, CO
				</Link>
			</Item>
		</>
	);
}

function Intrests() {
	return (
		<>
			<IconDescription Icon={<FaSmileBeam />} iconLabel='Interests' />
			<Item>
				<Text display='inline'>
					Web Development, Economics, Blockchain Technology, Basketball
				</Text>
			</Item>
		</>
	);
}

function ContactButtons() {
	return (
		<Center>
			<Wrap justify='space-evenly'>
				<WrapItem>
					<Tooltip label='Navigate to Linkedin'>
						<Button
							colorScheme='linkedin'
							onClick={() =>
								openInNewTab(
									'https://www.linkedin.com/in/amir-raissi',
									undefined
								)
							}
							leftIcon={<FaLinkedin />}
						>
							LinkedIn
						</Button>
					</Tooltip>
				</WrapItem>
				<WrapItem>
					<Tooltip label='Navigate to Github'>
						<Button
							colorScheme='blackAlpha'
							onClick={() =>
								openInNewTab('https://www.github.com/amir-raissi', undefined)
							}
							leftIcon={<FaGithub />}
						>
							Github
						</Button>
					</Tooltip>
				</WrapItem>
				<WrapItem>
					<Tooltip label='Download Resume'>
						<Button
							colorScheme='teal'
							onClick={() => downloadResume()}
							leftIcon={<FaFileDownload />}
						>
							Resume
						</Button>
					</Tooltip>
				</WrapItem>
			</Wrap>
		</Center>
	);
}
