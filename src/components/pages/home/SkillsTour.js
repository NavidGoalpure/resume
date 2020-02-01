import React from 'react'
import { Link } from 'gatsby'

const SkillsTour = () => (
  <section>
    <header>
      <h2> Take a tour </h2>
    </header>
    <div className="content">
      <p>
        If you want to take a tour on my <strong>React Skills</strong>, click
        this button. Note that if you're not familiar with React Coding, you
        might find some of the features on this tour pointless.
      </p>
      <ul data-test="skills-tour-button" className="actions">
        <li>
          <Link to="/SkillsTour" className="button primary large">
            Goto Skill Tour
          </Link>
        </li>
      </ul>
    </div>
  </section>
)
export default SkillsTour
