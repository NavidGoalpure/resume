import React, * as react from 'react'
import useFetch from 'use-http'
import { Pictures } from './types'
type Props = {
  children: React.ReactNode
}
type Context = {
  error: any
  loading: any
  allPhotos: Pictures[]
  toggleFavorite: (id: string) => Pictures[]
  cartItems: Pictures[]
  addToCart: (newItem: Pictures) => void
  removeFromCart: (id: string) => void
  emptyCart: () => void
}

const Context = React.createContext({} as Context)

function ContextProvider({ children }: Props) {
  const [cartItems, setCartItems] = react.useState([])
  const [allPhotos, setAllPhotos] = react.useState([])
  const url = 'https://raw.githubusercontent.com'
  const [request, response] = useFetch(url)

  async function initializePhotos() {
    const initialPhotos = await request.get(
      '/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    )
    if (response.ok) setAllPhotos(initialPhotos)
  }
  // componentDidMount
  const mounted = react.useRef<HTMLElement | boolean>(false)
  react.useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    initializePhotos()
  })

  function toggleFavorite(id: string) {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })

    setAllPhotos(updatedArr)
  }

  function addToCart(newItem: Pictures) {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(id: string) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }
  return (
    <Context.Provider
      value={{
        error: request.error,
        loading: request.loading,
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
