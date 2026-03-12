import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import MyProjects from './pages/MyProjects/MyProjects';
import ContactMe from './pages/contactMe/ContactMe';
import './style/App.css';

// Placeholder Pages
const MyServices = () => <div className="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '4rem', color: 'var(--text-color)' }}><h1>My Services (Coming Soon)</h1></div>;

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
    </div>
  );
}

export default App;
