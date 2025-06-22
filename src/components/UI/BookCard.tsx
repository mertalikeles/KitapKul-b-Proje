import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Calendar, BookOpen } from 'lucide-react';
import type { Book } from '../../types/book';
import { useBookStore } from '../../store/bookStore';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { favorites, toggleFavorite } = useBookStore();
  const isFavorite = favorites.includes(book.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(book.id);
  };

  return (
    <Link to={`/book/${book.id}`} className="block group">
      <div className="glass-card rounded-xl overflow-hidden book-card-hover">
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all ${
              isFavorite
                ? 'bg-red-500 text-white shadow-lg scale-110'
                : 'bg-white/80 text-slate-600 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-white text-xs font-medium">{book.rating}</span>
              </div>
              <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                <Calendar className="h-3 w-3 text-white" />
                <span className="text-white text-xs">{book.publishYear}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
              {book.title}
            </h3>
            <p className="text-sm text-slate-600">{book.author}</p>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-medium">
              {book.genre}
            </span>
            <div className="flex items-center space-x-1 text-slate-500">
              <BookOpen className="h-3 w-3" />
              <span className="text-xs">{book.pages} sayfa</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {book.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;