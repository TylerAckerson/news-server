import React from 'react';

const Filters = ({
  filters,
  requestFilters,
  handleToggleLanguage,
  handleToggleCategory,
  handleReset
}) => {

  const {categories, languages} = filters;
  
  return (
    <div>
      <h3>Filter Categories</h3>
      <ul>
        {
          Object.keys(categories).map(category =>
            <li
              onClick={handleToggleCategory.bind(null, category)}
              key={category}>
              {categories[category] ? '[x]: ' : '[ ]: '}
              {category}
            </li>
          )
        }
      </ul>
      <h3>Filter Languages</h3>
      <ul>
        {
          Object.keys(languages).map(language =>
            <li
              onClick={handleToggleLanguage.bind(null, language)}
              key={language}>
              {languages[language] ? '[x]: ' : '[ ]: '}
              {language}
            </li>
          )
        }
      </ul>
      <button onClick={handleReset}>Reset Filters</button>
    </div>

  );
}

export default Filters;
