import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to AI Med Travel</h1>
        <p>Your gateway to global health, powered by AI.</p>
      </main>
    </>
  );
}
