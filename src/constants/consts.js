import { v4 } from 'uuid';
import { ICONS } from './icons';

const BIG_CARDS_INFO = [
	{
		id: v4(),
		borderColor: '#178FF5',
		social: ICONS.facebook,
		name: '@nathanf',
		number: 1987,
		target: 'FOLLOWERS',
		results: '12 Today',
		positive: true
	},
	{
		id: v4(),
		borderColor: '#178FF5',
		social: ICONS.twitter,
		name: '@nathanf',
		number: 1044,
		target: 'FOLLOWERS',
		results: '99 Today',
		positive: true
	},
	{
		id: v4(),
		borderColor:
			'linear-gradient(to left ,#DF4896 20%, #EE877E 33% 50%,#FDC366 66%)',
		social: ICONS.instagram,
		name: '@realnathanf',
		number: 11000,
		target: 'FOLLOWERS',
		results: '1099 Today',
		positive: true
	},
	{
		id: v4(),
		borderColor: '#C4032B',
		social: ICONS.youtube,
		name: 'Nathan F.',
		number: 8239,
		target: 'SUBSCRIBERS',
		results: '144 Today',
		positive: false
	}
];

const SMALL_CARDS_INFO = [
	{
		id: v4(),
		social: ICONS.facebook,
		title: 'Page Views',
		number: 87,
		results: '3%',
		positive: true
	},
	{
		id: v4(),
		social: ICONS.facebook,
		title: 'Likes',
		number: 52,
		results: '2%',
		positive: false
	},
	{
		id: v4(),
		social: ICONS.instagram,
		title: 'Likes',
		number: 5462,
		results: '2257%',
		positive: true
	},
	{
		id: v4(),
		social: ICONS.instagram,
		title: 'Profile Views',
		number: '52k',
		results: '1375%',
		positive: true
	},
	{
		id: v4(),
		social: ICONS.twitter,
		title: 'Retweets',
		number: '117',
		results: '303%',
		positive: true
	},
	{
		id: v4(),
		social: ICONS.twitter,
		title: 'Likes',
		number: '507',
		results: '553%',
		positive: true
	},
	{
		id: v4(),
		social: ICONS.youtube,
		title: 'Likes',
		number: '107',
		results: '19%',
		positive: false
	},
	{
		id: v4(),
		social: ICONS.youtube,
		title: 'Total Views',
		number: '1407',
		results: '12%',
		positive: false
	}
];

export { BIG_CARDS_INFO, SMALL_CARDS_INFO };
/* 
toLocaleString('en-US');
 */
