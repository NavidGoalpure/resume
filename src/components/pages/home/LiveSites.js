import React from "react"
import Gallery from "./Gallery"
import config from "../../../assets/ComponentsData"

const LiveSites = () => (
  <section>
    <header>
      <h2>My Live Sites</h2>
    </header>
    <div className="content">
      <section>
        <div className="content">
          <Gallery images={config.img_set_1} />
        </div>
      </section>
    </div>
  </section>

)
export default LiveSites
