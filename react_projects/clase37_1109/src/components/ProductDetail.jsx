import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  //   console.log(id);

  // Simular base de datos de productos
  const products = {
    1: {
      name: "Laptop Gaming",
      price: 1200,
      category: "Electrónicos",
      description: "Laptop de alto rendimiento para gaming y profesional",
      specs: ["Intel i9", "64GB RAM DDR5", "1TB M.2", "RTX 4090"],
    },
    2: {
      name: "Smartphone Pro",
      price: 800,
      category: "Electrónicos",
      description:
        "Smartphone con cámara profesional y batería de larga duración.",
      specs: ["32GB Storage", "6GB RAM", "SNAP DRAGON", "Cámara 48MP"],
    },
    3: {
      name: "Ariculares Bluetooth",
      price: 150,
      category: "Audio",
      description: "Auriculares inalámbricos con cancelación de ruido",
      specs: ["Buetooth 5.0", "Cancelación de ruido"],
    },
    4: {
      name: "Tablet 10 Pro",
      price: 400,
      category: "Electrónicos",
      description: "Tablet versátil para trabajo y entretenimiento",
      specs: ["Pantalla 10", "128GB Storage", "12GB RAM", "Android 14"],
    },
  };

  //   const user = {
  //     name: "jesus",
  //   };
  //   console.log(user);

  //   const player = new Map([["name", "Alan"], ["apellido", "Ruiz"]]);
  //   console.log(player);

  const product = products[id];
  //   console.log(product)

  // ? Si el producto no existe, redirigir
  if (!product) {
    // alert("Producto no encontrado");
    return <Navigate to={"/products"} replace />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link to={"/products"} className="text-blue-500 hover:text-blue-300 mb-5">
        ⬅️ Volver a Productos
      </Link>

      <div className="bg-white text-black rounded-lg shadow p-3">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600">Categoría: {product.category}</p>
        <p className="text-3xl font-bold text-green-600 mb-4">Precio: {product.price}$</p>
        <p className="text-gray-700 mb-3">{product.description}</p>

        <h3 className="text-xl font-semibold">Especificaciones:</h3>
        <ul className="list-disc font-semibold mb-3 ml-5">
          {product.specs.map((spec, index) => (
            <li key={index} className="text-gray-700">{spec}</li>
          ))}
        </ul>

        <button>Agregar al carrito</button>

        <div>ID del producto: {id}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
