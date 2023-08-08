import { Box, Flex, Spacer } from '@chakra-ui/react'
import {useState} from "react"

const ItemCount = () => {

const sumar = () => {
    setCount(count+1)
}    

const restar = () => {
    if(count!=0){
    setCount(count-1)
    }
}

  const [count, setCount] = useState(0);

  return (
    <Flex>
      <Box>
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
      </Box>
    </Flex>
  );
};

export default ItemCount