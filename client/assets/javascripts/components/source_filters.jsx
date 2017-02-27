import React from 'react';

const SourceFilters = ({
  languageOptions,
  categoryOptions,
  languages,
  categories,
  handleAddFilterLanguage,
  handleAddFilterCategory
  }) => {

  console.log('rendering filters');
  return (
    <div>
      <h2>Filters</h2>
      <div>
        <h3>Category Options</h3>
          <ul>
            {
              Array.from(categoryOptions).map(category =>
                <li onClick={handleAddFilterCategory.bind(null, category)}
                    key={category}>{category}</li>
              )
            }
          </ul>
      </div>
      <div>
        <h3>Category Filters</h3>
          <ul>
            {
              Array.from(categories).map(category =>
                <li key={category}>{category}</li>
              )
            }
          </ul>
      </div>
      <div>
        <h3>Languages Options</h3>
        <ul>
          {
            Array.from(languageOptions).map(language =>
              <li onClick={handleAddFilterLanguage.bind(null, language)}
                  key={language}>
                  {language}
              </li>
            )
          }
        </ul>
      </div>
      <div>
        <h3>Languages Filters</h3>
        <ul>
          {
            Array.from(languages).map(language =>
              <li key={language}>{language}</li>
            )
          }
        </ul>
      </div>
    </div>

  );
}

export default SourceFilters;
