// src/components/SearchInput.tsx
import { type FC, useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';

const SearchInput: FC<SearchInputProps> = ({ items, onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const filteredBooks = useMemo(() => {
    return (items || []).filter(
      (book) =>
        (book.title || '').toLowerCase().includes(query.toLowerCase()) ||
        (book.author || '').toLowerCase().includes(query.toLowerCase()),
    );
  }, [items, query]);

  useEffect(() => {
    onSearch(filteredBooks);
  }, [filteredBooks, onSearch]);

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder="Rechercher"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search size={20} />
    </label>
  );
};

export default SearchInput;
