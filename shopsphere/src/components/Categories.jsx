
function Categories({ categories, selectedCategory, setSelectedCategory }) {
  return (
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
  );
}

export default Categories;
