import { FC } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	ListItem,
	Text,
	UnorderedList,
	Link,
} from '@chakra-ui/react';
import '../Projects.css';
import { openInNewTab } from '../../../Header/Sidebar';

interface Props {
	descriptions: string[];
	icons: JSX.Element[];
	links: {
		label: string;
		url: string;
		icon: JSX.Element;
	}[];
	toggle: () => void;
}

export const BackCard: FC<Props> = ({ descriptions, icons, links, toggle }) => {
	return (
		<Card>
			<CardBody className='back-card-body'>
				<UnorderedList>
					{descriptions.map((description) => (
						<ListItem key={description}>
							<Text>{description}</Text>
						</ListItem>
					))}
				</UnorderedList>
				<div className='icon-row-sm'>{[...icons]}</div>

				{links.map((link) => (
					<Button
						key={link.label}
						onClick={() => openInNewTab(link.url, undefined)}
						leftIcon={link.icon}
						alignItems='center'
					>
						{link.label}
					</Button>
				))}
			</CardBody>
			<CardFooter className='front-card-body' h='fit-content'>
				<small>
					<Link onClick={toggle}>
						<u>Go back</u>
					</Link>
				</small>
			</CardFooter>
		</Card>
	);
};
