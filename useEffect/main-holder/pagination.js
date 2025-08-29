"use client";

export default function Pagination({ currentPage, onPageChange }) {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page ? "bg-gray-400 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
}