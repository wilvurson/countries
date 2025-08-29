"use client";

import { useState } from "react";
import Header from "./main-holder/header";
import Products from "./main-holder/product";
import Pagination from "./main-holder/pagination";

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Products */}
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-15">
          Products (Page {page})
        </h2>

        <div className="flex flex-wrap gap-x-9 gap-y-5">
          <Products page={page} />
        </div>

        {/* Pagination */}
        <Pagination currentPage={page} onPageChange={setPage} />
      </main>
    </div>
  );
}