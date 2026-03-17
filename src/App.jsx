import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
