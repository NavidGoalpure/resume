
import React from "react"
import config from "../../../assets/ComponentsData"
import styled from "styled-components"

const iconVersedStyle = {
  width: '1.6rem',
  height: '1.6rem',
  textAlign: 'center',
  lineHeight: '1.6rem',
  borderRadius: '1.6rem',
  display: 'inline-block',
  backgroundColor: 'gray',
  color: 'gold',
  fontSize: 'smaller'
}

const iconNormalStyle = {
  width: '1.6rem',
  height: '1.6rem',
  textAlign: 'center',
  lineHeight: '1.6rem',
  borderRadius: '1.6rem',
  display: 'inline-block',
  backgroundColor: 'gray',
  color: 'white',
  fontSize: 'smaller'
}
const Section = styled.section`
  margin-top: 0 !important;
`
const Title = styled.h3`
  margin-bottom: 0.5rem;
    @media (max-width: 1150px) {
    color: darkgreen;
    text-decoration: underline;
  }
`
const Content = styled.div`
  padding-top: 6rem !important;
  padding-left: 7rem !important;
`
const CoverLetter = () => {
  const reactSkills = config.skills.reactSkills.map(skill => (

    <li className="icon " >
      <i className="fa fa-star" style={skill.isVersed ? iconVersedStyle : iconNormalStyle} />
      <p style={{display: 'inline'}}> {skill.skill}</p>
    </li >

  ))
  const cssSkills = config.skills.cssSkills.map(skill => (
    <li className="icon " >
      <i className="fa fa-star" style={skill.isVersed ? iconVersedStyle : iconNormalStyle} />
      <p style={{display: 'inline'}}> {skill.skill}</p>
    </li >

  ))
  const otherSkills = config.skills.other.map(skill => (
    <li className="icon " >
      <i className="fa fa-star" style={skill.isVersed ? iconVersedStyle : iconNormalStyle} />
      <p style={{display: 'inline'}}> {skill.skill}</p>
    </li >

  ))

  return (
    <section>
      <header>
        <h2>My Skills</h2>
      </header>
      <Content className="content" >
        <Section >
          <header><Title> React Realated </Title> </header>
          <ul className="feature-icons">
            {reactSkills}
          </ul>
        </Section>

        <Section>
          <header><Title> CSS Realated </Title> </header>
          <ul className="feature-icons">
            {cssSkills}
          </ul >
        </Section>

        <Section>
          <header><Title> Others </Title> </header>
          <ul className="feature-icons">
            {otherSkills}
          </ul >
        </Section>
      </Content >
    </section >


  )
}
export default CoverLetter
