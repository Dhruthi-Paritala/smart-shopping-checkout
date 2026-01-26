import { useState } from "react";

const SearchBar = ({ setProducts }) => {
  const [query, setQuery] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Enter a product name");
      return;
    }

    try {
      setLoading(true);

      let url = `http://127.0.0.1:5001/api/products/search?q=${query}`;

      if (min) url += `&min=${min}`;
      if (max) url += `&max=${max}`;

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    } catch (err) {
      alert("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Search row */}
      <div className="flex gap-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search product..."
          className="flex-1 p-4 rounded-full border shadow"
        />

        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-black text-white rounded-full"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Min Max row */}
      <div className="flex gap-4">
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Min Price"
          className="flex-1 p-3 rounded-lg border"
        />

        <input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Max Price"
          className="flex-1 p-3 rounded-lg border"
        />
      </div>
    </div>
  );
};

export default SearchBar;
