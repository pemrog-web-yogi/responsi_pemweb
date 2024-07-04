<template>
    <section class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
            <figure class="relative transition-all duration-300 cursor-pointer filter hover:grayscale">
              <a :href="project.link">
                <img class="h-48 w-full object-cover" :src="project.image" :alt="project.title">
              </a>
            </figure>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800">{{ project.title }}</h3>
              <p class="text-gray-600 mt-2">{{ project.description }}</p>
              <a :href="project.link" class="text-blue-500 hover:text-blue-700 mt-4 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectsSection',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Satu Screen UI',
            description: 'A film streaming application that can be watched online using personal devices, this UI kit will provide the easiest possible service for users to watch privately or together. It offers several features.',
            image: 'https://res.cloudinary.com/ddhostxdh/image/upload/v1720077608/portfolio/xydg8vfeqtmudv1pskao.png',
            link: '#',
          },
          {
            id: 2,
            title: 'Website Capable',
            description: 'Capables website offers invaluable support for children with disabilities by incorporating AI eye-tracking technology to monitor their focus. The platform provides interactive learning resources tailored to individual needs, fostering a conducive environment for effective learning. Through real-time feedback on attention levels, Capable ensures personalized assistance, enhancing educational outcomes for children with disabilities.',
            image: 'https://res.cloudinary.com/ddhostxdh/image/upload/v1720077734/portfolio/qmetpnfw2iln4ho2hu6i.png',
            link: '#',
          },
          {
            id: 3,
            title: 'Company Profile - Huda Tehnik',
            description: 'Huda Teknik is website showcases its AC service portfolio and offers consultation on AC-related queries. Visitors can explore a comprehensive range of AC services and solutions through detailed portfolios. The platform facilitates easy scheduling for consultations, ensuring personalized assistance and expert advice for all AC-related concerns.',
            image: 'https://res.cloudinary.com/ddhostxdh/image/upload/v1720077907/portfolio/hbzdcvcpwj2d6ilibnrk.png',
            link: '#',
          },
          // Tambahkan proyek lainnya sesuai kebutuhan
        ],
      };
    },
  }
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>