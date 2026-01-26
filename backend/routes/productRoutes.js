router.get("/search", async (req, res) => {
  const { q, min, max } = req.query;

  // Fetch products from DummyJSON
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${q}`
  );
  const data = await response.json();

  let products = data.products || [];

  // 🔥 PRICE FILTER
  if (min) {
    products = products.filter(
      (p) => p.price >= Number(min)
    );
  }

  if (max) {
    products = products.filter(
      (p) => p.price <= Number(max)
    );
  }

  // Map to frontend-friendly format
  const finalProducts = products.slice(0, 5).map((p) => ({
    id: p.id,
    name: p.title,
    price: p.price,
    rating: p.rating,
    image: p.thumbnail,
    description: p.description,
  }));

  res.json(finalProducts);
});
