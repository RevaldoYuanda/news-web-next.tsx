// app/about/page.tsx
import '../globals.css';
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
      title: 'Polemik akun Fufufafa pada platform Kaskus menjadi salah satu tantangan politik pertama di tengah perpindahan kekuasaan Jokowi-Ma’ruf Amin kepada Prabowo Subianto-Gibran Rakabuming Raka yang tinggal menghitung hari.',
      description: 'Unggahan lama akun Fufufafa kembali dimunculkan di berbagai media sosial pada akhir Agustus lalu, dan terus meluas sampai hari ini. Isinya antara lain pernyataan negatif terhadap tokoh-tokoh politik, termasuk presiden terpilih, Prabowo Subianto. Sejumlah warganet mencurigai akun tersebut dikelola Gibran Rakabuming Raka, putra sulung Presiden Joko Widodo. Namun, Gibran membantah kepemilikan akun Fufufafa dengan mengatakan, "Ya, tanya yang punya akun. Kok ke saya?“. Dalam perkembangan lainnya, Ketua Harian Partai Gerindra, Sufmi Dasco Ahmad, mengatakan, "Pak Prabowo tidak terlalu pusing-pusing yang begitu“.',
      description2: '“Diskusi ini mencakup tuduhan serius, hinaan, dan perdebatan mengenai integritas dan perilaku tokoh politik, yang menciptakan polarisasi di kalangan pengguna media sosial. Engagement yang tinggi menunjukkan bahwa isu ini menarik perhatian publik, dengan banyak retweet dan komentar yang menunjukkan reaksi emosional dari pengguna,” kata Ismail Fahmi.',
      url: '#',
    },
    {
        id: 2,
        title: 'Apa yang terjadi selanjutnya?',
        description: 'Dunia politik di Indonesia beberapa kali diwarnai intrik dan keretakan hubungan. Kemunculan tokoh politik di hadapan publik disebut sebagai "dramaturgi" di mana apa yang ditampilkan, tidak selalu sesuai dengan di balik layar, kata pakar komunikasi politik dari Univeritas Nasional, Profesor Lely Arrianie.',
        description2: 'Ia mengambil contoh bagaimana Jokowi disokong mulai dari wali kota Solo, gubernur DKI Jakarta, sampai duduk di Istana Negara oleh PDI Perjuangan (PDIP). “Jokowi saja bisa meninggalkan Bu Mega (Ketua Umum PDIP) yang begitu besar membuka karpet merah bagi jabatan politik, kekuasaan politik yang dia raih, apalagi Pak Prabowo,” katanya. Dalam sejumlah kesempatan, Jokowi pernah mengungkapkan Megawati sudah "seperti ibu saya sendiri", seperti dikutip dari Kompas. Namun, sejauh ini keduanya telah berbulan-bulan tidak tampil di publik secara bersamaan. Terakhir keduanya terlihat bersama saat Rakernas PDIP ke-IV di Jakarta, September 2023. Ia juga mencontohkan bagaimana Jusuf Kalla disebut-sebut menjadi matahari kembar bagi Jokowi saat periode presiden-wakil presiden 2014. Dalam sejumlah hal keduanya berbeda sikap, misalnya persoalan politik praktis Pilkada Jakarta, seperti dikutip Kompas. Namun, dalam sejumlah kesempatan Jusuf Kalla membantah disebut sebagai matahari kembar',
        url: '#',
      },
    
  ];
  
  const HomePage: React.FC = () => {
    return (
      <main className='main'>
        <img src='/politik.jpg'/>
        <h1 className='title'>Bagaimana hubungan Prabowo-Gibran-Jokowi setelah polemik akun Fufufafa meluas?</h1>
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
  
  