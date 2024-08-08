import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import '../src/css/globalStyles.css';
import FilmListPage from './components/film/filmList';
import FilmDetail from './components/filmDetail/filmDetail';
import Register from './components/auth/register';
import Login from './components/auth/login';

function App() {
  return (

    <Router>
      <div id="root">
        
        <Navbar /> 

        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/films" element={<FilmListPage />} /> 
            <Route path="/film/:id" element={<FilmDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />   
          </Routes>
        </main>

        <Footer /> 

      </div>
    </Router>

  );
}

export default App;