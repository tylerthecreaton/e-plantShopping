import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartItemCount,
  selectCartItems,
  selectCartTotal,
} from '../features/cart/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartItemCount);
  const totalCost = useSelector(selectCartTotal);

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h2>Shopping Cart</h2>
        <p>Total plants in cart: {totalItems}</p>
        <p className="total-cost">Total cost: ${totalCost.toFixed(2)}</p>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link className="continue-btn" to="/products">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <article key={item.id} className="cart-row">
                <img src={item.image} alt={item.name} />
                <div className="cart-row-info">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => dispatch(decrementQuantity(item.id))} type="button">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))} type="button">
                    +
                  </button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  type="button"
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button className="checkout-btn" type="button">
            Coming Soon
          </button>
          <Link className="continue-btn" to="/products">
            Continue Shopping
          </Link>
        </div>
      </main>
    </>
  );
}

export default CartItem;
