// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/ai-med-logo.png" alt="AI Med Travel Logo" width={160} height={40} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/providers">Providers</Link></li>
        <li><Link href="/innovation">Innovation</Link></li>
        <li><Link href="/articles">Articles</Link></li>
        <li><Link href="/search">Search</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}



