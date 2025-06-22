import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', data);
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">İletişim</h1>
        <p className="text-slate-600">Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">İletişim Bilgileri</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">E-posta</div>
                  <div className="text-slate-600">info@kitapkulubu.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">Telefon</div>
                  <div className="text-slate-600">+90 (212) 555 0123</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">Adres</div>
                  <div className="text-slate-600">
                    Kitap Sokak No: 123<br />
                    Beyoğlu, İstanbul
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Çalışma Saatleri</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Pazartesi - Cuma</span>
                <span className="text-slate-800 font-medium">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Cumartesi</span>
                <span className="text-slate-800 font-medium">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Pazar</span>
                <span className="text-slate-800 font-medium">Kapalı</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl p-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
              <MessageSquare className="h-5 w-5 text-primary-600 mr-2" />
              Mesaj Gönder
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    {...register('name', { 
                      required: 'Ad soyad gereklidir',
                      minLength: { value: 2, message: 'En az 2 karakter olmalıdır' }
                    })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Adınız ve soyadınız"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'E-posta gereklidir',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Geçerli bir e-posta adresi giriniz'
                      }
                    })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Konu *
                </label>
                <select
                  {...register('subject', { required: 'Konu seçimi gereklidir' })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Konu seçin</option>
                  <option value="general">Genel Bilgi</option>
                  <option value="technical">Teknik Destek</option>
                  <option value="suggestion">Öneri</option>
                  <option value="complaint">Şikayet</option>
                  <option value="other">Diğer</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mesaj *
                </label>
                <textarea
                  {...register('message', { 
                    required: 'Mesaj gereklidir',
                    minLength: { value: 10, message: 'Mesaj en az 10 karakter olmalıdır' }
                  })}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;