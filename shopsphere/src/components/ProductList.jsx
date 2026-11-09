import ProductCard from "./ProductCard";
function ProductList({
  filteredProducts,
  categories,
  selectedCategory,
  setSelectedCategory,
  wishlist,
  addToCart,
  toggleWishlist,
  setSearch,
}) {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Featured Products</h2>
        </div>

        <p>{filteredProducts.length} products available</p>
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
              selectedCategory === category.name ? "active-filter" : ""
            }
            onClick={() => setSelectedCategory(category.name)}
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
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.some(
                (item) => item.id === product.id
              )}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;