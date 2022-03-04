// gatsby can be crash if this data hold in config.js then manipulate them
// then i hold this data in this file

import React from 'react'

export default {
  employment: [
    {
      duration: '2020-now',
      title: 'FRONT-END DEV',
      companyName: 'Lions DS (remote)',
      characters: [
        'Implement a variety of websites for an awesome marketing team in Canada',
        'Technologies: ReactJs, NextJs, SSR, Stripe, Jamstack.',
      ],
    },
    {
      duration: '2020-2020',
      title: 'FRONT-END DEV',
      companyName: 'Asan Pardakht (eCommerce Section)',
      characters: [
        'AsanPardakht- with the AAP brand - is the largest Fintech in Iran (with more than 11M active users), which decided to enter the field of eCommerce with the launch of the startup "Bazlia". Bazlia was supposed to take over a part of this market in Iran by connecting sellers to buyers, but in the end, it was shut down in November 2020. The reason for stopping Bazlia was that AsanPardakht decided to stop investing in it and move on to more profitable projects.',
        'Technologies: ReactJs, NextJs, SSR, PWA.',
      ],
    },
    {
      duration: '2016- 2017',
      title: 'FRONT-END DEV',
      companyName: (
        <a href="https://sarayar.com/" target="_blank" rel="noreferrer">
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
        'Failure cause: Lack of funds and workforce.',
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
        skill: 'Context',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/components/pages/skillsTour/shopping/context.tsx',
        isVersed: true,
      },
      {
        skill: 'Redux',
        link:
          'https://github.com/NavidGoalpure/resume/blob/master/src/state/ReduxWrapper.js',
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
        isVersed: false,
      },
      {
        skill: 'React-testing-library',
        link:
          'https://github.com/NavidGoalpure/lightmag/blob/master/libs/ui/src/lib/Elements/RadioButton/RadioButton.stories.tsx',
        isVersed: true,
      },
      {
        skill: 'NX',
        link: 'https://github.com/NavidGoalpure/lightmag',
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
        skill: 'Linux (Clinet)',
        link: '',
        isVersed: true,
      },
    ],
  },
  img_set_1: [
    {
      src: require('./assets/images/gallery/fulls/01.jpg'),

      // thumbnail: require('./assets/images/gallery/thumbs/01.jpg'),
      url: 'https://hezarchiz.com',
      title: 'Hezarchiz',
      desc: 'Iranian blockchain project aggrigator',
      full: true,
    },
    {
      src: require('./assets/images/gallery/fulls/02.jpg'),
      // thumbnail: require('./assets/images/gallery/thumbs/02.jpg'),
      url: 'https://runiswap.com/#/swap',
      title: 'Runiswap',
      desc:
        'Persian interface for uniswap (only open if you have Web3 Tools like Geth or Metamask)',
    },
    {
      src: require('./assets/images/gallery/fulls/03.jpg'),
      // thumbnail: require('./assets/images/gallery/thumbs/03.jpg'),
      url: 'https://www.nardun.ir',
      title: 'Nardun',
      desc: 'A collection of questions for conversation',
    },
    {
      src: require('./assets/images/gallery/fulls/04.jpg'),
      // thumbnail: require('./assets/images/gallery/thumbs/03.jpg'),
      url: 'https://www.morsid.com',
      title: 'Morsid',
      desc: 'A platform to set meeting with Marketing experts',
    },
    {
      src: require('./assets/images/gallery/fulls/05.jpg'),
      // thumbnail: require('./assets/images/gallery/thumbs/03.jpg'),
      url: 'https://tw.enk.io/',
      title: 'Twenkio',
      desc: 'A tweeter bot for like and follow',
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
