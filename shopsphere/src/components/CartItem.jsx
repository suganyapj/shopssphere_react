function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  moveToWishlist,
}) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <span className="product-category">
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <p className="cart-item-price">
          ₹{item.price.toLocaleString("en-IN")}
        </p>

        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

        <button
          className="move-wishlist-btn"
          onClick={() => moveToWishlist(item)}
        >
          ♡ Move to Wishlist
        </button>
      </div>

      <p className="item-subtotal">
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </p>
    </div>
  );
}

export default CartItem;