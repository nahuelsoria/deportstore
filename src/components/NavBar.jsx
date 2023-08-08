import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { Link} from "react-router-dom";


const NavBar = () => {
  
  return (
    <Flex>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>
          <Link to={`/category/${'Accesorios'}`}>
          Accesorios
          </Link>
          </MenuItem>
          <MenuItem>
          <Link to={`/category/${'Mochilas'}`}>
            Mochilas
            </Link>
            </MenuItem>
          <MenuItem>
          <Link to={`/category/${'Pelotas'}`}>
          Pelotas
          </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Link to={"/"} >
      <Box p="2" bg="black" color="white">
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
