import React from "react"
import ShowImages from "../components/skillsTour/shopping/ShowImages"
import Layout from "../components/Layout"
import { useSelector, useDispatch } from "react-redux"
//import {connect} from "react-redux"
import { toggleDarkMode } from "../state/mode"

const IndexPage = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.mode.isDarkMode)
  return (
    <Layout>
      <section id="one" className="main-container">
        <div className="container">
          <div className="content">
            <ShowImages />
            <button
              style={
                isDarkMode ? { backgroundColor: "black", color: "white" } : null
              }
              onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
            >
              {" "}
              Dark Mode {isDarkMode ? "on" : "off"}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
