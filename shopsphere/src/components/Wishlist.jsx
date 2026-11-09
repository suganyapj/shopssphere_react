import ProductCard from "./ProductCard";

function Wishlist({ wishlist, addToCart, toggleWishlist }) {
  return (
    <section className="wishlist-section">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">YOUR SAVED ITEMS</p>
          <h2>My Wishlist ❤️</h2>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-cart">
          <h3>Your wishlist is empty ❤️</h3>
          <p>Save products you love and find them here.</p>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map((product) => (
            <div className="wishlist-card" key={product.id}>
              <ProductCard
                product={product}
                isWishlisted={true}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
              />

              <button
                className="add-cart-btn"
                onClick={() => {
                  addToCart(product);
                  toggleWishlist(product);
                }}
              >
                Move to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;