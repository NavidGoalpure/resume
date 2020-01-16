import React, { useContext } from "react"
import { Context } from "./Context"
import CartItem from "./CartItem"

function Cart() {
  const { cartItems } = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))
  return (
    <main className="table-wrapper">
      <h1 style={{ fontSized: "4rem" }}>Check out</h1>
      <table>
        <thead>
          <tr>
            <th>remove</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{cartItemElements}</tbody>
        <tfoot>
          <tr>
            <td colSpan="1"></td>
            <td style={{ textAlign: "end" }}>Total:</td>
            <td>{totalCostDisplay}</td>
          </tr>
        </tfoot>
      </table>
    </main>
  )
}

export default Cart
