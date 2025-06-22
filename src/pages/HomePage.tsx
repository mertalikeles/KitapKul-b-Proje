import React, { useEffect } from 'react';
import { Sparkles, TrendingUp, Award } from 'lucide-react';
import { useBookStore } from '../store/bookStore';
import BookCard from '../components/UI/BookCard';
import SearchAndFilter from '../components/UI/SearchAndFilter';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const HomePage: React.FC = () => {
  const { getFilteredBooks, isLoading, books } = useBookStore();
  const filteredBooks = getFilteredBooks();

  // Get featured books (highest rated)
  const featuredBooks = books
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-12">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              Kitap Dünyasına Hoş Geldiniz
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              En iyi kitapları keşfedin, favorilerinize ekleyin ve okuma deneyiminizi zenginleştirin. 
              Binlerce kitap arasından size en uygun olanları bulun.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-primary-600" />
                <span className="text-slate-700">Özenle Seçilmiş</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <TrendingUp className="h-4 w-4 text-secondary-600" />
                <span className="text-slate-700">Popüler Kategoriler</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-success-600" />
                <span className="text-slate-700">Yüksek Puanlı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      {featuredBooks.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Award className="h-6 w-6 text-primary-600 mr-2" />
            Öne Çıkan Kitaplar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <SearchAndFilter />

      {/* Books Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Tüm Kitaplar
            <span className="text-sm font-normal text-slate-500 ml-2">
              ({filteredBooks.length} kitap)
            </span>
          </h2>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="glass-card rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Kitap Bulunamadı</h3>
            <p className="text-slate-600">
              Arama kriterlerinizi değiştirerek tekrar deneyin.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;