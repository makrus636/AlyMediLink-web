"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/logo/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
          />
          <span>AlyMediLink</span>
        </div>

        <button
          className={styles.menuIcon}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Image src="/button/list.svg" alt="Menu" width={30} height={30} />
        </button>

        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            <li>
              <Link href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#service" onClick={() => setMenuOpen(false)}>
                Service
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
