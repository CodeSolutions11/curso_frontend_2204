import { FaLaptop, FaMobile } from "react-icons/fa";
import Link from "next/link";

const Productos = () => {
  const products = [
    { id: 1, name: "Laptop", price: 800, icon: FaLaptop },
    { id: 2, name: "Teléfono", price: 400, icon: FaMobile },
  ];

  return (
    <div>
      <h1>Nuestros productos</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.id} className="border p-4 rounded">
              <Icon className="text-2xl mb-2" />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <Link href={`/productos/${p.id}`}>Ver más</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
