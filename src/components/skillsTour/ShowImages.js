import React from "react"
import {ContextProvider} from "./Context"
import Cart from "./Cart"
import Photos from  "./Photos"

const ShowImages = () => (
  <ContextProvider>
  < Photos />
  <Cart />
  </ContextProvider>
)

export default ShowImages
