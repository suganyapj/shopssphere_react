// function ProductCard({
//   product,
//   isWishlisted,
//   addToCart,
//   toggleWishlist,
// }) {
//   return (
//     <div className="product-card">
//       <button
//         className="wishlist-btn"
//         onClick={() => toggleWishlist(product)}
//       >
//         {isWishlisted ? "❤️" : "🤍"}
//       </button>

//       <img src={product.image} alt={product.name} />

//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="product-category">{product.category}</p>
//         <p className="product-price">₹{product.price}</p>

//         <button onClick={() => addToCart(product)}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import { useNavigate } from "react-router-dom";

function ProductCard({
  product,
  isWishlisted,
  addToCart,
  toggleWishlist,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: "pointer" }}
    >
      <button
        className="wishlist-btn"
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
