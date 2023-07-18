import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Flex>
      <Box p="2" bg="black" color="white">
      Valorant EloBoost
      </Box>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Rangos</MenuItem>
          <MenuItem>Carrito</MenuItem>
          <MenuItem>Contacto</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box>
      <CartWidget/>
      </Box>
    </Flex>
  );
};

export default NavBar;
