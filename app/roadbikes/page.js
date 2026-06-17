"use client";

import { useContext } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";
import styles from "./road.module.css";

const bikes = [
  {
    id: 1,
    name: "Shave",
    description:
      "Road bike with balanced geometry for long, fast rides.",
    price: "₹12500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.698354fb7878b2.41364385.png?im=Resize=(1280)",
  },
  {
    id: 2,
    name: "Shave FF",
    description:
      "Fully aero-optimised race bike for your fastest rides.",
    price: "₹13500.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.698354fc1e6cd6.87722120.png?im=Resize=(1280)",
  },
  {
    id: 3,
    name: "Blend",
    description:
      "This bike makes it easy for you to enter the world of racing.",
    price: "₹14000.00",
    image:
      "https://cdn.rosebikes.de/cms/cms.69ccfe847192b9.66806381.jpg?im=Resize=(1280)",
  },
];

export default function Road() {
  const { addToCart, addToWishlist } =
    useContext(ShopContext);

  return (
    <>
      <section className={styles.roadbikeContainer}>
        <div className={styles.roadbikeVideoSection}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.roadbikeVideo}
          >
            <source
              src="https://www.orbea.com/uploads/microsites/videos/2274_01_road_hero_2560x1440.webm"
              type="video/webm"
            />
          </video>

          <div className={styles.roadbikeOverlay}>
            <h1>Road Bikes</h1>

            <p>
              For those who live to ride. This is the
              perfect way to push boundaries and feel
              the reward of every mile.
            </p>
          </div>
        </div>

        <div className={styles.roadbikeContent}>
          <p>
            Our road bikes are all about the joy of
            riding. That joy can come from going
            faster, going further, or simply finding
            rhythm on the road.
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