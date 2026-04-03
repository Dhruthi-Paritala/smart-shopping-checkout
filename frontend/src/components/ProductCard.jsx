function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">

      {/* IMAGE */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      {/* TITLE */}
      <h2 className="text-lg font-bold mb-2">
        {product.title}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm mb-3">
        {product.description}
      </p>

      {/* PRICE + RATING */}
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold">
          ₹{product.price}
        </span>

        <span className="text-yellow-500">
          ⭐ {product.rating}
        </span>
      </div>

    </div>
  );
}

export default ProductCard;