import { useState } from 'react';
import styles from '../styles/Search.module.css';

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
      (!procedure || p.procedure.toLowerCase().includes(procedure.toLowerCase())) &&
      (!country || p.country === country) &&
      (!budget || p.price <= parseInt(budget))
    );
    setResults(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
        />
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">All Countries</option>
          <option value="Mexico">Mexico</option>
          <option value="Turkey">Turkey</option>
          <option value="India">India</option>
          <option value="South Korea">South Korea</option>
        </select>
        <input
          type="number"
          placeholder="Max Budget (USD)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className={styles.results}>
        {results.length === 0 ? (
          <p className={styles.empty}>No results yet. Try searching!</p>
        ) : (
          results.map((p, index) => (
            <div key={index} className={styles.card}>
              <h3>{p.name}</h3>
              <p>{p.procedure} in {p.country}</p>
              <p className={styles.price}>${p.price.toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
