// gatsby can be crash if this data hold in config.js then manipulate them
// then i hold this data in this file

export default {
  employment: [
    {
      duration: '2021-current',
      title: 'Fullstack Web Developer',
      companyName: 'Marabox.com.au',
      characters: [
        'As a Full-Stack Web Developer, I had the exciting opportunity to spearhead the development of Marabox.com.au, an innovative Australian startup. Marabox is a pioneering platform that aims to simplify the immigration process to Australia by connecting individuals with specialized expertise, such as immigration agents and agencies. My role involved building the website from scratch, incorporating essential features like multi-language support and multi-theme options to enhance user experience and accessibility.',
        'For the frontend, I utilized Next.js, a powerful and scalable framework, to create a responsive and dynamic user interface. Leveraging my proficiency in JavaScript, HTML, and CSS, I crafted an intuitive and visually appealing design that engaged users and facilitated seamless navigation throughout the platform.',
        'On the backend, I implemented Nodejs , Sanity as a CMS (Content Management System), ensuring content organization and management were efficient and straightforward. My emphasis on scalability and clean code architecture meant that future developers could effortlessly continue my work, making the project highly sustainable and adaptable to future developments.',
        'Collaborating closely with the Marabox team, I effectively translated their vision into a fully functional platform that now serves as a valuable resource for individuals aspiring to immigrate to Australia. I am proud to have contributed my technical expertise to a venture with such a meaningful impact, and I look forward to exploring new opportunities where I can leverage my skills to create innovative solutions.',
        'Skills: Reactjs, Nextjs, Nodejs, aws lambda, Google Analytics',
      ],
    },
    {
      duration: '2021-2023',
      title: 'FRONT-END DEV',
      companyName: 'Lions DS (remote)',
      characters: [
        'Implement a variety of websites for an awesome marketing team in Canada',
        'Skills: ReactJs, NextJs, SSR, Stripe, Jamstack, Apollo GraphQL · Front-end Engineering · Agile Software Development · Cross-browser Compatibility . A/B Testing · Web Technologies . Analytical Skills · Software Development · Responsive Web Design',
        "Achivements: Drove the successful development and launch of YTJobs.co as the go-to job board for YouTube experts, leveraging my expertise as a frontend developer. Built the website from the ground up, employing innovative frontend frameworks and ensuring an intuitive user experience. Resulted in a remarkable achievement as the website now dominates the market. As the key team member, I played a pivotal role in spearheading the establishment of an agile team and cultivating a dynamic agile culture for YTJobs. Through my help, we successfully drove the team's performance, optimized project delivery, and fostered a culture of continuous improvement, ultimately propelling YTJobs to unprecedented success.",
      ],
    },
    {
      duration: '2020-2021',
      title: 'Fullstack DEV',
      companyName: 'Asan Pardakht (eCommerce Section)',
      characters: [
        'AsanPardakht- with the AAP brand - is the largest Fintech in Iran (with more than 11M active users), which decided to enter the field of eCommerce with the launch of the startup "Bazlia". Bazlia was supposed to take over a part of this market in Iran by connecting sellers to buyers, but in the end, it was shut down in November 2020. The reason for stopping Bazlia was that AsanPardakht decided to stop investing in it and move on to more profitable projects.',
        'Skills: ReactJs, NextJs, SSR, PWA, Jira · Agile Software Development · Cross-browser Compatibility · Redux.js',
        'Achivement: Leveraged TypeScript to revamp critical sections of existing code and created new features for the PWA version of the  platform, resulting in improved user experience, functionality, and code stability. Worked collaboratively with the team to ensure seamless project management and  faster feature development.',
      ],
    },
  ],
  skills: {
    reactSkills: [
      {
        skill: 'React',
        link: 'https://github.com/NavidGoalpure/visabox',
        isVersed: true,
      },
      {
        skill: 'NextJs',
        link: 'https://github.com/NavidGoalpure/visabox',
        isVersed: true,
      },
      {
        skill: 'Nodejs',
        link: 'https://github.com/NavidGoalpure/visabox',
        isVersed: true,
      },
      {
        skill: 'AWS',
        isVersed: false,
      },
      {
        skill: 'Typescript',
        link: 'https://github.com/NavidGoalpure/visabox',
        isVersed: true,
      },
      {
        skill: 'SSR',
        link: '',
        isVersed: true,
      },
      {
        skill: 'Jest',
        link:
          'https://github.com/NavidGoalpure/lightmag/blob/master/libs/ui/src/lib/Elements/Dropdown/Dropdown.test.tsx',
        isVersed: true,
      },
      {
        skill: 'React-testing-library',
        link:
          'https://github.com/NavidGoalpure/lightmag/blob/master/libs/ui/src/lib/Elements/RadioButton/RadioButton.stories.tsx',
        isVersed: true,
      },
    ],

    cssSkills: [
      {
        skill: 'Styled-Component',
        link:
          'https://github.com/NavidGoalpure/nardoon/blob/master/src/components/Card.js',
        isVersed: true,
      },
      {
        skill: 'Tailwind',
        link:
          'https://github.com/NavidGoalpure/futureWizardz/blob/master/src/components/AboutSub.jsx',
        isVersed: true,
      },
      {
        skill: 'BEM Metodology',
        link: '',
        isVersed: true,
      },

      {
        skill: 'SASS,SCSS',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/assets/sass/components/_gallery.scss',
        isVersed: false,
      },
    ],

    other: [
      {
        skill: 'Restfull-API',
        link:
          'https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/pages/feedback/GoogleFormUi.jsx',
        isVersed: true,
      },
      {
        skill: 'GraphQL',
        link:
          'https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/queries/feedsQuery.js',
        isVersed: true,
      },
      {
        skill: 'GROQ',
        link: 'https://github.com/NavidGoalpure/visabox',
        isVersed: true,
      },

      {
        skill: 'sanity (Headless CMS)',
        link: '',
        isVersed: true,
      },
    ],
  },
  img_set_1: [
    {
      src: require('./assets/images/gallery/fulls/02.jpg'),
      // thumbnail: require('./assets/images/gallery/thumbs/03.jpg'),
      url: 'https://www.marabox.com/en',
      title: 'Marabox',
      desc: 'Build a Bridge To Australia ',
    },

    {
      src: require('./assets/images/gallery/fulls/04.jpg'),
      // thumbnail: require('./assets/images/gallery/thumbs/03.jpg'),
      url: 'https://www.ytjobs.co',
      title: 'YT Jobs',
      desc: 'A platform for finding the best YouTube professionals',
    },
    // {
    //   src: require('./assets/images/gallery/fulls/01.jpg'),

    //   // thumbnail: require('./assets/images/gallery/thumbs/01.jpg'),
    //   url: 'https://hezarchiz.com',
    //   title: 'Hezarchiz',
    //   desc: 'Iranian blockchain project aggrigator',
    //   full: true,
    // },
    // {
    //   src: require('./assets/images/gallery/fulls/03.jpg'),
    //   // thumbnail: require('./assets/images/gallery/thumbs/03.jpg'),
    //   url: 'https://www.nardun.ir',
    //   title: 'Nardun',
    //   desc: 'A collection of questions for conversation',
    // },
  ],
  tourSteps: [
    {
      target: '#one',
      content:
        'This page  has been designed for showing the React skills, I am experted in. So that It is not aimed to any other use. You can find out at least one of the skills in each section.',
      title: 'Tour Guidance',
      placement: 'center',
    },
    {
      target: '#one',
      content:
        "This images are fetched from Rest-API. If you favorite an image or add it to cart, it will add to 'Context'.",
      title: 'Context Provider',
      placement: 'top-start',
    },
    {
      target: '.photos',
      content: "This section uses 'Custom Hook' to handel the Hover event.",
      title: 'Hook',
    },
    {
      target: '.table-wrapper',
      content: "In this section, selected images are read from 'context'",
      title: ' Context Consumer',
    },
    {
      target: '#redux-button',
      content:
        "This button make a toggle enable/disable for beautiful or ugly design with 'Redux'",
      title: 'Redux',
    },
  ],
}
