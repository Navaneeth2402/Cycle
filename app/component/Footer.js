"use client";


import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bike-footer-wrap">
      {/* TOP */}
      <div className="bike-footer-top">
        <div className="bike-footer-newsletter">
          <h3 className="bike-footer-heading">Join</h3>

          <p className="bike-footer-text">
            Subscribe to stay close as Maverick continues
            to shape the future of riding.
          </p>

          <input
            type="email"
            placeholder="Email*"
            className="bike-footer-input"
          />
        </div>

        <div className="bike-footer-links-block">
          <h3 className="bike-footer-heading">About Maverick</h3>

          <ul>
            <li>History</li>
            <li>Articles</li>
            <li>Communities</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="bike-footer-links-block">
          <h3 className="bike-footer-heading">Support</h3>

          <ul>
            <li>Help Center</li>
            <li>Contact</li>
            <li>Warranty</li>
            <li>Register your bike</li>
            <li>Manuals</li>
            <li>Find a Store</li>
          </ul>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="bike-footer-middle">
        <div className="bike-footer-country">
          <FaGlobe />
          <span>International</span>
        </div>

        <p className="bike-footer-kids">
          Maverick Kids
        </p>
      </div>

      {/* SOCIAL */}
      <div className="bike-footer-social">
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
        <FaTiktok />
        <FaYoutube />
        <FaLinkedinIn />
      </div>

      {/* BOTTOM */}
      <div className="bike-footer-bottom">
        <p className="bike-footer-copy">
          © 2026 Maverick Bikes. All Rights Reserved.
        </p>

        <div className="bike-footer-policy">
          <span>Whistleblower Channel</span>
          <span>Cookie Policy</span>
          <span>Privacy Policy</span>
          <span>Quality Policy</span>
          <span>Legal Notice</span>
        </div>
      </div>
    </footer>
  );
}