import React from 'react';
import { FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileText className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Kullanım Şartları</h1>
        <p className="text-slate-600">Kitap Kulübü hizmetlerini kullanım koşulları</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-xl p-8">
          {/* Introduction */}
          <section className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Genel Koşullar</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Bu kullanım şartları, Kitap Kulübü web sitesini ve hizmetlerini kullanımınızı düzenler. 
              Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız. Lütfen bu şartları dikkatlice okuyun.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Kabul Edilebilir Kullanım</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>Sitemizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="font-medium text-green-800 mb-3">İzin Verilen Aktiviteler</h3>
                <ul className="list-disc list-inside space-y-2 text-green-700">
                  <li>Kitap bilgilerini görüntüleme ve arama</li>
                  <li>Kişisel favoriler listesi oluşturma</li>
                  <li>Yeni kitap bilgileri ekleme</li>
                  <li>İletişim formları aracılığıyla bizimle iletişim kurma</li>
                  <li>Site özelliklerini kişisel kullanım için kullanma</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Use */}
          <section className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <XCircle className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Yasaklanan Kullanım</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                <h3 className="font-medium text-red-800 mb-3">Yasaklanan Aktiviteler</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Telif hakkı ihlali yapan içerik paylaşma</li>
                  <li>Spam veya istenmeyen içerik gönderme</li>
                  <li>Site güvenliğini tehdit edici aktiviteler</li>
                  <li>Diğer kullanıcıları rahatsız edici davranışlar</li>
                  <li>Yanlış veya yanıltıcı bilgi paylaşma</li>
                  <li>Ticari amaçlarla izinsiz kullanım</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content Policy */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">İçerik Politikası</h2>
            <div className="space-y-4 text-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Kullanıcı İçerikleri</h3>
                  <p className="text-blue-700 text-sm">
                    Eklediğiniz kitap bilgileri doğru ve güncel olmalıdır. Yanlış bilgi paylaşımından kaçının.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <h3 className="font-medium text-purple-800 mb-2">Telif Hakları</h3>
                  <p className="text-purple-700 text-sm">
                    Paylaştığınız görsel ve metinlerin telif haklarına saygı gösterin.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <h3 className="font-medium text-orange-800 mb-2">Moderasyon</h3>
                  <p className="text-orange-700 text-sm">
                    İçerikleri moderasyon sürecinden geçirme hakkımız saklıdır.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">Kalite Standartları</h3>
                  <p className="text-green-700 text-sm">
                    Yüksek kaliteli ve faydalı içerik paylaşımını teşvik ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Liability */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Sorumluluk</h2>
            <div className="space-y-4 text-slate-600">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-medium text-yellow-800 mb-2">Hizmet Sürekliliği</h3>
                <p className="text-yellow-700 text-sm">
                  Hizmetlerimizin kesintisiz olacağını garanti etmiyoruz. Teknik bakım ve güncellemeler 
                  nedeniyle geçici kesintiler yaşanabilir.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-medium text-orange-800 mb-2">İçerik Doğruluğu</h3>
                <p className="text-orange-700 text-sm">
                  Sitedeki kitap bilgilerinin doğruluğunu garanti etmiyoruz. Kullanıcılar tarafından 
                  eklenen bilgilerin kontrolü kullanıcının sorumluluğundadır.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Şartlarda Değişiklik</h2>
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-lg">
              <p className="text-slate-600">
                Bu kullanım şartlarını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda 
                kullanıcılarımızı bilgilendireceğiz. Güncellenmiş şartlar yayınlandığı tarihten itibaren 
                geçerli olacaktır.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">İletişim</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-lg">
              <p className="text-slate-600 mb-4">
                Kullanım şartları hakkında sorularınız varsa bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>E-posta:</strong> legal@kitapkulubu.com</p>
                <p><strong>Telefon:</strong> +90 (212) 555 0123</p>
                <p><strong>Adres:</strong> Kitap Sokak No: 123, Beyoğlu, İstanbul</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section>
            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500 text-center">
                Bu kullanım şartları son olarak 15 Aralık 2024 tarihinde güncellenmiştir.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;