<template>
  <form
    @submit.prevent="onSubmit"
    class="mx-auto max-w-xl space-y-6 rounded-xl bg-white p-6 shadow"
  >
    <div v-if="step === 1" class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-800">Informasi UMKM</h2>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Nama Pemilik / UMKM</label>
        <input
          v-model="form.namaPemilik"
          type="text"
          class="focus:ring-primary w-full rounded border border-gray-300 bg-gray-100 px-4 py-2 focus:ring-2 focus:outline-none"
          readonly
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Nama Produk</label>
        <input
          v-model="form.namaProduk"
          type="text"
          class="focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
          placeholder="Contoh: Kopi Susu Gula Aren"
          required
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Kategori Produk</label>
        <select
          v-model="form.kategoriProduk"
          class="focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
          required
        >
          <option disabled value="">Pilih Kategori</option>
          <option>Makanan</option>
          <option>Minuman</option>
          <option>Fashion</option>
          <option>Kerajinan</option>
          <option>Jasa</option>
          <option>Lainnya</option>
        </select>
      </div>

      <div class="text-right">
        <button
          type="button"
          @click="nextStep"
          class="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white transition"
        >
          Berikutnya
        </button>
      </div>
    </div>

    <div v-else-if="step === 2" class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-800">Data Keuangan Produk</h2>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Total Pendapatan (Rp)</label>
        <input
          v-model="displayPendapatan"
          @input="displayPendapatan = formatRupiah(displayPendapatan)"
          type="text"
          inputmode="numeric"
          class="focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
          placeholder="Contoh: Rp 10.000.000"
          required
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Profit Bersih (Rp)</label>
        <input
          v-model="displayProfit"
          @input="displayProfit = formatRupiah(displayProfit)"
          type="text"
          inputmode="numeric"
          class="focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
          placeholder="Contoh: Rp 2.500.000"
          required
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">Tanggal Cek</label>
        <input
          v-model="form.tanggalCek"
          type="date"
          class="focus:ring-primary w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
          required
        />
      </div>

      <div class="flex justify-between">
        <button
          type="button"
          @click="prevStep"
          class="rounded bg-gray-300 px-4 py-2 text-gray-800 transition hover:bg-gray-400"
        >
          Kembali
        </button>
        <button
          type="submit"
          class="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white transition"
        >
          Cek Sekarang
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { supabase } from '@/lib/supabase'

const emit = defineEmits<{
  (
    e: 'onCheck',
    payload: {
      namaPemilik: string
      namaProduk: string
      kategoriProduk: string
      totalPendapatan: number
      profit: number
      tanggalCek: string
    },
  ): void
}>()

const step = ref(1)

const form = ref({
  namaPemilik: '',
  namaProduk: '',
  kategoriProduk: '',
  totalPendapatan: 0,
  profit: 0,
  tanggalCek: new Date().toISOString().slice(0, 10),
})

const displayPendapatan = ref('')
const displayProfit = ref('')

function formatRupiah(value: number | string): string {
  const number = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value
  return 'Rp ' + number.toLocaleString('id-ID')
}

function unformatRupiah(value: string): number {
  return parseInt(value.replace(/\D/g, '')) || 0
}

watch(displayPendapatan, (val) => {
  form.value.totalPendapatan = unformatRupiah(val)
})
watch(displayProfit, (val) => {
  form.value.profit = unformatRupiah(val)
})

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  const email = data.user?.email
  if (email) {
    form.value.namaPemilik = email.split('@')[0]
  }

  displayPendapatan.value = formatRupiah(form.value.totalPendapatan)
  displayProfit.value = formatRupiah(form.value.profit)
})

function nextStep() {
  if (form.value.namaProduk && form.value.kategoriProduk) {
    step.value++
  } else {
    alert('Mohon lengkapi semua isian terlebih dahulu.')
  }
}

function prevStep() {
  step.value--
}

function onSubmit() {
  emit('onCheck', { ...form.value })
}
</script>
