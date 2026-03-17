import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../features/cart/CartSlice';

function Navbar() {
  const count = useSelector(selectCartItemCount);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="brand">Paradise Nursery</div>
      <nav className="nav-links">
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">
          Home
        </Link>
        <Link className={location.pathname === '/products' ? 'active' : ''} to="/products">
          Plants
        </Link>
        <Link className={location.pathname === '/cart' ? 'active' : ''} to="/cart">
          Cart
        </Link>
      </nav>
      <Link className="cart-icon" to="/cart" aria-label="Go to cart">
        🛒 <span>{count}</span>
      </Link>
    </header>
  );
}

export default Navbar;
