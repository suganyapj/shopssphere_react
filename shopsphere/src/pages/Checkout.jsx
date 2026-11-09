
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Checkout() {
  const { cart, cartCount, cartTotal } = useContext(ShopContext);
  const navigate = useNavigate();
 const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setAddress({
      ...address,
      [name]: value,
    });
  }

  function handleCheckout(e) {
    e.preventDefault();

    navigate("/payment", {
      state: { address },
    });
  }
  return (
    <section className="checkout-section">
      <h2>Checkout</h2>

      <div className="checkout-container">
        <div className="checkout-form">
          <h3>Delivery Address</h3>

          <form onSubmit={handleCheckout}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={address.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleChange}
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number"
              required
            />

            <input
              type="text"
              name="house"
              placeholder="House / Flat Number"
              value={address.house}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="street"
              placeholder="Street / Area"
              value={address.street}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pinCode"
              placeholder="PIN Code"
              value={address.pinCode}
              onChange={handleChange}
              pattern="[0-9]{6}"
              title="Enter a valid 6-digit PIN code"
              required
            />

            <button type="submit">
              Continue to Payment
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </span>
            </div>
          ))}

          <hr />

          <div className="checkout-total">
            <strong>Total Items</strong>
            <strong>{cartCount}</strong>
          </div>

          <div className="checkout-total">
            <strong>Total Amount</strong>
            <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
          </div>

          <button onClick={() => navigate("/cart")}>
            Back to Cart
          </button>
        </div>
      </div>
    </section>
  );
  
}

export default Checkout;
