import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/footer/Footer';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
      <>
        <Navbar/>
        <Footer/>
      </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);