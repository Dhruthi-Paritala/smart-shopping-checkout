import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-black to-gray-800 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">🛒 Smart Shopping</h1>
      </header>

      {/* SEARCH */}
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <SearchBar setProducts={setProducts} />
      </div>

      {/* PRODUCTS */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length === 0 && (
          <p className="text-gray-500 text-center col-span-full mt-10">
            Search for a product to see recommendations
          </p>
        )}

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
