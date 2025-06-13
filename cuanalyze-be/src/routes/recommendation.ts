import { Hono } from 'hono'
import rekomendasiData from '../data/recommendations.json'

const rekomendasi: Record<string, string> = rekomendasiData

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const recommendation = new Hono()

recommendation.get('/', (c) => {
  const produk = c.req.query('produk')

  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Methods', 'GET, OPTIONS')
  c.header('Access-Control-Allow-Headers', 'Content-Type')

  if (!produk) {
    return c.json({ success: false, message: 'Produk harus disediakan' }, 400)
  }

  const hasil = rekomendasi[capitalize(produk)]

  if (!hasil) {
    return c.json({
      success: false,
      produk,
      rekomendasi: 'Tidak ada rekomendasi untuk produk ini.'
    }, 404)
  }

  return c.json({
    success: true,
    produk,
    rekomendasi: hasil
  })
})

export default recommendation
