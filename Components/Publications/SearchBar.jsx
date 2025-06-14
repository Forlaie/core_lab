import React from 'react'

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by title, author, or year..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  )
}

export default SearchBar
