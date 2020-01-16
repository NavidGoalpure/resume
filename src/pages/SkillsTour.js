import React from "react"
import ShowImages from "../components/pages/skillsTour/shopping"
import { useSelector, useDispatch } from "react-redux"
import { toggleUglyMode } from "../state/mode"
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
const uglyStyle = {
  color: "red",
  backgroundColor: "blue",
  textDecoration: "underline",
}

const IndexPage = () => {
  const dispatch = useDispatch()
  const isUglyMode = useSelector(state => state.mode.isUglyMode)
  return (
    <div id="wrapper" style={{ padding: "0" }}>
      <Container>
        <section
          id="one"
          className="main-container"
          style={isUglyMode ? uglyStyle : null}
        >
          <div id="testId" className="container">
            <div className="content" style={isUglyMode ? uglyStyle : null}>
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
                  isUglyMode
                    ? { backgroundColor: "black", color: "white" }
                    : null
                }
                onClick={() => dispatch(toggleUglyMode(!isUglyMode))}
              >
                {isUglyMode ? "beauty" : "ugley"}
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
export default IndexPage
