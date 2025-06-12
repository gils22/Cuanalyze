import axios from 'axios'

export async function getRecommendation(
  produk: string,
  jumlahTerjual: number,
  pendapatan: number,
  keuntungan: number,
): Promise<string> {
  try {
    const res = await axios.get(
      `https://cuan-analyze-be.gilangaryatama.workers.dev/cuanalyze/recommendation`,
      {
        params: {
          produk,
          jumlah_terjual: jumlahTerjual,
          pendapatan,
          keuntungan,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (res.data.success) {
      return res.data.rekomendasi
    } else {
      return 'Tidak ada rekomendasi yang ditemukan.'
    }
  } catch (error: any) {
    console.error('Gagal mengambil rekomendasi:', error?.response?.data || error)
    return 'Terjadi kesalahan saat mengambil rekomendasi.'
  }
}
