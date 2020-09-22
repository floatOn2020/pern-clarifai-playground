import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content.js'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App code dark-green">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
