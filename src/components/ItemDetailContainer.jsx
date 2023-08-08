import {React} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

const {id} = useParams()
  
const productos =   [{"id":1,"name":"CSF Academy","description":"Pelota de Futbol Unisex","category": "Pelotas", "price": 21999},
{"id":2,"name":"Nike Brasilia","description":"Mochila de Entrenamiento Unisex", "category": "Mochilas", "price": 29999},
{"id":3,"name":"Nike Brasilia Woman","description":"Mochila de Entrenamiento Unisex","category": "Mochilas" , "price": 29999},
{"id":4,"name":"Nike Classic", "description":"Mochila de Moda para Niño/a","category": "Mochilas", "price": 18999},
{"id":5,"name":"Nike Dri-FIT Aerobill Featherlight","description":"Gorra de Running para Hombre","category": "Accesorios", "price": 13799},
{"id":6,"name":"Nike Elemental Premium","description":"Riñonera de Moda Unisex","category": "Accesorios", "price": 24999},
{"id":7,"name":"Nike Everyday Lightweight","description":"Medias de Entrenamiento Unisex 3 Pares","category": "Accesorios", "price": 5999},
{"id":8,"name":"Nike Gym Club","description":"Bolso de Entrenamiento para Mujer","category": "Mochilas", "price": 30999},
{"id":9,"name":"Nike Sportswear","description":"Gorro de Moda Unisex","category": "Accesorios", "price": 14999},
{"id":10,"name":"Nike Sportswear Heritage86 Futura Washed","description":"Gorra de Moda para Hombre", "category": "Accesorios", "price": 12999}]

const getProductos = new Promise((resolve, reject) =>{
  if (productos.length > 0){
    setTimeout(() => {
      resolve(productos)
    }, 2000)
    }else{
      reject(new Error("No hay datos"))
    }
  })
  getProductos
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })

  return (
        <ItemDetail
    productos={productos}
    />
  )
}

export default ItemDetailContainer