import { FC } from 'react';
import { tagType, CloudRenderer } from './CloudRenderer';
//@ts-ignore
import { TagCloud } from 'react-tagcloud';
import {
	SiGithub,
	SiSlack,
	SiNpm,
	SiJenkins,
	SiVisualstudiocode,
	SiJira,
	SiMicrosoftoffice,
	SiPostman,
	SiBitbucket,
	SiIntellijidea,
} from 'react-icons/si';

export const ToolsCloud: FC = () => {
	return (
		<TagCloud
			className='cloudtag'
			tags={toolsData}
			minSize={0}
			maxSize={2}
			renderer={CloudRenderer}
		/>
	);
};

const toolsData: tagType[] = [
	{
		value: 'Github',
		count: 30,
		icon: <SiGithub size={32} />,
		bgColor: '#858585',
		fontColor: 'white',
	},
	{
		value: 'Slack',
		count: 30,
		icon: <SiSlack size={32} />,
		bgColor: '#461447',
		fontColor: 'white',
	},
	{
		value: 'NPM',
		count: 30,
		icon: <SiNpm size={32} />,
		bgColor: '#C20000',
		fontColor: 'white',
	},
	{
		value: 'Jenkins',
		count: 30,
		icon: <SiJenkins size={32} />,
		bgColor: '#C83530',
		fontColor: 'white',
	},
	{
		value: 'VSCode',
		count: 30,
		icon: <SiVisualstudiocode size={32} />,
		bgColor: '#3AA0E7',
		fontColor: 'white',
	},
	{
		value: 'Jira',
		count: 30,
		icon: <SiJira size={32} />,
		bgColor: '#004EC2',
		fontColor: 'white',
	},
	{
		value: 'IntelliJ',
		count: 30,
		icon: <SiIntellijidea size={32} />,
		bgColor: '#DD1265',
		fontColor: 'white',
	},
	{
		value: 'Office',
		count: 30,
		icon: <SiMicrosoftoffice size={32} />,
		bgColor: '#CE3A03',
		fontColor: 'white',
	},
	{
		value: 'Postman',
		count: 30,
		icon: <SiPostman size={32} />,
		bgColor: '#F26634',
		fontColor: 'white',
	},
	{
		value: 'Bitbucket',
		count: 30,
		icon: <SiBitbucket size={32} />,
		bgColor: '#004EC2',
		fontColor: 'white',
	},
];
