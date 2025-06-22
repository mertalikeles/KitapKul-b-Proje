import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="page-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Gizlilik Politikası</h1>
        <p className="text-slate-600">Kişisel verilerinizin korunması bizim için önemlidir</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-xl p-8">
          {/* Introduction */}
          <section className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Eye className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Giriş</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Kitap Kulübü olarak, kullanıcılarımızın gizliliğini korumak ve kişisel verilerini güvenli bir şekilde işlemek 
              bizim için en önemli önceliklerden biridir. Bu gizlilik politikası, kişisel verilerinizi nasıl topladığımız, 
              kullandığımız ve koruduğumuz hakkında bilgi vermektedir.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <UserCheck className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Toplanan Bilgiler</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <div>
                <h3 className="font-medium text-slate-800 mb-2">Kişisel Bilgiler</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ad ve soyad bilgileri</li>
                  <li>E-posta adresi</li>
                  <li>İletişim bilgileri</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">Kullanım Bilgileri</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Site kullanım istatistikleri</li>
                  <li>Favori kitap tercihleri</li>
                  <li>Arama geçmişi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Lock className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Verilerin Kullanımı</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>Toplanan kişisel verilerinizi aşağıdaki amaçlarla kullanmaktayız:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Size daha iyi hizmet sunmak ve kullanıcı deneyimini geliştirmek</li>
                <li>Kişiselleştirilmiş kitap önerileri sunmak</li>
                <li>İletişim taleplerini yanıtlamak</li>
                <li>Site güvenliğini sağlamak</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Veri Güvenliği</h2>
            </div>
            <div className="space-y-4 text-slate-600">
              <p>Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri almaktayız:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL şifreleme teknolojisi kullanımı</li>
                <li>Güvenli sunucu altyapısı</li>
                <li>Düzenli güvenlik güncellemeleri</li>
                <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
                <li>Veri yedekleme ve kurtarma prosedürleri</li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Kullanıcı Hakları</h2>
            <div className="space-y-4 text-slate-600">
              <p>KVKK kapsamında aşağıdaki haklarınız bulunmaktadır:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Bilgi Alma Hakkı</h3>
                  <p className="text-blue-700 text-sm">Kişisel verilerinizin işlenip işlenmediğini öğrenme hakkı</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">Düzeltme Hakkı</h3>
                  <p className="text-green-700 text-sm">Yanlış veya eksik verilerin düzeltilmesini isteme hakkı</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <h3 className="font-medium text-orange-800 mb-2">Silme Hakkı</h3>
                  <p className="text-orange-700 text-sm">Kişisel verilerinizin silinmesini isteme hakkı</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <h3 className="font-medium text-purple-800 mb-2">İtiraz Hakkı</h3>
                  <p className="text-purple-700 text-sm">Veri işlemeye itiraz etme hakkı</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">İletişim</h2>
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-lg">
              <p className="text-slate-600 mb-4">
                Gizlilik politikamız hakkında sorularınız varsa veya haklarınızı kullanmak istiyorsanız 
                bizimle iletişime geçebilirsiniz:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>E-posta:</strong> privacy@kitapkulubu.com</p>
                <p><strong>Telefon:</strong> +90 (212) 555 0123</p>
                <p><strong>Adres:</strong> Kitap Sokak No: 123, Beyoğlu, İstanbul</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section>
            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500 text-center">
                Bu gizlilik politikası son olarak 15 Aralık 2024 tarihinde güncellenmiştir.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;