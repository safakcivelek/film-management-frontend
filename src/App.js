import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home/Homepage';
import '../src/css/globalStyles.css';
import FilmListPage from './pages/Films/FilmListPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import FilmDetailPage from './pages/FilmDetail/FilmDetailPage';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar /> 

        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/films" element={<FilmListPage />} /> 
            <Route path="/film/:id" element={<FilmDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />  
            <Route path="/about" element={< AboutPage/>} />   
            <Route path="/contact" element={<ContactPage />} />  
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>

  );
}

export default App;