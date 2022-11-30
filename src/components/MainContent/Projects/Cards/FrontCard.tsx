import { FC } from 'react';
import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Link,
	Divider,
	Heading,
} from '@chakra-ui/react';
import '../Projects.css';

interface Props {
	projectName: string;
	imgSrc: string;
	toggle: () => void;
}

export const FrontCard: FC<Props> = ({ projectName, imgSrc, toggle }) => {
	return (
		<Card>
			<CardBody className='front-card-body'>
				<Image src={imgSrc} alt={projectName} />
				<Divider />
				<Heading>{projectName}</Heading>
			</CardBody>
			<CardFooter className='front-card-body'>
				<small>
					<Link onClick={toggle}>
						<u>Click to see more</u>
					</Link>
				</small>
			</CardFooter>
		</Card>
	);
};
