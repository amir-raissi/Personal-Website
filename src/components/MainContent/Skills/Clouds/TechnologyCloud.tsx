import { FC } from 'react';
import { tagType, CloudRenderer } from './CloudRenderer';
//@ts-ignore
import { TagCloud } from 'react-tagcloud';
import {
	SiAngular,
	SiReact,
	SiLinux,
	SiJest,
	SiNodedotjs,
	SiApachemaven,
	SiSpringboot,
	SiVite,
	SiWeb3Dotjs,
	SiJquery,
	SiNestjs,
	SiRedux,
} from 'react-icons/si';
import { BunIconPlain } from '../../shared/ColoredIcons';

export const TechnologyCloud: FC = () => {
	return (
		<TagCloud
			className='cloudtag'
			tags={techData}
			minSize={0}
			maxSize={2}
			renderer={CloudRenderer}
		/>
	);
};

const techData: tagType[] = [
	{
		value: 'Angular',
		count: 30,
		icon: <SiAngular size={32} />,
		bgColor: '#DD0031',
		fontColor: 'white',
	},
	{
		value: 'React',
		count: 30,
		icon: <SiReact size={32} />,
		bgColor: '#5CCFEE',
		fontColor: 'white',
	},
	{
		value: 'Linux',
		count: 30,
		icon: <SiLinux size={32} />,
		bgColor: 'black',
		fontColor: 'white',
	},
	{
		value: 'Jest',
		count: 30,
		icon: <SiJest size={32} />,
		bgColor: '#BC3A13',
		fontColor: 'white',
	},
	{
		value: 'Node.js',
		count: 30,
		icon: <SiNodedotjs size={32} />,
		bgColor: '#89BB3C',
		fontColor: 'white',
	},
	{
		value: 'Maven',
		count: 30,
		icon: <SiApachemaven size={32} />,
		bgColor: '#F26304',
		fontColor: 'white',
	},
	{
		value: 'SpringBoot',
		count: 30,
		icon: <SiSpringboot size={32} />,
		bgColor: '#67AA3C',
		fontColor: 'white',
	},
	{
		value: 'Vite',
		count: 30,
		icon: <SiVite size={32} />,
		bgColor: '#B231E5',
		fontColor: 'white',
	},
	{
		value: 'Web3.js',
		count: 30,
		icon: <SiWeb3Dotjs size={32} />,
		bgColor: '#9C0EB7',
		fontColor: 'white',
	},
	{
		value: 'jQuery',
		count: 30,
		icon: <SiJquery size={32} />,
		bgColor: '#1161A0',
		fontColor: 'white',
	},
	{
		value: 'Nest.js',
		count: 30,
		icon: <SiNestjs size={32} />,
		bgColor: '#D5214A',
		fontColor: 'white',
	},
	{
		value: 'Redux',
		count: 30,
		icon: <SiRedux size={32} />,
		bgColor: '#764ABC',
		fontColor: 'white',
	},
	{
		value: 'Bun',
		count: 30,
		icon: <BunIconPlain boxSize={8} />,
		bgColor: '#FBF0DF',
		fontColor: 'black',
	},
];
