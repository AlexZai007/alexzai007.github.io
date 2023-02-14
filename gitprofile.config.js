// gitprofile.config.js

const config = {
  github: {
    username: 'AlexZai007', // Your GitHub org/user name. (Required)
    sortBy: 'updates', // stars | updated
    limit: 7, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
		facebook: '',
    dev: 'alexzai007',
    website: 'https://alexzai007.github.io',
    phone: '+79161202327',
    email: 'arifulalamszn@gmail.com',
    telegram: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'C++',
    'C#',
    'Python',
    'Dart',
    'Swift',
    'Lua',
    'Java',
    'Django',
    '.NET',
    'Flutter',
		'JavaScript',
		'React.js',
		'Node.js',
		'MySQL',
		'PostgreSQL',
		'Git',
 		'Docker',
  ],
  experiences: [
		{
    	company: 'Proton IT',
    	position: 'CEO + Developer',
    	from: 'September 2022',
    	to: 'Present',
    	companyLink: 'https://proton.pw',
  	},
  	{
    	company: 'Telegram SMM',
    	position: 'CEO + Developer',
    	from: 'July 2022',
    	to: 'Present',
    	companyLink: 'https://sunset.rp',
  	},
  	{
    	company: 'Proton Crypto',
    	position: 'CEO',
    	from: 'September 2022',
    	to: 'Present',
    	companyLink: 'https://proton.pw',
  	},
  	{
    	company: 'SunSerRP',
    	position: 'CEO + Developer',
    	from: 'July 2019',
    	to: 'August 2021',
    	companyLink: 'https://sunset.rp',
  	},
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
  	{
    	institution: 'SamSung Academy',
    	degree: 'In progress',
    	from: '2022',
    	to: '2023',
  	},
  	{
    	institution: 'Плехановский университет',
    	degree: 'In progress',
    	from: '2022',
    	to: '2023',
  	},
  	{
    	institution: 'Физтех-лицей им. П.Л. Капицы',
    	degree: 'Successfully',
    	from: '2022',
    	to: '2022',
  	},
  	{
  		institution: 'Школа молодого инжинера',
  		degree: 'Successfully',
  		from: '2022',
  		to: '2021',
  	},
  	{
    	institution: 'Школа молодого инжинера',
    	degree: 'Successfully',
    	from: '2022',
    	to: '2021',
  	},
  	{
    	institution: 'Школа 2103',
    	degree: 'Successfully',
    	from: '2021',
    	to: '2021',
 		},
  	{
    	institution: '1596',
    	degree: 'Successfully',
    	from: '2021',
    	to: '2021',
  	},
  	{
    	institution: 'ВШЭ',
    	degree: 'Successfully',
    	from: '2021',
    	to: '2021',
  	},
  	{
    	institution: '1506',
    	degree: 'In progress',
    	from: '20014',
    	to: 'now',
  	},
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
