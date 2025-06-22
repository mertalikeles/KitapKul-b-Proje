import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-card mt-12 border-t border-white/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold gradient-text">Kitap Kulübü</h3>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              En iyi kitapları keşfedin, favorilerinize ekleyin ve kitap severlerin topluluğuna katılın. 
              Okuma deneyiminizi zenginleştiren modern platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-secondary-600 hover:bg-secondary-50 rounded-lg transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-success-600 hover:bg-success-50 rounded-lg transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Keşfet</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/popular" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Popüler Kitaplar
                </Link>
              </li>
              <li>
                <Link to="/new-releases" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Yeni Çıkanlar
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link to="/authors" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Yazarlar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Destek</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Yardım Merkezi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-primary-600 transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Gizlilik
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Şartlar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 Kitap Kulübü. Tüm hakları saklıdır. Modern React & TypeScript ile ❤️ ile yapıldı.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;