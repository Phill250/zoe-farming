// app/layout.js
import "./globals.css";
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata = {
  title: 'Zoe Farming Ltd',
  description: 'Cultivating Quality, Growing Opportunities',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>
          
          {/* Universal Header Navbar */}
          <nav className={styles.nav}>
            <img src="/zoe farming.jpg" alt="Logo" className={styles.logo} />
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink}>Home</Link></li>
              <li><Link href="/about" className={styles.navLink}>About us</Link></li>
              <li><Link href="/projects" className={styles.navLink}>Our projects</Link></li>
              <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
          </nav>

          {/* Inject Dynamic Content Pages */}
          <main>{children}</main>

          {/* Universal Footer Section */}
          <footer className={styles.footer}>
            <p style={{ margin: 0 }}>
              Contact us: info@zoefarming.com | +250 788 889 999 / +250 788 309 491
            </p>
          </footer>

        </div>
      </body>
    </html>
  );
}
