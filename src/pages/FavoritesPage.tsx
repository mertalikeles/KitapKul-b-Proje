import React from 'react';
import { Heart, BookOpen, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBookStore } from '../store/bookStore';
import BookCard from '../components/UI/BookCard';

const FavoritesPage: React.FC = () => {
  const { getFavoriteBooks } = useBookStore();
  const favoriteBooks = getFavoriteBooks();

  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Heart className="h-8 w-8 text-white fill-current" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Favori Kitaplarım</h1>
        <p className="text-slate-600">Beğendiğiniz kitapları buradan tekrar bulabilirsiniz</p>
      </div>

      {/* Stats */}
      <div className="glass-card rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-slate-800">{favoriteBooks.length}</div>
            <div className="text-sm text-slate-600">Favori Kitap</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-slate-800">
              {favoriteBooks.length > 0 
                ? Math.round(favoriteBooks.reduce((sum, book) => sum + book.rating, 0) / favoriteBooks.length * 10) / 10
                : 0
              }
            </div>
            <div className="text-sm text-slate-600">Ortalama Puan</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-slate-800">
              {favoriteBooks.reduce((sum, book) => sum + book.pages, 0)}
            </div>
            <div className="text-sm text-slate-600">Toplam Sayfa</div>
          </div>
        </div>
      </div>

      {/* Favorite Books */}
      {favoriteBooks.length === 0 ? (
        <div className="glass-card rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Henüz Favori Kitabınız Yok</h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Beğendiğiniz kitapları favorilerinize ekleyerek daha sonra kolayca bulabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Kitapları İncele</span>
            </Link>
            <Link to="/add-book" className="btn-secondary flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Yeni Kitap Ekle</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-800">
              Favori Kitaplarınız ({favoriteBooks.length})
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </>
      )}

      {/* Quick Actions */}
      <div className="mt-12 text-center">
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Hızlı İşlemler</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-secondary flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Tüm Kitaplar</span>
            </Link>
            <Link to="/add-book" className="btn-primary flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Yeni Kitap Ekle</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;