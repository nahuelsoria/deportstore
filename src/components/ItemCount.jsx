import { Box, Flex, Spacer, Button, Center, Alert, AlertIcon, useToast } from '@chakra-ui/react'
import {useState} from "react"
import { useContext } from 'react';
import {CartContext} from '../context/ShoppingCartContext';


const ItemCount = ({id, price, name, image}) => {

  console.log(id)
  console.log(price)
  console.log(name)
const [count, setCount] = useState(1)
const {cart, setCart} = useContext(CartContext)

const addQty = () => {
    setCount(count+1)
}    

const substractQty = () => {
    if(count!=0){
    setCount(count-1)
    }
}



const addToCart = (item, quantity) => {
    const addedProduct = {id, name, count, price, image}
    setCart((prev) => [...prev, addedProduct]);

    const newCart = [...cart]
    console.log(newCart)
    const isInCart = newCart.find((product)=> product.id === addedProduct.id)
    if(isInCart){
      isInCart.count = isInCart.count + count
      setCart(newCart)
    }else{
      setCart([...cart, addedProduct])
    }
    console.log(isInCart)
}

  return (
    <Flex>
      <Box>
        <Center>
        <Button onClick={substractQty}>-</Button>
        <p>{count}</p>
        <Button onClick={addQty}>+</Button>
        </Center>
        <Button onClick={addToCart} >
          Agregar al carrito
          </Button>
      </Box>
    </Flex>
  );
};

export default ItemCount