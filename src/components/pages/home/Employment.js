import React from 'react'
import config from '../../../ComponentsData'
import styled from 'styled-components'

const Section = styled.section`
  margin-top: 0 !important;
`
const Row = styled.p`
  margin-bottom: 0 !important;
`
const Date = styled.h3`
  margin-bottom: 0.5rem;
  @media (max-width: 1150px) {
    color: darkgreen;
    text-decoration: underline;
  }
`
function Employment() {
  const content = config.employment.map((job, i) => (
    <Section key={i}>
      <header>
        <Date>{job.duration}</Date>
      </header>
      <div className="content" style={{ marginBottom: '2rem' }}>
        <Row>
          <strong>{job.title}</strong>-{job.companyName}
        </Row>
        {job.characters.map((character, i) => (
          <Row key={i}>+ {character}</Row>
        ))}
      </div>
    </Section>
  ))
  return (
    <section id="JobsContainer">
      <header>
        <h2>Employment</h2>
      </header>
      <div className="content">
        <p>
          I have worked on these projects. In some of them I was the{' '}
          <strong>founder </strong>or <strong>co-founder</strong> of a startup
          and in others I worked as an <strong>employee</strong>.
        </p>{' '}
        {content}
      </div>
    </section>
  )
}
export default Employment
