import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetail = ({productos}) => {
const {id} = useParams
const filteredProducts=productos.filter((producto) => producto.id == id)

return (
  <div>
  {filteredProducts.map((p)=> {
    return(
  <div key={p.id}>
    <p>{p.name}</p>
    <p>{p.description}</p>
    </div>
)
})}
</div>
)
}

export default ItemDetail