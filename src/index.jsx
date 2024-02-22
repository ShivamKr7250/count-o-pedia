import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import MainBody from './MainBody'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{backgroundColor:"black", color:"grey"}}>
    <Header />
    <div className='px-4'>
    <MainBody />
    </div>
    <Footer/>
  </div>
);
