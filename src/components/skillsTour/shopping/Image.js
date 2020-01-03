import React, {useContext} from "react"

import {Context} from "./Context"
import useHover from "./hooks/useHover"
import styled from "styled-components"

const IconContainer = styled.div`
  position: absolute;
  background-color: darkseagreen;
  bottom: 0;
  width: 100%;
  height: 2rem;
`
function Image({className, img}) {
  const [hovered, ref] = useHover()
  const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(
    Context
  )

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    } else {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id)
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      )
    } else {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      )
    }
  }
  return (
    <div
      data-test="Comp-image"
      className={`${className} image-container`}
      ref={ref}
    >
      <img src={img.url} className="image-grid" />
      {(hovered || img.isFavorite) && (
        <IconContainer>
          {heartIcon()}
          {cartIcon()}
        </IconContainer>

      )}
    </div>
  )
}

export default Image
