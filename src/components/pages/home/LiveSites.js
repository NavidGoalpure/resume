import React from 'react'
import Gallery from './Gallery'
import config from '../../../assets/ComponentsData'

const LiveSites = () => (
  <section>
    <header>
      <h2>My Live Sites</h2>
    </header>
    <div className="content">
      <p>
        {' '}
        You can see other websites code, I'v developed in{' '}
        <strong>
          <a
            href="https://github.com/NavidGoalpure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </strong>{' '}
        but the live ones are here.
      </p>
      <div className="content">
        <Gallery images={config.img_set_1} />
      </div>
    </div>
  </section>
)
export default LiveSites
