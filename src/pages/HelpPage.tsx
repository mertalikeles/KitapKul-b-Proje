import React from 'react';
import { HelpCircle, Book, Heart, Plus, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpPage: React.FC = () => {
  const faqs = [
    {
      question: "Nasıl kitap ekleyebilirim?",
      answer: "Ana menüden 'Kitap Ekle' seçeneğine tıklayarak yeni kitap ekleyebilirsiniz. Tüm gerekli bilgileri doldurmanız yeterlidir."
    },
    {
      question: "Favorilerime nasıl kitap eklerim?",
      answer: "Her kitap kartında bulunan kalp simgesine tıklayarak kitabı favorilerinize ekleyebilirsiniz. Favoriler sayfasından tüm favori kitaplarınızı görüntüleyebilirsiniz."
    },
    {
      question: "Kitapları nasıl filtreleyebilirim?",
      answer: "Ana sayfada bulunan arama ve filtre bölümünden kitapları başlık, yazar veya kategoriye göre arayabilir, kategori ve sıralama seçeneklerini kullanabilirsiniz."
    },
    {
      question: "Kitap puanları nasıl belirleniyor?",
      answer: "Kitap puanları 1-5 arasında değişmektedir. Bu puanlar kitapların genel kalitesini ve okuyucu memnuniyetini yansıtmaktadır."
    },
    {
      question: "Mobil cihazlarda kullanım nasıl?",
      answer: "Sitemiz tamamen responsive tasarıma sahiptir. Mobil cihazlarda da tüm özellikler sorunsuz çalışmaktadır."
    }
  ];

  const features = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Kitap Ekleme",
      description: "Kolayca yeni kitaplar ekleyin ve koleksiyonunuzu genişletin."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Favoriler",
      description: "Beğendiğiniz kitapları favorilerinize ekleyin ve kolayca erişin."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Arama ve Filtreleme",
      description: "Gelişmiş arama ve filtreleme seçenekleriyle istediğiniz kitabı bulun."
    },
    {
      icon: <Plus className="h-6 w-6" />,
      title: "Kategori Yönetimi",
      description: "Kitapları kategorilere göre düzenleyin ve keşfedin."
    }
  ];

  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Yardım Merkezi</h1>
        <p className="text-slate-600">Kitap Kulübü hakkında merak ettikleriniz</p>
      </div>

      {/* Quick Links */}
      <div className="glass-card rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Hızlı Erişim</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link to="/" className="flex items-center space-x-2 p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
            <Book className="h-5 w-5 text-primary-600" />
            <span className="text-primary-700 font-medium">Ana Sayfa</span>
          </Link>
          <Link to="/add-book" className="flex items-center space-x-2 p-3 bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors">
            <Plus className="h-5 w-5 text-secondary-600" />
            <span className="text-secondary-700 font-medium">Kitap Ekle</span>
          </Link>
          <Link to="/favorites" className="flex items-center space-x-2 p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
            <Heart className="h-5 w-5 text-red-600" />
            <span className="text-red-700 font-medium">Favoriler</span>
          </Link>
          <Link to="/categories" className="flex items-center space-x-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <Search className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">Kategoriler</span>
          </Link>
        </div>
      </div>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Özellikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Sık Sorulan Sorular</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                <MessageCircle className="h-5 w-5 text-primary-600 mr-2" />
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed pl-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <div className="mt-12 glass-card rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">Başka bir sorunuz mu var?</h3>
        <p className="text-slate-600 mb-6">
          Yukarıdaki sorular arasında aradığınızı bulamadıysanız, bizimle iletişime geçebilirsiniz.
        </p>
        <Link to="/contact" className="btn-primary">
          İletişime Geç
        </Link>
      </div>
    </div>
  );
};

export default HelpPage;