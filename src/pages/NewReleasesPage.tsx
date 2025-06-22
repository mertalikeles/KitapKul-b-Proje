import React from 'react';
import { Calendar, Sparkles, Clock } from 'lucide-react';
import { useBookStore } from '../store/bookStore';
import BookCard from '../components/UI/BookCard';

const NewReleasesPage: React.FC = () => {
  const { books } = useBookStore();

  const currentYear = new Date().getFullYear();
  
  // Son 5 yılın kitapları
  const recentBooks = books
    .filter(book => book.publishYear >= currentYear - 5)
    .sort((a, b) => b.publishYear - a.publishYear);

  // Yıllara göre grupla
  const booksByYear = recentBooks.reduce((acc, book) => {
    const year = book.publishYear;
    if (!acc[year]) acc[year] = [];
    acc[year].push(book);
    return acc;
  }, {} as Record<number, typeof books>);

  const years = Object.keys(booksByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calendar className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Yeni Çıkanlar</h1>
        <p className="text-slate-600">Son yıllarda yayınlanan en yeni kitapları keşfedin</p>
      </div>

      {/* Stats */}
      <div className="glass-card rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-green-600">{recentBooks.length}</div>
            <div className="text-sm text-slate-600">Son 5 Yılda</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-teal-600">
              {books.filter(book => book.publishYear === currentYear).length}
            </div>
            <div className="text-sm text-slate-600">Bu Yıl</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-blue-600">
              {Math.max(...recentBooks.map(book => book.publishYear))}
            </div>
            <div className="text-sm text-slate-600">En Yeni Yıl</div>
          </div>
        </div>
      </div>

      {/* Yıllara Göre Kitaplar */}
      {years.length === 0 ? (
        <div className="glass-card rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Yeni Kitap Bulunamadı</h3>
          <p className="text-slate-600">Son 5 yılda yayınlanan kitap bulunmuyor.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {years.map((year) => (
            <section key={year}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                  <Sparkles className="h-6 w-6 text-primary-600 mr-2" />
                  {year}
                  <span className="text-sm font-normal text-slate-500 ml-2">
                    ({booksByYear[year].length} kitap)
                  </span>
                </h2>
                {year === currentYear && (
                  <span className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Bu Yıl
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {booksByYear[year]
                  .sort((a, b) => b.rating - a.rating)
                  .map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewReleasesPage;