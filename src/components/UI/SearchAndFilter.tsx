import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { useBookStore } from '../../store/bookStore';

const SearchAndFilter: React.FC = () => {
  const { filters, setFilters, books } = useBookStore();

  const genres = Array.from(new Set(books.map(book => book.genre))).sort();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ search: e.target.value });
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ genre: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortBy, sortOrder] = e.target.value.split('-') as ['title' | 'author' | 'rating' | 'publishYear', 'asc' | 'desc'];
    setFilters({ sortBy, sortOrder });
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      genre: '',
      sortBy: 'title',
      sortOrder: 'asc',
    });
  };

  const hasActiveFilters = filters.search || filters.genre || filters.sortBy !== 'title' || filters.sortOrder !== 'asc';

  return (
    <div className="glass-card rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-primary-600" />
          <h2 className="text-lg font-semibold text-slate-800">Kitapları Filtrele</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 text-slate-500 hover:text-red-600 transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="text-sm">Temizle</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Kitap, yazar veya kategori ara..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Genre Filter */}
        <select
          value={filters.genre}
          onChange={handleGenreChange}
          className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Tüm Kategoriler</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={`${filters.sortBy}-${filters.sortOrder}`}
          onChange={handleSortChange}
          className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="title-asc">Başlık (A-Z)</option>
          <option value="title-desc">Başlık (Z-A)</option>
          <option value="author-asc">Yazar (A-Z)</option>
          <option value="author-desc">Yazar (Z-A)</option>
          <option value="rating-desc">En Yüksek Puan</option>
          <option value="rating-asc">En Düşük Puan</option>
          <option value="publishYear-desc">En Yeni</option>
          <option value="publishYear-asc">En Eski</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;