import React, {useState, useContext} from "react"
import {Context} from "./Context"
import useHover from "./hooks/useHover"

function CartItem({item}) {
  const [hovered, ref] = useHover()
  const {removeFromCart} = useContext(Context)
  //TODO: change icon to awesom method
  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <tr>
      <td onClick={() => removeFromCart(item.id)} ref={ref}>
        <i className={iconClassName} />
        {/* <p>Remove</p> */}
      </td>
      <td>
        <img src={item.url} width="130px" />
      </td>
      <td>$5.99</td>
    </tr>
  )
}

export default CartItem
