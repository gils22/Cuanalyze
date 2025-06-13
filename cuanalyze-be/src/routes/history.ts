import { Hono } from 'hono'
import { createClient } from '@supabase/supabase-js'

type Bindings = {
  SUPABASE_URL: string
  SUPABASE_SERVICE_ROLE_KEY: string
}

const historyApi = new Hono<{ Bindings: Bindings }>()

historyApi.options('/', (c) =>
  c.body(null, 204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
)

historyApi.get('/', async (c) => {
  const userId = c.req.query('user_id')
  if (!userId) {
    return c.json({ success: false, message: 'User ID dibutuhkan' }, 400)
  }

  const supabase = createClient(
    c.env.SUPABASE_URL,
    c.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { data, error } = await supabase
    .from('cek_produk')
    .select('*')
    .eq('user_id', userId)
    .order('tanggal_cek', { ascending: false })

  if (error) {
    return c.json(
      { success: false, message: 'Gagal mengambil data', error },
      500,
      { 'Access-Control-Allow-Origin': '*' }
    )
  }

  return c.json({ success: true, data }, 200, {
    'Access-Control-Allow-Origin': '*',
  })
})

historyApi.delete('/', async (c) => {
  const { id } = await c.req.json()

  if (!id) {
    return c.json({ success: false, message: 'ID riwayat dibutuhkan' }, 400, {
      'Access-Control-Allow-Origin': '*',
    })
  }

  const supabase = createClient(
    c.env.SUPABASE_URL,
    c.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { error } = await supabase.from('cek_produk').delete().eq('id', id)

  if (error) {
    return c.json(
      { success: false, message: 'Gagal menghapus data', error },
      500,
      { 'Access-Control-Allow-Origin': '*' }
    )
  }

  return c.json({ success: true, message: 'Riwayat berhasil dihapus' }, 200, {
    'Access-Control-Allow-Origin': '*',
  })
})

export default historyApi
