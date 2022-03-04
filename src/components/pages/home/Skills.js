import React from 'react'
import config from '../../../ComponentsData'
import styled from 'styled-components'

const iconVersedStyle = {
  width: '1.6rem',
  height: '1.6rem',
  textAlign: 'center',
  lineHeight: '1.6rem',
  borderRadius: '1.6rem',
  display: 'inline-block',
  backgroundColor: 'gray',
  color: 'gold',
  fontSize: 'smaller',
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
  fontSize: 'smaller',
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

function drawLi(object) {
  const skills = config.skills[object].map((skill, i) => (
    <li className="icon" key={i}>
      <i
        className="fa fa-star"
        style={skill.isVersed ? iconVersedStyle : iconNormalStyle}
      />
      {skill.link ? (
        <a target="_blank" rel="noopener noreferrer" href={skill.link}>
          <p style={{ display: 'inline' }}> {skill.skill}</p>
        </a>
      ) : (
        <p style={{ display: 'inline' }}> {skill.skill}</p>
      )}
    </li>
  ))
  return skills
}
const MySkills = () => (
  <section>
    <header>
      <h2>My Skills</h2>
    </header>
    <div className="content">
      <p>
        Hint: The <strong>Yellow star</strong> means being an expert in the
        field. The <strong>White star</strong> means be used in some cases but I
        am not an expert. Click each one you want to see the related code on my{' '}
        <strong>Github</strong>.
      </p>
      <Section>
        <header>
          <Title> React Related </Title>{' '}
        </header>
        <div className="content">
          <ul className="feature-icons">{drawLi('reactSkills')}</ul>
        </div>
      </Section>

      <Section>
        <header>
          <Title> CSS Related </Title>{' '}
        </header>
        <div className="content">
          <ul className="feature-icons">{drawLi('cssSkills')}</ul>
        </div>
      </Section>

      <Section>
        <header>
          <Title> Others </Title>{' '}
        </header>
        <div className="content">
          <ul className="feature-icons">{drawLi('other')}</ul>
        </div>
      </Section>
    </div>
  </section>
)

export default MySkills
