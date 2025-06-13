# 📊 Cuanalyze: Analisis Keuangan Cerdas & Rekomendasi Promosi untuk UMKM

**Cuanalyze** adalah analisis keuangan berbasis web yang dirancang untuk membantu pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia dalam memahami kondisi finansial usaha mereka serta mendapatkan saran promosi berbasis data historis. 

---

## 🎯 Tujuan Proyek

- Membantu UMKM memahami kondisi finansial usaha mereka secara visual.
- Memberikan rekomendasi strategi promosi berdasarkan data historis penjualan.
- Menyediakan platform ringan dan mudah diakses tanpa infrastruktur mahal.

---

## 🛠️ Teknologi yang Digunakan

### 🔹 Front-End & Back-End
- **IDE & Tools**: Visual Studio Code, Git + GitHub, Postman
- **Framework & Library (FE)**: Vue.js, Vite, Tailwind CSS, Axios
- **Framework & Library (BE)**: Hono (TypeScript, Cloudflare Workers)
- **Database**: PostgreSQL
- **Hosting**: Vercel

### 🔹 Machine Learning
- **IDE & Platform**: Google Colab
- **Library**: Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn
- **Model Format**: `.pkl` (pickle/joblib)
- **Dataset**: Global Fashion Retail Sales (Kaggle)

---

## 🧩 Fitur Utama

- ✅ Analisis Kesehatan Keuangan (pendapatan, pengeluaran, profit)
- ✅ Klasifikasi produk sehat/tidak sehat
- ✅ Rekomendasi strategi promosi otomatis
- ✅ Tampilan dashboard interaktif berbasis web
- ✅ SPA (Single Page Application) dengan visualisasi modern

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/cuanalyze.git
cd cuanalyze
``` 

### 2. Instalasi Dependencies

```bash
npm install
``` 

### 3. Menjalankan Aplikasi (Development)

```bash
npm run dev
``` 

### 4. Build Production

```bash
npm run build
```

## Link Aplikasi 
 https://cuanalyze.vercel.app/	

## Link Dataset
https://www.kaggle.com/datasets/ricgomes/global-fashion-retail-stores-dataset 

## Struktur Projek 
cuanalyze/
├── public/
│   ├── icons/
│   ├── images/
│   ├── favicon.ico
│   └── offline.html
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── lib/
│   ├── router/
│   └── views/
│
├── .vscode/
├── .env
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierrc.json
│
├── README.md
├── env.d.ts
├── eslint.config.ts
├── index.html
│
├── package.json
├── package-lock.json
│
├── status kesehatan.ipynb
├── status kesehatan.py
│
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
│
└── vite.config.ts

