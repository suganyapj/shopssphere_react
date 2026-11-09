import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((item) => item.id === Number(id));

  const { addToCart, wishlist, toggleWishlist } = useContext(ShopContext);

  if (!product) {
    return (
      <div className="empty-cart">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/")}>Back to Shopping</button>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <section className="product-details">
      <button onClick={() => navigate("/")}>← Back to Shopping</button>

      <div className="product-details-container">
        <img src={product.image} alt={product.name} />

        <div className="product-details-info">
          <p>{product.category}</p>
          <h1>{product.name}</h1>
          <h2>₹{product.price.toLocaleString("en-IN")}</h2>

          <p>⭐ {product.rating} / 5</p>
          <p className="product-description">{product.description}</p>
          <div className="product-quantity">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              −
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            onClick={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart(product);
              }
            }}
          >
            Add to Cart
          </button>

          <button onClick={() => toggleWishlist(product)}>
            {isWishlisted ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
