import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/Project-display';
import Contact from './pages/Contact';

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
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='experience' element={<Experience />} />
        <Route path='projects' element={<Projects />} />
        <Route path="project/:id" element={<ProjectDisplay />} />
        <Route path='contact' element={<Contact />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  </HashRouter>
);