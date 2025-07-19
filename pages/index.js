import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/match-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data);
    setLoading(false);
  };

  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        ViVi 💫 Smart Match
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="e.g. I need a gastric sleeve under $6K in Mexico"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '0.5rem', border: '1px solid #ccc', borderRadius: 5 }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: 5,
            border: 'none',
          }}
        >
          {loading ? 'Matching...' : 'Send'}
        </button>
      </form>

      {response && (
        <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: 8 }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Top Matches:</h2>
          <ul>
            {response.quotes?.map((quote, i) => (
              <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                <strong>{quote.providerName}</strong><br />
                {quote.procedure} — <strong>${quote.price}</strong><br />
                {quote.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
