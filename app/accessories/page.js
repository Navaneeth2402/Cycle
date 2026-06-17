"use client";

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import styles from "./accessories.module.css";

const accessories = [
  {
    id: 13,
    title: "Shop all turbo trainers",
    image:
      "https://cdn.rosebikes.de/cms/cms.68e784db9eb961.32823412.jpg?im=Resize=(580%2C920)",
  },
  {
    id: 14,
    title: "Shop all electronics",
    image:
      "https://cdn.rosebikes.de/cms/cms.68cd33baaf7b10.69700546.jpg?im=Resize=(580%2C920)",
  },
  {
    id: 15,
    title: "Shop all tools",
    image:
      "https://cdn.rosebikes.de/cms/cms.68cd33cd0577f3.34669397.jpg?im=Resize=(580%2C920)",
  },
];

const products = [
  {
    id: 16,
    name: "Garmin Tacx Neo 2T Smart Trainer",
    image:
      "https://cdn.rosebikes.de/images/AF7C29204962442AC5EBA036B39319FD.png?im=Resize=(600%2C600);BackgroundColor=ffffff",
    rating: 5,
    reviews: 82,
    price: "₹1250.00",
  },
  {
    id: 17,
    name: "Garmin Tacx Flux 2 Smart Trainer",
    image:
      "https://cdn.rosebikes.de/images/24D120330967E3CC773F5939CB64BF80.png?im=Resize=(600%2C600);BackgroundColor=ffffff",
    rating: 4,
    reviews: 51,
    price: "₹1080.00",
  },
  {
    id: 18,
    name: "Garmin Tacx NEO Bike Plus",
    image:
      "https://cdn.rosebikes.de/images/685C53C88D7E8EEE8E6F21322AD46F02.png?im=Resize=(600%2C600);BackgroundColor=ffffff",
    rating: 5,
    reviews: 1,
    price: "₹1900.00",
  },
  {
    id: 19,
    name: "Garmin Tacx Neo 2T Smart Trainer",
    image:
      "https://cdn.rosebikes.de/images/8C3C49491B0D73D6DF9AB67E9D5E0387.png?im=Resize=(600%2C600);BackgroundColor=ffffff",
    rating: 4,
    reviews: 82,
    price: "₹900.00",
  },
  {
    id: 20,
    name: "Garmin Tacx Flux 2 Smart Trainer",
    image:
      "https://cdn.rosebikes.de/images/765E291D1A46EF6693D02EF8AD391C12.png?im=Resize=(600%2C600);BackgroundColor=ffffff",
    rating: 5,
    reviews: 51,
    price: "₹980.00",
  },
  {
    id: 21,
    name: "Garmin Tacx NEO Bike Plus",
    image:
      "https://cdn.rosebikes.de/images/2EA7AEB10B4B99A9FFA7D94648D354B4.png?im=Resize=(600%2C600);BackgroundColor=ffffff",
    rating: 4,
    reviews: 1,
    price: "₹1040.00",
  },
];
export default function Accessories() {
  const { addToCart, addToWishlist } =
    useContext(ShopContext);

  return (
    <>
      <section className={styles.performance}>
        <div className={styles.performanceHero}>
          <img
            src="https://www.orbea.com/uploads/microsites/images/YLZX_oc_01_hero_2500x976.webp"
            alt="Performance"
          />

          <div className={styles.performanceOverlay}>
            <h1>
              A System. Not Just
              <br />
              Individual Parts.
            </h1>

            <p>Born to elevate the performance of your bike.</p>
          </div>
        </div>

        <div className={styles.performanceContent}>
          <h2>Performance isn’t added. It’s built in.</h2>

          <p>
            Performance isn't something added at the end. Real performance is
            built in from the start. Components and accessories are designed to
            work together, improving functionality, efficiency and integration.
          </p>
        </div>
      </section>

      <section className={styles.accessories}>
        <h2>Bike Accessories</h2>

        <div className={styles.accessoriesGrid}>
          {accessories.map((item) => (
            <div className={styles.accessoryCard} key={item.id}>
              <img src={item.image} alt={item.title} />

              <button className={styles.accessoryBtn}>
                {item.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <div className={styles.productImage}>
                <button className={styles.favBtn} onClick={() => addToWishlist(product)}>
                  <FiHeart />
                </button>

                <img src={product.image} alt={product.name} />
              </div>

              <div className={styles.rating}>
                {[...Array(product.rating)].map((_, i) => (
                  <FiStar key={i} className={styles.star} />
                ))}
                <span>{product.reviews}</span>
              </div>

              <h3>{product.name}</h3>

              <div className={styles.productFooter}>
                <p className={styles.newPrice}>{product.price}</p>

                <button className={styles.cartBtn} onClick={() => addToCart(product)}>
                  <FiShoppingCart />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}