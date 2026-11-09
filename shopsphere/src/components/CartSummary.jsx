import { useNavigate } from "react-router-dom";

function CartSummary({ cartCount, cartTotal }) {
    const navigate = useNavigate();
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>Total Items</span>
        <span>{cartCount}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{cartTotal.toLocaleString("en-IN")}</span>
      </div>

      <div className="summary-row">
        <span>Delivery</span>
        <span className="free-delivery">FREE</span>
      </div>

      <hr />

      <div className="summary-row total-row">
        <strong>Total</strong>
        <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
      </div>

      <button
        className="checkout-btn"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;