import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contacts from '@/components/Contacts';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  );
};

export default Home;
