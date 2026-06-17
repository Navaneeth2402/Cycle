"use client";

import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Add To Cart
  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  (item.quantity || 1) + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity (minimum 1)
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1,
          };
        }

        return item;
      })
    );
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Add To Wishlist
  const addToWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setWishlist((prev) => [
        ...prev,
        product,
      ]);
    }
  };

  // Remove From Wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Move Wishlist Item To Cart
  const moveToCart = (product) => {
    addToCart(product);

    setWishlist((prev) =>
      prev.filter(
        (item) => item.id !== product.id
      )
    );
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        increaseQuantity,
        decreaseQuantity,
        moveToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}