function Search({ onSearch }) {
    return (
      <div className="max-w-lg mx-auto mb-8">
        <div className="relative">
          {/* Icono de Lupa (SVG) */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            onChange={(e ) => onSearch(e.target.value)}
            placeholder="Buscar notas..."
            className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>
    );
  }
  
  export default Search;
  