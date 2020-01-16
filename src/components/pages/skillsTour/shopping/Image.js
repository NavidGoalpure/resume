import React, { useContext } from "react"
import { Context } from "./Context"
import useHover from "./hooks/useHover"
import styled from "styled-components"
import { useSelector } from "react-redux"

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => (props.isUgly ? "contain" : "cover")};
  &: hover {
    object-fit: none;
  }
`
const IconContainer = styled.div`
  position: absolute;
  background-color: #000000b0;
  bottom: 0;
  width: 100%;
  opacity: 0.8;
  height: 2rem;
  transition: transform 300ms ease-in-out;
  }
 `
function Image({ className, img }) {
  const isUgly = useSelector(state => state.mode.isUglyMode)
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
      <Img src={img.url} isUgly={isUgly} />
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
