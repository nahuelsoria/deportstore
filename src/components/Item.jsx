import React from 'react'
import { Card, Image, CardBody, CardFooter, Heading, Stack, Divider, Button, Text, Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

// Componente Item: Representa un producto individual en la tienda
const Item = ({ id, name, description, category, price, image }) => {
  return (
    <Card maxW='sm' boxShadow='lg' borderRadius='lg' overflow='hidden' transition='all 0.3s' _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}>
      <CardBody p={0}>
        <Image src={image} alt={name} h='200px' w='100%' objectFit='cover' />
        <Box p={6}>
          <Stack spacing='4'>
            <Heading size='md' fontWeight='semibold' color='blue.600'>{name}</Heading>
            <Text fontSize='sm' color='gray.600'>
              {description}
            </Text>
            <Text fontSize='xs' fontWeight='bold' textTransform='uppercase' color='gray.500'>
              Categoría: {category}
            </Text>
            <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
              ${price.toFixed(2)}
            </Text>
          </Stack>
        </Box>
      </CardBody>
      <Divider />
      <CardFooter bg='gray.50' p={4}>
        <Flex justify='center' w='100%'>
          <Link to={`/item/${id}`} style={{ width: '100%' }}>
            <Button variant='solid' colorScheme='blue' w='100%' _hover={{ bg: 'blue.600' }}>
              Ver Detalles
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default Item