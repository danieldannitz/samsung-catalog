import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styles

// Sample product data with sizes and placeholder images
const products = [
  { name: 'Samsung Smart TV UHD 4K DU7700 2024', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung Smart TV Crystal UHD DU8000 2024', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QE98C Crystal UHD Signage', size: 98, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung Flip', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung LH43BETMLGGXZD 43"', size: 43, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung LH50BEDHVGGXZD 50"', size: 50, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung LH55BEDHVGGXZD 55"', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung LH65BEDHVGGXZD 65"', size: 65, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung WA65C 65" Smart Signage', size: 65, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung WA75C 75" Smart Signage', size: 75, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung WA86C 86" Smart Signage', size: 86, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QB43C Crystal UHD Signage', size: 43, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QB50C Crystal UHD Signage', size: 50, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QB55C Crystal UHD Signage', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QB65C Crystal UHD Signage', size: 65, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QB75C Crystal UHD Signage', size: 75, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QM43C Crystal UHD Signage', size: 43, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QM50C Crystal UHD Signage', size: 50, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QM55C Crystal UHD Signage', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QM65C Crystal UHD Signage', size: 65, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QM75C Crystal UHD Signage', size: 75, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QM85C Crystal UHD Signage', size: 85, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung VH55C-R Stand Alone Crystal UHD Signage', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung VM55C-R Stand Alone Crystal UHD Signage', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung VH55C-E Stand Alone Crystal UHD Signage', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung VM55E Stand Alone Crystal UHD Signage', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung VM46B-U Stand Alone Crystal UHD Signage', size: 46, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung VM55B-U Stand Alone Crystal UHD Signage', size: 55, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung IE015A', size: 15, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung Business TV BET-B de 32"', size: 32, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung Business TV BET-M de 43"', size: 43, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung Business TV BEC-H 50", 55", 65", 75"', size: 50, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung Flip WM85R Smart Signage', size: 85, image: 'https://via.placeholder.com/150' },
  { name: 'Samsung QM32R', size: 32, image: 'https://via.placeholder.com/150' },
];

function App() {
  const [query, setQuery] = useState('');
  const [size, setSize] = useState('');
  const [typeFilters, setTypeFilters] = useState({
    businessTv: false,
    smartSignage: false,
    professionalMonitor: false,
  });

  const handleTypeChange = (e) => {
    setTypeFilters({
      ...typeFilters,
      [e.target.name]: e.target.checked,
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    const matchesSize = size ? product.size === parseInt(size) : true;
    const matchesType =
      (typeFilters.businessTv && product.name.includes('Business TV')) ||
      (typeFilters.smartSignage && product.name.includes('Signage')) ||
      (typeFilters.professionalMonitor && product.name.includes('Monitor')) ||
      (!typeFilters.businessTv && !typeFilters.smartSignage && !typeFilters.professionalMonitor);

    return matchesQuery && matchesSize && matchesType;
  });

  return (
    <div className="container">
      <h1>SAMSUNG CATALOG</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Buscar produto"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-bar"
        />
        <input
          type="number"
          placeholder="Informe o tamanho"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="input-field"
        />
      </div>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="businessTv"
            checked={typeFilters.businessTv}
            onChange={handleTypeChange}
          />
          Business TV
        </label>
        <label>
          <input
            type="checkbox"
            name="smartSignage"
            checked={typeFilters.smartSignage}
            onChange={handleTypeChange}
          />
          Smart Signage
        </label>
        <label>
          <input
            type="checkbox"
            name="professionalMonitor"
            checked={typeFilters.professionalMonitor}
            onChange={handleTypeChange}
          />
          Monitor Profissional
        </label>
      </div>

      {}
      {filteredProducts.length > 0 && (
        <ul className="product-list">
          {filteredProducts.map((product, index) => (
            <li key={index} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div>{product.name}</div>
              <div>{product.size}''</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
