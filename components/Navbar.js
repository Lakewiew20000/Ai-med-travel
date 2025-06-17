import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      background: '#0070f3',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{ margin: 0 }}>AI Med Travel</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ color: 'white' }}>Home</Link>
        <Link href="/search" style={{ color: 'white' }}>Search</Link>
        <Link href="/compare" style={{ color: 'white' }}>Compare</Link>
        <Link href="/innovations" style={{ color: 'white' }}>Innovations</Link>
        <Link href="/providers" style={{ color: 'white' }}>For Providers</Link>
        <Link href="/portal" style={{ color: 'white' }}>Patient Portal</Link>
      </div>
    </nav>
  );
}
