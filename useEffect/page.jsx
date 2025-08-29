"use client";

import { useState } from "react";
import Header from "./main-holder/header";
import Products from "./main-holder/product";
import Pagination from "./main-holder/pagination";

export default function App() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 12; // must match Products.jsx

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-15">
          Products (Page {page})
        </h2>

        <div className="flex flex-wrap gap-x-9 gap-y-5">
          <Products page={page} onTotalChange={setTotal} />
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={page}
          total={total}
          limit={limit}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
}