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
      title: 'Ancelotti: Madrid Belum Tampilkan Performa Terbaik!',
      description: 'Real Madrid sudah menjalani start yang cukup oke musim ini. Tapi, El Real ditegaskan oleh Carlo Ancelotti belum menampilkan performa terbaik. Di Liga Champions, Madrid memetik kemenangan 3-1 atas VfB Stuttgart. Dalam laga, Rabu (18/9/2024) dini hari WIB, Kylian Mbappe, Antonio Ruediger, dan Endrick yang menjadi penentu kemenangan. Sejauh musim ini, Madrid belum memetik kemenangan. Dalam tujuh pertandingan di semua ajang, Los Blancos memetik lima kemenangan dan satu hasil imbang.',
      description2: '"Kami unggul 1-0 lalu mempunyai beberapa transisi saat kami bisa mengunci pertandingan. Tapi, akhirnya kami meraih kemenangan penting," kata dia menambahkan. Madrid ditunggu oleh Espanyol dalam lanjutan Liga Spanyol akhir pekan ini. Laga itu akan berlangsung di Estadio Santiago Bernabeu.',
      url: '#',
    },
  ];
  
  const HomePage: React.FC = () => {
    return (
      <main className='main'>
        <img src='/sport.jpg'/>
        <h1 className='title'>LA LIGA</h1>
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
  
  