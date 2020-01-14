import React, {useState} from "react"
import useFetch from "use-http"
const Context = React.createContext()

function ContextProvider({children}) {
  const [cartItems, setCartItems] = useState([])
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  const options = {data: []}
  const {error, loading, data: allPhotos} = useFetch(url, options, [])

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return {...photo, isFavorite: !photo.isFavorite}
      }
      return photo
    })

    setAllPhotos(updatedArr)
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }
  return (
    <Context.Provider value={{
      error,
      loading,
      allPhotos,
      toggleFavorite,
      cartItems,
      addToCart,
      removeFromCart,
      emptyCart
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
