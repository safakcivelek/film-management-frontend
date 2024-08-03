import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilmList from './components/film/FilmList'; // FilmList componentinin import edilmesi
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div>
        
        <Navbar /> {/* Navbar, uygulamanın üst kısmında sabit olarak görünecek */}
        <h2>-------------------------------------------------------------------------------------</h2>
                
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Ana sayfa route'u */}
          <Route path="/films" element={<FilmList />} /> {/* Filmler sayfası route'u */}
        </Routes>
        <h2>-------------------------------------------------------------------------------------</h2>
        <Footer /> {/* Footer, uygulamanın alt kısmında sabit olarak görünecek */}
      </div>
    </Router>
  );
}

export default App;