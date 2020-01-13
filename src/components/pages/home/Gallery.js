import React from "react"
const Gallery = ({images}) => {
  console.log(images)
  return (
    <div className='gallery'>
      {images.map(image => (
        <a className="gallery-link" href={image.url} target="_blank" rel="noopener noreferrer">
          <figure className="gallery-image">
            <img src={image.src} />
            <figcaption>
              {image.desc}
            </figcaption>
          </figure>
        </a>
      ))
      }
    </div>
  )
}
export default Gallery
