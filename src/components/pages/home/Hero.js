import React from "react"

import Header from "../../../components/Header"
import heroImage from "../../../assets/images/pic01.jpg"
const Hero = () => (
  <section className="intro">
    <Header />
    <div className="content">
      <span className="image fill" data-position="center">
        <img src={heroImage} alt="" />
      </span>
    </div>
  </section>
)
export default Hero
