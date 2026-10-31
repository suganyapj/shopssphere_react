
import { useState,useEffect } from "react";
import "./App.css";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem("shopsphere-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Unable to load cart:", error);
    return [];
  }
});
useEffect(() => {
  localStorage.setItem("shopsphere-cart", JSON.stringify(cart));
}, [cart]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add product to cart
  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  // Increase product quantity
  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease product quantity
  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove product from cart
  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  // Calculate total cart quantity
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filter products by search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { name: "Fashion", emoji: "👟" },
    { name: "Electronics", emoji: "🎧" },
    { name: "Home & Living", emoji: "💡" },
    { name: "Beauty", emoji: "✨" },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <h2
          className="logo"
          onClick={() => {
            setShowCart(false);
            setSelectedCategory("All");
            setSearch("");
          }}
        >
          ShopSphere<span>.</span>
        </h2>

        <input
          className="search"
          type="text"
          placeholder="Search for products, brands and more"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowCart(false);
          }}
        />

        <button className="login-btn">
          Login
        </button>

        <button
          className="cart-btn"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 Cart ({cartCount})
        </button>
      </header>

      <main>

        {/* SHOPPING CART */}
        {showCart ? (
          <section className="cart-section">

            <div className="cart-heading">
              <div>
                <p className="eyebrow">YOUR SELECTION</p>
                <h2>Your Shopping Cart</h2>
              </div>

              <button
                className="continue-btn"
                onClick={() => setShowCart(false)}
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
                    <div className="cart-item" key={item.id}>

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">
                        <span className="product-category">
                          {item.category}
                        </span>

                        <h3>{item.name}</h3>

                        <p className="cart-item-price">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>

                        <div className="quantity-controls">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>

                      <p className="item-subtotal">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>

                    </div>
                  ))}

                </div>

                <div className="cart-summary">
                  <h3>Order Summary</h3>

                  <div className="summary-row">
                    <span>Total Items</span>
                    <span>{cartCount}</span>
                  </div>

                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="summary-row">
                    <span>Delivery</span>
                    <span className="free-delivery">FREE</span>
                  </div>

                  <hr />

                  <div className="summary-row total-row">
                    <strong>Total</strong>
                    <strong>
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <button
                    className="checkout-btn"
                    onClick={() =>
                      alert("Checkout functionality coming soon!")
                    }
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}

          </section>
        ) : (

          <>
            {/* HERO SECTION */}
            <section className="hero">
              <p className="eyebrow">
                WELCOME TO SHOPSPHERE
              </p>

              <h1>
                Find Your Everyday Essentials.
              </h1>

              <p className="hero-text">
                Discover products you'll love at prices
                you'll enjoy. Make every purchase special.
              </p>

              <button
                className="shop-btn"
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Collection →
              </button>
            </section>

            {/* CATEGORIES */}
            <section className="categories">

              <h2>Shop by Category</h2>

              <div className="category-grid">

                {categories.map((category) => (
                  <button
                    className={`category-card ${
                      selectedCategory === category.name
                        ? "active-category"
                        : ""
                    }`}
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>{category.emoji}</span>
                    <h3>{category.name}</h3>
                  </button>
                ))}

              </div>
            </section>

            {/* PRODUCTS */}
            <section className="products-section" id="products">

              <div className="section-heading">
                <div>
                  <p className="eyebrow">OUR COLLECTION</p>
                  <h2>Featured Products</h2>
                </div>

                <p>
                  {filteredProducts.length} products available
                </p>
              </div>

              <div className="filter-bar">

                <button
                  className={selectedCategory === "All" ? "active-filter" : ""}
                  onClick={() => setSelectedCategory("All")}
                >
                  All Products
                </button>

                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={
                      selectedCategory === category.name
                        ? "active-filter"
                        : ""
                    }
                    onClick={() =>
                      setSelectedCategory(category.name)
                    }
                  >
                    {category.name}
                  </button>
                ))}

              </div>

              {filteredProducts.length === 0 ? (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try another search or category.</p>

                  <button
                    className="shop-btn"
                    onClick={() => {
                      setSearch("");
                      setSelectedCategory("All");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="products-grid">

                  {filteredProducts.map((product) => (
                    <div
                      className="product-card"
                      key={product.id}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="product-info">

                        <span className="product-category">
                          {product.category}
                        </span>

                        <h3>{product.name}</h3>

                        <p className="product-rating">
                          ⭐ {product.rating}
                        </p>

                        <p className="product-price">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>

                        <button
                          className="add-cart-btn"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>

                      </div>
                    </div>
                  ))}

                </div>
              )}

            </section>

          </>
        )}

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <h2 className="logo">
          ShopSphere<span>.</span>
        </h2>

        <p>Discover more. Shop better. Live better.</p>
        <p>© 2026 ShopSphere. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
