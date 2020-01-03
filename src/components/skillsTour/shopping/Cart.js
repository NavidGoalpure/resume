import React, {useState, useContext} from "react"
import {Context} from "./Context"
import CartItem from "./CartItem"

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order")
  const {cartItems, emptyCart} = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setButtonText("Ordering...")
    setTimeout(() => {
      console.log("Order placed!")
      setButtonText("Place Order")
      emptyCart()
    }, 3000)
  }

  return (
    <main className="table-wrapper">
      <h1>Check out</h1>
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
            <td  style={{textAlign: "end"}}>Total:</td>
            <td>{totalCostDisplay}</td>
          </tr>
        </tfoot>
          </table>
        </main>
      )
}

export default Cart
