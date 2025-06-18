import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoSection}>
        <Link href="/">
          <Image src="/logo.png" alt="AI Med Travel" width={150} height={40} />
        </Link>
      </div>
      <div style={styles.links}>
        <Link href="/articles" style={styles.link}>Articles</Link>
        <Link href="/providers" style={styles.link}>Providers</Link>
        <Link href="/innovation" style={styles.link}>Innovation</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
        <Link href="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eaeaea',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center'
  },
  links: {
    display: 'flex',
    gap: '1.5rem'
  },
  link: {
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none'
  }
};


