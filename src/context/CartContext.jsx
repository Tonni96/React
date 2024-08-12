import { CottageSharp } from "@mui/icons-material";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      }); 
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((product) => product.id === id); 
    return existe;
  };

  const deleteProduct = (id) => {
    
    console.log(id);
    
    let newArr = cart.filter((elemento) => elemento.id !== id);
    setCart(newArr);
  };
  const getQuantityById = (id) =>{
    let productoEncontrado = cart.find( product => product.id === id )

    //return productoEncontrado.quantity
    return productoEncontrado?.quantity;
  };
  const getTotalPrice = () => {
    let total = 0 

    for ( let i = 0; i < cart.length; i++){
      total += cart [i].price * cart [i].quantity;
    }
    return total;
  }; 
  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity
    }, 0)
    return total
  }

  let data = { cart, addToCart, clearCart, deleteProduct, getQuantityById, getTotalPrice, getTotalItems };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;