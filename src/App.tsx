import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import News from './pages/News';
import Careers from './pages/Careers';
import Labor from './pages/Labor';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/labor" element={<Labor />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
