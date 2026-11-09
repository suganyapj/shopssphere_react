
import { useLocation, useNavigate } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order;

  if (!order) {
    return (
      <section className="order-success">
        <h2>No order details found</h2>
        <button onClick={() => navigate("/")}>
          Back to Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="order-success">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p>Thank you for shopping with ShopSphere.</p>

        <div className="order-info">
          <p>
            <strong>Order ID:</strong> {order.orderId}
          </p>

          <p>
            <strong>Order Date:</strong> {order.orderDate}
          </p>

          <p>
            <strong>Payment Method:</strong>{" "}
            {order.paymentMethod.toUpperCase()}
          </p>

          <p>
            <strong>Total Items:</strong> {order.totalItems}
          </p>

          <p>
            <strong>Total Amount:</strong>{" "}
            ₹{order.totalAmount.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="delivery-info">
          <h3>Delivery Address</h3>

          <p>{order.address.fullName}</p>
          <p>{order.address.house}, {order.address.street}</p>
          <p>
            {order.address.city}, {order.address.state} -{" "}
            {order.address.pinCode}
          </p>
          <p>Phone: {order.address.phone}</p>
        </div>

        <div className="ordered-products">
          <h3>Ordered Products</h3>

          {order.items.map((item) => (
            <div className="ordered-product" key={item.id}>
              <span>{item.name} × {item.quantity}</span>

              <strong>
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </div>
          ))}
        </div>

        <button
          className="continue-shopping-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
}

export default OrderSuccess;
