const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h3 className="mt-2 font-semibold text-lg">
        {product.name}
      </h3>

      <p className="text-sm text-gray-600 line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between mt-3">
        <span className="font-bold text-green-600">
          ₹{product.price}
        </span>
        <span className="text-yellow-500">
          ⭐ {product.rating}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
