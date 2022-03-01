import React, { useEffect } from 'react';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <header className='flex-row px-1'>
      <h1>
        <a href='https://kcheykim.github.io/cheykim-portfolio/'>
          <span role='img' aria-label='world'>🌍</span>Kosal Cheykim
        </a>
      </h1>
      <nav>
        <ul className='flex-row'>
          {categories.map((category) => (
             <li
             className={`mx-2 ${
               currentCategory.name === category.name && 'navActive'
               }`}
             key={category.name}
           >
              <span onClick={() => { setCurrentCategory(category)}}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;