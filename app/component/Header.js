"use client";

import {
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";

import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiHeart,
} from "react-icons/fi";

import { ShopContext } from "../context/ShopContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const pathname = usePathname();
  const searchRef = useRef(null);

  const { cart, wishlist } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const forceScrolled =
    pathname === "/cart" ||
    pathname === "/wishlist" ||
    pathname === "/signin" ||
    pathname === "/feedback";

  return (
    <>
      <header
        className={`header ${
          scrolled || forceScrolled
            ? "scrolled"
            : ""
        }`}
      >
        <div className="logo">
          <Link href="/">Maverick</Link>
        </div>

        <nav className="nav-center">
          <Link href="/roadbikes">Road Bikes</Link>
          <Link href="/mountainbikes">Mountain Bikes</Link>
          <Link href="/urbanbikes">Urban Bikes</Link>
          <Link href="/ebikes">E-Bikes</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/feedback">Feedback</Link>
        </nav>

        <div className="nav-right" ref={searchRef}>
          <button
            className="search-btn"
            onClick={() =>
              setShowSearch(!showSearch)
            }
          >
            <FiSearch className="icon" />
          </button>

          <Link href="/signin">
            <FiUser className="icon" />
          </Link>

          <Link
            href="/wishlist"
            className="icon-link"
          >
            <FiHeart />
            <span className="count">
              {wishlist?.length || 0}
            </span>
          </Link>

          <Link
            href="/cart"
            className="icon-link"
          >
            <FiShoppingCart />
            <span className="count">
              {cart?.length || 0}
            </span>
          </Link>

          <div
            className={`search-bar ${
              showSearch ? "active" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Search for products..."
            />

            <button className="search-submit">
              <FiSearch />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}