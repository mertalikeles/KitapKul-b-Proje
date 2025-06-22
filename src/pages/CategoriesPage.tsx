import React from 'react';
import { Tag, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBookStore } from '../store/bookStore';
import BookCard from '../components/UI/BookCard';

const CategoriesPage: React.FC = () => {
  const { books } = useBookStore();

  // Kategorileri ve kitap sayılarını hesapla
  const categoryStats = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryStats)
    .sort(([, a], [, b]) => b - a)
    .map(([genre, count]) => ({ genre, count }));

  // Her kategoriden en popüler kitabı al
  const getCategoryBooks = (genre: string) => {
    return books
      .filter(book => book.genre === genre)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  };

  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Tag className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Kategoriler</h1>
        <p className="text-slate-600">Kitapları kategorilere göre keşfedin</p>
      </div>

      {/* Category Stats */}
      <div className="glass-card rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 text-primary-600 mr-2" />
          Kategori İstatistikleri
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map(({ genre, count }) => (
            <div key={genre} className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">{count}</div>
              <div className="text-sm text-slate-600">{genre}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories with Books */}
      <div className="space-y-12">
        {categories.map(({ genre }) => {
          const categoryBooks = getCategoryBooks(genre);
          return (
            <section key={genre}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                  <BookOpen className="h-6 w-6 text-secondary-600 mr-2" />
                  {genre}
                  <span className="text-sm font-normal text-slate-500 ml-2">
                    ({categoryStats[genre]} kitap)
                  </span>
                </h2>
                <Link 
                  to={`/?genre=${encodeURIComponent(genre)}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Tümünü Gör →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;