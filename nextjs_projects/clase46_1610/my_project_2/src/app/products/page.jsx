import { FaBox } from "react-icons/fa";

// Server component por defecto
const Products = async () => {
  // fetch directo en el componente

  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const products = await res.json();

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <FaBox className="text-xl" />
        <h1 className="text-2xl font-bold">Productos</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-green-600">{p.price}</p>
            <p className="text-sm text-gray-600">{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
