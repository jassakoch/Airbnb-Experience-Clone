import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';


import './index.css';

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Card

        img="/swimmer.jpg"
        rating="5.0"
        reviewCount={6}
        country="Poland"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />

    </div>
  )
}

