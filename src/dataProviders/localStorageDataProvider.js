export const getData = (name) => {
  if (!name) {
    throw new Error("Name parameter is required");
  }
  const data = localStorage.getItem(name);  
  return data ? JSON.parse(data) : [];
}
export const setData = (name, data) => {
  if (!name) {
    throw new Error("Name parameter is required");
  }
  localStorage.setItem(name, JSON.stringify(data));
}