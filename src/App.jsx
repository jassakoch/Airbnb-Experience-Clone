import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/experience';


import './index.css';

export default function App() {
  return (
    <div className="app">
  <Nav/>
  <Hero/>
  <Experience/>
  </div>
  )
}

