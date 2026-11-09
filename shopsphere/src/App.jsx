import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ShopContext } from "./context/ShopContext";
import products from "./data/products";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
function App() {
  const {
    cart,
    wishlist,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    toggleWishlist,
    moveToWishlist,
    cartCount,
    cartTotal,
  } = useContext(ShopContext);

  //const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products by search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

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
      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        setSelectedCategory={setSelectedCategory}
      />

      <main>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <Home
                filteredProducts={filteredProducts}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                wishlist={wishlist}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                setSearch={setSearch}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                cartCount={cartCount}
                cartTotal={cartTotal}
                //setShowCart={() => navigate("/")}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
                moveToWishlist={moveToWishlist}
              />
            }
          />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
