import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { Link} from "react-router-dom";


const NavBar = () => {
  
  return (
    <Flex alignItems='center'  display='flex' as="b" borderColor='skyblue' bg='skyblue'>
      <Menu alignItems='center' display='flex' as='b'>
        <MenuButton fontSize='3xl'  display='flex' alignItems='center' borderRadius='md' borderColor='skyblue' bg='skyblue' as={Button} rightIcon={<ChevronDownIcon />}>
          Categorias
        </MenuButton>
        <MenuList as='b' borderColor='skyblue' bg='skyblue'>
          <MenuItem fontSize='2xl' as='b' borderColor='skyblue' bg='skyblue'>
          <Link to={`/`}>
          Todos los productos
          </Link>
          </MenuItem>
          <MenuItem fontSize='2xl' as='b' borderColor='skyblue' bg='skyblue'>
          <Link to={`/category/${'Accesorios'}`}>
          Accesorios
          </Link>
          </MenuItem>
          <MenuItem fontSize='2xl' as='b' borderColor='skyblue' bg='skyblue'>
          <Link to={`/category/${'Mochilas'}`}>
            Mochilas
            </Link>
            </MenuItem>
          <MenuItem fontSize='2xl' as='b' borderColor='skyblue' bg='skyblue'>
          <Link to={`/category/${'Pelotas'}`}>
          Pelotas
          </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Link to={"/"} >
      <Box fontSize='4xl' as="b" display='flex' borderWidth='32px' borderRadius='lg' borderColor='skyblue' bg='skyblue' p="2">
        DeportStore
      </Box>
      </Link>
      <Spacer />
      <Box>
        <CartWidget />
      </Box>
    </Flex>
  );
};

export default NavBar;
