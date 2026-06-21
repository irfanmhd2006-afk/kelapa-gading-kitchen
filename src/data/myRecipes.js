// import foto-foto yang sudah jelas
import fotoAyamKFC from '../assets/recipes/ayam-kfc.png'
import fotoSalakLauak from '../assets/recipes/salak-lauak.png'
import fotoGorengPisang from '../assets/recipes/goreng-pisang.png'
import fotoPempek from '../assets/recipes/pempek.png'
import fotoPeyek from '../assets/recipes/peyek.png'
import fotoTempeMendoan from '../assets/recipes/tempe-mendoan.png'
import fotoDendengLambok from '../assets/recipes/dendeng-lambok.png'

const myRecipes = [
  {
    idMeal: 'kgk-001',
    strMeal: 'Ayam KFC ala Kelapa Gading Kitchen',
    strMealThumb: fotoAyamKFC,
    strCategory: 'Main Course',
    strArea: 'Indonesia',
    bahanBahan: [
      '— Bahan Marinasi —',
      '500 gram daging ayam',
      '3 gram lada putih',
      '6 gram garam',
      '6 gram kaldu bubuk',
      '15 gram air jeruk',
      '7 gram bawang putih bubuk',
      '10 gram susu bubuk',
      '— Bahan Tepung —',
      '250 gram tepung protein rendah (lencana merah)',
      '1 sdt Reyco',
      '½ sdt bawang putih bubuk',
      '½ sdt merica',
      '½ sdt oregano',
      '— Bahan Pencelup —',
      '4 sdm tepung kanji/tapioka',
      '½ sdt soda kue',
      '7 sdm air',
      '1 butir telur'
    ],
    strInstructions: `Sayat permukaan potongan ayam agar bumbu mudah meresap.
Marinasi ayam dengan Bahan A (marinasi), aduk hingga merata, lalu diamkan selama 30 menit hingga 1 jam.
Campurkan seluruh Bahan B (bahan tepung) ke dalam satu wadah dan aduk hingga merata.
Campurkan seluruh Bahan C (bahan pencelup) ke dalam wadah terpisah dari wadah B.
Balurkan ayam ke dalam wadah B (bahan tepung). Setelah itu, celupkan ayam ke dalam adonan basah (Bahan C) hingga terlapisi rata.
Balurkan kembali ayam ke dalam wadah B dengan cara mencubit-cubit tepung secara ringan sambil memutar ayam secara berotasi dari atas ke bawah hingga seluruh permukaannya terlapisi merata.
Panaskan minyak dalam wajan dengan jumlah yang cukup banyak hingga benar-benar panas.
Goreng ayam ke dalam minyak panas hingga terendam seluruhnya, hingga berwarna kuning kecokelatan dan matang sempurna.
Angkat, tiriskan, dan sajikan.`
  },
  {
    idMeal: 'kgk-002',
    strMeal: 'Salak Lauak',
    strMealThumb: fotoSalakLauak,
    strCategory: 'Snack',
    strArea: 'Sumatera Barat',
    bahanBahan: [
      '35-50 gram ikan asin bondan/tenggiri',
      '5 gram garam',
      '20 gram daun kunyit (3 lembar)',
      '25 gram bawang putih',
      '50 gram bawang merah',
      '10 gram jahe',
      '5 gram kunyit',
      '30-40 gram cabe giling',
      '8 gram Reyco',
      '1750 ml air',
      '¼ sdt kapur sirih',
      '500 gram tepung beras'
    ],
    strInstructions: `Sangrai tepung beras bersama daun kunyit yang diiris tipis menggunakan api kecil hingga harum.
Pada kompor lainnya, rebus bahan-bahan yang tersisa hingga mendidih, kemudian matikan kompor.
Campurkan kedua adonan selagi masih panas, aduk hingga tercampur rata.
Ambil adonan secukupnya, bulatkan, dan beri sedikit minyak pada tangan agar tidak lengket.
Goreng adonan dalam minyak panas yang banyak hingga terendam seluruhnya.
Goreng hingga bagian bawah kering terlebih dahulu, baru kemudian dibalik agar tidak meletus.
Catatan: tekstur adonan memang agak lunak agar hasilnya kopong; jika terlalu padat, adonan tidak akan kopong.`
  },
  {
    idMeal: 'kgk-003',
    strMeal: 'Goreng Pisang Kriuk',
    strMealThumb: fotoGorengPisang,
    strCategory: 'Snack',
    strArea: 'Indonesia',
    bahanBahan: [
      'Pisang, potong kipas',
      'Tepung beras 150 gram',
      'Tepung maizena 38 gram (perbandingan 4:1)',
      'Garam 6 gram',
      'Air 200 gram',
      '1 butir telur (kuning saja)',
      '¼ sdt kapur sirih, dilarutkan dengan air (ambil 2 sdm)'
    ],
    strInstructions: `Campurkan semua bahan hingga tercampur rata.
Celupkan pisang ke dalam adonan.
Goreng pisang dalam minyak panas.
Angkat pisang setelah berwarna kekuningan.

Catatan:
Gunakan air kapur sirih secukupnya. Jika terlalu banyak, adonan akan terasa pahit dan minyak menjadi terlalu berbuih.
Gunakan minyak dalam jumlah banyak agar hasil gorengan lebih bagus.
Setelah menggoreng pisang satu per satu, ambil sedikit adonan lalu taburkan di atas pisang saat digoreng untuk menghasilkan lapisan kriuk yang lebih banyak.`
  },
  {
    idMeal: 'kgk-004',
    strMeal: 'Pempek Kelapa Gading Kitchen',
    strMealThumb: fotoPempek,
    strCategory: 'Main Course',
    strArea: 'Palembang',
    bahanBahan: [
      '— Bahan Pempek —',
      '125 gram tepung segitiga biru',
      '2½ sdm (25 gram) tepung beras',
      '1 sdm (15 gram) garam halus',
      '3 siung (15 gram) bawang putih',
      '130 gram ikan tuna halus',
      '325 gram air',
      '1 sdm minyak',
      '1 butir telur',
      '— Kuah Pempek —',
      '300 ml air',
      '125 gram gula merah',
      '3 sdm kecap manis',
      '1 buah asam kesturi / 10 gram asam jawa',
      '½ sdt garam',
      '10 cabe rawit',
      '5 bawang merah',
      '2 bawang putih'
    ],
    strInstructions: `Kuah Pempek:
Blender semua bahan kuah, lalu panaskan hingga mendidih.

Pempek:
Giling ikan tuna, minyak, telur, garam, dan air menggunakan blender hingga halus.
Masak adonan di wajan dengan api kecil sambil diaduk hingga mengental dan membentuk adonan seperti bubur, lalu matikan api.
Masukkan tepung beras dan tepung terigu, aduk hingga adonan tercampur rata dan terasa berat.
Ambil sedikit adonan, lalu bentuk lonjong dengan tangan yang telah diolesi minyak.
Rebus adonan pempek dalam air mendidih hingga mengembang dan mengapung.
Angkat, lalu goreng dengan minyak secukupnya hingga berwarna keemasan.

Catatan: adonan pempek yang sudah direbus dapat disimpan di kulkas tanpa harus digoreng terlebih dahulu.`
  },
  {
    idMeal: 'kgk-005',
    strMeal: 'Peyek Kacang',
    strMealThumb: fotoPeyek,
    strCategory: 'Snack',
    strArea: 'Indonesia',
    bahanBahan: [
      '200 gram tepung beras',
      '1 sdm (10 gram) tepung tapioka',
      '1 butir kuning telur',
      '300 ml air',
      '5 lembar daun jeruk',
      '125 gram kacang tanah',
      '— Bumbu halus —',
      '3 butir kemiri besar, haluskan',
      '20 gram bawang putih, haluskan',
      '20 gram kencur, haluskan',
      '1½ sdt lada bubuk',
      '½ sdt garam',
      '1 sdt ketumbar bubuk',
      '1 sdt kaldu bubuk (Royco)',
      '¼ sdt kapur sirih + 2 sdm air'
    ],
    strInstructions: `Cara menyiapkan kacang:
Masukkan kacang tanah ke dalam plastik, tumbuk hingga pecah, bersihkan kulitnya sekitar 50-75%, cuci secukupnya, lalu tiriskan.

Cara membuat adonan:
Campurkan semua bahan kecuali kacang tanah, aduk hingga tercampur rata dan tidak menggumpal.
Masukkan kacang tanah ke dalam adonan, aduk perlahan.

Uji rasa: goreng 1 buah peyek terlebih dahulu untuk mencicipi rasa, tambahkan garam jika kurang.

Cara menggoreng:
Panaskan minyak hingga benar-benar panas.
Tuang satu sendok adonan di pinggir wajan, ratakan dari atas ke bawah mengikuti dinding wajan.
Goreng hingga peyek kering dan berwarna keemasan, lalu angkat dan tiriskan.`
  },
  {
    idMeal: 'kgk-006',
    strMeal: 'Tempe Mendoan',
    strMealThumb: fotoTempeMendoan,
    strCategory: 'Snack',
    strArea: 'Indonesia',
    bahanBahan: [
      'Tempe yang sudah diiris (slice)',
      '250 gram tepung terigu protein sedang',
      '30 gram tepung beras',
      '60 gram maizena',
      '1 sdt baking powder (opsional)',
      '5 siung bawang putih, haluskan',
      '1 sdt kunyit, haluskan',
      '1 sdt ketumbar bubuk',
      '3 batang daun bawang besar',
      '2 batang seledri besar',
      '2 sdt garam',
      '2 sdt penyedap',
      '⅓ sdt merica',
      '500 ml air'
    ],
    strInstructions: `Campurkan semua bahan kering dalam satu wadah.
Masukkan air sedikit demi sedikit sambil diaduk hingga tidak ada gumpalan tepung.
Siapkan tempe yang sudah diiris, lalu baluri dengan adonan mendoan.
Panaskan minyak dalam wajan dengan api sedang.
Goreng tempe yang sudah dibaluri adonan hingga berwarna cokelat keemasan.
Angkat dan tiriskan.`
  },
  {
    idMeal: 'kgk-007',
    strMeal: 'Dendeng Lambok',
    strMealThumb: fotoDendengLambok,
    strCategory: 'Main Course',
    strArea: 'Sumatera Barat',
    bahanBahan: [
      '½ kg daging sapi',
      '20 gram jahe, haluskan',
      '20 gram bawang putih, haluskan',
      '20 gram air jeruk nipis',
      '10 gram garam',
      'Bawang putih secukupnya',
      'Bawang merah secukupnya',
      'Cabai merah secukupnya',
      'Tomat secukupnya',
      '100 gram air kelapa'
    ],
    strInstructions: `Haluskan jahe dan bawang putih terlebih dahulu.
Rebus daging bersama jahe halus, bawang putih halus, air jeruk nipis, dan garam hingga empuk dan bumbu meresap.
Angkat daging, lalu tumbuk atau geprek hingga pipih.
Goreng daging hingga setengah matang, biarkan sedikit kecokelatan. Angkat dan sisihkan.
Haluskan bawang putih, bawang merah, cabai merah, dan tomat.
Tumis setengah dari bumbu halus hingga harum.
Masukkan air kelapa, aduk rata, lalu masak hingga mendidih.
Masukkan daging yang sudah digoreng setengah matang.
Masak hingga bumbu meresap dan kuah menyusut.
Angkat dan sajikan.`
  }
]

export default myRecipes