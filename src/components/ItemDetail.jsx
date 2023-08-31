import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {React, useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Image, Heading, Text, Flex, Box, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount'
import { CartContext } from '../context/ShoppingCartContext';


const ItemDetail = ({productos}) => {
const {id} = useParams()

const [producto, setProducto] = useState([]);

useEffect(() => {
  const db = getFirestore();
  const productRef = doc(db, "Artículos Deportivos", `${id}`);

  getDoc(productRef).then((snapshot)=>{
    if(snapshot.exists()){
      setProducto(snapshot.data());
    }else{
      console.log("No hay documento");
    }
  })
},[]);

const filteredProducts=productos.filter((producto) => producto.id == id)

return (
  <div>
  {filteredProducts.map((p)=> {
    return(
  <div key={p.id}>
    <Center>
    <Flex>
      <Box>
      <Center>
    <Image src={p.image} width="250" height="250"></Image>
    </Center>
    <Center>
    <Heading>{p.name}</Heading>
    </Center>
    <Center>
    <Text>{p.description}</Text>
    </Center>
    <Center>
    <Text>{p.category}</Text>
    </Center>
    <Center>
    <Text>${p.price}</Text>
    </Center>
    <Center>
    <ItemCount key={p.id}
            id={p.id}
            image={p.image}
            name={p.name}
            description={p.description}
            price={p.price}/>
    </Center>
    </Box>
    </Flex>
    </Center>
    </div>
)
})}


</div>
)
}

export default ItemDetail