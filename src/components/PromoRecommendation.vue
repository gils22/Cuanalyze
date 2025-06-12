<template>
  <div class="rounded-lg bg-white p-6 shadow">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Nama Produk</label>
        <input
          v-model="produk"
          type="text"
          class="focus:border-primary focus:ring-primary w-full rounded border border-gray-300 px-4 py-2"
          placeholder="Contoh: Brownies"
          required
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Jumlah Terjual</label>
        <input
          v-model.number="jumlahTerjual"
          type="number"
          class="w-full rounded border border-gray-300 px-4 py-2"
          required
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Pendapatan (Rp)</label>
        <input
          :value="formatRupiah(pendapatan)"
          @input="(e) => (pendapatan = parseRupiah((e.target as HTMLInputElement).value))"
          class="w-full rounded border border-gray-300 px-4 py-2"
          required
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Keuntungan (Rp)</label>
        <input
          :value="formatRupiah(keuntungan)"
          @input="(e) => (keuntungan = parseRupiah((e.target as HTMLInputElement).value))"
          class="w-full rounded border border-gray-300 px-4 py-2"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-primary rounded px-4 py-2 font-semibold text-white hover:opacity-90"
      >
        Dapatkan Rekomendasi
      </button>
    </form>

    <div v-if="loading" class="mt-6 text-sm text-gray-500 italic">Memuat rekomendasi...</div>

    <div
      v-if="rekomendasiList.length"
      class="border-primary bg-primary/5 mt-6 rounded border p-4 text-gray-700"
    >
      <h2 class="text-primary mb-2 text-lg font-bold">Hasil Rekomendasi:</h2>
      <ul class="list-inside list-disc space-y-1">
        <li v-for="(item, index) in rekomendasiList" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getRecommendation } from '@/api/recommendation'

const produk = ref('')
const jumlahTerjual = ref(0)
const pendapatan = ref(0)
const keuntungan = ref(0)

const rekomendasiList = ref<string[]>([])
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  rekomendasiList.value = []

  try {
    const hasil = await getRecommendation(
      produk.value,
      jumlahTerjual.value,
      pendapatan.value,
      keuntungan.value,
    )

    rekomendasiList.value = hasil.split('|').map((item) => item.trim())
  } catch (err) {
    rekomendasiList.value = ['Terjadi kesalahan saat mengambil rekomendasi.']
  } finally {
    loading.value = false
  }
}

function formatRupiah(value: number): string {
  return 'Rp ' + value.toLocaleString('id-ID')
}

function parseRupiah(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
}
</script>
