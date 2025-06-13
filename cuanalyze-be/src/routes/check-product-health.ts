import { Hono } from 'hono'

const checkProductHealth = new Hono()

const mean = [22385.628625550853, 44802.10806446664]
const scale = [24486.940704718167, 38216.213884513054]

const pcaComponents = [
  [0.7071067811865476, 0.7071067811865475],
  [-0.7071067811865475, 0.7071067811865476],
]

const centroids = [
  [-1.008370478236119, -0.06148507330976913],
  [0.7071326873680577, 0.18649625756132396],
  [2.733710370368195, -0.17519744933142048],
]

const clusterLabels = ['Tidak Sehat', 'Waspada', 'Sehat']

function standardize(values: number[], mean: number[], scale: number[]) {
  return values.map((val, i) => (val - mean[i]) / scale[i])
}

function applyPCA(scaled: number[]) {
  return pcaComponents.map((component) =>
    component.reduce((sum, val, i) => sum + val * scaled[i], 0)
  )
}

function euclidean(a: number[], b: number[]) {
  return Math.sqrt(a.reduce((sum, val, i) => sum + (val - b[i]) ** 2, 0))
}

function predictCluster(values: number[]) {
  const scaled = standardize(values, mean, scale)
  const pca = applyPCA(scaled)
  const distances = centroids.map((c) => euclidean(c, pca))
  return distances.indexOf(Math.min(...distances))
}

checkProductHealth.options('/', (c) => {
  return c.body(null, 204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
})

checkProductHealth.post('/', async (c) => {
  const { totalPendapatan, profit } = await c.req.json()

  if (typeof totalPendapatan !== 'number' || typeof profit !== 'number') {
    return c.json({ error: 'Invalid input' }, 400)
  }

  const cluster = predictCluster([profit, totalPendapatan])
  const label = clusterLabels[cluster]

  const saran =
    label === 'Sehat'
      ? 'Pertahankan performa produk ini.'
      : label === 'Waspada'
      ? 'Perlu evaluasi margin dan efisiensi.'
      : 'Perlu tindakan segera untuk meningkatkan profitabilitas.'

  return c.json(
    {
      cluster,
      label,
      saran,
    },
    200,
    {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  )
})

export default checkProductHealth
