import React from "react"
import ShowImages from "../components/skillsTour/shopping/ShowImages"
import {useSelector, useDispatch} from "react-redux"
import {toggleDarkMode} from "../state/mode"
import styled from "styled-components"
import Layout from "../components/Layout"
const Container = styled.div`
  background:#76b852;
`

const IndexPage = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.mode.isDarkMode)
  return (

    <div id="wrapper" style={{padding: '0'}}>
      <Container>
        <section id="one" className="main-container">
          <div className="container">
            <div className="content">
              <ShowImages />
              <button
                style={
                  isDarkMode ? {backgroundColor: "black", color: "white"} : null
                }
                onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
              >
                {" "}
                Dark Mode {isDarkMode ? "on" : "off"}
              </button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
export default IndexPage
