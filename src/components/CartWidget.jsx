import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {

  const {totalItems} = useContext(CartContext)

  return (
    <Flex as="b" display='flex' fontSize='3xl' bg='skyblue' margin={10}>
      <Link to="/Cart">
      <Box >
      <img src="./assets/shopping-cart.png" width="50" height="50"/>
      </Box>
      </Link>
      <Box>
        <p>{totalItems}</p>
      </Box>
    </Flex>
  );
};

export default CartWidget