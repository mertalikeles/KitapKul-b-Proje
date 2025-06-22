import React from 'react';
import { User, BookOpen, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBookStore } from '../store/bookStore';

const AuthorsPage: React.FC = () => {
  const { books } = useBookStore();

  // Yazarları ve istatistiklerini hesapla
  const authorStats = books.reduce((acc, book) => {
    if (!acc[book.author]) {
      acc[book.author] = {
        name: book.author,
        books: [],
        totalPages: 0,
        avgRating: 0,
        genres: new Set<string>()
      };
    }
    
    acc[book.author].books.push(book);
    acc[book.author].totalPages += book.pages;
    acc[book.author].genres.add(book.genre);
    
    return acc;
  }, {} as Record<string, {
    name: string;
    books: typeof books;
    totalPages: number;
    avgRating: number;
    genres: Set<string>;
  }>);

  // Ortalama puanları hesapla
  Object.values(authorStats).forEach(author => {
    author.avgRating = Math.round(
      (author.books.reduce((sum, book) => sum + book.rating, 0) / author.books.length) * 10
    ) / 10;
  });

  const authors = Object.values(authorStats)
    .sort((a, b) => b.books.length - a.books.length);

  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Users className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Yazarlar</h1>
        <p className="text-slate-600">Koleksiyonumuzdaki tüm yazarları keşfedin</p>
      </div>

      {/* Stats */}
      <div className="glass-card rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-purple-600">{authors.length}</div>
            <div className="text-sm text-slate-600">Toplam Yazar</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-pink-600">
              {Math.max(...authors.map(author => author.books.length))}
            </div>
            <div className="text-sm text-slate-600">En Çok Kitap</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round(authors.reduce((sum, author) => sum + author.avgRating, 0) / authors.length * 10) / 10}
            </div>
            <div className="text-sm text-slate-600">Ortalama Puan</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-green-600">
              {authors.reduce((sum, author) => sum + author.totalPages, 0).toLocaleString()}
            </div>
            <div className="text-sm text-slate-600">Toplam Sayfa</div>
          </div>
        </div>
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((author) => (
          <div key={author.name} className="glass-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 truncate">
                  {author.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <BookOpen className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-blue-800">{author.books.length}</div>
                    <div className="text-xs text-blue-600">Kitap</div>
                  </div>
                  
                  <div className="text-center p-2 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                    <Award className="h-4 w-4 text-yellow-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-yellow-800">{author.avgRating}</div>
                    <div className="text-xs text-yellow-600">Ortalama</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-slate-500 mb-2">Kategoriler:</div>
                  <div className="flex flex-wrap gap-1">
                    {Array.from(author.genres).slice(0, 3).map((genre) => (
                      <span
                        key={genre}
                        className="inline-block bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                    {author.genres.size > 3 && (
                      <span className="text-xs text-slate-500">+{author.genres.size - 3}</span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-slate-500 mb-3">
                  Toplam {author.totalPages.toLocaleString()} sayfa
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs text-slate-500">En Popüler Kitapları:</div>
                  {author.books
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 2)
                    .map((book) => (
                      <Link
                        key={book.id}
                        to={`/book/${book.id}`}
                        className="block text-xs text-primary-600 hover:text-primary-700 truncate"
                      >
                        • {book.title} ({book.rating}⭐)
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorsPage;