import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useNavigate } from "react-router-dom";
function Cart({

  cart,
  cartCount,
  cartTotal,
  setShowCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  moveToWishlist,
})
 {
  const navigate = useNavigate();

  return (
    <section className="cart-section">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h2>Your Shopping Cart</h2>
        </div>

        <button
          className="continue-btn"
           onClick={() => navigate("/")}
        >
           
          Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet.</p>

          <button
            className="shop-btn"
            onClick={() => setShowCart(false)}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
                moveToWishlist={moveToWishlist}
              />
            ))}
          </div>

          <CartSummary
            cartCount={cartCount}
            cartTotal={cartTotal}
          />
        </>
      )}
    </section>
  );
}

export default Cart;