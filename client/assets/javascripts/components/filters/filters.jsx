import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      filters,
      handleToggleLanguage,
      handleToggleCategory,
      handleReset
    } = this.props;

    const {categories, languages} = filters;

    return (
      <div className="pure-u-1 pure-g filters__container">
        <div className="pure-u-1 filters__header">Filters</div>
        <div className="pure-u-2-5 filter__group">
          <div className="filter__title">Categories</div>
          <ul className="filter__list">
            {
              Object.keys(categories).map(category =>
                <li className="filter__list-item"
                  onClick={handleToggleCategory.bind(null, category)}
                  key={category}>
                    <div>
                      { categories[category] ?
                        <span className="filter__status filter__status--active"></span> :
                        <span className="filter__status"></span>
                      }
                      {category}
                    </div>
                </li>
              )
            }
          </ul>
        </div>
        <div className="pure-u-2-5 filter__group">
          <div className="filter__title">Languages</div>
          <ul className="filter__list">
            {
              Object.keys(languages).map(language =>
                <li className="filter__list-item"
                  onClick={handleToggleLanguage.bind(null, language)}
                  key={language}>
                  <div>
                    { languages[language] ?
                      <span className="filter__status filter__status--active"></span> :
                      <span className="filter__status"></span>
                    }
                    {language}
                  </div>
                </li>
              )
            }
          </ul>
        </div>
        <div className="pure-u-1-5 filter__group">
          <button className="filter__button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Filters;
