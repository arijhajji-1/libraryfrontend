import { Search } from 'lucide-react';

function SearchInput() {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <Search />
      </label>
    </>
  );
}

export default SearchInput;
