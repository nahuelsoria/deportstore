import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { Button, Center, Heading, Flex, SimpleGrid, Text} from '@chakra-ui/react';

const Cart = () => {
  const {cart, clearCart, totalFinal} = useContext(CartContext);

  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <Center>
            <Heading>El carrito esta vacio.</Heading>
          </Center>
        ) : (
          <SimpleGrid  columns={1} spacing={75} margin={10}>
            {cart.map((p) => {
              return (
                <div key={p.id}>
                  <Center>
                    <Flex>
                      <SimpleGrid alignItems='center' display='flex' borderWidth='20px' borderRadius='lg' borderColor='skyblue' bg='skyblue' columns={5} spacing={10}>
                        <img  src={p.image} width="100" height="100" ></img>
                        <Text as='u' fontSize='xl'> Artículo: {p.name} </Text>
                        <Text fontSize='xl'> Cantidad: {p.count} </Text>
                        <Text fontSize='xl'> Precio Unitario: $ {p.price}</Text>
                        <Text as='b' fontSize='xl'> Precio total: $ {p.price * p.count}</Text>
                      </SimpleGrid>
                    </Flex>
                  </Center>
                </div>
              );
            })}
            <Center>
              <Heading borderWidth='20px' borderRadius='lg' borderColor='skyblue' bgColor='skyblue'>Total: ${totalFinal}</Heading>
            </Center>
            <Center>
            <Link to="/SendOrder">
            <Button margin={2}>Finalizar compra</Button>
            </Link>
      </Center>
      <Center>
      <Button borderWidth='20px' borderRadius='lg' borderColor='grey' margin={1} onClick={clearCart}>Vaciar carrito</Button>
      </Center>
          </SimpleGrid>
        )}
      </div>
    </div>
  );
};

export default Cart;