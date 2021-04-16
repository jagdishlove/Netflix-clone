import './App.css';
import Row from './Components/Row/Row'
import requests from './request';
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <div className="App">
     <NavBar/>
      {/* Banner */}
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    <Footer/>
    </div>
  );
}

export default App;
