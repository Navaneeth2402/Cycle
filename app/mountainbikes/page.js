"use client";

import { useContext } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";
import styles from "./mountain.module.css";

const bikes = [
  {
    id: 4,
    name: "PDQ AL",
    description: "Let's get started.",
    price: "₹15500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.67f8b7ac245e07.16436043.png?im=Resize=(1280)",
  },
  {
    id: 5,
    name: "Scrub",
    description: "Made for downhill and freeride",
    price: "₹13500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.67f63659544ba6.76936819.png?im=Resize=(1280)",
  },
  {
    id: 6,
    name: "Bruce",
    description: "Ride to create.",
    price: "₹11500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.67f76952b982d0.95492214.png?im=Resize=(1280)",
  },
];

export default function Mountain() {
  const { addToCart, addToWishlist } =
    useContext(ShopContext);

  return (
    <>
      <section className={styles.mountainbikeContainer}>
        <div className={styles.mountainbikeVideoSection}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.mountainbikeVideo}
          >
            <source
              src="https://www.orbea.com/uploads/microsites/videos/6103_01_mtb_hero_2560x1440.webm"
              type="video/webm"
            />
          </video>

          <div className={styles.mountainbikeOverlay}>
            <h1>Mountain Bikes</h1>

            <p>
              Built for trails, climbs, and adventure.
              Experience ultimate control and confidence
              on every terrain.
            </p>
          </div>
        </div>

        <div className={styles.mountainbikeContent}>
          <p>
            Our mountain bikes are engineered for
            performance and durability. Whether
            tackling steep climbs or rough descents,
            they are built to conquer every challenge.
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