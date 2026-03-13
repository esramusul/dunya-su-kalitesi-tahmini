# 💧 AquaGuard AI — Water Potability Prediction System

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

### 🚀 Proje Özeti
AquaGuard AI, suyun içilebilirliğini makine öğrenmesi ile tahmin etmek için tasarlanmış kapsamlı bir veri bilimi ve web mühendisliği projesidir. Bu uçtan uca çözüm, veri analizi için güçlü bir **Python tabanlı ML boru hattı** ve gerçek zamanlı tahminler için **modern bir React paneli** içerir. Proje, gelişmiş tahminleme modellemesini etkileşimli bir arayüz ile birleştirerek gerçek dünya veri zorluklarını çözmeye yönelik tam yığınlı (full-stack) bir yaklaşım sergiler.

### 🛠️ Sergilenen Yetkinlikler
- **Makine Öğrenmesi Mühendisliği**: Random Forest, Decision Tree, Hiperparametre Optimizasyonu.
- **Veri Analizi**: Keşifsel Veri Analizi (EDA), İstatistiksel Tamamlama, Veri Ölçeklendirme.
- **Frontend Geliştirme**: React (Vite), Tailwind CSS, Responsive Kullanıcı Arayüzü Tasarımı.
- **Veri Görselleştirme**: Recharts ve Plotly ile dinamik grafikler.
- **UI/UX & Animasyon**: Framer Motion ve Lucide Icons ile akıcı geçişler.

---

## 📸 Ekran Görüntüleri

