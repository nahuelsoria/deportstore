import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// Componente ItemDetailContainer: Maneja la obtención y presentación de detalles de un producto
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const db = getFirestore();
        const coleccionProductos = collection(db, "Artículos Deportivos");
        const snapshot = await getDocs(coleccionProductos);
        const productosObtenidos = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductos(productosObtenidos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    obtenerProductos();
  }, []);

  return <ItemDetail productos={productos} />;
};

export default ItemDetailContainer;