import React from "react"
import ShowImages from "../components/pages/skillsTour/shopping"
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkMode } from "../state/mode"
import styled from "styled-components"
import Joyride from "react-joyride"
import config from "../assets/ComponentsData"

const Container = styled.div`
  background: #76b852;
  min-height: 100vh;
`
const Button = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 5rem;
  border-radius: 100%;
`
const IndexPage = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.mode.isDarkMode)
  return (
    <div id="wrapper" style={{ padding: "0" }}>
      <Container>
        <section id="one" className="main-container">
          <div className="container">
            <div className="content">
              <Joyride
                steps={config.tourSteps}
                continuous
                disableOverlayClose
                showProgress
                styles={{
                  tooltipContent: {
                    whiteSpace: "pre-line",
                  },
                }}
              />
              <ShowImages />
              <Button
                id="redux-button"
                style={
                  isDarkMode
                    ? { backgroundColor: "black", color: "white" }
                    : null
                }
                onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
              >
                {" "}
                {isDarkMode ? "beauty" : "ugley"}
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
export default IndexPage
