import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { Button, Center, Heading, Flex, SimpleGrid} from '@chakra-ui/react';
import SendOrder from './SendOrder';

const Cart = () => {
  const {cart, clearCart, totalFinal} = useContext(CartContext);
  
  let visibleForm = false;

  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <Center>
            <Heading>El carrito esta vacio.</Heading>
          </Center>
        ) : (
          <SimpleGrid columns={1} spacing={75} margin={10}>
            {cart.map((p) => {
              return (
                <div key={p.id}>
                  <Center>
                    <Flex>
                      <SimpleGrid columns={5} spacing={10}>
                        <img src={p.image} width="50" height="50"></img>
                        <p> Artículo: {p.name} </p>
                        <p> Cantidad: {p.count} </p>
                        <p> Precio Unitario: {p.price}</p>
                        <p> Precio total: {p.price * p.count}</p>
                      </SimpleGrid>
                    </Flex>
                  </Center>
                </div>
              );
            })}
            <Center>
              <Heading>Total: ${totalFinal}</Heading>
            </Center>
            <Center>
            <Link to="/SendOrder">
            <Button>Finalizar compra</Button>
            </Link>
        <Button onClick={clearCart}>Vaciar carrito</Button>
      </Center>
          </SimpleGrid>
          
        )}
      </div>
    </div>
  );
};

export default Cart;