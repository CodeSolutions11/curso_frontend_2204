const Product = ({ params }) => {
  const { id } = params;
  const products = {
    1: { name: "Laptop", price: 800, description: "Laptop gamer potente" },
    2: { name: "Teléfono", price: 400, description: "Smatphone moderno" },
  };

  const product = products[id];

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price}$</p>
      <p>{product.description}</p>
    </div>
  );
};
export default Product;
