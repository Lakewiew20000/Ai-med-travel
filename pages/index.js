import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Med Travel</title>
        <meta name="description" content="Your gateway to global health, powered by AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">AI MED TRAVEL</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/providers">Providers</Link></li>
          <li><Link href="/innovation">Innovation</Link></li>
          <li><Link href="/articles">Articles</Link></li>
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to AI Med Travel</h1>
        <p className={styles.description}>
          Your gateway to global health, powered by AI.
        </p>
      </main>
    </div>
  );
}
