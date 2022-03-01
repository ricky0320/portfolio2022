import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import 'bulma/css/bulma.css'

function App() {
  const [categories] = useState([
    { name: "About", description: "My Bio" },
    { name: "Portfolio", description: "My projects." },
    { name: "Contact", description: "Please contact me through email." },
    { name: "Resume", description: "My resume." }
  ]);

  const renderPage = () => {
    if (currentCategory.name === "Portfolio") {
      return <Portfolio currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "About") {
      return <About currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "Contact") {
      return <Contact currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "Resume") {
      return <Resume currentCategory={currentCategory} />;
    }
  }

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //set to categories[0] for initial state
  return (
    <div>
      <Header categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Header>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
