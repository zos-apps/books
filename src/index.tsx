import { useState } from 'react';

interface BooksProps { onClose: () => void; }

const BOOKS = [
  { title: '1984', author: 'George Orwell', cover: '📕', progress: 67 },
  { title: 'Dune', author: 'Frank Herbert', cover: '📗', progress: 100 },
  { title: 'The Hitchhiker\'s Guide', author: 'Douglas Adams', cover: '📘', progress: 45 },
  { title: 'Neuromancer', author: 'William Gibson', cover: '📙', progress: 0 },
  { title: 'Snow Crash', author: 'Neal Stephenson', cover: '📓', progress: 23 },
];

const Books: React.FC<BooksProps> = ({ onClose: _onClose }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-[#f5f0e6]">
      <div className="p-6 border-b border-amber-200">
        <h1 className="text-2xl font-bold text-amber-900 flex items-center gap-2"><span>📚</span> Books</h1>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-lg font-bold text-amber-800 mb-4">Library</h2>
        <div className="grid grid-cols-5 gap-6">
          {BOOKS.map(b => (
            <button key={b.title} onClick={() => setSelected(b.title)} className="text-left group">
              <div className={`aspect-[2/3] rounded-lg mb-2 flex items-center justify-center text-6xl shadow-lg transition-transform group-hover:scale-105 ${selected === b.title ? 'ring-4 ring-amber-500' : ''}`} style={{ background: 'linear-gradient(145deg, #d4a574, #8b5a2b)' }}>
                {b.cover}
              </div>
              <div className="text-amber-900 font-medium text-sm truncate">{b.title}</div>
              <div className="text-amber-600 text-xs">{b.author}</div>
              {b.progress > 0 && b.progress < 100 && (
                <div className="mt-1 h-1 bg-amber-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: `${b.progress}%` }} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
