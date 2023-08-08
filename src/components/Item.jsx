import React from 'react'
import {Card, CardBody, CardFooter, Heading, Stack, Divider, Button, Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Item = ({id, name, description, category, price}) => {
console.log(id)
  return (
    <Card maxW='sm'>
    <CardBody>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
          {description}
          {category}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${price}
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
        <Button variant='solid' colorScheme='blue'>
        <Link to={`/item/${id}`}>
          Detalles
          </Link>
        </Button>
    </CardFooter>
    <Divider />
  </Card>
  )
}

export default Item