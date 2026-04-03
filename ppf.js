const AVATAR_LIBRARY = [
  { id: 'luffy', name: 'Monkey D. Luffy', url: '/assets/avatars/luffy.png' },
  { id: 'naruto', name: 'Naruto Uzumaki', url: '/assets/avatars/naruto.png' },
  { id: 'frieren', name: 'Frieren', url: '/assets/avatars/frieren.png' },
];

const AvatarPicker = ({ onSelect }) => (
  <div className="grid grid-cols-4 gap-4 p-4">
    {AVATAR_LIBRARY.map((char) => (
      <div 
        key={char.id}
        onClick={() => onSelect(char.url)}
        className="cursor-pointer group relative rounded-full overflow-hidden border-2 border-transparent hover:border-indigo-500 transition-all"
      >
        <img src={char.url} alt={char.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <span className="text-[10px] text-white font-bold">{char.name}</span>
        </div>
      </div>
    ))}
  </div>
);
