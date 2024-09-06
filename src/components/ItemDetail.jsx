// Importaciones necesarias
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Image, Heading, Text, Flex, Box, Center, VStack, Badge, Spinner } from '@chakra-ui/react';
import ItemCount from './ItemCount'

// Componente ItemDetail: Muestra los detalles de un producto específico
const ItemDetail = ({ productos }) => {
  // Obtenemos el id del producto de los parámetros de la URL
  const { id } = useParams()

  // Estado para almacenar la información del producto
  const [producto, setProducto] = useState(null);

  // Efecto para cargar los datos del producto desde Firestore
  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const productRef = doc(db, "Artículos Deportivos", id);

      try {
        const snapshot = await getDoc(productRef);
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("No se encontró el documento");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  // Si el producto aún no se ha cargado, mostramos un spinner
  if (!producto) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" thickness="4px" />
      </Center>
    );
  }

  return (
    <Center margin={10}>
      <Box 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden' 
        boxShadow='2xl' 
        p={6} 
        maxW='lg'
        bg='white'
      >
        <VStack spacing={6} align='stretch'>
          <Image 
            src={producto.image} 
            alt={producto.name} 
            objectFit='cover'
            borderRadius='md'
            boxSize='300px'
            mx='auto'
          />
          <VStack align='start' spacing={3}>
            <Heading as="h2" size="xl" color='blue.600'>{producto.name}</Heading>
            <Text fontSize="md" color='gray.600'>{producto.description}</Text>
            <Badge colorScheme='blue'>{producto.category}</Badge>
            <Text fontSize="2xl" fontWeight="bold" color='green.500'>${producto.price.toFixed(2)}</Text>
          </VStack>
          <Box>
            <ItemCount
              id={producto.id}
              image={producto.image}
              name={producto.name}
              description={producto.description}
              price={producto.price}
            />
          </Box>
        </VStack>
      </Box>
    </Center>
  )
}

export default ItemDetail