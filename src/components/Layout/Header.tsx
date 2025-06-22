import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Heart, Plus, Home } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="glass-card sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Kitap Kulübü</h1>
              <p className="text-xs text-slate-600">En iyi kitapları keşfedin</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                isActiveRoute('/')
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Ana Sayfa</span>
            </Link>
            
            <Link
              to="/add-book"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                isActiveRoute('/add-book')
                  ? 'bg-secondary-100 text-secondary-700'
                  : 'text-slate-600 hover:text-secondary-600 hover:bg-secondary-50'
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>Kitap Ekle</span>
            </Link>

            <Link
              to="/favorites"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                isActiveRoute('/favorites')
                  ? 'bg-red-100 text-red-700'
                  : 'text-slate-600 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>Favoriler</span>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              to="/add-book"
              className="p-2 text-slate-600 hover:text-secondary-600 hover:bg-secondary-50 rounded-lg transition-all"
            >
              <Plus className="h-5 w-5" />
            </Link>
            <Link
              to="/favorites"
              className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <Heart className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Bottom */}
        <div className="md:hidden mt-4 flex justify-center space-x-8 border-t border-white/20 pt-4">
          <Link
            to="/"
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all ${
              isActiveRoute('/')
                ? 'text-primary-700 bg-primary-50'
                : 'text-slate-600 hover:text-primary-600'
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Ana Sayfa</span>
          </Link>
          
          <Link
            to="/add-book"
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all ${
              isActiveRoute('/add-book')
                ? 'text-secondary-700 bg-secondary-50'
                : 'text-slate-600 hover:text-secondary-600'
            }`}
          >
            <Plus className="h-5 w-5" />
            <span className="text-xs">Kitap Ekle</span>
          </Link>

          <Link
            to="/favorites"
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all ${
              isActiveRoute('/favorites')
                ? 'text-red-700 bg-red-50'
                : 'text-slate-600 hover:text-red-600'
            }`}
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs">Favoriler</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;