import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Flex>
      <Link to="/Cart">
      <Box>
      <img src="./assets/cart.svg" width="30" height="30"/>
      </Box>
      </Link>
      <Box>
        <p>0</p>
      </Box>
    </Flex>
  );
};

export default CartWidget