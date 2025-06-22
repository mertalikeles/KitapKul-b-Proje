import React from 'react';
import { TrendingUp, Star, Award, Siren as Fire } from 'lucide-react';
import { useBookStore } from '../store/bookStore';
import BookCard from '../components/UI/BookCard';

const PopularBooksPage: React.FC = () => {
  const { books } = useBookStore();

  // En yüksek puanlı kitaplar
  const topRatedBooks = books
    .filter(book => book.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating);

  // En yeni kitaplar
  const newestBooks = books
    .sort((a, b) => b.publishYear - a.publishYear)
    .slice(0, 6);

  // En çok sayfalı kitaplar
  const longestBooks = books
    .sort((a, b) => b.pages - a.pages)
    .slice(0, 6);

  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Popüler Kitaplar</h1>
        <p className="text-slate-600">En beğenilen ve trend olan kitapları keşfedin</p>
      </div>

      {/* Stats */}
      <div className="glass-card rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-orange-600">{topRatedBooks.length}</div>
            <div className="text-sm text-slate-600">Yüksek Puanlı</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(books.reduce((sum, book) => sum + book.rating, 0) / books.length * 10) / 10}
            </div>
            <div className="text-sm text-slate-600">Ortalama Puan</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-green-600">
              {Math.max(...books.map(book => book.publishYear))}
            </div>
            <div className="text-sm text-slate-600">En Yeni Yıl</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-purple-600">
              {books.reduce((sum, book) => sum + book.pages, 0).toLocaleString()}
            </div>
            <div className="text-sm text-slate-600">Toplam Sayfa</div>
          </div>
        </div>
      </div>

      {/* En Yüksek Puanlı Kitaplar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Star className="h-6 w-6 text-yellow-500 mr-2" />
          En Yüksek Puanlı Kitaplar
          <span className="text-sm font-normal text-slate-500 ml-2">
            (4.5+ puan)
          </span>
        </h2>
        {topRatedBooks.length === 0 ? (
          <div className="glass-card rounded-xl p-8 text-center">
            <p className="text-slate-600">4.5 ve üzeri puanlı kitap bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topRatedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>

      {/* En Yeni Kitaplar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Fire className="h-6 w-6 text-red-500 mr-2" />
          En Yeni Kitaplar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newestBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* En Uzun Kitaplar */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Award className="h-6 w-6 text-purple-500 mr-2" />
          En Kapsamlı Kitaplar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {longestBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularBooksPage;