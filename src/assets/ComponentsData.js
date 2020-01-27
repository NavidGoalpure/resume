// gatsby can be crash if this data hold in config.js then manipulate them
// then i hold this data in this file

import React from 'react'

export default {
  employment: [
    {
      duration: '2017-2020',
      title: 'FRONT-END DEV',
      companyName: 'Hivaland',
      characters: [
        'bloock.ir : One of the first blockchain startups in Iran to create a platform for renting books on the ethereum blockchain.',
        'steemAce: A social network on Steem blockchain.',
        'bitseen.com : An exchange for crypto currencies.',
        'Technologies: ReactJs, GatsbyJs, NodeJs, GraphQL, Solidity.',
      ],
    },
    {
      duration: '2016- 2017',
      title: 'FRONT-END DEV',
      companyName: (
        <a href="https://sarayar.com/" target="_blank">
          {' '}
          Sarayar
        </a>
      ),
      characters: [
        'A well-known platform, modeled on AirBnB in Iran.',
        'Develop & refactor already established website (sarayar.com).',
        'Technologies: ReactJs, Bootstrap, Restful-API, Webpack.',
      ],
    },

    {
      duration: '2013-2016',
      title: 'FOUNDER',
      companyName: 'ninisu',
      characters: [
        'An Android app for new mothers (rated +4.5 in Cafe Bazaar).',
        'Failure cause: Lack of fund and workforce.',
        'Technologies: Django+Nginx, Java for Android.',
      ],
    },

    {
      duration: '2012-2013',
      title: 'CO-FOUNDER',
      companyName: 'dbjobs',
      characters: [
        'A complete failure! But learned how NOT to handle a startup.',
        'My first startup experience, after years of employment.',
        'Goal: A national job bank informational website.',
      ],
    },
  ],
  skills: {
    reactSkills: [
      {
        skill: 'Functional Component',
        link:
          'https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/modules/%E2%80%8C%E2%80%8C%E2%80%8CBottomNavigation.jsx',
        isVersed: true,
      },

      {
        skill: 'Class Component',
        link: '',
        isVersed: true,
      },
      {
        skill: 'Context',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/components/pages/skillsTour/shopping/Context.js',
        isVersed: true,
      },
      {
        skill: 'Redux',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/state/ReduxWrapper.js',
        isVersed: true,
      },
      {
        skill: 'Hook',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/components/pages/skillsTour/shopping/hooks/useHover.js',
        isVersed: true,
      },
      {
        skill: 'HOC',
        link:
          'https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/pages/PostsForVote/voteMutation.jsx',
        isVersed: true,
      },
      {
        skill: 'RenerProps',
        link:
          'https://github.com/NavidGoalpure/resume/blob/4e99528d4432db62a3a80fd5116cfc278101dd0d/src/components/Layout.js',
        isVersed: true,
      },
      {
        skill: 'CustomeHook',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/state/ReduxWrapper.js',
        isVersed: true,
      },

      {
        skill: 'Typescript',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/components/pages/skillsTour/shopping/CartItem.tsx',
        isVersed: false,
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
        skill: 'Emotion',
        link:
          'https://github.com/NavidGoalpure/futureWizardz/blob/master/src/components/ProjectCard.jsx',
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
        skill: 'Bootstrap',
        link: '',
        isVersed: false,
      },
      {
        skill: 'MaterialUi',
        link:
          'https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/modules/PostCards/PostCard.jsx',
        isVersed: true,
      },

      {
        skill: 'Postcss',
        link:
          'https://github.com/NavidGoalpure/mrNewid/blob/master/src/components/Article/Headline.js',
        isVersed: false,
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
        skill: 'PWA',
        link: 'https://www.nardun.ir',
        isVersed: false,
      },
      {
        skill: 'Nodejs',
        link: 'https://github.com/NavidGoalpure/SteemAceApi',
        isVersed: false,
      },
      {
        skill: 'Linux (Clinet)',
        link: '',
        isVersed: true,
      },
    ],
  },
  img_set_1: [
    {
      src: require('./images/gallery/fulls/01.jpg'),
      // thumbnail: require('./images/gallery/thumbs/01.jpg'),
      url: 'https://mrnewid.ir',
      title: 'MrNewId',
      desc: 'My blog about Blockchain',
      full: true,
    },
    {
      src: require('./images/gallery/fulls/02.jpg'),
      // thumbnail: require('./images/gallery/thumbs/02.jpg'),
      url: 'http://bitseen.com',
      title: 'BitSeen',
      desc: 'A exchange for crypto currencies',
    },
    {
      src: require('./images/gallery/fulls/03.jpg'),
      // thumbnail: require('./images/gallery/thumbs/03.jpg'),
      url: 'https://www.nardun.ir',
      title: 'Nardun',
      desc: 'A collection of questions for conversation',
    },
    {
      src: require('./images/gallery/fulls/04.jpg'),
      // thumbnail: require('./images/gallery/thumbs/03.jpg'),
      url: 'https://www.sarayar.com',
      title: 'Sarayar',
      desc: 'A airbnb for Iran',
    },
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
        "If you favorite an image or add it to cart, it will add to 'Context'.",
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
