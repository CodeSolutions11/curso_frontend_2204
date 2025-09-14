import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {

    const products = [
        {id: 1, name:"Laptop Gaming", price: 1200, category: "Electrónicos"},
        {id: 2, name:"Smartpjone Pro", price: 800, category: "Electrónicos"},
        {id: 3, name:"Ariculares Bluetooth", price: 150, category: "Audio"},
        {id: 4, name:"Tablet 10 Pro", price: 400, category: "Electrónicos"},
    ]


  return (
    <div>
        <h1 className='text-3xl font-bold mb-6'>Nuestros Productos</h1>

        {products.map((product) => (
            <div key={product.id} className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-black mb-2'>
                <h3>{product.name}</h3>
                <p>Categoria: {product.category}</p>
                <p>Precio: {product.price}$</p>

                <Link to={`/products/${product.id}`}>Ver Detalles</Link>

            </div>
        ))}

    </div>
  )
}

export default Products