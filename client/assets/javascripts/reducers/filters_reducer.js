const initialState = {
  categories: [],
  languagies: [],
};

const filtersReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FILTER_LANGUAGE:
      console.log("added language filter");
      debugger;
      nextState = merge({}, state);
      // action.languages.forEach((language) => nextState[language.id] = language);
      return nextState;
    case ADD_FILTER_CATEGORY:
      console.log("added category filter");
      debugger;
      nextState = merge({}, state);
      // action.steps.forEach((step) => nextState[step.id] = step);
      return nextState;

    default:
    return state;
  }

};

export default filtersReducer;
