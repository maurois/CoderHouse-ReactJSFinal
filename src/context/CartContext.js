import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: []
})

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    console.log(cart);
    if(!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}])
    } else {
      console.error('El producto ya estaba en el carrito.')
    }
    console.log(cart);
  }

  const removeItem = (itemId) => {
    console.log(cart);
    const cartUpdated = cart.filter(item => item.id !== itemId)
    setCart(cartUpdated)
    console.log(cart);
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  return ( 
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
      { children }
    </CartContext.Provider>
   );
}
 
export default CartProvider;