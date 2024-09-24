import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { FilmFilterProvider } from './contextApi/FilmFilterContext';
import { AuthProvider } from './contextApi/AuthContext';
import { FilmDetailProvider } from './contextApi/FilmDetailContext';
import { HomePageFilmProvider } from './contextApi/HomePageFilmContext';
import SearchPage from './pages/Search/SearchPage';
import AddFilmPage from './pages/Admin/AddFilmPage';
import AddEntities from './pages/Admin/AddEntitiesForm';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div id="root">
          <Navbar />

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <main style={{ flex: '1' }}>
            <Routes>
              {/* FilmProvider sadece HomePage için kullanılıyor */}
              <Route
                path="/"
                element={
                  <HomePageFilmProvider>
                    <HomePage />
                  </HomePageFilmProvider>
                }
              />

              {/* FilmListPage sadece FilmFilterProvider ile çalışıyor */}
              <Route
                path="/films"
                element={
                  <FilmFilterProvider>
                    <FilmListPage />
                  </FilmFilterProvider>
                }
              />

              {/* FilmDetailProvider sadece film detay sayfasını sarmalıyor */}
              <Route
                path="/film/:id"
                element={
                  <FilmDetailProvider>
                    <FilmDetailPage />
                  </FilmDetailProvider>
                }
              />

              {/* SearchPage, FilmFilterProvider ile sarılıyor */}
              <Route
                path='/search'
                element={
                  <FilmFilterProvider>
                    <SearchPage />
                  </FilmFilterProvider>
                }
              />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchPage />} />

              {/* Yeni film ekleme sayfası */}
              <Route path="/add-film" element={<AddFilmPage />} />              
              <Route path="/add-entities" element={<AddEntities />} /> 

            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
