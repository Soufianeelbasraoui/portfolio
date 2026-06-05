import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import MyProjects from './pages/MyProjects/MyProjects';
import ContactMe from './pages/contactMe/ContactMe';
import AIAmbassador from './components/AIAmbassador/AIAmbassador';
import './style/App.css';
import MyServices from './pages/MyServices/MyServices';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>
      <AIAmbassador />
    </div>
  );
}

export default App;
