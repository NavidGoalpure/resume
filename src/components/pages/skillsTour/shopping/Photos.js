import React, {useContext} from "react"

import Image from "./Image"
import {Context} from "./Context"
import {getClass} from "./utils"
import styled from "styled-components"

const GalleryContainer = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  flex:1;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  @media (max-width: 768px) {
    width:90%;
    margin: 1rem auto;
}
`
function Photos() {
  const {allPhotos} = useContext(Context)
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))

  return (
    <GalleryContainer>
      <main className="photos">
        {/* <h2>hi</h2> */}
        {imageElements}
      </main>
    </GalleryContainer>
  )
}

export default Photos
