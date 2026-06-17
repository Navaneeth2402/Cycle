"use client";

import "./Hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source
            src="https://www.orbea.com/uploads/microsites/videos/3514_rise_home_2500x1406.webm"
            type="video/webm"
          />
        </video>

        <div className="hero-content">
          <p className="hero-subtitle">THE ALL-NEW</p>
          <h1 className="hero-title">REACTO</h1>

          <div className="hero-buttons">
            <button className="btn light">LEARN MORE</button>

            <button
              className="btn dark"
              onClick={() => {
                document
                  .getElementById("bike-category")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              SEE THE BIKES
            </button>
          </div>
        </div>
      </section>

      <h1 className="zero-title">
        THE POWER TO GO FURTHER
      </h1>

      <section className="zero">
        <div className="overlay"></div>

        <div className="zero-content">
          <p className="sub-title">ELECTRIC BIKES</p>

          <Link href="/ebikes">
            <button>
              FIND YOUR NEXT E-BIKE
            </button>
          </Link>
        </div>
      </section>

      <section className="bike-sections">
        <h2>Find the bike that fits you</h2>

        <div className="bike-grids">
          <div className="bike-cards">
            <img
              src="https://cms.orbea.com/uploads/microsites/images/2VFI_03a_home_cardgrid_1600x1200.webp"
              alt="bike1"
            />

            <div className="contents">
              <p>Carpe</p>
              <h3>A Natural Fit</h3>
            </div>
          </div>

          <div className="bike-cards">
            <img
              src="https://cms.orbea.com/uploads/microsites/images/VPYB_03b_home_cardgrid_1600x1200.webp"
              alt="bike2"
            />

            <div className="contents">
              <p>Orca</p>
              <h3>Praise the Light</h3>
            </div>
          </div>

          <div className="bike-cards">
            <img
              src="https://cms.orbea.com/uploads/microsites/images/MGIN_03c_home_cardgrid_1600x1200.webp"
              alt="bike3"
            />

            <div className="contents">
              <p>Terra</p>
              <h3>Boundless</h3>
            </div>
          </div>

          <div className="bike-cards">
            <img
              src="https://cms.orbea.com/uploads/microsites/images/UG53_03d_home_cardgrid_1600x1200.webp"
              alt="bike4"
            />

            <div className="contents">
              <p>Wild</p>
              <h3>The Yes Machine</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bike-hero-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bike-hero-video"
        >
          <source
            src="https://cms.orbea.com/uploads/microsites/videos/8497_01_home_rallonrs_hero_2500x1440.webm"
            type="video/webm"
          />
        </video>

        <div className="bike-hero-overlay"></div>

        <div className="bike-hero-content">
          <h1 className="bike-hero-title">
            Instinct,
            <br />
            Engineered
          </h1>

          <p className="bike-hero-text">
            Switch on and everything fades except the ride.
            The world sharpens, the trail calls, and every
            move feels inevitable.
          </p>

          <div className="bike-hero-actions">
            <Link href="/accessories">
              <button className="bike-hero-btn-primary">
                Explore Accessories
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="bike-category"
        className="bike-category-wrap"
      >
        <h2 className="bike-category-main-title">
          Which path do you want to choose?
        </h2>

        <div className="bike-category-grid">

          <div className="bike-category-card">
            <img
              src="https://cms.orbea.com/uploads/microsites/images/RLSM_05_home_road_1400x1600.webp"
              alt="Road Bike"
              className="bike-category-img"
            />

            <div className="bike-category-overlay"></div>

            <div className="bike-category-content">
              <h2 className="bike-category-title">
                The Essence of
                <br />
                Road Cycling
              </h2>

              <Link href="/roadbikes">
                <button className="bike-category-btn">
                  Discover road bikes
                </button>
              </Link>
            </div>
          </div>

          <div className="bike-category-card">
            <img
              src="https://cms.orbea.com/uploads/microsites/images/HVEL_05_home_mtb_1400x1600.webp"
              alt="Mountain Bike"
              className="bike-category-img"
            />

            <div className="bike-category-overlay"></div>

            <div className="bike-category-content">
              <h2 className="bike-category-title">
                Forged by the Mountain
              </h2>

              <Link href="/mountainbikes">
                <button className="bike-category-btn">
                  Discover mountain bikes
                </button>
              </Link>
            </div>
          </div>

          <div className="bike-category-card">
            <img
              src="https://cms.orbea.com/uploads/microsites/images/2N9U_05_home_urban_1400x1600.webp"
              alt="Urban Bike"
              className="bike-category-img"
            />

            <div className="bike-category-overlay"></div>

            <div className="bike-category-content">
              <h2 className="bike-category-title">
                Shaping Everyday
                <br />
                Movement
              </h2>

              <Link href="/urbanbikes">
                <button className="bike-category-btn">
                  Discover Urban & Active Bikes
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}