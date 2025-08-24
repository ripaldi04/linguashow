import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Community
              <span className="block text-indigo-600">Guidelines</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aturan dan panduan untuk memastikan pengalaman belajar yang aman, nyaman, dan produktif bagi semua anggota komunitas
            </p>
          </div>

          {/* Guidelines Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Do's Section */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Yang Harus Dilakukan</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Berbicara dalam Bahasa Inggris</h3>
                      <p className="text-gray-600">Gunakan bahasa Inggris dalam semua percakapan untuk melatih kemampuan Anda</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Hormati Sesama Anggota</h3>
                      <p className="text-gray-600">Perlakukan semua anggota dengan sopan dan menghormati perbedaan budaya</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Berikan Feedback yang Membangun</h3>
                      <p className="text-gray-600">Bantu sesama pembelajar dengan memberikan saran yang positif dan konstruktif</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Ikuti Topik yang Relevan</h3>
                      <p className="text-gray-600">Tetap fokus pada topik yang sedang dibahas dalam setiap sesi percakapan</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Laporkan Masalah</h3>
                      <p className="text-gray-600">Jika melihat perilaku yang tidak pantas, segera laporkan kepada moderator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Don'ts Section */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Yang Tidak Boleh Dilakukan</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Menggunakan Bahasa yang Tidak Sopan</h3>
                      <p className="text-gray-600">Hindari kata-kata kasar, menghina, atau konten yang tidak pantas</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Spam atau Promosi Berlebihan</h3>
                      <p className="text-gray-600">Jangan mengirim pesan berulang atau mempromosikan produk secara berlebihan</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Membagikan Informasi Pribadi</h3>
                      <p className="text-gray-600">Jangan membagikan informasi pribadi seperti alamat, nomor telepon, atau email</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mengganggu Percakapan</h3>
                      <p className="text-gray-600">Jangan menginterupsi atau mengganggu percakapan yang sedang berlangsung</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Menggunakan Platform untuk Tujuan Lain</h3>
                      <p className="text-gray-600">Platform ini khusus untuk belajar bahasa Inggris, bukan untuk tujuan komersial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Konsekuensi Pelanggaran</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim moderasi kami akan mengambil tindakan tegas terhadap pelanggaran guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Peringatan</h3>
              <p className="text-gray-600">Peringatan pertama untuk pelanggaran ringan</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Suspensi Sementara</h3>
              <p className="text-gray-600">Akun akan ditangguhkan sementara untuk pelanggaran berulang</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pemblokiran Permanen</h3>
              <p className="text-gray-600">Akun akan diblokir permanen untuk pelanggaran serius</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
