export const safeGetItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveToLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};
