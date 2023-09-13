"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import CrissCrossIcon from "../../assets/crissCrossIcon.png";
import Image from "next/image";
import Link from "next/link";
import "./header.css";

export const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Додайте стан для бургер-меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <p className="header__text">Wilson Hausser</p>
      <button
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <nav className={`header-navigation  ${isMenuOpen ? "open" : ""}`}>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="close-burger-button"
        >
          <Image
            src={CrissCrossIcon}
            alt="Criss Cross"
            height={20}
            width={20}
          />
        </button>
        <Link
          href="/releases"
          className={`header-navigation__link ${
            pathname === "/releases" ? "active" : ""
          }`}
        >
          Releases
        </Link>
        <Link
          href="/biography"
          className={`header-navigation__link ${
            pathname === "/biography" ? "active" : ""
          }`}
        >
          Biography
        </Link>
        <Link
          href="/"
          className={`header-navigation__link ${
            pathname === "/" ? "active" : ""
          }`}
        >
          Tour Dates
        </Link>
        <Link
          href="/contact"
          className={`header-navigation__link ${
            pathname === "/contact" ? "active" : ""
          }`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
