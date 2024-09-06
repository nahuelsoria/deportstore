import { Center, Heading, SimpleGrid, Text, Button, VStack, Input, FormControl, FormLabel, Box } from '@chakra-ui/react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Función para mostrar una notificación de compra exitosa
const toastBuy = () => {
  toast.success("¡Compra realizada! Guarda tu número de orden 😊", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const SendOrder = () => {
  const { cart, clearCart, totalFinal } = useContext(CartContext);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const order = {
    buyer: { name, phone, email },
    items: cart,
    total: totalFinal
  };

  const ordersCollection = collection(db, "orden");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        clearCart();
        toastBuy();
      })
      .catch(error => {
        console.error("Error al enviar la orden:", error);
        toast.error("Error al procesar la orden. Por favor, intenta de nuevo.");
      });
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch" bg="blue.50" borderRadius="xl" padding={8} boxShadow="lg">
        <Heading textAlign="center" color="blue.600">
          Complete el formulario para finalizar su compra
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormField label="Nombre y Apellido" placeholder="Ingrese su nombre completo" onChange={setName} />
            <FormField label="Teléfono" placeholder="Ingrese su número de teléfono" onChange={setPhone} type="tel" />
            <FormField label="E-mail" placeholder="Ingrese su correo electrónico" onChange={setEmail} type="email" />
            <FormField label="Confirmar e-mail" placeholder="Confirme su correo electrónico" onChange={setEmail2} type="email" />
            <Center>
              {email === email2 && email !== "" && email2 !== "" ? (
                <Button colorScheme="blue" size="lg" type="submit">
                  Realizar compra
                </Button>
              ) : (
                <Text color="red.500" fontWeight="bold">
                  Por favor, complete todos los campos correctamente.
                </Text>
              )}
            </Center>
          </VStack>
        </form>
      </VStack>
      {orderId && (
        <Box mt={8} p={6} bg="green.100" borderRadius="md" boxShadow="md">
          <Heading as="h4" size="md" color="green.700" mb={2}>
            ¡Compra exitosa!
          </Heading>
          <Text fontSize="lg">
            Su número de orden es: <strong>{orderId}</strong>
          </Text>
        </Box>
      )}
    </Box>
  );
};

const FormField = ({ label, placeholder, onChange, type = "text" }) => (
  <FormControl isRequired>
    <FormLabel>{label}</FormLabel>
    <Input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      bg="white"
      borderColor="blue.300"
      _hover={{ borderColor: "blue.400" }}
      _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
    />
  </FormControl>
);

export default SendOrder;