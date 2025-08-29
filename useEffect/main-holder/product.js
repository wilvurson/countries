"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white transition-all delay-1 shadow-md w-60 hover:shadow-xl/20 rounded-xl p-4 border-stone-300 border-1 hover:"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-60 object-cover rounded mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
            {product.title}
          </h3>
          <div className="line-clamp-2 text-stone-500">{product.description}</div>
          <div className="flex justify-between">
            <p className="text-black mt-11.5 font-bold line-clamp-2">
              ${product.price}
            </p>
            <button className="mt-10 mb-10 w-30 h-9 bg-stone-100 text-black transition delay-0 rounded-xl hover:bg-stone-200 hover:border-1 hover:border-stone-300">
              Veiw Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
