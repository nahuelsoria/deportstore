import React from 'react'
import { Box, Heading, Text, Container, VStack, Image } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4} color="blue.600">
            Bienvenido al DeportStore
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Tu destino para equipamiento deportivo de alta calidad
          </Text>
        </Box>
        <Image 
          src="/assets/deportstore-banner.jpg" 
          alt="DeportStore Banner" 
          borderRadius="lg" 
          boxShadow="2xl"
        />
      </VStack>
    </Container>
  )
}

export default Home