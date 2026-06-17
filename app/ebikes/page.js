"use client";

import { useContext } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";
import styles from "./ebike.module.css";

const bikes = [
  {
    id: 10,
    name: "ETMO 800",
    description: "E-bike with balanced geometry for long, fast rides.",
    price: "₹16500.00",
    image:
      "https://merida-cdn.m-c-g.net/merida-v2/crud-card/master/bikes/2024/eONE-SIXTY_10K_whtbrz_MY24.tif?p1",
  },
  {
    id: 11,
    name: "ETMO 500 PRO",
    description: "Fully aero-optimised e-bike for your fastest rides.",
    price: "₹17500.00",
    image:
      "https://merida-cdn.m-c-g.net/merida-v2/crud-card/master/bikes/2026/eBIG_NINE_400_blublu_MY26.tif?p1",
  },
  {
    id: 12,
    name: "ETMO 300",
    description:
      "This e-bike makes it easy for you to enter the world of racing",
    price: "₹18000.00",
    image:
      "https://merida-cdn.m-c-g.net/merida-v2/crud-card/master/bikes/2026/eONE-SIXTY_SL_6000_redblk_MY26.tif?p1",
  },
];

export default function Ebike() {
  const { addToCart, addToWishlist } =
    useContext(ShopContext);

  return (
    <>
      <section className={styles.performance}>
        <div className={styles.performanceHero}>
          <img
            src="https://merida-cdn.m-c-g.net/merida-v2/crud-content-img-big/db-global/2020/tags/20-merida-models-e-mountainbikes-ebig-tour.jpg?p1"
            alt="E-Bike"
          />
        </div>

        <div className={styles.performanceContent}>
          <p>
            The power to go further. Go faster. Combine more
            practicality and more fun. Our eBike range lets
            you achieve all this - and more.
          </p>
        </div>
      </section>

      <section className={styles.showcaseSection}>
        {bikes.map((bike, index) => (
          <div
            key={bike.id}
            className={`${styles.showcaseRow} ${
              index % 2 !== 0
                ? styles.reverse
                : ""
            }`}
          >
            <div className={styles.bikeImage}>
              <button
                className={styles.heartIcon}
                onClick={() =>
                  addToWishlist(bike)
                }
              >
                <FiHeart />
              </button>

              <img
                src={bike.image}
                alt={bike.name}
              />
            </div>

            <div className={styles.bikeContent}>
              <h2>{bike.name}</h2>

              <p>{bike.description}</p>

              <h3>from {bike.price}</h3>

              <div className={styles.bikeActions}>
                <button
                  className={styles.cartBtn}
                  onClick={() =>
                    addToCart(bike)
                  }
                >
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}