function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO SHOPSPHERE</p>

      <h1>Find Your Everyday Essentials.</h1>

      <p className="hero-text">
        Discover products you'll love at prices you'll enjoy. Make every
        purchase special.
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
  );
}

export default Hero;