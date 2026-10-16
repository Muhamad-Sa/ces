import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Counter from './components/Counter';
import Features from './components/Features';
import ServicesTab from './components/ServicesTab';
import Newsletter from './components/Newsletter';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import SingleServicePage from './components/single-service';
import './App.css';

// Automatically scroll to top or hash target when changing routes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Main Landing Page Component
function HomePage() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <Partners />
      <div id="service">
        <Services />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <Counter />
      <Features />
      <ServicesTab />
      <Newsletter />
      <div id="blog">
        <Blogs />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-service" element={<SingleServicePage />} />

        {/* Redirect template HTML files if clicked or typed directly */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/single-service.html" element={<Navigate to="/single-service" replace />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />

      {/* Scroll Top Button */}
      <button className="scroll-top scroll-to-target" data-target="html" type="button">
        <span className="fa fa-angle-up"></span>
      </button>
    </div>
  );
}

export default App;