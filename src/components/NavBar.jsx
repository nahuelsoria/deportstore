import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

// Componente NavBar: Barra de navegación principal de la aplicación
const NavBar = () => {
  const bgColor = useColorModeValue("blue.100", "blue.700");
  const hoverColor = useColorModeValue("blue.200", "blue.600");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    // Contenedor principal con estilo Flex para alinear los elementos
    <Flex alignItems='center' bg={bgColor} as="nav" p={4} boxShadow="md">
      {/* Menú desplegable de categorías */}
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontSize='xl'
          bg={bgColor}
          color={textColor}
          _hover={{ bg: hoverColor }}
          _active={{ bg: hoverColor }}
          transition="all 0.2s"
        >
          Categorías
        </MenuButton>
        <MenuList bg={bgColor} borderColor={hoverColor}>
          {/* Opciones del menú con enlaces a diferentes categorías */}
          {['Todos los productos', 'Accesorios', 'Mochilas', 'Pelotas'].map((category, index) => (
            <MenuItem 
              key={index} 
              fontSize='lg' 
              bg={bgColor} 
              _hover={{ bg: hoverColor }}
              color={textColor}
            >
              <Link to={index === 0 ? '/' : `/category/${category}`}>
                {category}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Spacer />

      {/* Logo de la tienda con enlace a la página principal */}
      <Link to="/">
        <Box
          fontSize='3xl'
          fontWeight="bold"
          p={2}
          bg={bgColor}
          color={textColor}
          borderRadius='lg'
          _hover={{ bg: hoverColor }}
          transition="all 0.2s"
        >
          DeportStore
        </Box>
      </Link>

      <Spacer />

      {/* Componente del carrito de compras */}
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
