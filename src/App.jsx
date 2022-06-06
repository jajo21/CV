import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='home' element={<Home />} />
        <Route path='experience' element={<Experience />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  </HashRouter>
);