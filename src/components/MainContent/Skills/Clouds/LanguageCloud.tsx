import { FC } from 'react';
import {
	SiTypescript,
	SiJavascript,
	SiJava,
	SiMysql,
	SiSolidity,
	SiPython,
	SiGnubash,
	SiCplusplus,
	SiHtml5,
	SiCss3,
} from 'react-icons/si';
import { tagType, CloudRenderer } from './CloudRenderer';
//@ts-ignore
import { TagCloud } from 'react-tagcloud';

export const LanguageCloud: FC = () => {
	return (
		<TagCloud
			className='cloudtag'
			tags={langData}
			minSize={0}
			maxSize={2}
			renderer={CloudRenderer}
		/>
	);
};

const langData: tagType[] = [
	{
		value: 'TypeScript',
		count: 30,
		icon: <SiTypescript size={32} />,
		bgColor: '#007ACC',
		fontColor: 'white',
	},
	{
		value: 'JavaScript',
		count: 30,
		icon: <SiJavascript size={32} />,
		bgColor: '#F7DF1E',
		fontColor: 'black',
	},
	{
		value: 'Java',
		count: 30,
		icon: <SiJava size={32} />,
		bgColor: '#E32C2E',
		fontColor: 'white',
	},
	{
		value: 'MySQL',
		count: 30,
		icon: <SiMysql size={32} />,
		bgColor: '#003545',
		fontColor: 'white',
	},
	{
		value: 'Solidity',
		count: 30,
		icon: <SiSolidity size={32} />,
		bgColor: '#363636',
		fontColor: 'white',
	},
	{
		value: 'Python',
		count: 30,
		icon: <SiPython size={32} />,
		bgColor: '#007EC6',
		fontColor: 'white',
	},
	{
		value: 'Bash',
		count: 30,
		icon: <SiGnubash size={32} />,
		bgColor: 'black',
		fontColor: 'white',
	},
	{
		value: 'C/C++',
		count: 30,
		icon: <SiCplusplus size={32} />,
		bgColor: '#659BD3',
		fontColor: 'white',
	},
	{
		value: 'HTML',
		count: 30,
		icon: <SiHtml5 size={32} />,
		bgColor: '#DD4B25',
		fontColor: 'white',
	},
	{
		value: 'CSS',
		count: 30,
		icon: <SiCss3 size={32} />,
		bgColor: '#2862E9',
		fontColor: 'white',
	},
];
