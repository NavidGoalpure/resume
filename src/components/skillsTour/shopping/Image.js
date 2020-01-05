import React, { useContext } from "react"

import { Context } from "./Context"
import useHover from "./hooks/useHover"
import styled from "styled-components"

const IconContainer = styled.div`
  position: absolute;
  background-color: #49fcd4;
  bottom: 0;
  width: 100%;
  opacity: 0.8;
  height: 2rem;
`
function Image({ className, img }) {
  const [hovered, ref] = useHover()
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  )

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="fa fa-heart favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )
    } else {
      return (
        <i
          className="fa fa-heart-o favorite"
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
          className="fa fa-shopping-cart cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      )
    } else {
      return (
        <i className="fa fa-cart-plus cart" onClick={() => addToCart(img)}></i>
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