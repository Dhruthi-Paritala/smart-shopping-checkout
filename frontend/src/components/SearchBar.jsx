import { useState } from "react";
import API from "../services/api";
function SearchBar({ setProducts }) {
  const [query, setQuery] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault(); // VERY IMPORTANT
    console.log("Search button clicked");
    if (!query.trim()) {
      alert("Please enter something");
      return;
    }
    try {
      const response = await API.get(
  `/api/products/search?q=${query}&min=${min}&max=${max}`
);
      console.log("Response:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Search Error:", error);
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col items-center gap-4 mt-6"
    >
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-lg border w-80"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        />
      </div>
    </form>
  );
}

export default SearchBar;
