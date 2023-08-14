import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Item from "./components/Item";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CartProvider from "./context/CartContext";

const App = () => {

  return (
    <BrowserRouter >
      <CartProvider >
        <NavBar />
        <Routes>
          <Route path='/' element={<Products item='Productos' />} />
          <Route path='/cart' element={<Cart items='Categorias' />} />
          <Route path='/products/:id' element={<Item />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;