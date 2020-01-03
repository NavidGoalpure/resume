import React from "react"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SideFooter from "../components/SideFooter"

import heroImage from "../assets/images/pic01.jpg"
import pic2 from "../assets/images/pic02.jpg"
import Gallery from "../components/Gallery"
import ContactForm from "../components/ContactForm"
import {Link} from "gatsby"

const img_set_1 = [
  {
    src: require("../assets/images/gallery/fulls/01.jpg"),
    // thumbnail: require('../assets/images/gallery/thumbs/01.jpg'),
    url: "https://mrnewid.ir",
    title: "MrNewId",
    desc: "My blog about Blockchain",
    full: true,
  },
  {
    src: require("../assets/images/gallery/fulls/02.jpg"),
    // thumbnail: require('../assets/images/gallery/thumbs/02.jpg'),
    url: "http://www.bitseen.com",
    title: "BitSeen",
    desc: "Be one with the mountains",
  },
  {
    src: require("../assets/images/gallery/fulls/03.jpg"),
    // thumbnail: require('../assets/images/gallery/thumbs/03.jpg'),
    url: "https://www.nardun.ir",
    title: "Nardun",
    desc: "Be one with the time",
  },
]
const img_set_2 = [
  {
    src: require("../assets/images/gallery/fulls/05.jpg"),
    thumbnail: require("../assets/images/gallery/thumbs/05.jpg"),
    title: "Any Curiosity",
    desc: "Be one with the curiosity",
    full: true,
  },
  {
    src: require("../assets/images/gallery/fulls/06.jpg"),
    thumbnail: require("../assets/images/gallery/thumbs/06.jpg"),
    title: "Any source of enlightenment",
    desc: "Be one with the soul",
  },
  {
    src: require("../assets/images/gallery/fulls/07.jpg"),
    thumbnail: require("../assets/images/gallery/thumbs/07.jpg"),
    title: "Be in present",
    desc: "Be one with the present",
  },
]
const img_set_3 = [
  {
    src: require("../assets/images/gallery/fulls/08.jpg"),
    thumbnail: require("../assets/images/gallery/thumbs/08.jpg"),
    title: "Give away",
    desc: "Be one with the empathy",
  },
  {
    src: require("../assets/images/gallery/fulls/09.jpg"),
    thumbnail: require("../assets/images/gallery/thumbs/09.jpg"),
    title: "Moment",
    desc: "Be one with the moment",
  },
  {
    src: require("../assets/images/gallery/fulls/10.jpg"),
    thumbnail: require("../assets/images/gallery/thumbs/10.jpg"),
    title: "Serenity",
    desc: "Be one with the purity",
    full: true,
  },
]
const IndexPage = () => (
  <Layout data-test="comp-index-page">
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>Cover Letter</h2>
        </header>
        <div className="content">
          <p>
            I have many years of experience as a founder or employee of various
            startups. To answer the needs of different startups I had to learn
            various types of programming skills. for example, I learned Android
            programming for Ninisu, Reactjs for Dehgardi, and Solidity for
            Bloock.
            <br />
            Although in recent years I have focused on working on Reactjs, the
            environment I described above has enabled me to learn different
            languages and frameworks quickly.
            <br />
            The most important meaning of my life in recent years has been
            contributing to open source culture specially Blockchain and
            decentralization. That's why I've written a variety of articles and
            held some educational events in this area and tried to run startups
            based on Ethereum, Steem, Blockstack in Iran. But I had to abandon
            all of these projects due to deterrent laws in Iran and investors'
            hesitation to invest in blockchain-based startups.
            <br />
            Nowadays, this fact is clear to me, if I want to contribute to this
            movement I should have left my country to work in companies
            operating in blockchain field.
            <br />
            I can make you sure, if I get the opportunity to work in such a
            company, I will greatly appreciate this opportunity.
            <br />
            Navid Goalpure
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Feugiat consequat tempus ultrices</h2>
        </header>
        <div className="content">
          <p>
            <strong>Etiam tristique libero</strong> eu nibh porttitor amet
            fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
            condimentum.
          </p>
          <ul className="feature-icons">
            <li class="icon fa-star">felan bamedan</li>
            <li className="icon fa-bolt">Etiam adipiscing</li>
            <li className="icon fa-signal">Libero nullam</li>
            <li className="icon fa-gear">Blandit condimentum</li>
            <li className="icon fa-map-marker">Lorem ipsum dolor</li>
            <li className="icon fa-code">Nibh amet venenatis</li>
          </ul>
          <p>
            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>My Live Sites</h2>
        </header>
        <div className="content">
          <p>
            <strong>Integer mollis egestas</strong> nam maximus erat id euismod
            egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>

          <section>
            <header>
              <h3>Erat aliquam</h3>
              <p>
                Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
                etiam consequat, et lorem adipiscing sed dolor sit amet,
                consectetur amet do eiusmod tempor incididunt ipsum suspendisse
                ultrices gravida.
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>Nisl consequat</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam sed facilisis ante interdum congue. Integer mollis, nisl
                amet convallis, porttitor magna ullamcorper, amet mauris. Ut
                magna finibus nisi nec lacinia ipsum maximus.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>Lorem gravida</h3>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>Duis sed adpiscing veroeros amet</h2>
        </header>
        <div className="content">
          <p>
            <strong>Elements</strong> This starter contains all elements for a
            page. Check it out
          </p>
          <ul data-test="skills-tour-button" className="actions">
            <li>
              <Link to="/SkillsTour" className="button primary large">
                Goto Skill Tour
              </Link>
            </li>
            {/* <li>
              <a href="/#" className="button large">
                Learn More
              </a>
            </li> */}
          </ul>
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout >
)

export default IndexPage
