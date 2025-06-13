<template>
  <main>
    <section
      class="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF7ED] to-[#FFF4E5] py-8"
      data-aos="fade-up"
    >
      <div
        class="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-[#FF9C06] opacity-10 blur-[120px]"
      ></div>
      <div class="relative z-10 mx-auto max-w-5xl text-center">
        <div
          class="text-primary mb-3 inline-block rounded-full bg-[#FFF4E5] px-4 py-1 text-sm font-medium shadow-sm"
        >
          🚀 Solusi Finansial UMKM
        </div>
        <h1 class="mb-4 text-4xl leading-tight font-bold text-gray-800 md:text-5xl">
          Analisis Keuangan & Promosi <br />
          bersama
          <span class="bg-gradient-to-r from-[#FF9C06] to-orange-400 bg-clip-text text-transparent"
            >Cuanlyze</span
          >
        </h1>
        <p class="mb-6 text-lg text-gray-700">
          Dapatkan wawasan finansial dan strategi promosi yang didukung AI untuk UMKM Anda.
        </p>
        <router-link
          to="/cek-kesehatan"
          class="bg-primary inline-block rounded-md px-6 py-3 font-semibold text-white shadow transition hover:scale-105"
        >
          Coba Sekarang
        </router-link>
        <div class="mt-8 flex justify-center">
          <img
            src="/images/hp.png"
            alt="Preview"
            class="w-full max-w-[550px] rounded-xl"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-[#FFF4E5] via-[#FFFDF8] to-white pt-24 pb-20">
      <div class="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div class="flex justify-center md:justify-end" data-aos="fade-right" data-aos-delay="100">
          <img
            src="/images/hp2.png"
            alt="App Demo"
            class="w-full max-w-[420px] drop-shadow-xl md:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px]"
          />
        </div>

        <div data-aos="fade-left">
          <span
            class="bg-primary mb-3 inline-block rounded-full px-3 py-1 text-sm font-medium text-white"
          >
            Use Cases
          </span>
          <h2 class="mb-4 text-3xl leading-snug font-bold text-gray-900">
            Manfaatkan kekuatan <br />alat AI untuk UMKM
          </h2>
          <p class="mb-6 text-gray-600">
            Cuanlyze dirancang agar mudah disesuaikan untuk berbagai kebutuhan bisnis Anda.
          </p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              class="flex flex-col rounded-xl border bg-white p-4 shadow transition hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="mb-2 flex items-center gap-3">
                <div
                  class="bg-primary flex h-9 w-9 items-center justify-center rounded-full text-white"
                >
                  <i class="fas fa-chart-line text-base"></i>
                </div>
                <h3 class="text-sm font-semibold text-gray-800">Analisis Keuangan</h3>
              </div>
              <p class="text-sm text-gray-600">
                Lihat kinerja penjualan & profit produk Anda dengan insight otomatis.
              </p>
            </div>

            <div
              class="flex flex-col rounded-xl border bg-white p-4 shadow transition hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="mb-2 flex items-center gap-3">
                <div
                  class="bg-primary flex h-9 w-9 items-center justify-center rounded-full text-white"
                >
                  <i class="fas fa-bullhorn text-base"></i>
                </div>
                <h3 class="text-sm font-semibold text-gray-800">Strategi Promosi</h3>
              </div>
              <p class="text-sm text-gray-600">
                Dapatkan saran promosi yang sesuai dengan tren dan kategori produk Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section
    class="bg-gradient-to-b from-white via-[#FFF7ED] to-[#FFF4E5] py-20"
    data-aos="fade-up"
  >
    <div class="mx-auto max-w-4xl px-4 text-center">
      <h2 class="mb-4 text-3xl font-bold">Lihat Demo Cuanlyze</h2>
      <p class="mb-6 text-gray-600">Tonton bagaimana Cuanlyze bekerja secara langsung.</p>

      <div class="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl shadow-lg">
        <template v-if="!isPlaying">
          <img
            src="https://img.youtube.com/vi/tcLucoiwULs/hqdefault.jpg"
            alt="Thumbnail Video"
            class="absolute left-0 top-0 h-full w-full object-cover"
          />
          <button
            @click="playVideo"
            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-4xl text-white hover:bg-opacity-60"
          >
            ▶
          </button>
        </template>

        <iframe
          v-if="isPlaying"
          class="absolute left-0 top-0 h-full w-full"
          :src="youtubeEmbedUrl"
          title="Demo Cuanlyze"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

    <section class="bg-[#FFF4E5] py-20" data-aos="fade-up">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 class="mb-4 text-3xl leading-snug font-bold">
            Community Service <br />
            Is Calling, No Need For Stalling.
          </h2>
          <p class="mb-6 text-gray-600">
            Ingin pengalaman bisnis yang lebih seru? Gabung komunitas kami untuk merasakan serunya
            bersama teman-teman UMKM lainnya.
          </p>
          <button
            class="bg-primary rounded-full px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Join Community
          </button>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <img src="/images/profile.svg" class="h-16 w-16 rounded-full" />
          <img src="/images/profile.svg" class="h-16 w-16 rounded-full" />
          <img src="/images/profile.svg" class="h-16 w-16 rounded-full" />
          <img src="/images/profile.svg" class="h-16 w-16 rounded-full" />
        </div>
      </div>
    </section>

    <section class="bg-[#FFFAF0] py-20" data-aos="fade-up">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-10 text-center text-3xl font-bold">Testimoni Pengguna</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(item, i) in testimonials"
            :key="i"
            class="rounded-xl bg-white p-6 shadow transition hover:shadow-md"
          >
            <p class="text-primary mb-4 text-2xl leading-tight">“</p>
            <p class="mb-6 text-gray-700">{{ item.quote }}</p>
            <div class="flex items-center gap-3">
              <img :src="item.avatar" class="h-10 w-10 rounded-full" />
              <div>
                <div class="font-semibold">{{ item.name }}</div>
                <div class="text-xs text-gray-500">{{ item.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20" data-aos="fade-up">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 class="mb-2 text-3xl font-bold">Got a Question For Cuanlyze?</h2>
          <p class="mb-6 text-gray-600">Tanyakan apa pun, kami siap membantu.</p>
          <div class="flex items-center overflow-hidden rounded-full border">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              class="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button class="bg-primary px-6 py-2 text-sm font-semibold text-white">Submit</button>
          </div>
        </div>
        <div>
          <p class="mb-4 text-gray-700">Mungkin pertanyaan Anda sudah terjawab:</p>
          <div v-for="(faq, i) in faqs" :key="i" class="border-b py-3">
            <button
              @click="toggleFaq(i)"
              class="flex w-full items-center justify-between text-left text-sm font-medium text-gray-800 focus:outline-none"
            >
              <span>{{ faq.question }}</span>
              <span
                class="text-gray-400 transition-transform duration-300"
                :class="{ 'rotate-90': openFaq === i }"
                >+</span
              >
            </button>
            <transition name="fade">
              <p v-if="openFaq === i" class="mt-2 text-sm text-gray-600">{{ faq.answer }}</p>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const isPlaying = ref(false)
const youtubeEmbedUrl = "https://www.youtube.com/embed/tcLucoiwULs?autoplay=1"

function playVideo() {
  isPlaying.value = true
}

const testimonials = [
  {
    quote:
      'Cuanlyze sangat membantu saya memahami arus kas dan mengambil keputusan yang lebih baik.',
    name: 'Ibu Rina',
    role: 'Pemilik Toko Oleh-Oleh',
    avatar: '/images/profile.svg',
  },
  {
    quote:
      'Setelah menggunakan rekomendasi promosi dari Cuanlyze, penjualan saya meningkat drastis!',
    name: 'Pak Budi',
    role: 'Pengusaha Kuliner',
    avatar: '/images/profile.svg',
  },
  {
    quote: 'Platform ini sangat intuitif dan membantu saya dalam memantau kinerja produk.',
    name: 'Mbak Dita',
    role: 'UMKM Fashion',
    avatar: '/images/profile.svg',
  },
]

const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    question: 'Apa itu Cuanlyze?',
    answer:
      'Cuanlyze adalah platform AI yang membantu UMKM menganalisis keuangan dan strategi promosi.',
  },
  {
    question: 'Bagaimana cara kerja rekomendasi promosi?',
    answer: 'Cuanlyze memberi saran promosi berdasarkan kategori produk dan tren pasar.',
  },
  {
    question: 'Apakah datanya disimpan aman?',
    answer: 'Data disimpan terenkripsi dan hanya bisa diakses oleh pengguna terkait.',
  },
]

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
