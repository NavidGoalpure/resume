// gatsby can be crash if this data hold in config.js then manipulate them
// then i hold this data in this file

import React from "react"

export default {
  coverLetter: (
    <p>
      I have many years of experience as a founder or employee of various
      startups. To answer the needs of different startups I had to learn various
      types of programming skills. for example, I learned Android programming
      for Ninisu, Reactjs for Dehgardi, and Solidity for Bloock.
      <br />
      Although in recent years I have focused on working on Reactjs, the
      environment I described above has enabled me to learn different languages
      and frameworks quickly.
      <br />
      The most important meaning of my life in recent years has been
      contributing to open source culture specially Blockchain and
      decentralization. That's why I've written a variety of articles and held
      some educational events in this area and tried to run startups based on
      Ethereum, Steem, Blockstack in Iran. But I had to abandon all of these
      projects due to deterrent laws in Iran and investors' hesitation to invest
      in blockchain-based startups.
      <br />
      Nowadays, this fact is clear to me, if I want to contribute to this
      movement I should have left my country to work in companies operating in
      blockchain field.
      <br />
      I can make you sure, if I get the opportunity to work in such a company, I
      will greatly appreciate this opportunity.
      <br />
      Navid Goalpure
    </p>
  ),
  employment: [
    {
      duration: "2017-2020",
      title: "FRONT-END DEV",
      companyName: (
        <a href="http://hivaland.com/" target="_blank">
          Hivaland{" "}
        </a>
      ),
      characters: [
        "bloock.ir : One of the first blockchain startups in Iran to create a platform for renting books on the ethereum blockchain platform",
        "bitseen.com : An exchange for crypto currencies.",
        " ReactJs, GatsbyJs, GraphQL, Solidity.",
      ],
    },
    {
      duration: "2016-2017",
      title: "FRONT-END DEV",
      companyName: (
        <a href="https://sarayar.com/" target="_blank">
          {" "}
          Sarayar
        </a>
      ),
      characters: [
        "One of the well-known real-state renting platforms in the country.",
        "Development & refactoring already established website (sarayar.com).",
        "ReactJs, Bootstrap, Restful-API, Webpack.",
      ],
    },

    {
      duration: "2013-2016",
      title: "FOUNDER",
      companyName: "ninisu",
      characters: [
        "A +4.5 rated app for New-Mothers.",
        "Failure cause: Lack of fund and workforce.",
        "Django+Nginx, Java for Android.",
      ],
    },

    {
      duration: "2012-2013",
      title: "CO-FOUNDER",
      companyName: "dbjobs",
      characters: [
        "A complete failure! But learned how NOT to handle a startup.",
        "My first startup experience, after years of employment.",
        "Goal: A universal YellowPages for the country.",
      ],
    },
  ],
  skills: {
    reactSkills: [
      {
        skill: "Functional Component",
        link:
          "https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/modules/%E2%80%8C%E2%80%8C%E2%80%8CBottomNavigation.jsx",
        isVersed: true,
      },

      {
        skill: "Class Component",
        link: "",
        isVersed: true,
      },
      {
        skill: "Context",
        link:
          "https://github.com/NavidGoalpure/resume/blob/master/src/components/pages/skillsTour/shopping/Context.js",
        isVersed: true,
      },
      {
        skill: "Redux",
        link:
          "https://github.com/NavidGoalpure/resume/blob/master/src/state/ReduxWrapper.js",
        isVersed: true,
      },
      {
        skill: "Hook",
        link:
          "https://github.com/NavidGoalpure/resume/blob/master/src/components/pages/skillsTour/shopping/hooks/useHover.js",
        isVersed: true,
      },
      {
        skill: "HOC/RenerProps/CustomeHook",
        link:
          "https://github.com/NavidGoalpure/resume/blob/master/src/state/ReduxWrapper.js",
        isVersed: true,
      },
      {
        skill: "Typescript",
        link: "",
        isVersed: false,
      },
    ],

    cssSkills: [
      {
        skill: "Styled-Component",
        link:
          "https://github.com/NavidGoalpure/nardoon/blob/master/src/components/Card.js",
        isVersed: true,
      },
      {
        skill: "Emotion",
        link:
          "https://github.com/NavidGoalpure/futureWizardz/blob/master/src/components/ProjectCard.jsx",
        isVersed: true,
      },
      {
        skill: "Tailwind",
        link:
          "https://github.com/NavidGoalpure/futureWizardz/blob/master/src/components/AboutSub.jsx",
        isVersed: true,
      },
      {
        skill: "BEM Metodology",
        link: "",
        isVersed: true,
      },
      {
        skill: "Bootstrap",
        link: "",
        isVersed: false,
      },
      {
        skill: "MaterialUi",
        link:
          "https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/modules/PostCards/PostCard.jsx",
        isVersed: true,
      },

      {
        skill: "postcss",
        link:
          "https://github.com/NavidGoalpure/mrNewid/blob/master/src/components/Article/Headline.js",
        isVersed: false,
      },
      {
        skill: "sass,scss",
        link:
          "https://github.com/NavidGoalpure/resume/blob/master/src/assets/sass/components/_gallery.scss",
        isVersed: false,
      },
    ],

    other: [
      {
        skill: "Restfull-API",
        link:
          "https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/pages/feedback/GoogleFormUi.jsx",
        isVersed: true,
      },
      {
        skill: "GraphQL",
        link:
          "https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/queries/feedsQuery.js",
        isVersed: true,
      },
      {
        skill: "PWA",
        link: "https://www.nardun.ir",
        isVersed: false,
      },
      {
        skill: "Nodejs",
        link: "https://github.com/NavidGoalpure/SteemAceApi",
        isVersed: false,
      },
      {
        skill: "Linux (Clinet)",
        link: "",
        isVersed: true,
      },
    ],
  },
  img_set_1: [
    {
      src: require("./images/gallery/fulls/01.jpg"),
      // thumbnail: require('./images/gallery/thumbs/01.jpg'),
      url: "https://mrnewid.ir",
      title: "MrNewId",
      desc: "My blog about Blockchain",
      full: true,
    },
    {
      src: require("./images/gallery/fulls/02.jpg"),
      // thumbnail: require('./images/gallery/thumbs/02.jpg'),
      url: "http://bitseen.com",
      title: "BitSeen",
      desc: "A exchange for crypto currencies",
    },
    {
      src: require("./images/gallery/fulls/03.jpg"),
      // thumbnail: require('./images/gallery/thumbs/03.jpg'),
      url: "https://www.nardun.ir",
      title: "Nardun",
      desc: "A collection of questions for conversation",
    },
    {
      src: require("./images/gallery/fulls/04.jpg"),
      // thumbnail: require('./images/gallery/thumbs/03.jpg'),
      url: "https://www.sarayar.com",
      title: "Sarayar",
      desc: "A airbnb for Iran",
    },
  ],
  tourSteps: [
    {
      target: "#one",
      content: "This page disigned for show my Skills on react. at least one skill used to create each section. this sections only designed for this goal and dont have a real use.",
      title: "Tour Guidanve",
      placement: "center",
    },
    {
      target: "#one",
      content: "If you favorite a image or add it to cart, it is add to 'Context'.",
      title: "Context Provider",
      placement: "top-start",
    },
    {
      target: ".photos",
      content: "It use 'Custom Hook' to handel the Hover event.",
      title: "Hook",
    },
    {
      target: ".table-wrapper",
      content: "In this section, selected images are read from 'context'",
      title: " Context Consumer",
    },
    {
      target: "#redux-button",
      content: "This button enable/disable a toggle for beaty or ugly disign with 'Redux'",
      title: "Redux"
    }
  ]

}
