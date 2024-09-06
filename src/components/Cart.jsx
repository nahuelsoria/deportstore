import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { Button, Center, Heading, Flex, SimpleGrid, Text, Box, VStack, HStack, Image } from '@chakra-ui/react';

// Componente Cart: Muestra el contenido del carrito de compras
const Cart = () => {
  // Obtenemos los datos y funciones necesarias del contexto del carrito
  const { cart, clearCart, totalFinal, removeFromCart } = useContext(CartContext);

  return (
    <Box p={8} maxWidth="1200px" margin="auto">
      {cart.length === 0 ? (
        // Si el carrito está vacío, mostramos un mensaje
        <Center height="50vh">
          <VStack spacing={4}>
            <Heading size="2xl" color="gray.600">El carrito está vacío</Heading>
            <Link to="/">
              <Button colorScheme="blue" size="lg">Volver a la tienda</Button>
            </Link>
          </VStack>
        </Center>
      ) : (
        // Si hay productos en el carrito, los mostramos
        <VStack spacing={8} align="stretch">
          {cart.map((product) => (
            <Flex
              key={product.id}
              borderWidth="1px"
              borderRadius="xl"
              p={6}
              bg="white"
              boxShadow="md"
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack spacing={6}>
                <Image src={product.image} alt={product.name} boxSize="120px" objectFit="cover" borderRadius="md" />
                <VStack align="start" spacing={2}>
                  <Heading size="lg">{product.name}</Heading>
                  <Text fontSize="md" color="gray.600">Cantidad: {product.count}</Text>
                  <Text fontSize="md" color="gray.600">Precio Unitario: ${product.price.toFixed(2)}</Text>
                </VStack>
              </HStack>
              <VStack align="end" spacing={3}>
                <Heading size="lg" color="blue.500">${(product.price * product.count).toFixed(2)}</Heading>
                <Button colorScheme="red" variant="outline" onClick={() => removeFromCart(product.id)}>
                  Eliminar
                </Button>
              </VStack>
            </Flex>
          ))}
          
          {/* Mostramos el total final */}
          <Flex justifyContent="flex-end" mt={6}>
            <Heading size="xl" bg="blue.500" color="white" p={4} borderRadius="lg">
              Total: ${totalFinal.toFixed(2)}
            </Heading>
          </Flex>
          
          {/* Botones de acción */}
          <Flex justifyContent="space-between" mt={8}>
            <Button colorScheme="red" size="lg" onClick={clearCart}>Vaciar carrito</Button>
            <Link to="/SendOrder">
              <Button colorScheme="green" size="lg">Finalizar compra</Button>
            </Link>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};

export default Cart;