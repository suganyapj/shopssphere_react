import { useContext, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
function Payment() {
  const { cart, cartCount, cartTotal, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const address = location.state?.address;
  const [paymentMethod, setPaymentMethod] = useState("upi");

  
function handlePayment(e) {
  e.preventDefault();

  if (!address) {
    alert("Delivery address is missing. Please enter your address again.");
    navigate("/checkout");
    return;
  }

  const order = {
    orderId: `SS${Date.now()}`,
    items: cart.map((item) => ({ ...item })),
    totalItems: cartCount,
    totalAmount: cartTotal,
    address: address,
    paymentMethod: paymentMethod,
    orderDate: new Date().toLocaleString("en-IN"),
  };
clearCart();
  navigate("/order-success", {
    state: { order },
  });
}


  return (
    <section className="payment-section">
      <div className="payment-header">
        <p className="eyebrow">SECURE CHECKOUT</p>
        <h2>Choose Payment Method</h2>
        <p>Select how you would like to pay for your order.</p>
      </div>

      <div className="payment-container">
        <div className="payment-options">
          <h3>Payment Options</h3>

          <form onSubmit={handlePayment}>
            {/* UPI */}
            <label
              className={`payment-option ${
                paymentMethod === "upi" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <div className="payment-option-content">
                <span className="payment-icon">📱</span>
                <div>
                  <strong>UPI Payment</strong>
                  <p>Google Pay, PhonePe, Paytm</p>
                </div>
              </div>
            </label>

            {paymentMethod === "upi" && (
              <div className="payment-fields">
                <label>UPI ID</label>
                <input type="text" placeholder="example@upi" required />
              </div>
            )}

            {/* Card */}
            <label
              className={`payment-option ${
                paymentMethod === "card" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <div className="payment-option-content">
                <span className="payment-icon">💳</span>
                <div>
                  <strong>Credit / Debit Card</strong>
                  <p>Visa, Mastercard and RuPay</p>
                </div>
              </div>
            </label>

            {paymentMethod === "card" && (
              <div className="payment-fields">
                <label>Cardholder Name</label>
                <input type="text" placeholder="Name on card" required />

                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />

                <div className="card-extra-fields">
                  <div>
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                  </div>

                  <div>
                    <label>CVV</label>
                    <input
                      type="password"
                      placeholder="CVV"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Cash on Delivery */}
            <label
              className={`payment-option ${
                paymentMethod === "cod" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              <div className="payment-option-content">
                <span className="payment-icon">💵</span>
                <div>
                  <strong>Cash on Delivery</strong>
                  <p>Pay when your order arrives</p>
                </div>
              </div>
            </label>

            {paymentMethod === "cod" && (
              <div className="cod-message">
                You can pay in cash when your order is delivered.
              </div>
            )}

            <button type="submit" className="place-order-btn">
              Place Order · ₹{cartTotal.toLocaleString("en-IN")}
            </button>

            <button
              type="button"
              className="back-checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Back to Checkout
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="payment-summary">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </div>
          ))}

          <hr />

          <div className="checkout-total">
            <span>Total Items</span>
            <strong>{cartCount}</strong>
          </div>

          <div className="checkout-total payment-grand-total">
            <strong>Total Amount</strong>
            <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
          </div>

          <div className="secure-payment-note">
            🔒 Your payment details are not processed or stored in this demo.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
