import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

import './index.css';

export default function App() {

  const cards = data.map(item => {
    return (
      <Card

        key={item.id}
        {...item}
      />
    )
  })


  return (
    <div className="app">
      <Nav />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

