import {useState, useEffect} from 'react'
import { Flex } from '@chakra-ui/react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import "../index.css"

const ItemListContainer = () => {
const {category} = useParams()

const [productos, setProductos] = useState([])

useEffect(()=> {
  const db = getFirestore();
  const productCollection = collection(db, "Artículos Deportivos");
  getDocs(productCollection).then((querySnapshot)=>{
    const productos = querySnapshot.docs.map((doc)=>({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(productos);
  })
},[])

const filteredProducts = productos.filter((producto)=> producto.category === category)

return (
  <Flex className='main'>
      <div>
      {category ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />}
     </div>
   </Flex>
)
}

export default ItemListContainer