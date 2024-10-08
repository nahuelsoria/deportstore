# Proyecto de Tienda en Línea

Este proyecto es una aplicación de tienda en línea desarrollada con React y otras tecnologías modernas. A continuación, se detallan las principales tecnologías utilizadas y sus funciones en el proyecto.

## Tecnologías Utilizadas

### React
React es la biblioteca principal utilizada para construir la interfaz de usuario. Permite crear componentes reutilizables y manejar eficientemente el estado de la aplicación.

### React Router
Se utiliza para la navegación entre diferentes páginas de la aplicación, permitiendo una experiencia de usuario fluida sin recargar la página.

### Chakra UI
Esta biblioteca de componentes se usa para crear una interfaz de usuario atractiva y responsiva, proporcionando componentes prediseñados y personalizables.

### Firebase / Firestore
Se emplea como base de datos en la nube para almacenar información sobre productos y órdenes de compra.

### Context API
Utilizada para manejar el estado global de la aplicación, especialmente para el carrito de compras, permitiendo compartir datos entre componentes sin necesidad de pasar props manualmente.

### React Toastify
Se usa para mostrar notificaciones al usuario, como confirmaciones de compra o errores.

## Funcionalidades Principales

1. **Catálogo de Productos**: Muestra una lista de productos disponibles para comprar.
2. **Carrito de Compras**: Permite a los usuarios agregar productos, ver el resumen de su compra y modificar cantidades.
3. **Proceso de Compra**: Guía al usuario a través del proceso de finalización de compra, incluyendo la recolección de información del comprador.
4. **Gestión de Órdenes**: Almacena las órdenes de compra en Firestore y proporciona un número de orden al usuario.
5. **Interfaz Responsiva**: Diseñada para funcionar en dispositivos de diferentes tamaños.

## Estructura del Proyecto

- `src/App.jsx`: Componente principal que define la estructura de la aplicación y las rutas.
- `src/components/`: Contiene componentes reutilizables como `Cart`, `ItemListContainer`, `SendOrder`, etc.
- `src/context/ShoppingCartContext.jsx`: Maneja el estado global del carrito de compras.
- `src/index.css`: Estilos globales de la aplicación.

Este proyecto demuestra el uso de tecnologías modernas de desarrollo web para crear una aplicación de comercio electrónico funcional y escalable.