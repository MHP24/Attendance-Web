import React from 'react';
import './landing.css';
import { Hero } from '../../sections/hero/Hero';
import { About } from '../../sections/about/About';
import { Downloads } from '../../sections/downloads/Downloads';
import { Features } from '../../sections/features/Features';

export const Landing = () => {
  return (
    <>
      <header>
        <Hero/>  
      </header>
      <main>
        <About/>
        <Downloads/>
        <Features/>
      </main>
    </>
  );
}
