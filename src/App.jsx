import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar'
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import SendOrder from './components/SendOrder';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import "./index.css"

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />          
          <Route path="/cart" element={<Cart />}/>
          <Route path="/category/:category" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/sendorder" element={<SendOrder />}/>
        </Routes>
        <ToastContainer />
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App