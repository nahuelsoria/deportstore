import { createContext, useState, useCallback, useMemo } from 'react'

// Creamos el contexto del carrito
export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
  // Estado para almacenar los items del carrito
  const [cart, setCart] = useState([])

  // Función para limpiar el carrito
  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  // Función para agregar un producto al carrito
  const addToCart = useCallback((product, quantity) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id)
      if (existingProductIndex !== -1) {
        // Si el producto ya existe, actualizamos la cantidad
        return prevCart.map((item, index) => 
          index === existingProductIndex 
            ? { ...item, count: item.count + quantity }
            : item
        )
      }
      // Si es un nuevo producto, lo añadimos al carrito
      return [...prevCart, { ...product, count: quantity }]
    })
  }, [])

  // Función para eliminar un producto del carrito
  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }, [])

  // Calculamos el total del carrito y el total de items
  const { totalFinal, totalItems } = useMemo(() => 
    cart.reduce((acc, { price, count }) => ({
      totalFinal: acc.totalFinal + (price * count),
      totalItems: acc.totalItems + count
    }), { totalFinal: 0, totalItems: 0 }),
  [cart])

  // Creamos el objeto de valor para el contexto
  const contextValue = useMemo(() => ({
    cart,
    setCart,
    clearCart,
    addToCart,
    removeFromCart,
    totalItems,
    totalFinal
  }), [cart, clearCart, addToCart, removeFromCart, totalItems, totalFinal])

  // Proveemos el contexto a los componentes hijos
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider