import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Counter from './components/Counter';
import Features from './components/Features';
import ServicesTab from './components/ServicesTab';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <AboutUs />
      <Counter />
      <Features />
      <ServicesTab />
      <Newsletter />
      {/* <Testimonials /> */}
      <Blogs />
      <Footer />

      {/* Scroll Top Button */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up"></span>
      </button>
    </div>
  );
}

export default App;
