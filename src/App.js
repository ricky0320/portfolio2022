import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    
    { name: 'Projects', description: 'Portraits of people in my life' },
    { name: 'Resume', description: 'Delicious delicacies' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Project currentCategory={currentCategory}></Project>         
            </>
        ) : (
          <Contact></Contact>
        )}
      </main>      
      <Footer></Footer>
    </div>
  );
}

export default App;