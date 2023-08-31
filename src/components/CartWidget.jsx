import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {

  const {totalItems} = useContext(CartContext)

  return (
    <Flex>
      <Link to="/Cart">
      <Box>
      <img src="./assets/cart.svg" width="30" height="30"/>
      </Box>
      </Link>
      <Box>
        <p>{totalItems}</p>
      </Box>
    </Flex>
  );
};

export default CartWidget