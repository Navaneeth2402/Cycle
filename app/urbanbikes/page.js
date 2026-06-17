"use client";

import { useContext } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";
import styles from "./urban.module.css";

const bikes = [
  {
    id: 7,
    name: "Sneak",
    description: "Riding fast on the streets of your city",
    price: "₹12500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.6a1d79ce9c4e00.25078134.png?im=Resize=(1280)",
  },
  {
    id: 8,
    name: "Hubo",
    description: "Your robust steel bike that can do it all",
    price: "₹10500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.6a1ec4be5235b3.03835009.png?im=Resize=(1280)",
  },
  {
    id: 9,
    name: "Black Lava",
    description: "Where everyday life takes you",
    price: "₹14500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.697354fd348241.05605635.png?im=Resize=(1280)",
  },
];

export default function Urban() {
  const { addToCart, addToWishlist } =
    useContext(ShopContext);

  return (
    <>
      <section className={styles.urbanbikeContainer}>
        <div className={styles.urbanbikeVideoSection}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.urbanbikeVideo}
          >
            <source
              src="https://www.orbea.com/uploads/microsites/videos/8616_01_urban_hero_2500x1406.webm"
              type="video/webm"
            />
          </video>

          <div className={styles.urbanbikeOverlay}>
            <h1>Urban Bikes</h1>

            <p>
              Designed for city streets and daily
              commuting. Urban bikes combine comfort,
              style, and efficiency for every ride.
            </p>
          </div>
        </div>

        <div className={styles.urbanbikeContent}>
          <p>
            Our urban bikes are built for modern city
            life. Whether commuting to work or
            exploring the city, they offer
            reliability, comfort, and performance.
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

              <h3>From {bike.price}</h3>

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