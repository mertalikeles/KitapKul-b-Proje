import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import AddBookPage from './pages/AddBookPage';
import FavoritesPage from './pages/FavoritesPage';
import CategoriesPage from './pages/CategoriesPage';
import PopularBooksPage from './pages/PopularBooksPage';
import NewReleasesPage from './pages/NewReleasesPage';
import AuthorsPage from './pages/AuthorsPage';
import HelpPage from './pages/HelpPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/popular" element={<PopularBooksPage />} />
            <Route path="/new-releases" element={<NewReleasesPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;