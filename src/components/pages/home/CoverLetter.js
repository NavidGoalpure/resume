import React from "react"
import config from "../../../assets/ComponentsData"
const CoverLetter = () => (
  <section id="first">
    <header>
      <h2>Cover Letter</h2>
    </header>
    <div className="content">
      {config.coverLetter}
    </div>
  </section>
)
export default CoverLetter
