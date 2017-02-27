export const ADD_FILTER_LANGUAGE = "ADD_FILTER_LANGUAGE";
export const ADD_FILTER_CATEGORY = "ADD_FILTER_CATEGORY";
export const SELECT_SOURCE = "SELECT_SOURCE";

export const addFilterLanguage = language => ({
  type: ADD_FILTER_LANGUAGE,
  language
});

export const addFilterCategory = category => ({
  type: ADD_FILTER_CATEGORY,
  category
});

export const selectSource = source => ({
  type: SELECT_SOURCE,
  source
});
