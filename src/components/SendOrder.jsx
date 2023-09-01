import { Center, Heading, SimpleGrid, Text, Button} from '@chakra-ui/react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const toastBuy = () => {
  Toastify({
    text: "Compra realizada! Guarda tu numero de orden 😊",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

const SendOrder = () => {
const {cart, clearCart, totalFinal} = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    buyer: {name, phone, email},
    items: cart,
    total: totalFinal
  };

  const ordersCollection = collection(db, "orden");

  return (
    <div>
        <SimpleGrid display='flex' borderWidth='20px' borderRadius='lg' borderColor='skyblue' bg='skyblue' columns={1}>
        <Center margin={20}>
      <Heading display='flex' borderWidth='20px' borderRadius='lg' borderColor='skyblue' bg='skyblue'>Complete el formulario de contacto para finalizar su compra!</Heading>
      </Center >
      <form onSubmit={handleSubmit}>
        <Center >
      <Text fontSize='xl'>Nombre y Apellido:</Text>
      </Center>
      <Center>
        <input
          type="text"
          placeholder="Nombre y apellido"
          onChange={(e) => setName(e.target.value)}
        />
        </Center>
        <Center>
      <Text fontSize='xl'>Telefono:</Text>
      </Center>
      <Center>
        <input
          type="number"
          placeholder="Telefono"
          onChange={(e) => setPhone(e.target.value)}
        />
        </Center>
        <Center>
      <Text fontSize='xl'>E-mail:</Text>
      </Center>
      <Center>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        </Center>
        <Center>
      <Text fontSize='xl'>Confirmar e-mail:</Text>
      </Center>
      <Center>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail2(e.target.value)}
        />
        </Center>
        <Center>
            {email===email2 && email!="" && email2!=""? <Button  onClick={toastBuy} margin={10} type="submit">Realizar compra</Button> : <Heading as='h4' size='md' margin={10}> Ingresa todos los datos para realizar la compra!</Heading> }
        </Center>
      </form>
      </SimpleGrid>
      <Center borderWidth='20px' borderRadius='lg' borderColor='skyblue' bg='skyblue' margin={10}>
      <Heading as='h4' size='xl' margin={5}>Numero de orden:</Heading>
      <br/>
        <Heading as='h4' size='xl' margin={5}>{orderId}</Heading>
        </Center>
      
    </div>
  );
};

export default SendOrder;