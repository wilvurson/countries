"use client";

import { useEffect, useState } from "react";

export default function Products({ page }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API supports limit & skip params
    const limit = 12; // how many products per page
    const skip = (page - 1) * limit;

    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [page]); // refetch when page changes

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white transition-all delay-1 shadow-md w-60 hover:shadow-xl/20 rounded-xl p-4 border-stone-300 border-1"
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
            <p className="text-black mt-11 font-bold">${product.price}</p>
            <button className="mt-10 mb-10 w-30 h-9 bg-stone-100 text-black transition delay-0 rounded-xl hover:bg-stone-200 hover:border-1 hover:border-stone-300">
              View Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
}