import { useEffect, useState } from "react";

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      return;
    }

    const searchProducts = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockProducts = [
          { id: 1, name: `Producto ${query} 1`, price: 29.99 },
          { id: 2, name: `Producto ${query} 2`, price: 39.99 },
          { id: 3, name: `Producto ${query} 3`, price: 19.99 },
        ];

        setProducts(mockProducts);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(searchProducts, 300);
    return () => clearTimeout(timeoutId);
  }, [query]); // Se ejecuta cuando cambia el query

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Productos "
      />

      {loading && (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}

      <div className="mt-4 space-y-2">
        {products.map((p) => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
