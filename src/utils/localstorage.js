export const save = (data, key) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log('error message:', e);
  }
};

export const load = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log('error message:', e);
  }
};
