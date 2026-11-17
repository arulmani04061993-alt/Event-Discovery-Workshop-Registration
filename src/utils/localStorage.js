const STORAGE_KEYS = {
  EVENTS: 'stackly_events',
  REGISTRATIONS: 'stackly_registrations',
  FAVORITES: 'stackly_favorites',
};

export const getStoredItem = (key, fallback = null) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Error parsing localStorage item for "${key}":`, error);
    return fallback;
  }
};

export const setStoredItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage for "${key}":`, error);
    return false;
  }
};

export const removeStoredItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
    return false;
  }
};

export { STORAGE_KEYS };
