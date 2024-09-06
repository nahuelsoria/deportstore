import { Flex, Box, Image, Text, Badge } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';

// Componente CartWidget: Muestra el ícono del carrito y la cantidad de items
const CartWidget = () => {
  // Obtenemos el total de items del contexto del carrito
  const { totalItems } = useContext(CartContext)

  return (
    // Contenedor principal con estilos mejorados
    <Flex
      as={Link}
      to="/Cart"
      alignItems="center"
      justifyContent="center"
      bg='blue.500'
      color="white"
      borderRadius="full"
      p={2}
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ bg: 'blue.600', transform: 'scale(1.05)' }}
    >
      {/* Ícono del carrito */}
      <Box position="relative">
        <Image src="./assets/shopping-cart.png" alt="Carrito de compras" width="40px" height="40px" />
        {/* Contador de items */}
        {totalItems > 0 && (
          <Badge
            position="absolute"
            top="-8px"
            right="-8px"
            borderRadius="full"
            bg="red.500"
            color="white"
            fontSize="0.8em"
            p={1}
          >
            {totalItems}
          </Badge>
        )}
      </Box>
    </Flex>
  );
};

export default CartWidget