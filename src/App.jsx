import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header'
import MidHeader from './components/MidHeader';
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Mid from './components/Mid';

function App() {
  return (
    <>
      <Header></Header>
      <MidHeader></MidHeader>
      <Footer></Footer>
    </>
  );
}

export default App;
