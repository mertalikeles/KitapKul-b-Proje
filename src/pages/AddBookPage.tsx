import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Plus, Book, User, FileText, Tag, Calendar, Hash, Globe, Image } from 'lucide-react';
import { useBookStore } from '../store/bookStore';
import type { BookFormData } from '../types/book';

const AddBookPage: React.FC = () => {
  const navigate = useNavigate();
  const { addBook } = useBookStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookFormData>();

  const onSubmit = async (data: BookFormData) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addBook({
        ...data,
        rating: 0, // Default rating for new books
      });
      
      reset();
      navigate('/');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const genres = [
    'Roman', 'Klasik', 'Bilim Kurgu', 'Fantastik', 'Tarih', 'Biyografi',
    'Kişisel Gelişim', 'Felsefe', 'Şiir', 'Deneme', 'Çocuk', 'Gençlik',
    'Polisiye', 'Gerilim', 'Romantik', 'Komedi'
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="page-transition">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Plus className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Yeni Kitap Ekle</h1>
          <p className="text-slate-600">Kitap koleksiyonuna yeni bir eser ekleyin</p>
        </div>

        {/* Form */}
        <div className="glass-card rounded-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                <Book className="h-4 w-4" />
                <span>Kitap Başlığı *</span>
              </label>
              <input
                type="text"
                {...register('title', { 
                  required: 'Kitap başlığı gereklidir',
                  minLength: { value: 2, message: 'Başlık en az 2 karakter olmalıdır' }
                })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Örn: Suç ve Ceza"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                <User className="h-4 w-4" />
                <span>Yazar *</span>
              </label>
              <input
                type="text"
                {...register('author', { 
                  required: 'Yazar adı gereklidir',
                  minLength: { value: 2, message: 'Yazar adı en az 2 karakter olmalıdır' }
                })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Örn: Fyodor Dostoyevski"
              />
              {errors.author && (
                <p className="mt-1 text-sm text-red-600">{errors.author.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                <FileText className="h-4 w-4" />
                <span>Açıklama *</span>
              </label>
              <textarea
                {...register('description', { 
                  required: 'Kitap açıklaması gereklidir',
                  minLength: { value: 10, message: 'Açıklama en az 10 karakter olmalıdır' }
                })}
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Kitap hakkında kısa bir açıklama yazın..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            {/* Genre and Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                  <Tag className="h-4 w-4" />
                  <span>Kategori *</span>
                </label>
                <select
                  {...register('genre', { required: 'Kategori seçimi gereklidir' })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Kategori seçin</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                {errors.genre && (
                  <p className="mt-1 text-sm text-red-600">{errors.genre.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Yayın Yılı *</span>
                </label>
                <input
                  type="number"
                  {...register('publishYear', { 
                    required: 'Yayın yılı gereklidir',
                    min: { value: 1000, message: 'Geçerli bir yıl giriniz' },
                    max: { value: currentYear, message: 'Gelecek yıl olamaz' }
                  })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="2024"
                />
                {errors.publishYear && (
                  <p className="mt-1 text-sm text-red-600">{errors.publishYear.message}</p>
                )}
              </div>
            </div>

            {/* Pages and Cover URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                  <FileText className="h-4 w-4" />
                  <span>Sayfa Sayısı *</span>
                </label>
                <input
                  type="number"
                  {...register('pages', { 
                    required: 'Sayfa sayısı gereklidir',
                    min: { value: 1, message: 'En az 1 sayfa olmalıdır' }
                  })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="320"
                />
                {errors.pages && (
                  <p className="mt-1 text-sm text-red-600">{errors.pages.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                  <Image className="h-4 w-4" />
                  <span>Kapak Resmi URL *</span>
                </label>
                <input
                  type="url"
                  {...register('coverUrl', { 
                    required: 'Kapak resmi URL\'si gereklidir',
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: 'Geçerli bir URL giriniz'
                    }
                  })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="https://example.com/cover.jpg"
                />
                {errors.coverUrl && (
                  <p className="mt-1 text-sm text-red-600">{errors.coverUrl.message}</p>
                )}
              </div>
            </div>

            {/* Optional Fields */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">İsteğe Bağlı Bilgiler</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                    <Hash className="h-4 w-4" />
                    <span>ISBN</span>
                  </label>
                  <input
                    type="text"
                    {...register('isbn')}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="978-0486415062"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-2">
                    <Globe className="h-4 w-4" />
                    <span>Dil</span>
                  </label>
                  <select
                    {...register('language')}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Dil seçin</option>
                    <option value="Türkçe">Türkçe</option>
                    <option value="İngilizce">İngilizce</option>
                    <option value="Fransızca">Fransızca</option>
                    <option value="Almanca">Almanca</option>
                    <option value="İspanyolca">İspanyolca</option>
                    <option value="Rusça">Rusça</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Ekleniyor...' : 'Kitap Ekle'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;