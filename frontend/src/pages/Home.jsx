import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">🛒 Smart Shopping</h1>
      </div>

      {/* SEARCH */}
      <SearchBar setProducts={setProducts} />

      {/* PRODUCTS */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {products.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">
            Search for a product to see recommendations
          </p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

      </div>
    </div>
  );
}

export default Home;