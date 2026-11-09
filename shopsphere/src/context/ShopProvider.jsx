
import { useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";

function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shopsphere-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Unable to load cart:", error);
      return [];
    }
  });
const clearCart = () => {
  setCart([]);
};
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("shopsphere-wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Unable to load wishlist:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shopsphere-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("shopsphere-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

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

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  function toggleWishlist(product) {
    setWishlist((currentWishlist) => {
      const alreadyExists = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return currentWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentWishlist, product];
    });
  }

  function moveToWishlist(product) {
    setWishlist((currentWishlist) => {
      const alreadyExists = currentWishlist.some(
        (item) => item.id === product.id
      );

      return alreadyExists
        ? currentWishlist
        : [...currentWishlist, product];
    });

    removeFromCart(product.id);
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        toggleWishlist,
        moveToWishlist,
        cartCount: cart.reduce(
          (total, item) => total + item.quantity,
          0
        ),
        cartTotal: cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopProvider;
