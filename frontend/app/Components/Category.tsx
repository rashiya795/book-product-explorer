import React from 'react'

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main container */}
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Fiction Books
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar - Subcategories */}
          <aside className="lg:w-1/5 bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-4">Subcategories</h2>
            <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
              <li>
                <button className="px-3 py-2 w-full text-left bg-gray-200 rounded hover:bg-gray-300">
                  Novels
                </button>
              </li>
              <li>
                <button className="px-3 py-2 w-full text-left bg-gray-200 rounded hover:bg-gray-300">
                  Mystery
                </button>
              </li>
              <li>
                <button className="px-3 py-2 w-full text-left bg-gray-200 rounded hover:bg-gray-300">
                  Romance
                </button>
              </li>
              <li>
                <button className="px-3 py-2 w-full text-left bg-gray-200 rounded hover:bg-gray-300">
                  Sci-Fi
                </button>
              </li>
            </ul>
          </aside>

          {/* Products Grid */}
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded shadow p-4 flex flex-col items-center"
              >
                <div className="bg-gray-300 w-full h-48 mb-4 rounded"></div> {/* Image placeholder */}
                <h2 className="font-semibold text-center mb-1">Product Title</h2>
                <p className="text-sm text-gray-600 mb-2">Author Name</p>
                <p className="text-blue-600 font-bold">$Price</p>
              </div>
            ))}
          </section>

        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-3">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">1</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">3</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
        </div>

      </div>
    </div>
  )
}
