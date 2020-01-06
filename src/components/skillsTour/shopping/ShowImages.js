import React from "react"
import { ContextProvider } from "./Context"
import Cart from "./Cart"
import Photos from "./Photos"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  width: 100vw;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const ShowImages = () => (
  <ContextProvider>
    <FlexContainer>
      <Photos />
      <Cart />
    </FlexContainer>
  </ContextProvider>
)

export default ShowImages
