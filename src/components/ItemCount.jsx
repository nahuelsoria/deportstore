import { Box, Flex, Spacer, Button, Center } from "@chakra-ui/react";
import {React, useState, useContext} from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ id, price, name, image }) => {
  //  console.log(id)
  //  console.log(price)
  //  console.log(name)
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };

  const addToCart = (item, quantity) => {
    const addedProduct = { id, name, count, price, image };
    setCart((prev) => [...prev, addedProduct]);

    const newCart = [...cart];
    console.log(newCart);
    const isInCart = newCart.find((product) => product.id === addedProduct.id);
    if (isInCart) {
      isInCart.count = isInCart.count + count;
      setCart(newCart);
    } else {
      setCart([...cart, addedProduct]);
    }
    //console.log(isInCart)
    Toastify({
      text: "Agregado al carrito!",
      duration: 3000,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  };

  return (
    <Flex>
      <Box>
        <Center>
          <Button colorScheme="blue" margin={5} onClick={substractQty}>
            -
          </Button>
          <p>{count}</p>
          <Button colorScheme="blue" margin={5} onClick={addQty}>
            +
          </Button>
        </Center>
        <Button margin={2} onClick={addToCart}>
          Agregar al carrito
        </Button>
      </Box>
    </Flex>
  );
};

export default ItemCount;
