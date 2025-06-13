import { Hono } from 'hono'
import { createClient } from '@supabase/supabase-js'

type Bindings = {
  SUPABASE_URL: string
  SUPABASE_SERVICE_ROLE_KEY: string
}

const saveCheck = new Hono<{ Bindings: Bindings }>()

saveCheck.post('/', async (c) => {
  const body = await c.req.json()

  const requiredFields = [
    'user_id',
    'nama_pemilik',
    'nama_produk',
    'kategori_produk',
    'total_pendapatan',
    'profit',
    'tanggal_cek',
    'cluster',
    'kesehatan',
    'saran',
  ]

  for (const field of requiredFields) {
    if (!(field in body)) {
      return c.json({ success: false, message: `Field ${field} tidak ada` }, 400)
    }
  }

  const supabase = createClient(
    c.env.SUPABASE_URL,
    c.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { error } = await supabase.from('cek_produk').insert([
    {
      user_id: body.user_id,
      nama_pemilik: body.nama_pemilik,
      nama_produk: body.nama_produk,
      kategori_produk: body.kategori_produk,
      total_pendapatan: body.total_pendapatan,
      profit: body.profit,
      tanggal_cek: body.tanggal_cek,
      cluster: body.cluster,
      kesehatan: body.kesehatan,
      saran: body.saran,
    },
  ])

  if (error) {
    return c.json({ success: false, message: 'Gagal menyimpan data', error }, 500)
  }

  return c.json({ success: true, message: 'Data berhasil disimpan' })
})

export default saveCheck
