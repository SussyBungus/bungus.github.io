import React from 'react';
import '../styles/index.css';

import Header from '../components/header';
import Hero from '../components/index/hero';
import Highlights from '../components/index/highlights';
import Goals from '../components/index/goals';
import Footer from '../components/footer';

function Index() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Goals />
        <Footer />
      </main>
    </div>
  );
}

export default Index;
