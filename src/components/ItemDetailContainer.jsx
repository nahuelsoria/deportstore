import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {

const {id} = useParams()

const [data, setData] = useState([])
useEffect(()=> {
  const db = getFirestore();
  const productCollection = collection(db, "Artículos Deportivos");
  getDocs(productCollection).then((querySnapshot)=>{
    const productos = querySnapshot.docs.map((doc)=>({
      ...doc.data(),
      id: doc.id,
    }));
    setData(productos);
  })
},[])


  return (
        <ItemDetail
    productos={data}
    />
  )
}

export default ItemDetailContainer