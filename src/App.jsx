import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [size, setSize] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { id: "CY-LJRNLS/ZA", name: "Ferramenta Manutenção Samsung LED CY-LJRNLS/ZA", size: "", image: "https://cdn.cs.1worldsync.com/38/1b/381bbb09-c260-4641-8efb-3cdfb5fa5870.jpg" },
    { id: "LH015IEACLS/ZA", name: "Painel de LED Samsung Indoor IE015A FHD LH015IEACLS/ZA", size: "", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh015ieacls-za/gallery/br-led-signage-ieacls-405270-lh015ieacls-za-537899236?$684_547_JPG$" },
    { id: "LH32QMCEBGCXZA", name: "Monitor Profissional Samsung FHD 32\" QM32C LH32QMCEBGCXZA", size: "32", image: "https://images.samsung.com/is/image/samsung/p6pim/ca/lh32qmcebgcxza/gallery/ca-4k-uhd-signage-482671-lh32qmcebgcxza-539156972?$684_547_JPG$" },
    { id: "LH43QBCEBGCXZD", name: "Monitor Profissional Samsung 4K 43\" QB43C LH43QBCEBGCXZD", size: "43", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh43qbcebgcxzd/gallery/br-4k-uhd-signage-qbc-lh43qbcebgcxzd-539733891?$684_547_JPG$" },
    { id: "LH43QMCEBGCXZD", name: "Monitor Profissional Samsung 4K 43\" QM43C LH43QMCEBGCXZD", size: "43", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh43qmcebgcxzd/gallery/br-4k-uhd-signage-lh43qmcebgcxzd-537415239?$684_547_JPG$" },
    { id: "LH46VMBUBGBXZD", name: "Monitor Prof Samsung 46\" VM46BU VídeoWall LH46VMBUBGBXZD", size: "46", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh46vmbubgbxzd/gallery/br-smart-signage-vm55b-u-429306-lh46vmbubgbxzd-533044372?$684_547_JPG$" },
    { id: "LH50QMCEBGCXZD", name: "Monitor Profissional Samsung 4K 50\" QM50C LH50QMCEBGCXZD", size: "50", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh50qmcebgcxzd/gallery/br-4k-uhd-signage-lh50qmcebgcxzd-537415269?$684_547_JPG$" },
    { id: "LH55OHAOSGBXEN", name: "Monitor Profissional Samsung 55\" Outdoor LH55OHAOSGBXEN", size: "55", image: "https://images.samsung.com/is/image/samsung/p6pim/pt/lh55ohaosgbxen/gallery/pt-smart-signage-oh55a-s-lh55ohaosgbxen-538842132?$684_547_JPG$" },
    { id: "LH55QBCEBGCXZD", name: "Monitor Profissional Samsung 4K 55\" QB55C LH55QBCEBGCXZD", size: "55", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh55qbcebgcxzd/gallery/br-4k-uhd-signage-qbc-lh55qbcebgcxzd-539733925?$684_547_JPG$" },
    { id: "LH55QMCEBGCXZD", name: "Monitor Profissional Samsung 4K 55\" QM55C LH55QMCEBGCXZD", size: "55", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh55qmcebgcxzd/gallery/br-4k-uhd-signage-lh55qmcebgcxzd-537415300?$684_547_JPG$" },
    { id: "LH55VMBEBGBXZD", name: "Monitor Prof Samsung 55\" VM55BE VídeoWall LH55VMBEBGBXZD", size: "55", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh55vmbebgbxzd/gallery/br-smart-signage-vmb-e-lh55vmbebgbxzd-534357347?$684_547_JPG$" },
    { id: "LH65WMBWBGCXZA", name: "Monitor Profissional Samsung Touch 65\" Flip LH65WMBWBGCXZA", size: "65", image: "https://image-us.samsung.com/SamsungUS/samsungbusiness/displays/interactive/wm-series/galleryimages/WM55B_002_Front-with-Tray_White.jpg?$product-details-jpg$" },
    { id: "LH75QMCEBGCXEN", name: "Monitor Profissional Samsung 4K 75\" QM75C LH75QMCEBGCXEN", size: "75", image: "https://images.samsung.com/is/image/samsung/p6pim/africa_en/lh75qmcebgcxen/gallery/africa-en-4k-uhd-signage-lh75qmcebgcxen-537775192?$684_547_JPG$" },
    { id: "LH85QMCEBGCXEN", name: "Monitor Profissional Samsung 4K 85\" QM85C LH85QMCEBGCXEN", size: "85", image: "https://images.samsung.com/is/image/samsung/p6pim/africa_pt/lh85qmcebgcxen/gallery/africa-pt-4k-uhd-signage-lh85qmcebgcxen-538278516?$684_547_JPG$" },
    { id: "LH98QBTBPGCXZA", name: "Monitor Profissional Samsung 4K 98\" QB98T LH98QBTBPGCXZA", size: "98", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh98qbtbpgcxza/gallery/br-monitor-qbt-b-lh98qbtbpgcxza-539869466?$684_547_JPG$" },
    { id: "LH98QECEDGCXEN", name: "Monitor Profissional Samsung 4K 98\" QE98C LH98QECEDGCXEN", size: "98", image: "https://images.samsung.com/is/image/samsung/p6pim/de/lh98qecedgcxen/gallery/de-smart-signage-qe98c-512679-lh98qecedgcxen-542277667?$684_547_JPG$" },
    { id: "SBB-SNOWRAF/ZA", name: "Processadora Samsung Vídeo FHD SBB-SNOWRAF/ZA", size: "", image: "https://images.samsung.com/is/image/samsung/ca-snow-raf-sbb-snowraf-za-frontblack-485136258?$684_547_JPG$" },
    { id: "SBB-SS08NU1XZA", name: "Signage Samsung Player Box SBB-SS08NU1XZA", size: "", image: "https://images.samsung.com/is/image/samsung/p6pim/br/sbb-ss08nu1xza/gallery/br-sbb-ssnu-sbb-ss08nu1xza-534390652?$684_547_JPG$" },
    { id: "VG-LFR33FWL/ZA", name: "Suporte Samsung Fixação 3x3 VG-LFR33FWL/ZA", size: "", image: "https://images.samsung.com/is/image/samsung/uk-the-wall-framekit-lfr08-vg-lfr08swwxen-front-188854963?$650_519_PNG$" },
    { id: "LH46VMBUBGBXZD", name: "Monitor Prof Samsung 46\" VM46BU VídeoWall LH46VMBUBGBXZD", size: "46", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh46vmbubgbxzd/gallery/br-smart-signage-vm55b-u-429306-lh46vmbubgbxzd-533044372?$684_547_JPG$" },
    { id: "LH50QMRBBGCXZD", name: "Monitor Profissional Samsung LED 4K 50\" QM50R LH50QMRBBGCXZD", size: "50", image: "https://images.samsung.com/is/image/samsung/p6pim/latin_en/lh50qmbebgcxgo/gallery/latin-en-uhd-4k-500nit-lh50qmbebgcxgo-540714218?$684_547_JPG$" },
    { id: "LH55QMRBBGCXZD", name: "Monitor Profissional Samsung LED 4K 55\" QM55R LH55QMRBBGCXZD", size: "55", image: "https://images.samsung.com/is/image/samsung/p6pim/br/lh55qmrbbgcxd/gallery/br-smart-signage-qe55qmrbbgcxd-529057943?$684_547_JPG$" },
    { id: "LH65QMRBBGCXZD", name: "Monitor Profissional Samsung LED 4K 65\" QM65R LH65QMRBBGCXZD", size: "65", image: "https://images.samsung.com/is/image/samsung/p6pim/lb/lh65qmbebgcxen/gallery/lb-uhd-4k-500nit-426349-lh65qmbebgcxen-532797024?$684_547_JPG$" },
    { id: "LH75QMRBBGCXZD", name: "Monitor Profissional Samsung LED 4K 75\" QM75R LH75QMRBBGCXZD", size: "75", image: "https://images.samsung.com/is/image/samsung/p6pim/lb/lh75qmbebgcxen/gallery/lb-uhd-4k-500nit-lh75qmbebgcxen-532750588?$684_547_JPG$" },
    { id: "LH85QMRBBGCXZD", name: "Monitor Profissional Samsung LED 4K 85\" QM85R LH85QMRBBGCXZD", size: "85", image: "https://images.samsung.com/is/image/samsung/p6pim/africa_pt/lh85qmcebgcxen/gallery/africa-pt-4k-uhd-signage-lh85qmcebgcxen-538278516?$684_547_JPG$" },
];

  const handleSearch = () => {
    const filtered = products.filter((product) => {
      return (
        (size === "" || product.size === size) &&
        (searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <h1>Catálogo Samsung</h1>
      <div className="search-bar">
        <label htmlFor="size">Tamanho da Tela:</label>
        <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Todos</option>
          <option value="32">32"</option>
          <option value="43">43"</option>
          <option value="46">46"</option>
          <option value="50">50"</option>
          <option value="55">55"</option>
          <option value="65">65"</option>
          <option value="75">75"</option>
          <option value="85">85"</option>
          <option value="98">98"</option>
        </select>

        <label htmlFor="searchQuery">Nome do Produto:</label>
        <input
          type="text"
          id="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por nome..."
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default App;
