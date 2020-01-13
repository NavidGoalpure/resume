import React from "react"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SideFooter from "../components/SideFooter"
import { CoverLetter, Hero, Employment, Skills, LiveSites } from "../components/pages/home"
import Gallery from "../components/Gallery"
import ContactForm from "../components/ContactForm"
import { Link } from "gatsby"
import config from "../assets/ComponentsData"

const IndexPage = () => (
    <Layout data-test="comp-index-page">
        <div id="wrapper">
            {/* <Hero /> */}
            {/* <CoverLetter /> */}
            {/* <Employment /> */}
            {/* <Skills /> */}
            <LiveSites />
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
    </Layout>
)

export default IndexPage
