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
      companyName: <a href="http://hivaland.com/" target="_blank">Hivaland </a>,
      characters: [
        "bloock.ir : One of the first blockchain startups in Iran to create a platform for renting books on the ethereum blockchain platform",
        "bitseen.com : An exchange for crypto currencies.",
        " ReactJs, GatsbyJs, GraphQL, Solidity.",
      ],
    },
    {
      duration: "2016-2017",
      title: "FRONT-END DEV",
      companyName: <a href="https://sarayar.com/" target="_blank"> Sarayar</a>,
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
  skills: [
    {
      reactSkill: [
        {
          skill: "Functional Component",
          link:
            "https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/modules/%E2%80%8C%E2%80%8C%E2%80%8CBottomNavigation.jsx",
        },

        {
          skill: "Class Component",
          link: "",
        },
        {
          skill: "Context",
          link:
            "https://github.com/NavidGoalpure/resume/blob/master/src/components/skillsTour/shopping/Context.js",
        },
        {
          skill: "Redux",
          link:
            "https://github.com/NavidGoalpure/resume/blob/master/src/state/ReduxWrapper.js",
        },
        {
          skill: "Hook",
          link:
            "https://github.com/NavidGoalpure/resume/blob/master/src/components/skillsTour/shopping/hooks/useHover.js",
        },
        {
          skill: "Typescript",
          link: "",
        },
      ],
    },
    {
      css: [
        {
          skill: "Styled-Component",
          link: "",
        },
        {
          skill: "Radium",
          link: "",
        },
        {
          skill: "Emotion",
          link: "",
        },
        {
          skill: "Bootstrap",
          link: "",
        },
        {
          skill: "Tailwind",
          link: "",
        },
        {
          skill: "MaterialUi",
          link:
            "https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/modules/PostCards/PostCard.jsx",
        },

        {
          skill: "BEM Metodology",
          link: "",
        },
      ],
    },
    {
      other: [
        {
          skill: "Restfull-API",
          link: "",
        },
        {
          skill: "GraphQL",
          link:
            "https://github.com/NavidGoalpure/SteemAceUi/blob/master/src/queries/feedsQuery.js",
        },
        {
          skill: "Nodejs",
          link: "",
        },
        {
          skill: "",
          link: "",
        },
      ],
    },
  ],
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
      url: "http://www.bitseen.com",
      title: "BitSeen",
      desc: "Be one with the mountains",
    },
    {
      src: require("./images/gallery/fulls/03.jpg"),
      // thumbnail: require('./images/gallery/thumbs/03.jpg'),
      url: "https://www.nardun.ir",
      title: "Nardun",
      desc: "Be one with the time",
    },
  ],
  img_set_2: [
    {
      src: require("./images/gallery/fulls/05.jpg"),
      thumbnail: require("./images/gallery/thumbs/05.jpg"),
      title: "Any Curiosity",
      desc: "Be one with the curiosity",
      full: true,
    },
    {
      src: require("./images/gallery/fulls/06.jpg"),
      thumbnail: require("./images/gallery/thumbs/06.jpg"),
      title: "Any source of enlightenment",
      desc: "Be one with the soul",
    },
    {
      src: require("./images/gallery/fulls/07.jpg"),
      thumbnail: require("./images/gallery/thumbs/07.jpg"),
      title: "Be in present",
      desc: "Be one with the present",
    },
  ],
  img_set_3: [
    {
      src: require("./images/gallery/fulls/08.jpg"),
      thumbnail: require("./images/gallery/thumbs/08.jpg"),
      title: "Give away",
      desc: "Be one with the empathy",
    },
    {
      src: require("./images/gallery/fulls/09.jpg"),
      thumbnail: require("./images/gallery/thumbs/09.jpg"),
      title: "Moment",
      desc: "Be one with the moment",
    },
    {
      src: require("./images/gallery/fulls/10.jpg"),
      thumbnail: require("./images/gallery/thumbs/10.jpg"),
      title: "Serenity",
      desc: "Be one with the purity",
      full: true,
    },
  ],
}
