import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Product from "./components/Product";
import CartProvider from "./context/CartContext";
import CategoryProvider from "./context/CategoryContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {

  return (
    <BrowserRouter >
      <CartProvider >
        <CategoryProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Products item='Productos' />} />
            <Route path='/cart' element={<Cart items='Categorias' />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CategoryProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;