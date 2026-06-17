"use client";

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import styles from "./wishlist.module.css";

export default function WishlistPage() {
  const {
    wishlist,
    removeFromWishlist,
    moveToCart,
  } = useContext(ShopContext);

  return (
    <div className={styles.page}>
      <h1>Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className={styles.empty}>
          Your wishlist is empty
        </p>
      ) : (
        <>
          <div className={styles.wishlistSection}>
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={styles.card}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className={styles.info}>
                  <h3>{item.name}</h3>

                  <p>{item.price}</p>

                  <div className={styles.actions}>
                    <button
                      className={styles.cartBtn}
                      onClick={() =>
                        moveToCart(item)
                      }
                    >
                      Move to Cart
                    </button>

                    <button
                      className={styles.removeBtn}
                      onClick={() =>
                        removeFromWishlist(
                          item.id
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Wishlist Summary</h2>

            <div className={styles.summaryRow}>
              <span>Total Items</span>
              <span>{wishlist.length}</span>
            </div>

            <button
              className={styles.summaryBtn}
            >
              {/* Move All To Cart */}
            </button>
          </div>
        </>
      )}
    </div>
  );
}