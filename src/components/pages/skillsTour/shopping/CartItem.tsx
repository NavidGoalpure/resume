import React, { useContext } from 'react'
import { Context } from './Context'
import useHover from './hooks/useHover'
import { useSelector } from 'react-redux'

type Props = {
  item: {
    id: string
    url: string
  }
}

function CartItem({ item }: Props): React.ReactNode {
  const isUglyMode = useSelector(
    (state: { mode: { isUglyMode: boolean } }) => state.mode.isUglyMode
  )
  const [hovered, ref] = useHover()
  const { removeFromCart } = useContext(Context)
  const iconClassName = hovered ? 'fa fa-trash' : 'fa fa-trash'

  return (
    <tr>
      <td onClick={() => removeFromCart(item.id)} ref={ref}>
        <i className={iconClassName} style={{ fontSize: 'x-large' }} />
      </td>
      <td>
        {isUglyMode ? (
          <h5> where did the pictures go?</h5>
        ) : (
          <img src={item.url} width="130px" />
        )}
      </td>
      <td>$5.99</td>
    </tr>
  )
}

export default CartItem
