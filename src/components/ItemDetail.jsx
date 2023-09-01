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
    <Center margin={10}>
    <Flex>
      <Box borderWidth='2px' borderRadius='lg'>
      <Center>
    <Image src={p.image} width="250" height="250" margin={10}></Image>
    </Center>
    <Center>
    <Heading margin={3}>{p.name}</Heading>
    </Center>
    <Center>
    <Text margin={3}>{p.description}</Text>
    </Center>
    <Center>
    <Text margin={3}>Categoria: {p.category}</Text>
    </Center>
    <Center>
    <Text margin={3}>${p.price}</Text>
    </Center>
    <Center margin={3}>
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