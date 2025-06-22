import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Calendar, BookOpen, Globe, Hash } from 'lucide-react';
import { useBookStore } from '../store/bookStore';

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getBookById, favorites, toggleFavorite } = useBookStore();

  const book = id ? getBookById(id) : undefined;
  const isFavorite = book ? favorites.includes(book.id) : false;

  if (!book) {
    return (
      <div className="page-transition">
        <div className="glass-card rounded-xl p-12 text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Kitap Bulunamadı</h2>
          <p className="text-slate-600 mb-6">Aradığınız kitap mevcut değil.</p>
          <Link to="/" className="btn-primary">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  const handleFavoriteClick = () => {
    toggleFavorite(book.id);
  };

  return (
    <div className="page-transition">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center space-x-2 text-slate-600 hover:text-primary-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Geri Dön</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Book Cover */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-xl overflow-hidden sticky top-24">
            <div className="aspect-[3/4] relative">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            <div className="p-6">
              <button
                onClick={handleFavoriteClick}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                  isFavorite
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                <span>{isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">{book.title}</h1>
                  <p className="text-xl text-slate-600">{book.author} tarafından</p>
                </div>
                <span className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                  {book.genre}
                </span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold text-slate-800">{book.rating}</span>
                  <span className="text-slate-600">/5</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 text-center">
                <Calendar className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Yayın Yılı</div>
                <div className="font-semibold text-slate-800">{book.publishYear}</div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg p-4 text-center">
                <BookOpen className="h-6 w-6 text-secondary-600 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Sayfa Sayısı</div>
                <div className="font-semibold text-slate-800">{book.pages}</div>
              </div>
              
              {book.language && (
                <div className="bg-gradient-to-br from-success-50 to-success-100 rounded-lg p-4 text-center">
                  <Globe className="h-6 w-6 text-success-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">Dil</div>
                  <div className="font-semibold text-slate-800">{book.language}</div>
                </div>
              )}
              
              {book.isbn && (
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center">
                  <Hash className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm text-slate-600">ISBN</div>
                  <div className="font-semibold text-slate-800 text-xs">{book.isbn}</div>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Açıklama</h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed text-justify">
                  {book.description}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                className="btn-secondary"
              >
                Tüm Kitaplara Dön
              </Link>
              <Link
                to="/add-book"
                className="btn-primary"
              >
                Yeni Kitap Ekle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;