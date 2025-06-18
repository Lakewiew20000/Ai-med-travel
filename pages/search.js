import { useState } from 'react';

const providers = [
  { name: 'StemCell Clinic Mexico', country: 'Mexico', procedure: 'Stem Cell Therapy', price: 4500 },
  { name: 'MedTour Turkey', country: 'Turkey', procedure: 'Hair Transplant', price: 2200 },
  { name: 'Smile Dental India', country: 'India', procedure: 'Dental Implants', price: 1300 },
  { name: 'Wellness Seoul', country: 'South Korea', procedure: 'Plastic Surgery', price: 7200 },
];

export default function Search() {
  const [procedure, setProcedure] = useState('');
  const [country, setCountry] = useState('');
  const [budget, setBudget] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = providers.filter(p =>
      (!procedure || p.procedure.includes(procedure)) &&
      (!country || p.country === country) &&
      (!budget || p.price <= parseInt(budget))
    );
    setResults(filtered);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Search Medical Providers</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Procedure: </label>
        <input value={procedure} onChange={(e) => setProcedure(e.target.value)} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Country: </label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">All</option>
          <option value="Mexico">Mexico</option>
          <option value="Turkey">Turkey</option>
          <option value="India">India</option>
          <option value="South Korea">South Korea</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Max Budget (USD): </label>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
      </div>

      <button onClick={handleSearch}>Search</button>

      <hr />

      <h2>Results:</h2>
      {results.length === 0 && <p>No results yet. Try searching!</p>}
      <ul>
        {results.map((p, index) => (
          <li key={index}>
            <strong>{p.name}</strong> – {p.procedure} in {p.country} for ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
