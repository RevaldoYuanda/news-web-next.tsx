// pages/index.tsx
type NewsArticle = {
  id: number;
  title: string;
  description: string;
  description2: string;
  url: string;
};

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Remaja Malang Tewas Dikeroyok gegara Logo Silat, 10 Orang Jadi Tersangka',
    description: 'Malang - Sepuluh orang ditetapkan sebagai tersangka dalam kasus pengeroyokan yang menewaskan Alfin Syafiq Ananta (17), remaja asal Karangploso, Kabupaten Malang. Enam diantaranya anak di bawah umur dan salah satunya masih teman sekolah korban',
    description2: 'Adapun pengeroyokan terhadap ASA terjadi dua kali pekan lalu, yakni pada Rabu (4/9/2024), di Jalan Sumbernyolo, Desa Ngenep, Kecamatan Karangploso, dan pada Jumat (6/9/2024), di wilayah Dusun Kedawung, Desa Ngijo, Kecamatan Karangploso, Kabupaten Malang Imam menjelaskan, pengeroyokan pada Rabu terjadi sekitar pukul 22.15 WIB dan dilakukan oleh lima orang tersangka, yakni ARG (19), S (20), dan tiga pelaku lainnya masih di bawah umur. Peristiwa itu terjadi setelah ASA diminta membuat surat yang berisikan klarifikasi terkait statusnya yang bukan merupakan anggota salah satu perguruan silat. Hal itu dilakukan setelah sebelumnya korban mengunggah video di aplikasi pesan singkat WhatsApp dengan mengenakan atribut salah satu perguruan pencak silat. Selang dua hari setelahnya atau pada Jumat, korban kembali mengalami pengeroyokan dengan lokasi di wilayah Dusun Kedawung, Desa Ngijo, Kecamatan Karangploso, Kabupaten Malang, pada pukul 20.30 WIB. Selain itu, beberapa tersangka yang pada kejadian di hari pertama datang kembali ikut melakukan pengeroyokan kepada korban untuk kedua kalinya',
    url: '#',
  },
  
];

const HomePage: React.FC = () => {
  return (
    <main className='main'>
      <img src='/berita1.jpg'/>
      <h1 className='title'>Berita Terkini</h1>
      <div className='page-container'>
      <div className='grid'>
        {newsArticles.map((article) => (
          <ul className='card'>  
          <li>
            <h2 key={article.id}>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.description2}</p>
            <a href={article.url} key={article.id}>link</a>
            </li>
            </ul>        
        ))}
      </div>
      </div>
    </main>

  );
};

export default HomePage;
