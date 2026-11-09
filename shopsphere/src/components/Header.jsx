import { useNavigate } from "react-router-dom";

function Header({
  search,
  setSearch,
  cartCount,
  wishlistCount,
  setSelectedCategory,
}) {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
    setSelectedCategory("All");
    setSearch("");
  }

  return (
    <header className="navbar">
      <h2 className="logo" onClick={goHome}>
        ShopSphere<span>.</span>
      </h2>

      <input
        className="search"
        type="text"
        placeholder="Search for products, brands and more"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          navigate("/");
        }}
      />

      <button className="login-btn" onClick={() => navigate("/login")}>
        Login
      </button>
      <button className="signup-btn" onClick={() => navigate("/register")}>
        Sign Up
      </button>
      <button className="wishlist-btn" onClick={() => navigate("/wishlist")}>
        ❤️ Wishlist ({wishlistCount})
      </button>

      <button className="cart-btn" onClick={() => navigate("/cart")}>
        🛒 Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;
