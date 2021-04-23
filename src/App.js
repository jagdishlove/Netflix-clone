import "./App.css";
import React, { lazy, Suspense } from "react";
import requests from "./request";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import 'react-lazy-load-image-component/src/effects/blur.css';
const OtherComponent = lazy(() => import("./Components/Row/Row"));

function App() {
  return (
    <div className="App">
      <Suspense  fallback= { 
      <h1 style={{backgroundColor:"white",color:"black", textAlign:"center"}}>Loading…</h1>}>
      <NavBar />
      <Banner />

      <OtherComponent
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
     
      <OtherComponent  title="Trending Now" fetchUrl={requests.fetchTrending} />
      <OtherComponent  title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <OtherComponent  title="Action" fetchUrl={requests.fetchActionMovies} />
      <OtherComponent  title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <OtherComponent  title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <OtherComponent  title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <OtherComponent
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />

      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
