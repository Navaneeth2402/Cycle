"use client";

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import styles from "./cart.module.css";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ShopContext);

  const grandTotal = cart.reduce((total, item) => {
    const price = parseFloat(
      item.price.replace(/[^\d.]/g, "")
    );

    return total + price * (item.quantity || 1);
  }, 0);

  return (
    <div className={styles.page}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className={styles.empty}>
          Your cart is empty
        </p>
      ) : (
        <>
          {cart.map((item) => {
            const price = parseFloat(
              item.price.replace(/[^\d.]/g, "")
            );

            const itemTotal =
              price * (item.quantity || 1);

            return (
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

                  <p className={styles.price}>
                    Price: {item.price}
                  </p>

                  <div
                    className={styles.quantityBox}
                  >
                    <button
                      className={
                        styles.quantityBtn
                      }
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span
                      className={styles.quantity}
                    >
                      {item.quantity || 1}
                    </span>

                    <button
                      className={
                        styles.quantityBtn
                      }
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p className={styles.total}>
                    Total: €
                    {itemTotal.toFixed(2)}
                  </p>

                  <button
                    className={styles.removeBtn}
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          <div className={styles.summary}>
            <h2>
              Grand Total: €
              {grandTotal.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
}