Buraya projeyi en iyi anlatan görselleri (geliştirme aşamasında aldığınız screenshot'ları) ekleyebilirsiniz.

**Dashboard Arayüzü**
![Dashboard Arayüzü](dashboard_screenshot.png)
*(Arayüzün genel görünümünü ve kullanıcı dostu yapısını gösteren bir görsel)*

**Model Sonuçları ve Grafikler**
![Model Sonuç Grafiği](confusion_matrix.png)
*(Modelin sınıflandırma performansını gösteren Hata Matrisi)*

---

## 🎯 Projeye Genel Bakış
Bu proje, kimyasal parametreleri kullanarak içilebilir su kaynaklarını belirleme zorluğunu çözmeyi amaçlamaktadır. Karmaşık veri modelleri ile son kullanıcı erişilebilirliği arasındaki boşluğu doldurarak, kullanıcıların makine öğrenmesi modeliyle doğrudan etkileşime girebileceği görsel bir platform sunar.

## ✨ Temel Özellikler
- **Yüksek Performanslı Modeller**: Maksimum performans için `RandomizedSearchCV` kullanılarak optimize edilmiş sınıflandırıcılar.
- **Etkileşimli Yapay Zeka Simülatörü**: Kullanıcıların kimyasal değerleri manipüle ederek model kararlarını anlık olarak gözlemleyebildiği tahmin modülü.
- **Teknik Analizler**: Parametrelerin (pH, Sülfat vb.) tahmin üzerindeki etkisini ve veri seti dağılımlarını gösteren görsel sunumlar.
- **Duyarlı Mimari**: Hız ve netlik için optimize edilmiş mobil öncelikli kontrol paneli.

## 💻 Teknoloji Yığını
- **Diller**: Python (Çekirdek Mantık), JavaScript (Frontend).
- **ML ve Veri**: Scikit-learn, Pandas, NumPy, Missingno.
- **Görselleştirme**: Seaborn, Matplotlib, Recharts, Plotly.
- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion.

## 📊 Makine Öğrenmesi Modeli ve Sonuçlar
1.  **Keşifsel Veri Analizi (EDA)**: 3.276 su örneği genelindeki kalıplar ve kayıp veri trendleri belirlendi.
2.  **Ön İşleme**: Eksik değerler için istatistiksel ortalama ataması ve özellik normalizasyonu için Min-Max ölçeklendirme uygulandı.
3.  **Model Seçimi (Neden Random Forest?)**: Doğrusal olmayan karmaşık ilişkileri yakalayabilmesi, aşırı öğrenmeye (overfitting) karşı direnci ve özellik önem sıralamasını (feature importance) net bir şekilde verebilmesi nedeniyle ana model olarak **Random Forest** tercih edilmiştir. Diğer algoritmalarla kıyaslandığında bu veri setinde en tutarlı ve sağlam sonuçları vermiştir.
4.  **Model Optimizasyonu**: `RepeatedStratifiedKFold` kullanılarak çapraz doğrulama yapılmış ve `RandomizedSearchCV` ile en iyi hiperparametreler elde edilmiştir.
5.  **Performans Sonuçları**: En iyi performans gösteren Random Forest modeli test kümesinde şu temel metrikleri sağlamıştır:
    - **Accuracy (Doğruluk)**: ~%82
    - **Precision (Kesinlik)**: ~%85 *(İçilebilir olarak tahmin edilen suların gerçekten içilebilir olma oranı)*
    - **Recall (Duyarlılık)**: ~%63 *(Gerçekte içilebilir olan suların model tarafından doğru bulunma oranı)*
    - **Karmaşıklık Matrisi (Confusion Matrix)**: Modelin öne çıkan özelliği, içilemez (potability=0) sınıfını çok yüksek bir isabetle tahmin etmesidir. Bu durum, içilemez bir suyun yanlışlıkla içilebilir olarak işaretlenmesini önleyerek halk sağlığı risklerini minimize eder.

> **Not:** Aşağıda Random Forest modeline ait Karmaşıklık Matrisi (Confusion Matrix) sonuçlarını görebilirsiniz:

![Confusion Matrix Görseli](confusion_matrix.png)

## 🖥️ Panel Genel Bakış
Kontrol paneli, yüksek taranabilirlik ve profesyonel sunum için tasarlanmıştır:
- **Karar Metrikleri**: Hangi kimyasal faktörlerin modelin tahmininde ne kadar ağırlıklı olduğunu görselleştirir.
- **Tahmin Merkezi**: WHO su kalitesi standartlarına dayalı parametre testi için özelleştirilmiş bir bölüm.

## 📂 Proje Yapısı
```text
su_Kalitesi/
├── dashboard/               # React Frontend (Vite + Tailwind)
│   ├── src/                 # Frontend Kaynak Kodları
│   │   ├── assets/          # Statik medya, görseller ve ikonlar
│   │   ├── App.jsx          # Ana React bileşeni ve arayüz yapısı
│   │   ├── App.css          # Uygulama bazlı genel stiller
│   │   ├── main.jsx         # React DOM giriş noktası
│   │   └── index.css        # Tailwind direktifleri ve global CSS
│   └── package.json         # Frontend bağımlılıkları ve yapılandırmalar
├── dünya_su_kalitesi_tahmini.py # ML Kodları (Veri İşleme, Model Eğitimi, Analiz)
├── Potability_Pie_Chart.html# Model sonuçlarına ait etkileşimli grafik çıktısı
├── water_potability.csv     # Model İçin Kullanılan Ham Veri Seti
└── README.md                # Proje Dökümantasyonu
```

## ⚙️ Kurulum
### Gereksinimler
- Python 3.8+
- Node.js ve npm

### Kurulum Adımları
```bash
# Depoyu klonlayın ve ML bağımlılıklarını yükleyin
pip install pandas numpy scikit-learn seaborn plotly missingno

# ML Analizini çalıştırın
python dünya_su_kalitesi_tahmini.py

# Arayüzü başlatın
cd dashboard && npm install && npm run dev
```

---

### ✍️ Yazar
**Esra Musul**  
Yazılım Mühendisliği Öğrencisi  
Samsun Üniversitesi  
- 📧 [musulesra25@gmail.com](mailto:musulesra25@gmail.com)
- 💼 [LinkedIn Profiliniz](https://www.linkedin.com/in/esra-musul-970789294/)

---
*Bu proje, uçtan uca yazılım ve veri mühendisliği becerilerini sergilemek amacıyla hazırlanmıştır.*
