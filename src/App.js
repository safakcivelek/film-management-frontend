import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilmList from './components/film/FilmList'; // FilmList componentinin import edilmesi
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import '../src/css/globalStyles.css';

function App() {
  return (

    <Router>
      <div id="root">        
        <Navbar /> {/* Navbar, uygulamanın üst kısmında sabit olarak görünecek */}

        <main style={{ flex: '1' }}>

        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Ana sayfa route'u */}
          <Route path="/films" element={<FilmList />} /> {/* Filmler sayfası route'u */}
        </Routes>

        </main>       
        
       
        <Footer /> {/* Footer, uygulamanın alt kısmında sabit olarak görünecek */}
      </div>
    </Router>
    
  );
}

export default App;