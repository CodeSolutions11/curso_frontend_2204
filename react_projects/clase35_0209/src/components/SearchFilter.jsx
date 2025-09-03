import React, { useState, useEffect } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    "React",
    "Vue",
    "Angular",
    "Next.js",
    "Nuxt.js",
    "Vite",
    "Webpack",
    "svelte",
  ];

  useEffect(() => {
    console.log("filtrando por: ", searchTerm);

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm]); // TODO: Se ejecuta cuando cambia searchTerm

  return (
    <div className="p-6 bg-purple-100 rounded-lg">
      <input
        type="text"
        placeholder="Buscar framework..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-purple-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
      />

      <div className="grid grid-cols-2 gap-2">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white p-2 rounded shadow text-black">
            {item}
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-600"></p>
    </div>
  );
};

export default SearchFilter;
