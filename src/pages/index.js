import React from 'react'

import Layout from '../components/Layout'
import SideFooter from '../components/SideFooter'
import {
  Hero,
  Employment,
  Skills,
  LiveSites,
  ContactForm,
  // SkillsTour,
} from '../components/pages/home'

const IndexPage = () => (
  <Layout data-test="comp-index-page">
    <div id="wrapper">
      <Hero />
      <Employment />
      <Skills />
      {/* <SkillsTour /> */}
      <LiveSites />
      <section>
        <ContactForm />
        <SideFooter />
      </section>
      {/* <Footer /> */}
    </div>
  </Layout>
)

export default IndexPage
