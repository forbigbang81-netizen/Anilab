const genres = ["Action", "Shonen", "Seinen", "Romance", "Isekai"];

export function FilterBar() {
  const [activeGenre, setActiveGenre] = useState("Action");

  return (
    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
      {genres.map(genre => (
        <button
          key={genre}
          onClick={() => setActiveGenre(genre)}
          className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            activeGenre === genre 
            ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg shadow-indigo-500/20' 
            : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
