import React from 'react'
import Item from './Item';
import { Box, SimpleGrid, Heading, Container } from '@chakra-ui/react'

// Componente ItemList: Renderiza una lista de productos
const ItemList = ({ productos }) => {
    return (
        <Container maxW="container.xl" py={8}>
            <Heading as="h2" size="xl" mb={6} textAlign="center" color="blue.600">
                Nuestros Productos
            </Heading>
            <Box 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                boxShadow="lg" 
                p={6} 
                bg="white"
            >
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
                    {productos.map((producto) => (
                        <Item
                            key={producto.id}
                            id={producto.id}
                            image={producto.image}
                            name={producto.name}
                            description={producto.description}
                            price={producto.price}
                            category={producto.category}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Container>
    )
}

export default ItemList