import axios from 'axios'

export type FinalResult = {
  namaPemilik: string
  namaProduk: string
  kategoriProduk: string
  totalPendapatan: number
  profit: number
  tanggalCek: string
  cluster: number
  kesehatan: string
  saran: string
  user_id: string
}

export async function saveProductResult(result: FinalResult): Promise<void> {
  try {
    const payload = {
      user_id: result.user_id,
      nama_pemilik: result.namaPemilik,
      nama_produk: result.namaProduk,
      kategori_produk: result.kategoriProduk,
      total_pendapatan: result.totalPendapatan,
      profit: result.profit,
      tanggal_cek: new Date(result.tanggalCek).toISOString().slice(0, 10),
      cluster: result.cluster,
      kesehatan: result.kesehatan,
      saran: result.saran,
    }

    console.log('Payload ke API:', payload)
    const response = await axios.post(
      'https://cuan-analyze-be.gilangaryatama.workers.dev/cuanalyze/save-check',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status !== 200 && response.status !== 201) {
      throw new Error('Gagal menyimpan hasil analisis (status bukan 200/201).')
    }
  } catch (error: any) {
    console.error('Error saat menyimpan hasil ke API:', error?.response?.data || error)
    throw new Error(
      error?.response?.data?.message || 'Gagal menyimpan hasil analisis. Silakan coba lagi.',
    )
  }
}
