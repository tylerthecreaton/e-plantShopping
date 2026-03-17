import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  updateQuantity,
  removeItem,
  selectCartItemCount,
  selectCartItems,
  selectCartTotal,
} from "./CartSlice";

/**
 * CartItem Component - Shopping Cart Page
 * Displays cart items with quantity controls, totals, and checkout options
 */
function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartItemCount);
  const totalCost = useSelector(selectCartTotal);

  /**
   * Handle incrementing item quantity
   * Dispatches updateQuantity with positive delta to increase quantity
   * @param {string} id - The item ID to increment
   */
  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, delta: 1 }));
  };

  /**
   * Handle decrementing item quantity
   * Dispatches updateQuantity with negative delta to decrease quantity
   * Removes item when quantity reaches 0
   * @param {string} id - The item ID to decrement
   */
  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, delta: -1 }));
  };

  /**
   * Handle removing item from cart
   * Dispatches removeItem to delete the item completely
   * @param {string} id - The item ID to remove
   */
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  /**
   * Handle checkout button click
   * Shows informative alert about checkout status
   */
  const handleCheckout = () => {
    alert(
      "Checkout functionality is coming soon!\n\n" +
        `You have ${totalItems} item(s) in your cart with a total of $${totalCost.toFixed(2)}.`
    );
  };

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h2>Shopping Cart</h2>
        <p>Total plants in cart: {totalItems}</p>
        <p className="total-cost">Total Amount: ${totalCost.toFixed(2)}</p>

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
                  <button
                    onClick={() => handleDecrement(item.id)}
                    type="button"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    type="button"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                  type="button"
                  aria-label="Remove item from cart"
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <button
            className="checkout-btn"
            type="button"
            onClick={handleCheckout}
          >
            Checkout
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
