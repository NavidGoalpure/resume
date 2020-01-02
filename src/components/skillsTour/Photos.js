import React, { useContext } from "react"

import Image from "./Image"
import { Context } from "./Context"
import { getClass } from "./utils"

function Photos() {
  const { allPhotos } = useContext(Context)
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))

  return (
    <main className="photos">
      {/* <h2>hi</h2> */}
      {imageElements}
    </main>
  )
}

export default Photos
