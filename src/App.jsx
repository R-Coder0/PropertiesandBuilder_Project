import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import NavBar from './components/NavBar/NavBar';
import { AuthProvider} from './components/AuthContext'; 
import ServicePage from './components/Pages/ServicePage';
import Footer from './Footer/footer';
import Gallery from './components/Gallery/Gallery';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import TopBar from './components/NavBar/Topbar';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <TopBar/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<ServicePage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
};


export default App;
