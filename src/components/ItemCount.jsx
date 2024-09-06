import { Box, Flex, Button, Center, Text, VStack } from "@chakra-ui/react";
import { React, useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { toast } from 'react-toastify';

// Componente ItemCount: Maneja la cantidad de items y la adición al carrito
const ItemCount = ({ id, price, name, image }) => {
  // Estado local para la cantidad de items
  const [count, setCount] = useState(1);
  
  // Obtenemos el carrito y la función para actualizarlo del contexto
  const { cart, setCart } = useContext(CartContext);

  // Función para incrementar la cantidad
  const addQty = () => {
    setCount(count + 1);
  };

  // Función para decrementar la cantidad, evitando valores negativos
  const subtractQty = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Función para agregar el producto al carrito
  const addToCart = () => {
    const addedProduct = { id, name, count, price, image };
    
    // Buscamos si el producto ya está en el carrito
    const productIndex = cart.findIndex((product) => product.id === addedProduct.id);
    
    if (productIndex !== -1) {
      // Si el producto ya está en el carrito, actualizamos su cantidad
      const newCart = [...cart];
      newCart[productIndex].count += count;
      setCart(newCart);
    } else {
      // Si el producto no está en el carrito, lo agregamos
      setCart([...cart, addedProduct]);
    }

    // Mostramos una notificación de éxito
    toast.success('¡Agregado al carrito!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <VStack spacing={4} align="center">
      <Flex align="center" justify="center" w="100%">
        <Button 
          colorScheme="blue" 
          size="sm" 
          onClick={subtractQty}
          isDisabled={count === 1}
          borderRadius="full"
        >
          -
        </Button>
        <Text mx={4} fontSize="xl" fontWeight="bold">
          {count}
        </Text>
        <Button 
          colorScheme="blue" 
          size="sm" 
          onClick={addQty}
          borderRadius="full"
        >
          +
        </Button>
      </Flex>
      <Button 
        colorScheme="green" 
        w="100%"
        onClick={addToCart}
        isDisabled={count === 0}
        _hover={{ bg: 'green.600' }}
        transition="all 0.3s"
      >
        Agregar al carrito
      </Button>
    </VStack>
  );
};

export default ItemCount;
