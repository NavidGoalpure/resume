
import React from 'react';
import ShowImages from '../components/skillsTour/shopping/ShowImages'
import Layout from '../components/Layout';
import {connect} from "react-redux"
import {toggleDarkMode} from "../state/app"

const IndexPage = ({isDarkMode, dispatch}) => (
  <Layout>
    <section id="one" className="main-container">
      <div className="container">
        <div className="content">
          <ShowImages />
          <button
            style={isDarkMode ? {backgroundColor: 'black', color: 'white'} : null}
            onClick={() => dispatch(toggleDarkMode(!isDarkMode))}> Dark Mode {isDarkMode ? 'on' : 'off'}
          </button>

        </div>
      </div>
    </section>
  </Layout>
);

export default connect(state => ({
  isDarkMode: state.app.isDarkMode
}), null)(IndexPage)
