"use client";

import { useEffect, useState, React } from "react";
import Header from "./main-holder/header";
import Products from "./main-holder/product";
import Pagination from "./main-holder/pagination";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      <div className="flex flex-col justify-center h-200 bg-stone-100">
        <div className="flex bg-stone-200 mt-10 h-120">
          <div className="flex flex-col">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=""></div>
        </div>
      </div>
      {/* Product List */}
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-15">
          Products
        </h2>

        <div className="flex flex-wrap gap-x-9 gap-y-5">
          {/* Product Card */}
          <Products />
        </div>

        {/* Pagination */}
        <Pagination />
      </main>
    </div>
  );
}
