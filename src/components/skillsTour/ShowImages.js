import React from "react"
import { ContextProvider } from "./Context"

import Photos from "./Photos"

const ShowImages = () => (
  <ContextProvider>
    <Photos />
  </ContextProvider>
)

export default ShowImages
