export const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";
export const TOGGLE_CATEGORY = "TOGGLE_CATEGORY";
export const RESET_FILTERS = "RESET_FILTERS";

export const toggleLanguage = language => ({
  type: TOGGLE_LANGUAGE,
  language
});

export const toggleCategory = category => ({
  type: TOGGLE_CATEGORY,
  category
});

export const resetFilters = () => ({
  type: RESET_FILTERS
});
