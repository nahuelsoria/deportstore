import { getFirestore } from 'firebase/firestore'
import React from 'react'

const sendOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState ("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.PreventDefault()
        addDoc(orderCollection, order).then(({ id })=>
        setOrderId(id))
        sendOrder()
    }

    const order ={
        name, email
    }

    const orderCollection = collection(db, "orden")

  return (
    <div>
        <h1>Enviando ordenes</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre y Apellido'
            onChange={(e)=> setName(e.target.value)}
            />
            <input type="email" placeholder="E-mail"
            onChange={(e)=> setEmail(e.target.value)}
            />
            <button type="submit">Realizar compra</button>
        </form>
        <p>Numero de orden: {orderId}</p>
    </div>
  )
}

export default SendOrder