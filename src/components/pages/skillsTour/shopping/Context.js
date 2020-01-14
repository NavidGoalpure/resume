import React, {useState, useRef, useEffect} from "react"
import useFetch from "use-http"
const Context = React.createContext()

function ContextProvider({children}) {
  const [cartItems, setCartItems] = useState([])
  const [allPhotos, setAllPhotos] = useState([])
  const url = "https://raw.githubusercontent.com"
  const [request, response] = useFetch(url)

  async function initializePhotos() {
    const initialPhotos = await request.get('/bobziroll/scrimba-react-bootcamp-images/master/images.json')
    if (response.ok) setAllPhotos(initialPhotos)
  }
  // componentDidMount
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    initializePhotos()
  })

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
      error: request.error,
      loading: request.loading,
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
