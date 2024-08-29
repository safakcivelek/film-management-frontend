import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home/Homepage';
import '../src/css/globalStyles.css';
import FilmListPage from './pages/Films/FilmListPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import FilmDetailPage from './pages/FilmDetail/FilmDetailPage';
import { FilmProvider } from './contextApi/FilmContext';
import { FilmFilterProvider } from './contextApi/FilmFilterContext';
import { AuthProvider } from './contextApi/AuthContext';

function App() { // AuthProvider nerde olacak?
  return (
    <Router>
      <AuthProvider>
      <FilmProvider>
        <FilmFilterProvider>
        <div id="root">
          <Navbar />

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

          <main style={{ flex: '1' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/films" element={<FilmListPage />} />
              <Route path="/film/:id" element={<FilmDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={< AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />         
        </div>
        </FilmFilterProvider>
      </FilmProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;