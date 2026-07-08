"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <ul className={styles.navList}>
      <li>
        <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.activeLink : ''}`}>
          About us
        </Link>
      </li>
      <li>
        <Link href="/farms" className={`${styles.navLink} ${pathname === '/farms' ? styles.activeLink : ''}`}>
          Farms
        </Link>
      </li>
      <li>
        <Link href="/Livestock" className={`${styles.navLink} ${pathname === '/Livestock' ? styles.activeLink : ''}`}>
          Livestock
        </Link>
      </li>
      <li>
        <Link href="/impact" className={`${styles.navLink} ${pathname === '/impact' ? styles.activeLink : ''}`}>
          Impact
        </Link>
      </li>
      <li>
        <Link href="/customers" className={`${styles.navLink} ${pathname === '/customers' ? styles.activeLink : ''}`}>
          Our customers & partners
        </Link>
      </li>
      <li>
        <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.activeLink : ''}`}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
