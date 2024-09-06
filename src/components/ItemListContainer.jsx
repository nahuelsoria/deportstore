import { useState, useEffect } from 'react'
import { Box, Center, Spinner, useColorModeValue, Container, Heading } from '@chakra-ui/react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import "../index.css"

// Componente ItemListContainer: Maneja la obtención y presentación de la lista de productos
const ItemListContainer = () => {
  const { category } = useParams()
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const spinnerColor = useColorModeValue('blue.500', 'blue.200')
  const headingColor = useColorModeValue('blue.600', 'blue.200')

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const db = getFirestore();
        const productCollection = collection(db, "Artículos Deportivos");
        const querySnapshot = await getDocs(productCollection);
        const productosData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductos();
  }, [])

  const filteredProducts = category
    ? productos.filter((producto) => producto.category === category)
    : productos;

  if (isLoading) {
    return (
      <Center h="100vh" bg={bgColor}>
        <Spinner size="xl" color={spinnerColor} thickness="4px" speed="0.65s" emptyColor="gray.200" />
      </Center>
    );
  }

  return (
    <Box className='main' bg={bgColor} minH="100vh" py={12}>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" textAlign="center" mb={8} color={headingColor}>
          {category ? `Productos de ${category}` : 'Todos los Productos'}
        </Heading>
        <ItemList productos={filteredProducts} />
      </Container>
    </Box>
  )
}

export default ItemListContainer