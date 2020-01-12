
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

function drawLi(object) {
  const skills = config.skills[object].map(skill => (
    <li className="icon" >
      <i className="fa fa-star" style={skill.isVersed ? iconVersedStyle : iconNormalStyle} />
      {skill.link ?
        (<a target="_blank" rel="noopener noreferrer" href={skill.link}>
          <p style={{display: 'inline'}}> {skill.skill}</p>
        </a>)
        :
        <p style={{display: 'inline'}}> {skill.skill}</p>
      }
    </li >
  ))
  return skills
}
const CoverLetter = () => (
  <section>
    <header>
      <h2>My Skills</h2>
    </header>
    <Content className="content" >
      <Section >
        <header><Title> React Realated </Title> </header>
        <ul className="feature-icons">
          {drawLi('reactSkills')}
        </ul>
      </Section>

      <Section>
        <header><Title> CSS Realated </Title> </header>
        <ul className="feature-icons">
          {drawLi('cssSkills')}
        </ul >
      </Section>

      <Section>
        <header><Title> Others </Title> </header>
        <ul className="feature-icons">
          {drawLi('other')}
        </ul >
      </Section>
    </Content >
  </section >


)

export default CoverLetter
