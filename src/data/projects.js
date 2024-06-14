// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'MERN Stack - CRUD',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'NextJS - LandingPage',
		category: 'Web Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Hospital - LandingPage - TypeScript',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Youtube Clone API',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Social Media App',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'E-commerce FakeStore API',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
