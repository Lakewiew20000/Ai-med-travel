import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import TopThreeMatches from '../components/TopThreeMatches';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Med Travel</title>
        <meta name="description" content="Your gateway to global health, powered by AI" />
        <link rel="icon" href="/favicon.ico" />
        {/* ✅ Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* NAVBAR */}
      {/* You can insert your navbar here */}

      {/* HERO SECTION */}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to AI Med Travel</h1>
        <p className={styles.description}>
          Your gateway to global health, powered by AI.
        </p>

        {/* ✅ Tailwind Test Box */}
        <div className="bg-blue-500 text-white p-4 rounded-lg my-4">
          Tailwind is working!
        </div>

        {/* ✅ Top 3 Matches Section */}
        <TopThreeMatches />
      </main>
    </div>
  );
}

