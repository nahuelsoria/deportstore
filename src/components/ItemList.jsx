import React from 'react'
import Item from './Item';
import {Flex} from '@chakra-ui/react'

const ItemList = ({productos}) => {
    return (
        <Flex>
        {productos.map((p)=>{
          return (
            <Item
            key={p.id}
            id={p.id}
            image={p.image}
            name={p.name}
            description={p.description}
            price={p.price}
            />
           
          )
        })
      }
         </Flex>
      )
}

export default ItemList