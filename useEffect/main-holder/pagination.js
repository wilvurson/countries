"use client";

export default function Pagination() {
    return (
      <div className="flex justify-center mt-8 space-x-2">
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          1
        </button>
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          2
        </button>
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          3
        </button>
        <span className="px-3 py-1 text-gray-400">...</span>
        <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
          Next
        </button>
      </div>
    );
}