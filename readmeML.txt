o📊 Retail Financial Clustering & Analysis

Proyek ini bertujuan untuk menganalisis performa keuangan produk dari dataset *Global Fashion Retail Stores* (Kaggle) dengan melakukan *analisis eksploratif, **feature engineering, dan **klasterisasi* berbasis profitabilitas menggunakan metode *K-Means* dengan *PCA*.

📁 Dataset
Dataset diambil dari Kaggle dan mencakup:
- transactions.csv: Data transaksi retail
- customers.csv: Informasi pelanggan
- products.csv: Detail produk
- discounts.csv: Informasi diskon per kategori

🔧 Alur Proyek
1. 📦 Import Library & Download Dataset
- Menggunakan kagglehub untuk mengunduh dataset dari Kaggle
- Memuat data dengan pandas serta optimisasi tipe data (dtype)
2. 🧹 Data Wrangling
- Gabungkan data dari transactions, products, customers, dan discounts
- Hitung fitur tambahan seperti:
  - Profit
  - Profit Margin
  - is_discounted
  - Age
- Tangani nilai hilang dan periksa efisiensi memori

3. 📊 Exploratory Data Analysis (EDA)
- Distribusi numerik: boxplot & histogram
- Visualisasi:
  - Tren Pendapatan & Profit Harian
  - Hubungan antara Diskon dan Profit
  - Total Penjualan per Metode Pembayaran
  - Produk Terlaris (berdasarkan gender & kategori)
- Korelasi antar fitur numerik: heatmap

4. 🏗 Feature Engineering
- Hitung:
  - Total Pendapatan per produk
  - Total Pengeluaran per produk
  - Profit dan Margin
  - Kuantitas, rata-rata harga satuan, dan diskon per produk
- Gabungkan semua ke dalam financials_per_product

5. ⚙ Preprocessing
- Transformasi log dan deteksi outlier (IQR method)
- Standardisasi menggunakan MinMaxScaler
- Reduksi dimensi menggunakan *PCA*

6. 📈 Clustering Produk
- Metode: *K-Means* dengan k = 3
- Evaluasi: *Silhouette Score*
- Labelisasi Cluster:
  - Sehat
  - Waspada
  - Tidak Sehat
- Visualisasi hasil klasterisasi berdasarkan PCA

7. 🧾 Output & Ekspor
- Gabungkan hasil klasterisasi ke data transaksi
- Simpan hasil ke dalam:
  - products_with_financial_clusters.csv
  - products_with_financial_clusters.json
- Lokasi penyimpanan: Google Drive (/content/drive/My Drive/)

📌 Dependencies

Instalasi library yang diperlukan:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn kagglehub

Output

products_with_financial_clusters.csv: Produk dengan status keuangan
products_with_financial_clusters.json: Format JSON siap pakai untuk sistem eksternal

🧠 Insight Bisnis

Produk Sehat: Profit tinggi dan pendapatan tinggi
Produk Waspada: Pendapatan tinggi tapi margin rendah
Produk Tidak Sehat: Rugi atau margin negatif
Rekomendasi dapat digunakan untuk:
Optimalisasi promosi
Restocking produk unggulan
Penghentian produk yang tidak efisien

📊 Sistem Rekomendasi Promosi Produk dengan Random Forest dan TF-IDF

Proyek ini membangun sistem rekomendasi promosi untuk produk fashion dan F&B berdasarkan data penjualan sintetis. Sistem ini memanfaatkan machine learning (RandomForestClassifier) dan pemrosesan teks (TF-IDF + cosine similarity) untuk memberikan saran promosi yang relevan berdasarkan pendapatan, keuntungan, dan jenis produk.

Fitur Utama
✅ Data sintetik dengan 1000 entri produk
🌱 Rekomendasi berbasis rasio keuntungan dan pendapatan
🧠 Model klasifikasi Random Forest untuk prediksi rekomendasi
🔍 Kemiripan produk dihitung dengan TF-IDF dan cosine similarity
💾 Model disimpan dalam file .pkl agar bisa digunakan ulang

🔧 Instalasi
Pastikan Anda sudah menginstal pustaka berikut:
bash
Copy
Edit
pip install pandas numpy scikit-learn joblib

📁 Struktur Proyek
File	Deskripsi
expanded_synthetic_data_simple_v3.csv	Dataset sintetik yang telah dibuat dan disimpan
rekomendasi_model.pkl	Model Random Forest yang sudah dilatih
main.py / notebook.ipynb	Script utama untuk training dan prediksi

🏗️ Alur Proyek
1. Generate Data Sintetik
Menggunakan daftar produk fashion dan F&B sederhana, dibuat data sebanyak 1000 entri dengan:
Produk
Jumlah terjual
Pendapatan
Keuntungan
Rekomendasi hasil dari fungsi berbasis rule (generate_recommendations_v2)

2. Preprocessing
Encode nama produk dengan LabelEncoder
Representasi produk dibuat menggunakan TfidfVectorizer
Cosine similarity digunakan untuk mencari produk yang mirip jika input produk tidak persis ada di dataset

3. Model Training
Menggunakan RandomForestClassifier
Input fitur: produk_encoded, jumlah_terjual, pendapatan, keuntungan
Target: rekomendasi

4. Prediksi Rekomendasi
Fungsi predict_recommendation menerima input berupa:
Nama produk
Jumlah terjual
Pendapatan
Keuntungan
Model akan:
Mencari produk yang mirip
Menggunakan model yang telah dilatih untuk memprediksi rekomendasi promosi

🚀 Contoh Penggunaan
input_product = "kaos"
jumlah_terjual = 120
pendapatan = 2400000
keuntungan = 500000

recommendation, similar_product = predict_recommendation(input_product, jumlah_terjual, pendapatan, keuntungan)

print(f"Produk Mirip: {similar_product}")
print(f"Rekomendasi Promosi: {recommendation}")

📌 Catatan
Dataset yang digunakan sintetik dan disesuaikan untuk kebutuhan eksperimen
Cocok digunakan sebagai baseline sebelum menerapkan pada data riil

📂 Output
expanded_synthetic_data_simple_v3.csv: Dataset sintetik
rekomendasi_model.pkl: Model yang sudah dilatih dan siap digunakan untuk prediksi

🧠 Pengembangan Lanjutan
Gunakan data riil dari penjualan produk e-commerce
Tambahkan fitur lain seperti musim, lokasi penjualan, atau rating pelanggan
Gunakan model lain seperti XGBoost atau deep learning untuk perbandingan performa