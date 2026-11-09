import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

function Home({
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
    <>
      <Hero />

      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductList
        filteredProducts={filteredProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        wishlist={wishlist}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        setSearch={setSearch}
      />
    </>
  );
}

export default Home;